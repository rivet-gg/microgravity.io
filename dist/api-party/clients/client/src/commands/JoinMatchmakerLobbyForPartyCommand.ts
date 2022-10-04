// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  JoinMatchmakerLobbyForPartyInput,
  JoinMatchmakerLobbyForPartyOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommand,
  serializeAws_restJson1JoinMatchmakerLobbyForPartyCommand,
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

export interface JoinMatchmakerLobbyForPartyCommandInput extends JoinMatchmakerLobbyForPartyInput {}
export interface JoinMatchmakerLobbyForPartyCommandOutput extends JoinMatchmakerLobbyForPartyOutput, __MetadataBearer {}

/**
 * Attempts to make the current identity's party join a specific matchmaker
 * lobby.
 *
 * This request will use the party player count configured for the lobby
 * group.
 *
 * If succeeds, all party members will receive a
 * `GlobalEventMatchmakerLobbyJoin` event with all the information required to
 * join the lobby.
 *
 * Identity must be the party leader.
 *
 * See `JoinLobby`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, JoinMatchmakerLobbyForPartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, JoinMatchmakerLobbyForPartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new JoinMatchmakerLobbyForPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinMatchmakerLobbyForPartyCommandInput} for command's `input` shape.
 * @see {@link JoinMatchmakerLobbyForPartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class JoinMatchmakerLobbyForPartyCommand extends $Command<JoinMatchmakerLobbyForPartyCommandInput, JoinMatchmakerLobbyForPartyCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JoinMatchmakerLobbyForPartyCommandInput) {
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
  ): Handler<JoinMatchmakerLobbyForPartyCommandInput, JoinMatchmakerLobbyForPartyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "JoinMatchmakerLobbyForPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        JoinMatchmakerLobbyForPartyInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        JoinMatchmakerLobbyForPartyOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: JoinMatchmakerLobbyForPartyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1JoinMatchmakerLobbyForPartyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<JoinMatchmakerLobbyForPartyCommandOutput> {
    return deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
