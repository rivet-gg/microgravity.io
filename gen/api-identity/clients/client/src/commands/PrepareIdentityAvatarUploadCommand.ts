// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  PrepareIdentityAvatarUploadInput,
  PrepareIdentityAvatarUploadOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1PrepareIdentityAvatarUploadCommand,
  serializeAws_restJson1PrepareIdentityAvatarUploadCommand,
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

export interface PrepareIdentityAvatarUploadCommandInput extends PrepareIdentityAvatarUploadInput {}
export interface PrepareIdentityAvatarUploadCommandOutput extends PrepareIdentityAvatarUploadOutput, __MetadataBearer {}

/**
 * Prepares an avatar image upload.
 *
 * Complete upload with `rivet.api.identity#CompleteIdentityAvatarUpload`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, PrepareIdentityAvatarUploadCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, PrepareIdentityAvatarUploadCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new PrepareIdentityAvatarUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PrepareIdentityAvatarUploadCommandInput} for command's `input` shape.
 * @see {@link PrepareIdentityAvatarUploadCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class PrepareIdentityAvatarUploadCommand extends $Command<PrepareIdentityAvatarUploadCommandInput, PrepareIdentityAvatarUploadCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PrepareIdentityAvatarUploadCommandInput) {
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
  ): Handler<PrepareIdentityAvatarUploadCommandInput, PrepareIdentityAvatarUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "PrepareIdentityAvatarUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        PrepareIdentityAvatarUploadInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        PrepareIdentityAvatarUploadOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PrepareIdentityAvatarUploadCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PrepareIdentityAvatarUploadCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PrepareIdentityAvatarUploadCommandOutput> {
    return deserializeAws_restJson1PrepareIdentityAvatarUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
