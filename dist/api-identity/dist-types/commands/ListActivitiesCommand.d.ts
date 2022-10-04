import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { ListActivitiesInput, ListActivitiesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListActivitiesCommandInput extends ListActivitiesInput {
}
export interface ListActivitiesCommandOutput extends ListActivitiesOutput, __MetadataBearer {
}
/**
 * Returns an overview of all players currently online or in game.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, ListActivitiesCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, ListActivitiesCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new ListActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActivitiesCommandInput} for command's `input` shape.
 * @see {@link ListActivitiesCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class ListActivitiesCommand extends $Command<ListActivitiesCommandInput, ListActivitiesCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: ListActivitiesCommandInput;
    constructor(input: ListActivitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActivitiesCommandInput, ListActivitiesCommandOutput>;
    private serialize;
    private deserialize;
}
