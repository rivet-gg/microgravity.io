// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  SetPartyToIdleInput,
  SetPartyToIdleOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1SetPartyToIdleCommand,
  serializeAws_restJson1SetPartyToIdleCommand,
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

export interface SetPartyToIdleCommandInput extends SetPartyToIdleInput {}
export interface SetPartyToIdleCommandOutput extends SetPartyToIdleOutput, __MetadataBearer {}

/**
 * Sets the activity of the current identity's party to idle.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, SetPartyToIdleCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, SetPartyToIdleCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new SetPartyToIdleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPartyToIdleCommandInput} for command's `input` shape.
 * @see {@link SetPartyToIdleCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class SetPartyToIdleCommand extends $Command<SetPartyToIdleCommandInput, SetPartyToIdleCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetPartyToIdleCommandInput) {
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
  ): Handler<SetPartyToIdleCommandInput, SetPartyToIdleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "SetPartyToIdleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        SetPartyToIdleInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        SetPartyToIdleOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetPartyToIdleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SetPartyToIdleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetPartyToIdleCommandOutput> {
    return deserializeAws_restJson1SetPartyToIdleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
