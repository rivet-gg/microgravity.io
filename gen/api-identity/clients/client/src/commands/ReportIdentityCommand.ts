// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  ReportIdentityInput,
  ReportIdentityOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1ReportIdentityCommand,
  serializeAws_restJson1ReportIdentityCommand,
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

export interface ReportIdentityCommandInput extends ReportIdentityInput {}
export interface ReportIdentityCommandOutput extends ReportIdentityOutput, __MetadataBearer {}

/**
 * Creates an abuse report for an identity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, ReportIdentityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, ReportIdentityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new ReportIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReportIdentityCommandInput} for command's `input` shape.
 * @see {@link ReportIdentityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class ReportIdentityCommand extends $Command<ReportIdentityCommandInput, ReportIdentityCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReportIdentityCommandInput) {
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
  ): Handler<ReportIdentityCommandInput, ReportIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "ReportIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        ReportIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        ReportIdentityOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ReportIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ReportIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReportIdentityCommandOutput> {
    return deserializeAws_restJson1ReportIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
