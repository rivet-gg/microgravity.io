// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  GetIdentityHandlesInput,
  GetIdentityHandlesOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIdentityHandlesCommand,
  serializeAws_restJson1GetIdentityHandlesCommand,
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

export interface GetIdentityHandlesCommandInput extends GetIdentityHandlesInput {}
export interface GetIdentityHandlesCommandOutput extends GetIdentityHandlesOutput, __MetadataBearer {}

/**
 * Fetches a list of identity handles.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, GetIdentityHandlesCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, GetIdentityHandlesCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new GetIdentityHandlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityHandlesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityHandlesCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class GetIdentityHandlesCommand extends $Command<GetIdentityHandlesCommandInput, GetIdentityHandlesCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityHandlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentityServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityHandlesCommandInput, GetIdentityHandlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "GetIdentityHandlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetIdentityHandlesInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetIdentityHandlesOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentityHandlesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIdentityHandlesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityHandlesCommandOutput> {
    return deserializeAws_restJson1GetIdentityHandlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
