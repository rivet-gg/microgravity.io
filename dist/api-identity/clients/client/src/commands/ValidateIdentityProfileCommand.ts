// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  ValidateIdentityProfileInput,
  ValidateIdentityProfileOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1ValidateIdentityProfileCommand,
  serializeAws_restJson1ValidateIdentityProfileCommand,
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

export interface ValidateIdentityProfileCommandInput extends ValidateIdentityProfileInput {}
export interface ValidateIdentityProfileCommandOutput extends ValidateIdentityProfileOutput, __MetadataBearer {}

/**
 * Validate contents of identity profile.
 *
 * Use to provide immediate feedback on profile changes before committing them.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, ValidateIdentityProfileCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, ValidateIdentityProfileCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new ValidateIdentityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateIdentityProfileCommandInput} for command's `input` shape.
 * @see {@link ValidateIdentityProfileCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class ValidateIdentityProfileCommand extends $Command<ValidateIdentityProfileCommandInput, ValidateIdentityProfileCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateIdentityProfileCommandInput) {
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
  ): Handler<ValidateIdentityProfileCommandInput, ValidateIdentityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "ValidateIdentityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        ValidateIdentityProfileInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        ValidateIdentityProfileOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ValidateIdentityProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateIdentityProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateIdentityProfileCommandOutput> {
    return deserializeAws_restJson1ValidateIdentityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
