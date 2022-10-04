import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { ListLobbiesInput, ListLobbiesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLobbiesCommandInput extends ListLobbiesInput {
}
export interface ListLobbiesCommandOutput extends ListLobbiesOutput, __MetadataBearer {
}
/**
 * Lists all open lobbies.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, ListLobbiesCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, ListLobbiesCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new ListLobbiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLobbiesCommandInput} for command's `input` shape.
 * @see {@link ListLobbiesCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class ListLobbiesCommand extends $Command<ListLobbiesCommandInput, ListLobbiesCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: ListLobbiesCommandInput;
    constructor(input: ListLobbiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLobbiesCommandInput, ListLobbiesCommandOutput>;
    private serialize;
    private deserialize;
}
