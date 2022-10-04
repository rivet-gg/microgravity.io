// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  RemoveIdentityGameActivityInput,
  RemoveIdentityGameActivityOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveIdentityGameActivityCommand,
  serializeAws_restJson1RemoveIdentityGameActivityCommand,
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

export interface RemoveIdentityGameActivityCommandInput extends RemoveIdentityGameActivityInput {}
export interface RemoveIdentityGameActivityCommandOutput extends RemoveIdentityGameActivityOutput, __MetadataBearer {}

/**
 * Removes the current identity's game activity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, RemoveIdentityGameActivityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, RemoveIdentityGameActivityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new RemoveIdentityGameActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveIdentityGameActivityCommandInput} for command's `input` shape.
 * @see {@link RemoveIdentityGameActivityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class RemoveIdentityGameActivityCommand extends $Command<RemoveIdentityGameActivityCommandInput, RemoveIdentityGameActivityCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveIdentityGameActivityCommandInput) {
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
  ): Handler<RemoveIdentityGameActivityCommandInput, RemoveIdentityGameActivityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "RemoveIdentityGameActivityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        RemoveIdentityGameActivityInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        RemoveIdentityGameActivityOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveIdentityGameActivityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveIdentityGameActivityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveIdentityGameActivityCommandOutput> {
    return deserializeAws_restJson1RemoveIdentityGameActivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
