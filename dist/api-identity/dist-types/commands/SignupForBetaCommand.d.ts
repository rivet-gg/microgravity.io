import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { SignupForBetaInput, SignupForBetaOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SignupForBetaCommandInput extends SignupForBetaInput {
}
export interface SignupForBetaCommandOutput extends SignupForBetaOutput, __MetadataBearer {
}
/**
 * Submits a beta signup form.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, SignupForBetaCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, SignupForBetaCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new SignupForBetaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignupForBetaCommandInput} for command's `input` shape.
 * @see {@link SignupForBetaCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class SignupForBetaCommand extends $Command<SignupForBetaCommandInput, SignupForBetaCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: SignupForBetaCommandInput;
    constructor(input: SignupForBetaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignupForBetaCommandInput, SignupForBetaCommandOutput>;
    private serialize;
    private deserialize;
}
