import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { SetLobbyClosedInput, SetLobbyClosedOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetLobbyClosedCommandInput extends SetLobbyClosedInput {
}
export interface SetLobbyClosedCommandOutput extends SetLobbyClosedOutput, __MetadataBearer {
}
/**
 * If `is_closed` is `true`, players will be prevented from joining the lobby.
 *
 * Does not shutdown the lobby.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, SetLobbyClosedCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, SetLobbyClosedCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new SetLobbyClosedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLobbyClosedCommandInput} for command's `input` shape.
 * @see {@link SetLobbyClosedCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class SetLobbyClosedCommand extends $Command<SetLobbyClosedCommandInput, SetLobbyClosedCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: SetLobbyClosedCommandInput;
    constructor(input: SetLobbyClosedCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetLobbyClosedCommandInput, SetLobbyClosedCommandOutput>;
    private serialize;
    private deserialize;
}
