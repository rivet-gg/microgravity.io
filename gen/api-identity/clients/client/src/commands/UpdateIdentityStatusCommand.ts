// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  UpdateIdentityStatusInput,
  UpdateIdentityStatusOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateIdentityStatusCommand,
  serializeAws_restJson1UpdateIdentityStatusCommand,
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

export interface UpdateIdentityStatusCommandInput extends UpdateIdentityStatusInput {}
export interface UpdateIdentityStatusCommandOutput extends UpdateIdentityStatusOutput, __MetadataBearer {}

/**
 * Updates the current identity's status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, UpdateIdentityStatusCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, UpdateIdentityStatusCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new UpdateIdentityStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityStatusCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class UpdateIdentityStatusCommand extends $Command<UpdateIdentityStatusCommandInput, UpdateIdentityStatusCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateIdentityStatusCommandInput) {
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
  ): Handler<UpdateIdentityStatusCommandInput, UpdateIdentityStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "UpdateIdentityStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        UpdateIdentityStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        UpdateIdentityStatusOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateIdentityStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateIdentityStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIdentityStatusCommandOutput> {
    return deserializeAws_restJson1UpdateIdentityStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
