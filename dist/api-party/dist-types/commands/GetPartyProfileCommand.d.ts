import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { GetPartyProfileInput, GetPartyProfileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartyProfileCommandInput extends GetPartyProfileInput {
}
export interface GetPartyProfileCommandOutput extends GetPartyProfileOutput, __MetadataBearer {
}
/**
 * Returns a party profile.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartyProfileCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartyProfileCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartyProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartyProfileCommandInput} for command's `input` shape.
 * @see {@link GetPartyProfileCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class GetPartyProfileCommand extends $Command<GetPartyProfileCommandInput, GetPartyProfileCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: GetPartyProfileCommandInput;
    constructor(input: GetPartyProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartyProfileCommandInput, GetPartyProfileCommandOutput>;
    private serialize;
    private deserialize;
}
