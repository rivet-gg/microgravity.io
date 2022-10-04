import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { UpdateIdentityProfileInput, UpdateIdentityProfileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIdentityProfileCommandInput extends UpdateIdentityProfileInput {
}
export interface UpdateIdentityProfileCommandOutput extends UpdateIdentityProfileOutput, __MetadataBearer {
}
/**
 * Updates profile of the current identity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, UpdateIdentityProfileCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, UpdateIdentityProfileCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new UpdateIdentityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProfileCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class UpdateIdentityProfileCommand extends $Command<UpdateIdentityProfileCommandInput, UpdateIdentityProfileCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: UpdateIdentityProfileCommandInput;
    constructor(input: UpdateIdentityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityProfileCommandInput, UpdateIdentityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
