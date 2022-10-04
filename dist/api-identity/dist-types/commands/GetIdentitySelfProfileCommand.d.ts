import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { GetIdentitySelfProfileInput, GetIdentitySelfProfileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIdentitySelfProfileCommandInput extends GetIdentitySelfProfileInput {
}
export interface GetIdentitySelfProfileCommandOutput extends GetIdentitySelfProfileOutput, __MetadataBearer {
}
/**
 * Fetches the current identity's profile.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, GetIdentitySelfProfileCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, GetIdentitySelfProfileCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new GetIdentitySelfProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentitySelfProfileCommandInput} for command's `input` shape.
 * @see {@link GetIdentitySelfProfileCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class GetIdentitySelfProfileCommand extends $Command<GetIdentitySelfProfileCommandInput, GetIdentitySelfProfileCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: GetIdentitySelfProfileCommandInput;
    constructor(input: GetIdentitySelfProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentitySelfProfileCommandInput, GetIdentitySelfProfileCommandOutput>;
    private serialize;
    private deserialize;
}
