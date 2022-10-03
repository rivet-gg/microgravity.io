// TODO: Add way to cancel the game link stream if wanted

import {
	IdentityProfile,
	GlobalEventNotification,
	GlobalEventKind,
	ChatThread,
	PartySummary,
	MatchmakerLobbyJoinInfo,
	GameLinkStatus,
} from "./models";
import {
	GetIdentitySelfProfileCommandOutput,
	GetGameLinkCommandOutput,
	WatchEventsCommandOutput,
	PrepareGameLinkCommandOutput,
} from "./commands";
import { IdentityService } from "./IdentityService";
import { RepeatingRequest } from "@rivet-gg/common";

export interface IdentityManagerConfig {
	token?: string;
	endpoint?: string;
	service?: IdentityService;

	identityUpdateHandler?: (identity: IdentityProfile) => void;
	chatMessageHandler?: (thread: ChatThread) => void;
	partyUpdateHandler?: (party: PartySummary) => void;
	matchmakerLobbyJoinHandler?: (lobby: MatchmakerLobbyJoinInfo) => void;
	notificationHandler?: (
		notification: GlobalEventNotification,
		eventKind: GlobalEventKind
	) => void;
	errorHandler?: (err: any) => void;
}

export class IdentityManagerBuilder {
	private config: IdentityManagerConfig;

	constructor() {
		this.config = {};
	}

	withToken(token: string) {
		this.config.token = token;

		return this;
	}

	withEndpoint(endpoint: string) {
		this.config.endpoint = endpoint;

		return this;
	}

	withService(service: IdentityService) {
		this.config.service = service;

		return this;
	}

	onIdentityUpdate(handler: IdentityManagerConfig["identityUpdateHandler"]) {
		this.config.identityUpdateHandler = handler;

		return this;
	}

	onChatMessage(handler: IdentityManagerConfig["chatMessageHandler"]) {
		this.config.chatMessageHandler = handler;

		return this;
	}

	onPartyUpdate(handler: IdentityManagerConfig["partyUpdateHandler"]) {
		this.config.partyUpdateHandler = handler;

		return this;
	}

	onMatchmakerLobbyJoin(
		handler: IdentityManagerConfig["matchmakerLobbyJoinHandler"]
	) {
		this.config.matchmakerLobbyJoinHandler = handler;

		return this;
	}

	onNotification(handler: IdentityManagerConfig["notificationHandler"]) {
		this.config.notificationHandler = handler;

		return this;
	}

	onError(handler: IdentityManagerConfig["errorHandler"]) {
		this.config.errorHandler = handler;

		return this;
	}

	async build(): Promise<IdentityManager> {
		if (typeof this.config.service === "undefined") {
			let initService = new IdentityService({
				endpoint: this.config.endpoint,
				token: this.config.token,
			});

			let { identityToken } = await initService.setupIdentity({
				existingIdentityToken: this.config.token ?? fetchToken(),
			});
			saveToken(identityToken!);
			this.config.token = identityToken;

			this.config.service = new IdentityService({
				endpoint: this.config.endpoint,
				token: identityToken,
			});
		}

		let manager = new IdentityManager(this.config);
		manager.initiate();

		return manager;
	}
}

export class IdentityManager {
	service: IdentityService;
	token?: string;
	endpoint?: string;

	private identityUpdateHandler?: IdentityManagerConfig["identityUpdateHandler"];
	private chatMessageHandler?: IdentityManagerConfig["chatMessageHandler"];
	private partyUpdateHandler?: IdentityManagerConfig["partyUpdateHandler"];
	private matchmakerLobbyJoinHandler?: IdentityManagerConfig["matchmakerLobbyJoinHandler"];
	private notificationHandler?: IdentityManagerConfig["notificationHandler"];
	private errorHandler?: IdentityManagerConfig["errorHandler"];

	private gameLinkStream?: RepeatingRequest<GetGameLinkCommandOutput>;
	private eventStream?: RepeatingRequest<WatchEventsCommandOutput>;

	constructor(opts: IdentityManagerConfig) {
		this.service = opts.service!;
		this.token = opts.token;
		this.endpoint = opts.endpoint;

		this.identityUpdateHandler = opts.identityUpdateHandler;
		this.chatMessageHandler = opts.chatMessageHandler;
		this.partyUpdateHandler = opts.partyUpdateHandler;
		this.matchmakerLobbyJoinHandler = opts.matchmakerLobbyJoinHandler;
		this.errorHandler = opts.errorHandler;
	}

	initiate() {
		// Initial identity fetch
		if (this.identityUpdateHandler !== undefined) {
			this.service
				.getIdentitySelfProfile({})
				.then((res) => {
					this.identityUpdateHandler!(res.identity!);
				})
				.catch(this.handleError.bind(this));
		}

		if (
			this.chatMessageHandler !== undefined ||
			this.matchmakerLobbyJoinHandler !== undefined ||
			this.partyUpdateHandler !== undefined ||
			this.identityUpdateHandler !== undefined
		) {
			if (this.eventStream) this.eventStream.cancel();
			this.eventStream = new RepeatingRequest(
				async (abortSignal, watchIndex) => {
					return await this.service.watchEvents(
						{ watchIndex },
						{ abortSignal }
					);
				}
			);

			this.eventStream.onMessage((res) => {
				for (let event of res.events!) {
					if (
						event.notification &&
						this.notificationHandler !== undefined
					) {
						this.notificationHandler(
							event.notification,
							event.kind!
						);
					}

					if (event.kind!.chatMessage) {
						if (this.chatMessageHandler !== undefined) {
							this.chatMessageHandler(
								event.kind!.chatMessage.thread!
							);
						}
					} else if (event.kind!.matchmakerLobbyJoin) {
						if (this.matchmakerLobbyJoinHandler !== undefined) {
							this.matchmakerLobbyJoinHandler(
								event.kind!.matchmakerLobbyJoin.lobby!
							);
						}
					} else if (event.kind!.partyUpdate) {
						if (this.partyUpdateHandler !== undefined) {
							this.partyUpdateHandler(
								event.kind!.partyUpdate.party!
							);
						}
					}
				}
			});

			this.eventStream.onError(this.handleError.bind(this));
		}
	}

	private switchIdentity(newIdentityToken: string) {
		this.destroy();

		saveToken(newIdentityToken);
		this.token = newIdentityToken;

		this.service = new IdentityService({
			endpoint: this.endpoint,
			token: newIdentityToken,
		});

		this.initiate();
	}

	async startGameLink(
		completeCb: (res: GetGameLinkCommandOutput) => void
	): Promise<PrepareGameLinkCommandOutput | undefined> {
		let prepareRes: PrepareGameLinkCommandOutput;

		// Create game link
		try {
			prepareRes = await this.service.prepareGameLink({});
		} catch (e) {
			this.handleError(e);
			return;
		}

		// Watch for updates and call cb
		if (this.gameLinkStream) this.gameLinkStream.cancel();
		this.gameLinkStream = new RepeatingRequest(
			async (abortSignal, watchIndex) => {
				return await this.service.getGameLink(
					{
						identityLinkToken: prepareRes.identityLinkToken,
						watchIndex,
					},
					{ abortSignal }
				);
			}
		);
		this.gameLinkStream.onMessage((res) => {
			if (
				res.status == GameLinkStatus.COMPLETE ||
				res.status == GameLinkStatus.REVOKED
			) {
				// Cancel stream when complete or revoked
				this.gameLinkStream!.cancel();

				if (res.status == GameLinkStatus.COMPLETE) {
					this.switchIdentity(res.newIdentity!.identityToken!);
				}

				completeCb(res);
			}
		});
		this.gameLinkStream.onError(this.handleError.bind(this));

		return prepareRes;
	}

	destroy() {
		if (this.eventStream) this.eventStream.cancel();
		if (this.gameLinkStream) this.gameLinkStream.cancel();
	}

	private handleError(err: any) {
		if (this.errorHandler !== undefined) this.errorHandler(err);
		else console.error(err);
	}
}

function fetchToken() {
	if (typeof window === "undefined") return undefined;

	return window.localStorage.getItem("rivet:token") ?? undefined;
}

function saveToken(token: string) {
	if (typeof window === "undefined") return;

	window.localStorage.setItem("rivet:token", token);
}
