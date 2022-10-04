import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { KickMemberInput, KickMemberOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface KickMemberCommandInput extends KickMemberInput {
}
export interface KickMemberCommandOutput extends KickMemberOutput, __MetadataBearer {
}
/**
 * Kicks a member from the current identity's current party.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, KickMemberCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, KickMemberCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new KickMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link KickMemberCommandInput} for command's `input` shape.
 * @see {@link KickMemberCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class KickMemberCommand extends $Command<KickMemberCommandInput, KickMemberCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: KickMemberCommandInput;
    constructor(input: KickMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<KickMemberCommandInput, KickMemberCommandOutput>;
    private serialize;
    private deserialize;
}
