import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { RemoveIdentityGameActivityInput, RemoveIdentityGameActivityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveIdentityGameActivityCommandInput extends RemoveIdentityGameActivityInput {
}
export interface RemoveIdentityGameActivityCommandOutput extends RemoveIdentityGameActivityOutput, __MetadataBearer {
}
/**
 * Removes the current identity's game activity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, RemoveIdentityGameActivityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, RemoveIdentityGameActivityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new RemoveIdentityGameActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveIdentityGameActivityCommandInput} for command's `input` shape.
 * @see {@link RemoveIdentityGameActivityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class RemoveIdentityGameActivityCommand extends $Command<RemoveIdentityGameActivityCommandInput, RemoveIdentityGameActivityCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: RemoveIdentityGameActivityCommandInput;
    constructor(input: RemoveIdentityGameActivityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveIdentityGameActivityCommandInput, RemoveIdentityGameActivityCommandOutput>;
    private serialize;
    private deserialize;
}
