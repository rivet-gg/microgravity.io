import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { JoinLobbyInput, JoinLobbyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface JoinLobbyCommandInput extends JoinLobbyInput {
}
export interface JoinLobbyCommandOutput extends JoinLobbyOutput, __MetadataBearer {
}
/**
 * Joins a specific lobby.
 *
 * This request will use the direct player count configured for the lobby
 * group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, JoinLobbyCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, JoinLobbyCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new JoinLobbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinLobbyCommandInput} for command's `input` shape.
 * @see {@link JoinLobbyCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class JoinLobbyCommand extends $Command<JoinLobbyCommandInput, JoinLobbyCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: JoinLobbyCommandInput;
    constructor(input: JoinLobbyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<JoinLobbyCommandInput, JoinLobbyCommandOutput>;
    private serialize;
    private deserialize;
}
