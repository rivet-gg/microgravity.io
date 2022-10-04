import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { GetGameLinkInput, GetGameLinkOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGameLinkCommandInput extends GetGameLinkInput {
}
export interface GetGameLinkCommandOutput extends GetGameLinkOutput, __MetadataBearer {
}
/**
 * Returns the current status of a linking process.
 *
 * Once `status` is `complete`, the identity's profile should be fetched again
 * since they may have switched accounts.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, GetGameLinkCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, GetGameLinkCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new GetGameLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGameLinkCommandInput} for command's `input` shape.
 * @see {@link GetGameLinkCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class GetGameLinkCommand extends $Command<GetGameLinkCommandInput, GetGameLinkCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: GetGameLinkCommandInput;
    constructor(input: GetGameLinkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGameLinkCommandInput, GetGameLinkCommandOutput>;
    private serialize;
    private deserialize;
}
