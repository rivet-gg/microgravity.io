import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { CreatePartyInput, CreatePartyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePartyCommandInput extends CreatePartyInput {
}
export interface CreatePartyCommandOutput extends CreatePartyOutput, __MetadataBearer {
}
/**
 * Creates a new party.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, CreatePartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, CreatePartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new CreatePartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartyCommandInput} for command's `input` shape.
 * @see {@link CreatePartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class CreatePartyCommand extends $Command<CreatePartyCommandInput, CreatePartyCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: CreatePartyCommandInput;
    constructor(input: CreatePartyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartyCommandInput, CreatePartyCommandOutput>;
    private serialize;
    private deserialize;
}
