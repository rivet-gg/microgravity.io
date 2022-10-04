import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { GetPartySelfSummaryInput, GetPartySelfSummaryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartySelfSummaryCommandInput extends GetPartySelfSummaryInput {
}
export interface GetPartySelfSummaryCommandOutput extends GetPartySelfSummaryOutput, __MetadataBearer {
}
/**
 * Returns a party summary for the party the current identity is a member of.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartySelfSummaryCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartySelfSummaryCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartySelfSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartySelfSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPartySelfSummaryCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class GetPartySelfSummaryCommand extends $Command<GetPartySelfSummaryCommandInput, GetPartySelfSummaryCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: GetPartySelfSummaryCommandInput;
    constructor(input: GetPartySelfSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartySelfSummaryCommandInput, GetPartySelfSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
