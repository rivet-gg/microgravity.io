import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { GetPartySelfProfileInput, GetPartySelfProfileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartySelfProfileCommandInput extends GetPartySelfProfileInput {
}
export interface GetPartySelfProfileCommandOutput extends GetPartySelfProfileOutput, __MetadataBearer {
}
/**
 * Returns a party profile for the party the current identity is a member of.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartySelfProfileCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartySelfProfileCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartySelfProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartySelfProfileCommandInput} for command's `input` shape.
 * @see {@link GetPartySelfProfileCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class GetPartySelfProfileCommand extends $Command<GetPartySelfProfileCommandInput, GetPartySelfProfileCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: GetPartySelfProfileCommandInput;
    constructor(input: GetPartySelfProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartySelfProfileCommandInput, GetPartySelfProfileCommandOutput>;
    private serialize;
    private deserialize;
}
