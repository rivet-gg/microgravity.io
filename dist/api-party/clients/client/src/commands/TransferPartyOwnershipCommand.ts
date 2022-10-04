// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  TransferPartyOwnershipInput,
  TransferPartyOwnershipOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1TransferPartyOwnershipCommand,
  serializeAws_restJson1TransferPartyOwnershipCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface TransferPartyOwnershipCommandInput extends TransferPartyOwnershipInput {}
export interface TransferPartyOwnershipCommandOutput extends TransferPartyOwnershipOutput, __MetadataBearer {}

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
export class TransferPartyOwnershipCommand extends $Command<TransferPartyOwnershipCommandInput, TransferPartyOwnershipCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransferPartyOwnershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PartyServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransferPartyOwnershipCommandInput, TransferPartyOwnershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "TransferPartyOwnershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        TransferPartyOwnershipInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        TransferPartyOwnershipOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: TransferPartyOwnershipCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1TransferPartyOwnershipCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TransferPartyOwnershipCommandOutput> {
    return deserializeAws_restJson1TransferPartyOwnershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
