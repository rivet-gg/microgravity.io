// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  FindMatchmakerLobbyForPartyInput,
  FindMatchmakerLobbyForPartyOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1FindMatchmakerLobbyForPartyCommand,
  serializeAws_restJson1FindMatchmakerLobbyForPartyCommand,
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

export interface FindMatchmakerLobbyForPartyCommandInput extends FindMatchmakerLobbyForPartyInput {}
export interface FindMatchmakerLobbyForPartyCommandOutput extends FindMatchmakerLobbyForPartyOutput, __MetadataBearer {}

/**
 * Attempts to make the current identity's party find a lobby based on the
 * given criteria.
 *
 *
 * If succeeds, all party members will receive a
 * `GlobalEventMatchmakerLobbyJoin` event with all the information required to
 * join the lobby.
 *
 * This request will use the party player count configured for the lobby
 * group.
 *
 * See `FindLobby`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, FindMatchmakerLobbyForPartyCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, FindMatchmakerLobbyForPartyCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new FindMatchmakerLobbyForPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FindMatchmakerLobbyForPartyCommandInput} for command's `input` shape.
 * @see {@link FindMatchmakerLobbyForPartyCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class FindMatchmakerLobbyForPartyCommand extends $Command<FindMatchmakerLobbyForPartyCommandInput, FindMatchmakerLobbyForPartyCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FindMatchmakerLobbyForPartyCommandInput) {
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
  ): Handler<FindMatchmakerLobbyForPartyCommandInput, FindMatchmakerLobbyForPartyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "FindMatchmakerLobbyForPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        FindMatchmakerLobbyForPartyInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        FindMatchmakerLobbyForPartyOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: FindMatchmakerLobbyForPartyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1FindMatchmakerLobbyForPartyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FindMatchmakerLobbyForPartyCommandOutput> {
    return deserializeAws_restJson1FindMatchmakerLobbyForPartyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
