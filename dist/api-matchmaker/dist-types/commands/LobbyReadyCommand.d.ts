import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { LobbyReadyInput, LobbyReadyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface LobbyReadyCommandInput extends LobbyReadyInput {
}
export interface LobbyReadyCommandOutput extends LobbyReadyOutput, __MetadataBearer {
}
/**
 * Marks the current lobby as ready to accept connections. Players will not be
 * able to connect to this lobby until the lobby is flagged as ready.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, LobbyReadyCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, LobbyReadyCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new LobbyReadyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LobbyReadyCommandInput} for command's `input` shape.
 * @see {@link LobbyReadyCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class LobbyReadyCommand extends $Command<LobbyReadyCommandInput, LobbyReadyCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: LobbyReadyCommandInput;
    constructor(input: LobbyReadyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LobbyReadyCommandInput, LobbyReadyCommandOutput>;
    private serialize;
    private deserialize;
}
