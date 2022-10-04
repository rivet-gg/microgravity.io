import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { CreatePartyInviteInput, CreatePartyInviteOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePartyInviteCommandInput extends CreatePartyInviteInput {
}
export interface CreatePartyInviteCommandOutput extends CreatePartyInviteOutput, __MetadataBearer {
}
/**
 * Creates a new party invite for the current identity's party.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, CreatePartyInviteCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, CreatePartyInviteCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new CreatePartyInviteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartyInviteCommandInput} for command's `input` shape.
 * @see {@link CreatePartyInviteCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class CreatePartyInviteCommand extends $Command<CreatePartyInviteCommandInput, CreatePartyInviteCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: CreatePartyInviteCommandInput;
    constructor(input: CreatePartyInviteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartyInviteCommandInput, CreatePartyInviteCommandOutput>;
    private serialize;
    private deserialize;
}
