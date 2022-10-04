// smithy-typescript generated code
import {
  MatchmakerServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MatchmakerServiceClient";
import {
  ListLobbiesInput,
  ListLobbiesOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListLobbiesCommand,
  serializeAws_restJson1ListLobbiesCommand,
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

export interface ListLobbiesCommandInput extends ListLobbiesInput {}
export interface ListLobbiesCommandOutput extends ListLobbiesOutput, __MetadataBearer {}

/**
 * Lists all open lobbies.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, ListLobbiesCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, ListLobbiesCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new ListLobbiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLobbiesCommandInput} for command's `input` shape.
 * @see {@link ListLobbiesCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export class ListLobbiesCommand extends $Command<ListLobbiesCommandInput, ListLobbiesCommandOutput, MatchmakerServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLobbiesCommandInput) {
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
  ): Handler<ListLobbiesCommandInput, ListLobbiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MatchmakerServiceClient";
    const commandName = "ListLobbiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        ListLobbiesInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        ListLobbiesOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListLobbiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLobbiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLobbiesCommandOutput> {
    return deserializeAws_restJson1ListLobbiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
