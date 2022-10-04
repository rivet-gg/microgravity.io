import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { PrepareIdentityAvatarUploadInput, PrepareIdentityAvatarUploadOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PrepareIdentityAvatarUploadCommandInput extends PrepareIdentityAvatarUploadInput {
}
export interface PrepareIdentityAvatarUploadCommandOutput extends PrepareIdentityAvatarUploadOutput, __MetadataBearer {
}
/**
 * Prepares an avatar image upload.
 *
 * Complete upload with `rivet.api.identity#CompleteIdentityAvatarUpload`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, PrepareIdentityAvatarUploadCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, PrepareIdentityAvatarUploadCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new PrepareIdentityAvatarUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PrepareIdentityAvatarUploadCommandInput} for command's `input` shape.
 * @see {@link PrepareIdentityAvatarUploadCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class PrepareIdentityAvatarUploadCommand extends $Command<PrepareIdentityAvatarUploadCommandInput, PrepareIdentityAvatarUploadCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: PrepareIdentityAvatarUploadCommandInput;
    constructor(input: PrepareIdentityAvatarUploadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PrepareIdentityAvatarUploadCommandInput, PrepareIdentityAvatarUploadCommandOutput>;
    private serialize;
    private deserialize;
}
