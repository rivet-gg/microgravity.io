import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { SearchIdentitiesInput, SearchIdentitiesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchIdentitiesCommandInput extends SearchIdentitiesInput {
}
export interface SearchIdentitiesCommandOutput extends SearchIdentitiesOutput, __MetadataBearer {
}
/**
 * Fuzzy search for identities.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, SearchIdentitiesCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, SearchIdentitiesCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new SearchIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchIdentitiesCommandInput} for command's `input` shape.
 * @see {@link SearchIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class SearchIdentitiesCommand extends $Command<SearchIdentitiesCommandInput, SearchIdentitiesCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: SearchIdentitiesCommandInput;
    constructor(input: SearchIdentitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchIdentitiesCommandInput, SearchIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
