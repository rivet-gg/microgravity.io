import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { GetIdentityProfileInput, GetIdentityProfileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIdentityProfileCommandInput extends GetIdentityProfileInput {
}
export interface GetIdentityProfileCommandOutput extends GetIdentityProfileOutput, __MetadataBearer {
}
/**
 * Fetches an identity profile.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, GetIdentityProfileCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, GetIdentityProfileCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new GetIdentityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityProfileCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProfileCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class GetIdentityProfileCommand extends $Command<GetIdentityProfileCommandInput, GetIdentityProfileCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: GetIdentityProfileCommandInput;
    constructor(input: GetIdentityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityProfileCommandInput, GetIdentityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
