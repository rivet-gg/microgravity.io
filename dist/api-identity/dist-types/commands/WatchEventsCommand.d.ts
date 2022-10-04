import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { WatchEventsInput, WatchEventsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface WatchEventsCommandInput extends WatchEventsInput {
}
export interface WatchEventsCommandOutput extends WatchEventsOutput, __MetadataBearer {
}
/**
 * Returns all events relative to the current identity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, WatchEventsCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, WatchEventsCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new WatchEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WatchEventsCommandInput} for command's `input` shape.
 * @see {@link WatchEventsCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export declare class WatchEventsCommand extends $Command<WatchEventsCommandInput, WatchEventsCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: WatchEventsCommandInput;
    constructor(input: WatchEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<WatchEventsCommandInput, WatchEventsCommandOutput>;
    private serialize;
    private deserialize;
}
