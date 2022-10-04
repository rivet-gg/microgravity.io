import { IdentityProfile, GlobalEventNotification, GlobalEventKind, ChatThread, PartySummary, MatchmakerLobbyJoinInfo } from "./models";
import { GetGameLinkCommandOutput, PrepareGameLinkCommandOutput } from "./commands";
import { IdentityService } from "./IdentityService";
export interface IdentityManagerConfig {
    token?: string;
    endpoint?: string;
    service?: IdentityService;
    identityUpdateHandler?: (identity: IdentityProfile) => void;
    chatMessageHandler?: (thread: ChatThread) => void;
    partyUpdateHandler?: (party: PartySummary) => void;
    matchmakerLobbyJoinHandler?: (lobby: MatchmakerLobbyJoinInfo) => void;
    notificationHandler?: (notification: GlobalEventNotification, eventKind: GlobalEventKind) => void;
    errorHandler?: (err: any) => void;
}
export declare class IdentityManagerBuilder {
    private config;
    constructor();
    withToken(token: string): this;
    withEndpoint(endpoint: string): this;
    withService(service: IdentityService): this;
    onIdentityUpdate(handler: IdentityManagerConfig["identityUpdateHandler"]): this;
    onChatMessage(handler: IdentityManagerConfig["chatMessageHandler"]): this;
    onPartyUpdate(handler: IdentityManagerConfig["partyUpdateHandler"]): this;
    onMatchmakerLobbyJoin(handler: IdentityManagerConfig["matchmakerLobbyJoinHandler"]): this;
    onNotification(handler: IdentityManagerConfig["notificationHandler"]): this;
    onError(handler: IdentityManagerConfig["errorHandler"]): this;
    build(): Promise<IdentityManager>;
}
export declare class IdentityManager {
    service: IdentityService;
    token?: string;
    endpoint?: string;
    private identityUpdateHandler?;
    private chatMessageHandler?;
    private partyUpdateHandler?;
    private matchmakerLobbyJoinHandler?;
    private notificationHandler?;
    private errorHandler?;
    private gameLinkStream?;
    private eventStream?;
    constructor(opts: IdentityManagerConfig);
    initiate(): void;
    private switchIdentity;
    startGameLink(completeCb: (res: GetGameLinkCommandOutput) => void): Promise<PrepareGameLinkCommandOutput | undefined>;
    destroy(): void;
    private handleError;
}
