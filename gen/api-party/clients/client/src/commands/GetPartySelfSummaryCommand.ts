// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  GetPartySelfSummaryInput,
  GetPartySelfSummaryOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPartySelfSummaryCommand,
  serializeAws_restJson1GetPartySelfSummaryCommand,
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

export interface GetPartySelfSummaryCommandInput extends GetPartySelfSummaryInput {}
export interface GetPartySelfSummaryCommandOutput extends GetPartySelfSummaryOutput, __MetadataBearer {}

/**
 * Returns a party summary for the party the current identity is a member of.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartySelfSummaryCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartySelfSummaryCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartySelfSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartySelfSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPartySelfSummaryCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class GetPartySelfSummaryCommand extends $Command<GetPartySelfSummaryCommandInput, GetPartySelfSummaryCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartySelfSummaryCommandInput) {
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
  ): Handler<GetPartySelfSummaryCommandInput, GetPartySelfSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "GetPartySelfSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetPartySelfSummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetPartySelfSummaryOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetPartySelfSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPartySelfSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPartySelfSummaryCommandOutput> {
    return deserializeAws_restJson1GetPartySelfSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
