import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { ValidateIdentityProfileInput, ValidateIdentityProfileOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ValidateIdentityProfileCommandInput extends ValidateIdentityProfileInput {
}
export interface ValidateIdentityProfileCommandOutput extends ValidateIdentityProfileOutput, __MetadataBearer {
}
/**
 * Validate contents of identity profile.
 *
 * Use to provide immediate feedback on profile changes before committing them.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, ValidateIdentityProfileCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, ValidateIdentityProfileCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new ValidateIdentityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateIdentityProfileCommandInput} for command's `input` shape.
 * @see {@link ValidateIdentityProfileCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class ValidateIdentityProfileCommand extends $Command<ValidateIdentityProfileCommandInput, ValidateIdentityProfileCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: ValidateIdentityProfileCommandInput;
    constructor(input: ValidateIdentityProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ValidateIdentityProfileCommandInput, ValidateIdentityProfileCommandOutput>;
    private serialize;
    private deserialize;
}
