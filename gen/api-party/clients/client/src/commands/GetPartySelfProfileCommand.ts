// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  GetPartySelfProfileInput,
  GetPartySelfProfileOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPartySelfProfileCommand,
  serializeAws_restJson1GetPartySelfProfileCommand,
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

export interface GetPartySelfProfileCommandInput extends GetPartySelfProfileInput {}
export interface GetPartySelfProfileCommandOutput extends GetPartySelfProfileOutput, __MetadataBearer {}

/**
 * Returns a party profile for the party the current identity is a member of.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartySelfProfileCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartySelfProfileCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartySelfProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartySelfProfileCommandInput} for command's `input` shape.
 * @see {@link GetPartySelfProfileCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class GetPartySelfProfileCommand extends $Command<GetPartySelfProfileCommandInput, GetPartySelfProfileCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartySelfProfileCommandInput) {
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
  ): Handler<GetPartySelfProfileCommandInput, GetPartySelfProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "GetPartySelfProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetPartySelfProfileInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetPartySelfProfileOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetPartySelfProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPartySelfProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPartySelfProfileCommandOutput> {
    return deserializeAws_restJson1GetPartySelfProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
