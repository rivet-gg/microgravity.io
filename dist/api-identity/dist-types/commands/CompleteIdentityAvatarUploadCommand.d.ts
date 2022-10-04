import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { CompleteIdentityAvatarUploadInput, CompleteIdentityAvatarUploadOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CompleteIdentityAvatarUploadCommandInput extends CompleteIdentityAvatarUploadInput {
}
export interface CompleteIdentityAvatarUploadCommandOutput extends CompleteIdentityAvatarUploadOutput, __MetadataBearer {
}
/**
 * Completes an avatar image upload. Must be called after the file upload process completes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, CompleteIdentityAvatarUploadCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, CompleteIdentityAvatarUploadCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new CompleteIdentityAvatarUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteIdentityAvatarUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteIdentityAvatarUploadCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class CompleteIdentityAvatarUploadCommand extends $Command<CompleteIdentityAvatarUploadCommandInput, CompleteIdentityAvatarUploadCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: CompleteIdentityAvatarUploadCommandInput;
    constructor(input: CompleteIdentityAvatarUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteIdentityAvatarUploadCommandInput, CompleteIdentityAvatarUploadCommandOutput>;
    private serialize;
    private deserialize;
}
