import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { UnfollowIdentityInput, UnfollowIdentityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnfollowIdentityCommandInput extends UnfollowIdentityInput {
}
export interface UnfollowIdentityCommandOutput extends UnfollowIdentityOutput, __MetadataBearer {
}
/**
 * Unfollows the given identity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, UnfollowIdentityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, UnfollowIdentityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new UnfollowIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnfollowIdentityCommandInput} for command's `input` shape.
 * @see {@link UnfollowIdentityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class UnfollowIdentityCommand extends $Command<UnfollowIdentityCommandInput, UnfollowIdentityCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: UnfollowIdentityCommandInput;
    constructor(input: UnfollowIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnfollowIdentityCommandInput, UnfollowIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
