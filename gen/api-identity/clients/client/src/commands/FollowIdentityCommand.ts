// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  FollowIdentityInput,
  FollowIdentityOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1FollowIdentityCommand,
  serializeAws_restJson1FollowIdentityCommand,
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

export interface FollowIdentityCommandInput extends FollowIdentityInput {}
export interface FollowIdentityCommandOutput extends FollowIdentityOutput, __MetadataBearer {}

/**
 * Follows the given identity.
 *
 * In order for identities to be friends, the other identity has to also follow
 * this identity.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, FollowIdentityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, FollowIdentityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new FollowIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FollowIdentityCommandInput} for command's `input` shape.
 * @see {@link FollowIdentityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class FollowIdentityCommand extends $Command<FollowIdentityCommandInput, FollowIdentityCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FollowIdentityCommandInput) {
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
  ): Handler<FollowIdentityCommandInput, FollowIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "FollowIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        FollowIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        FollowIdentityOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: FollowIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1FollowIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FollowIdentityCommandOutput> {
    return deserializeAws_restJson1FollowIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
