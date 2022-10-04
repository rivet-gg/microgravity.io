import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { GetPartyFromInviteInput, GetPartyFromInviteOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPartyFromInviteCommandInput extends GetPartyFromInviteInput {
}
export interface GetPartyFromInviteCommandOutput extends GetPartyFromInviteOutput, __MetadataBearer {
}
/**
 * Fetches a party based on a given invite.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartyFromInviteCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartyFromInviteCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartyFromInviteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartyFromInviteCommandInput} for command's `input` shape.
 * @see {@link GetPartyFromInviteCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class GetPartyFromInviteCommand extends $Command<GetPartyFromInviteCommandInput, GetPartyFromInviteCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: GetPartyFromInviteCommandInput;
    constructor(input: GetPartyFromInviteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPartyFromInviteCommandInput, GetPartyFromInviteCommandOutput>;
    private serialize;
    private deserialize;
}
