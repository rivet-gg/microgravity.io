import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { GetPartySummaryInput, GetPartySummaryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartySummaryCommandInput extends GetPartySummaryInput {
}
export interface GetPartySummaryCommandOutput extends GetPartySummaryOutput, __MetadataBearer {
}
/**
 * Returns a party summary.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartySummaryCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartySummaryCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartySummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartySummaryCommandInput} for command's `input` shape.
 * @see {@link GetPartySummaryCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class GetPartySummaryCommand extends $Command<GetPartySummaryCommandInput, GetPartySummaryCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: GetPartySummaryCommandInput;
    constructor(input: GetPartySummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartySummaryCommandInput, GetPartySummaryCommandOutput>;
    private serialize;
    private deserialize;
}
