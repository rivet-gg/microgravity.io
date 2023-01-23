// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  UnmarkDeletionInput,
  UnmarkDeletionOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1UnmarkDeletionCommand,
  serializeAws_restJson1UnmarkDeletionCommand,
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

export interface UnmarkDeletionCommandInput extends UnmarkDeletionInput {}
export interface UnmarkDeletionCommandOutput extends UnmarkDeletionOutput, __MetadataBearer {}

/**
 * Unmarks this identity from deletion.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, UnmarkDeletionCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, UnmarkDeletionCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new UnmarkDeletionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnmarkDeletionCommandInput} for command's `input` shape.
 * @see {@link UnmarkDeletionCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class UnmarkDeletionCommand extends $Command<UnmarkDeletionCommandInput, UnmarkDeletionCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnmarkDeletionCommandInput) {
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
  ): Handler<UnmarkDeletionCommandInput, UnmarkDeletionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "UnmarkDeletionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        UnmarkDeletionInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        UnmarkDeletionOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UnmarkDeletionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UnmarkDeletionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UnmarkDeletionCommandOutput> {
    return deserializeAws_restJson1UnmarkDeletionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
