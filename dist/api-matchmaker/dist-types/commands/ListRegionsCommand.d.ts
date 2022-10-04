import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { ListRegionsInput, ListRegionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRegionsCommandInput extends ListRegionsInput {
}
export interface ListRegionsCommandOutput extends ListRegionsOutput, __MetadataBearer {
}
/**
 * Returns a list of regions available to this namespace.
 *
 * Regions are sorted by most optimal to least optimal. The player's IP address
 * is used to calculate the regions' optimality.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, ListRegionsCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, ListRegionsCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new ListRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegionsCommandInput} for command's `input` shape.
 * @see {@link ListRegionsCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class ListRegionsCommand extends $Command<ListRegionsCommandInput, ListRegionsCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: ListRegionsCommandInput;
    constructor(input: ListRegionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRegionsCommandInput, ListRegionsCommandOutput>;
    private serialize;
    private deserialize;
}
