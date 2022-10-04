// smithy-typescript generated code
import {
  MatchmakerServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MatchmakerServiceClient";
import {
  JoinLobbyInput,
  JoinLobbyOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1JoinLobbyCommand,
  serializeAws_restJson1JoinLobbyCommand,
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

export interface JoinLobbyCommandInput extends JoinLobbyInput {}
export interface JoinLobbyCommandOutput extends JoinLobbyOutput, __MetadataBearer {}

/**
 * Joins a specific lobby.
 *
 * This request will use the direct player count configured for the lobby
 * group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, JoinLobbyCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, JoinLobbyCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new JoinLobbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinLobbyCommandInput} for command's `input` shape.
 * @see {@link JoinLobbyCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export class JoinLobbyCommand extends $Command<JoinLobbyCommandInput, JoinLobbyCommandOutput, MatchmakerServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JoinLobbyCommandInput) {
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
  ): Handler<JoinLobbyCommandInput, JoinLobbyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MatchmakerServiceClient";
    const commandName = "JoinLobbyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        JoinLobbyInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        JoinLobbyOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: JoinLobbyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1JoinLobbyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<JoinLobbyCommandOutput> {
    return deserializeAws_restJson1JoinLobbyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
