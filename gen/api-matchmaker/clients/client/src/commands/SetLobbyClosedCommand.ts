// smithy-typescript generated code
import {
  MatchmakerServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MatchmakerServiceClient";
import {
  SetLobbyClosedInput,
  SetLobbyClosedOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1SetLobbyClosedCommand,
  serializeAws_restJson1SetLobbyClosedCommand,
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

export interface SetLobbyClosedCommandInput extends SetLobbyClosedInput {}
export interface SetLobbyClosedCommandOutput extends SetLobbyClosedOutput, __MetadataBearer {}

/**
 * If `is_closed` is `true`, players will be prevented from joining the lobby.
 *
 * Does not shutdown the lobby.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, SetLobbyClosedCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, SetLobbyClosedCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new SetLobbyClosedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLobbyClosedCommandInput} for command's `input` shape.
 * @see {@link SetLobbyClosedCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export class SetLobbyClosedCommand extends $Command<SetLobbyClosedCommandInput, SetLobbyClosedCommandOutput, MatchmakerServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetLobbyClosedCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MatchmakerServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetLobbyClosedCommandInput, SetLobbyClosedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MatchmakerServiceClient";
    const commandName = "SetLobbyClosedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        SetLobbyClosedInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        SetLobbyClosedOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetLobbyClosedCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SetLobbyClosedCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetLobbyClosedCommandOutput> {
    return deserializeAws_restJson1SetLobbyClosedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
