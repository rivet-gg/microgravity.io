import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { RevokePartyInviteInput, RevokePartyInviteOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokePartyInviteCommandInput extends RevokePartyInviteInput {
}
export interface RevokePartyInviteCommandOutput extends RevokePartyInviteOutput, __MetadataBearer {
}
/**
 * Revokes a party invite from the current identity's party.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, RevokePartyInviteCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, RevokePartyInviteCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new RevokePartyInviteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokePartyInviteCommandInput} for command's `input` shape.
 * @see {@link RevokePartyInviteCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class RevokePartyInviteCommand extends $Command<RevokePartyInviteCommandInput, RevokePartyInviteCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: RevokePartyInviteCommandInput;
    constructor(input: RevokePartyInviteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokePartyInviteCommandInput, RevokePartyInviteCommandOutput>;
    private serialize;
    private deserialize;
}
