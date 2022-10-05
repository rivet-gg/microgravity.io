// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  SetPartyPublicityInput,
  SetPartyPublicityOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1SetPartyPublicityCommand,
  serializeAws_restJson1SetPartyPublicityCommand,
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

export interface SetPartyPublicityCommandInput extends SetPartyPublicityInput {}
export interface SetPartyPublicityCommandOutput extends SetPartyPublicityOutput, __MetadataBearer {}

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
export class SetPartyPublicityCommand extends $Command<SetPartyPublicityCommandInput, SetPartyPublicityCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetPartyPublicityCommandInput) {
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
  ): Handler<SetPartyPublicityCommandInput, SetPartyPublicityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "SetPartyPublicityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        SetPartyPublicityInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        SetPartyPublicityOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetPartyPublicityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SetPartyPublicityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetPartyPublicityCommandOutput> {
    return deserializeAws_restJson1SetPartyPublicityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
