// smithy-typescript generated code
import {
  MatchmakerServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MatchmakerServiceClient";
import {
  PlayerDisconnectedInput,
  PlayerDisconnectedOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1PlayerDisconnectedCommand,
  serializeAws_restJson1PlayerDisconnectedCommand,
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

export interface PlayerDisconnectedCommandInput extends PlayerDisconnectedInput {}
export interface PlayerDisconnectedCommandOutput extends PlayerDisconnectedOutput, __MetadataBearer {}

/**
 * Marks a player as disconnected.
 *
 * # Ghost Players
 *
 * If players are not marked as disconnected, lobbies will result with "ghost
 * players" that the matchmaker thinks exist but are no longer connected to the
 * lobby.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, PlayerDisconnectedCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, PlayerDisconnectedCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new PlayerDisconnectedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PlayerDisconnectedCommandInput} for command's `input` shape.
 * @see {@link PlayerDisconnectedCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export class PlayerDisconnectedCommand extends $Command<PlayerDisconnectedCommandInput, PlayerDisconnectedCommandOutput, MatchmakerServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PlayerDisconnectedCommandInput) {
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
  ): Handler<PlayerDisconnectedCommandInput, PlayerDisconnectedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MatchmakerServiceClient";
    const commandName = "PlayerDisconnectedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        PlayerDisconnectedInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        PlayerDisconnectedOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PlayerDisconnectedCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PlayerDisconnectedCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PlayerDisconnectedCommandOutput> {
    return deserializeAws_restJson1PlayerDisconnectedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
