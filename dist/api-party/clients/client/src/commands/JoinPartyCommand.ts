// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  JoinPartyInput,
  JoinPartyOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1JoinPartyCommand,
  serializeAws_restJson1JoinPartyCommand,
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

export interface JoinPartyCommandInput extends JoinPartyInput {}
export interface JoinPartyCommandOutput extends JoinPartyOutput, __MetadataBearer {}

/**
 * Joins a party using a given party invite.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, JoinPartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, JoinPartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new JoinPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinPartyCommandInput} for command's `input` shape.
 * @see {@link JoinPartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class JoinPartyCommand extends $Command<JoinPartyCommandInput, JoinPartyCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JoinPartyCommandInput) {
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
  ): Handler<JoinPartyCommandInput, JoinPartyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "JoinPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        JoinPartyInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        JoinPartyOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: JoinPartyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1JoinPartyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<JoinPartyCommandOutput> {
    return deserializeAws_restJson1JoinPartyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
