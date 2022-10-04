import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { SetPartyPublicityInput, SetPartyPublicityOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetPartyPublicityCommandInput extends SetPartyPublicityInput {
}
export interface SetPartyPublicityCommandOutput extends SetPartyPublicityOutput, __MetadataBearer {
}
/**
 * Sets the publicity of a party.
 *
 * This configures who can view and join the party.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, SetPartyPublicityCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, SetPartyPublicityCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new SetPartyPublicityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPartyPublicityCommandInput} for command's `input` shape.
 * @see {@link SetPartyPublicityCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class SetPartyPublicityCommand extends $Command<SetPartyPublicityCommandInput, SetPartyPublicityCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: SetPartyPublicityCommandInput;
    constructor(input: SetPartyPublicityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetPartyPublicityCommandInput, SetPartyPublicityCommandOutput>;
    private serialize;
    private deserialize;
}
