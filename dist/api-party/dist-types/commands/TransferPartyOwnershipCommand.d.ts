import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { TransferPartyOwnershipInput, TransferPartyOwnershipOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TransferPartyOwnershipCommandInput extends TransferPartyOwnershipInput {
}
export interface TransferPartyOwnershipCommandOutput extends TransferPartyOwnershipOutput, __MetadataBearer {
}
/**
 * Transfers ownership of the party to another party member.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, TransferPartyOwnershipCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, TransferPartyOwnershipCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new TransferPartyOwnershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferPartyOwnershipCommandInput} for command's `input` shape.
 * @see {@link TransferPartyOwnershipCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export declare class TransferPartyOwnershipCommand extends $Command<TransferPartyOwnershipCommandInput, TransferPartyOwnershipCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: TransferPartyOwnershipCommandInput;
    constructor(input: TransferPartyOwnershipCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransferPartyOwnershipCommandInput, TransferPartyOwnershipCommandOutput>;
    private serialize;
    private deserialize;
}
