import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { JoinPartyInput, JoinPartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface JoinPartyCommandInput extends JoinPartyInput {
}
export interface JoinPartyCommandOutput extends JoinPartyOutput, __MetadataBearer {
}
/**
 * Joins a party using a given party invite.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, JoinPartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, JoinPartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new JoinPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinPartyCommandInput} for command's `input` shape.
 * @see {@link JoinPartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class JoinPartyCommand extends $Command<JoinPartyCommandInput, JoinPartyCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: JoinPartyCommandInput;
    constructor(input: JoinPartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<JoinPartyCommandInput, JoinPartyCommandOutput>;
    private serialize;
    private deserialize;
}
