// smithy-typescript generated code
import {
  MatchmakerServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MatchmakerServiceClient";
import {
  PlayerConnectedInput,
  PlayerConnectedOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1PlayerConnectedCommand,
  serializeAws_restJson1PlayerConnectedCommand,
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

export interface PlayerConnectedCommandInput extends PlayerConnectedInput {}
export interface PlayerConnectedCommandOutput extends PlayerConnectedOutput, __MetadataBearer {}

/**
 * Validates the player token is valid and has not already been consumed then
 * marks the player as connected.
 *
 * # Player Tokens and Reserved Slots
 *
 * Player tokens reserve a spot in the lobby until they expire. This allows for
 * precise matchmaking up to exactly the lobby's player limit, which is
 * important for games with small lobbies and a high influx of players.
 *
 * By calling this endpoint with the player token, the player's spot is marked
 * as connected and will not expire. If this endpoint is never called, the
 * player's token will expire and this spot will be filled by another player.
 *
 * # Anti-Botting
 *
 * Player tokens are only issued by caling `rivet.api.matchmaker#JoinLobby`, calling `rivet.api.matchmaker#FindLobby`, or
 * from the `rivet.api.identity.common#GlobalEventMatchmakerLobbyJoin` event.
 * These endpoints have anti-botting measures (i.e. enforcing max player
 * limits, captchas, and detecting bots), so valid player tokens provide some
 * confidence that the player is not a bot.
 *
 * Therefore, it's important to make sure the token is valid by waiting for
 * this endpoint to return OK before allowing the connected socket to do
 * anything else. If this endpoint returns an error, the socket should be
 * disconnected immediately.
 *
 * # How to Transmit the Player Token
 *
 * The client is responsible for acquiring the player token by caling
 * `rivet.api.matchmaker#JoinLobby`, calling `rivet.api.matchmaker#FindLobby`,
 * or from the `rivet.api.identity.common#GlobalEventMatchmakerLobbyJoin`
 * event.  Beyond that, it's up to the developer how the player token is
 * transmitted to the lobby.
 *
 * If using WebSockets, the player token can be transmitted as a query
 * paramter.
 *
 * Otherwise, the player token will likely be automatically sent by the client
 * once the socket opens. As mentioned above, nothing else should happen until
 * the player token is validated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, PlayerConnectedCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, PlayerConnectedCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new PlayerConnectedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PlayerConnectedCommandInput} for command's `input` shape.
 * @see {@link PlayerConnectedCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export class PlayerConnectedCommand extends $Command<PlayerConnectedCommandInput, PlayerConnectedCommandOutput, MatchmakerServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PlayerConnectedCommandInput) {
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
  ): Handler<PlayerConnectedCommandInput, PlayerConnectedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MatchmakerServiceClient";
    const commandName = "PlayerConnectedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        PlayerConnectedInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        PlayerConnectedOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PlayerConnectedCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PlayerConnectedCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PlayerConnectedCommandOutput> {
    return deserializeAws_restJson1PlayerConnectedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
