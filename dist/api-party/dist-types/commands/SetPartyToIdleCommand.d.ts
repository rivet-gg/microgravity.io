import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { SetPartyToIdleInput, SetPartyToIdleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetPartyToIdleCommandInput extends SetPartyToIdleInput {
}
export interface SetPartyToIdleCommandOutput extends SetPartyToIdleOutput, __MetadataBearer {
}
/**
 * Sets the activity of the current identity's party to idle.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, SetPartyToIdleCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, SetPartyToIdleCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new SetPartyToIdleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPartyToIdleCommandInput} for command's `input` shape.
 * @see {@link SetPartyToIdleCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class SetPartyToIdleCommand extends $Command<SetPartyToIdleCommandInput, SetPartyToIdleCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: SetPartyToIdleCommandInput;
    constructor(input: SetPartyToIdleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetPartyToIdleCommandInput, SetPartyToIdleCommandOutput>;
    private serialize;
    private deserialize;
}
