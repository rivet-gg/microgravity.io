import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { UpdateIdentityStatusInput, UpdateIdentityStatusOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIdentityStatusCommandInput extends UpdateIdentityStatusInput {
}
export interface UpdateIdentityStatusCommandOutput extends UpdateIdentityStatusOutput, __MetadataBearer {
}
/**
 * Updates the current identity's status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, UpdateIdentityStatusCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, UpdateIdentityStatusCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new UpdateIdentityStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityStatusCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class UpdateIdentityStatusCommand extends $Command<UpdateIdentityStatusCommandInput, UpdateIdentityStatusCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: UpdateIdentityStatusCommandInput;
    constructor(input: UpdateIdentityStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityStatusCommandInput, UpdateIdentityStatusCommandOutput>;
    private serialize;
    private deserialize;
}
