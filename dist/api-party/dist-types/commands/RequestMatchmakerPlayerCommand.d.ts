import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { RequestMatchmakerPlayerInput, RequestMatchmakerPlayerOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RequestMatchmakerPlayerCommandInput extends RequestMatchmakerPlayerInput {
}
export interface RequestMatchmakerPlayerCommandOutput extends RequestMatchmakerPlayerOutput, __MetadataBearer {
}
/**
 * Attempts to create a new matchmaker player for the current identity.
 *
 * If succeeds, the identity will receive a `GlobalEventMatchmakerLobbyJoin`
 * event with all the information required to join the lobby.
 *
 * Only relevant if the party is already in a matchmaker lobby.
 *
 * # When To Use This Endpoint
 *
 * ## Joining a Party Already In a Lobby
 *
 * When an identity joins a party that's already in a lobby, a new matchmaker
 * player will not automatically be created unless
 * `JoinParty#matchmaker_auto_join_lobby` is set to `true`.
 *
 * ## Leaving the Game and Returning
 *
 * If the user leaves the game and comes back but is still in the party, then
 * they will have to create a new matchmaker player.
 *
 * ## Failed to Connect to Lobby or Disconnected From Lobby
 *
 * If the user failed to establish a connection with the lobby or they got
 * disconnected, their matchmaker player will be removed. Use this endpoint to
 * create a new matchmaker player.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, RequestMatchmakerPlayerCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, RequestMatchmakerPlayerCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new RequestMatchmakerPlayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestMatchmakerPlayerCommandInput} for command's `input` shape.
 * @see {@link RequestMatchmakerPlayerCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class RequestMatchmakerPlayerCommand extends $Command<RequestMatchmakerPlayerCommandInput, RequestMatchmakerPlayerCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: RequestMatchmakerPlayerCommandInput;
    constructor(input: RequestMatchmakerPlayerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestMatchmakerPlayerCommandInput, RequestMatchmakerPlayerCommandOutput>;
    private serialize;
    private deserialize;
}
