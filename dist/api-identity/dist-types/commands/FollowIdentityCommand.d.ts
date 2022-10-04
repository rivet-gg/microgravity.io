import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { FollowIdentityInput, FollowIdentityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface FollowIdentityCommandInput extends FollowIdentityInput {
}
export interface FollowIdentityCommandOutput extends FollowIdentityOutput, __MetadataBearer {
}
/**
 * Follows the given identity.
 *
 * In order for identities to be friends, the other identity has to also follow
 * this identity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, FollowIdentityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, FollowIdentityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new FollowIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FollowIdentityCommandInput} for command's `input` shape.
 * @see {@link FollowIdentityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class FollowIdentityCommand extends $Command<FollowIdentityCommandInput, FollowIdentityCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: FollowIdentityCommandInput;
    constructor(input: FollowIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FollowIdentityCommandInput, FollowIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
