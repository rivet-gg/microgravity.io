// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  MarkDeletionInput,
  MarkDeletionOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1MarkDeletionCommand,
  serializeAws_restJson1MarkDeletionCommand,
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

export interface MarkDeletionCommandInput extends MarkDeletionInput {}
export interface MarkDeletionCommandOutput extends MarkDeletionOutput, __MetadataBearer {}

/**
 * Marks this identity for deletion.
 *
 * After 30 days the identity and all of it's content will be deleted, including chat messages and
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, MarkDeletionCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, MarkDeletionCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new MarkDeletionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MarkDeletionCommandInput} for command's `input` shape.
 * @see {@link MarkDeletionCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class MarkDeletionCommand extends $Command<MarkDeletionCommandInput, MarkDeletionCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MarkDeletionCommandInput) {
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
  ): Handler<MarkDeletionCommandInput, MarkDeletionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "MarkDeletionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        MarkDeletionInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        MarkDeletionOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: MarkDeletionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1MarkDeletionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MarkDeletionCommandOutput> {
    return deserializeAws_restJson1MarkDeletionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
