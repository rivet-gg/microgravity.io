import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { LeavePartyInput, LeavePartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface LeavePartyCommandInput extends LeavePartyInput {
}
export interface LeavePartyCommandOutput extends LeavePartyOutput, __MetadataBearer {
}
/**
 * Leaves the current identity's party.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, LeavePartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, LeavePartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new LeavePartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LeavePartyCommandInput} for command's `input` shape.
 * @see {@link LeavePartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class LeavePartyCommand extends $Command<LeavePartyCommandInput, LeavePartyCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: LeavePartyCommandInput;
    constructor(input: LeavePartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LeavePartyCommandInput, LeavePartyCommandOutput>;
    private serialize;
    private deserialize;
}
