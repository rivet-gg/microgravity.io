import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { FindLobbyInput, FindLobbyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface FindLobbyCommandInput extends FindLobbyInput {
}
export interface FindLobbyCommandOutput extends FindLobbyOutput, __MetadataBearer {
}
/**
 * Finds a lobby based on the given criteria.
 *
 * If a lobby is not found and `prevent_auto_create_lobby` is `true`, a new lobby will be created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, FindLobbyCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, FindLobbyCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new FindLobbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FindLobbyCommandInput} for command's `input` shape.
 * @see {@link FindLobbyCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class FindLobbyCommand extends $Command<FindLobbyCommandInput, FindLobbyCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: FindLobbyCommandInput;
    constructor(input: FindLobbyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FindLobbyCommandInput, FindLobbyCommandOutput>;
    private serialize;
    private deserialize;
}
