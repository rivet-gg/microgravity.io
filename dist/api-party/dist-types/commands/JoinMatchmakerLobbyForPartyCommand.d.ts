import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { JoinMatchmakerLobbyForPartyInput, JoinMatchmakerLobbyForPartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface JoinMatchmakerLobbyForPartyCommandInput extends JoinMatchmakerLobbyForPartyInput {
}
export interface JoinMatchmakerLobbyForPartyCommandOutput extends JoinMatchmakerLobbyForPartyOutput, __MetadataBearer {
}
/**
 * Attempts to make the current identity's party join a specific matchmaker
 * lobby.
 *
 * This request will use the party player count configured for the lobby
 * group.
 *
 * If succeeds, all party members will receive a
 * `GlobalEventMatchmakerLobbyJoin` event with all the information required to
 * join the lobby.
 *
 * Identity must be the party leader.
 *
 * See `JoinLobby`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, JoinMatchmakerLobbyForPartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, JoinMatchmakerLobbyForPartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new JoinMatchmakerLobbyForPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinMatchmakerLobbyForPartyCommandInput} for command's `input` shape.
 * @see {@link JoinMatchmakerLobbyForPartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class JoinMatchmakerLobbyForPartyCommand extends $Command<JoinMatchmakerLobbyForPartyCommandInput, JoinMatchmakerLobbyForPartyCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: JoinMatchmakerLobbyForPartyCommandInput;
    constructor(input: JoinMatchmakerLobbyForPartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<JoinMatchmakerLobbyForPartyCommandInput, JoinMatchmakerLobbyForPartyCommandOutput>;
    private serialize;
    private deserialize;
}
