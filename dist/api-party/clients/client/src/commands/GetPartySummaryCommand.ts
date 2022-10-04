// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  GetPartySummaryInput,
  GetPartySummaryOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPartySummaryCommand,
  serializeAws_restJson1GetPartySummaryCommand,
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

export interface GetPartySummaryCommandInput extends GetPartySummaryInput {}
export interface GetPartySummaryCommandOutput extends GetPartySummaryOutput, __MetadataBearer {}

/**
 * Returns a party summary.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartySummaryCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartySummaryCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartySummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartySummaryCommandInput} for command's `input` shape.
 * @see {@link GetPartySummaryCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class GetPartySummaryCommand extends $Command<GetPartySummaryCommandInput, GetPartySummaryCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartySummaryCommandInput) {
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
  ): Handler<GetPartySummaryCommandInput, GetPartySummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "GetPartySummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetPartySummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetPartySummaryOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetPartySummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPartySummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPartySummaryCommandOutput> {
    return deserializeAws_restJson1GetPartySummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
