// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  SignupForBetaInput,
  SignupForBetaOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1SignupForBetaCommand,
  serializeAws_restJson1SignupForBetaCommand,
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

export interface SignupForBetaCommandInput extends SignupForBetaInput {}
export interface SignupForBetaCommandOutput extends SignupForBetaOutput, __MetadataBearer {}

/**
 * Submits a beta signup form.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, SignupForBetaCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, SignupForBetaCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new SignupForBetaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignupForBetaCommandInput} for command's `input` shape.
 * @see {@link SignupForBetaCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class SignupForBetaCommand extends $Command<SignupForBetaCommandInput, SignupForBetaCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SignupForBetaCommandInput) {
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
  ): Handler<SignupForBetaCommandInput, SignupForBetaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "SignupForBetaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        SignupForBetaInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        SignupForBetaOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SignupForBetaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SignupForBetaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SignupForBetaCommandOutput> {
    return deserializeAws_restJson1SignupForBetaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
