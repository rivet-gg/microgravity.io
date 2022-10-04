import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { CompleteGameLinkInput, CompleteGameLinkOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CompleteGameLinkCommandInput extends CompleteGameLinkInput {
}
export interface CompleteGameLinkCommandOutput extends CompleteGameLinkOutput, __MetadataBearer {
}
/**
 * Completes a game link process and returns whether or not the link is valid.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, CompleteGameLinkCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, CompleteGameLinkCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new CompleteGameLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteGameLinkCommandInput} for command's `input` shape.
 * @see {@link CompleteGameLinkCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class CompleteGameLinkCommand extends $Command<CompleteGameLinkCommandInput, CompleteGameLinkCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: CompleteGameLinkCommandInput;
    constructor(input: CompleteGameLinkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteGameLinkCommandInput, CompleteGameLinkCommandOutput>;
    private serialize;
    private deserialize;
}
