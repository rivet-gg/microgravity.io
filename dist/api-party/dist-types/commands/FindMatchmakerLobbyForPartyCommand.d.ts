import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { FindMatchmakerLobbyForPartyInput, FindMatchmakerLobbyForPartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface FindMatchmakerLobbyForPartyCommandInput extends FindMatchmakerLobbyForPartyInput {
}
export interface FindMatchmakerLobbyForPartyCommandOutput extends FindMatchmakerLobbyForPartyOutput, __MetadataBearer {
}
/**
 * Attempts to make the current identity's party find a lobby based on the
 * given criteria.
 *
 *
 * If succeeds, all party members will receive a
 * `GlobalEventMatchmakerLobbyJoin` event with all the information required to
 * join the lobby.
 *
 * This request will use the party player count configured for the lobby
 * group.
 *
 * See `FindLobby`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, FindMatchmakerLobbyForPartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, FindMatchmakerLobbyForPartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new FindMatchmakerLobbyForPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FindMatchmakerLobbyForPartyCommandInput} for command's `input` shape.
 * @see {@link FindMatchmakerLobbyForPartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class FindMatchmakerLobbyForPartyCommand extends $Command<FindMatchmakerLobbyForPartyCommandInput, FindMatchmakerLobbyForPartyCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: FindMatchmakerLobbyForPartyCommandInput;
    constructor(input: FindMatchmakerLobbyForPartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FindMatchmakerLobbyForPartyCommandInput, FindMatchmakerLobbyForPartyCommandOutput>;
    private serialize;
    private deserialize;
}
