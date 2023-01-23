// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  RecentFollowerIgnoreInput,
  RecentFollowerIgnoreOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1RecentFollowerIgnoreCommand,
  serializeAws_restJson1RecentFollowerIgnoreCommand,
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

export interface RecentFollowerIgnoreCommandInput extends RecentFollowerIgnoreInput {}
export interface RecentFollowerIgnoreCommandOutput extends RecentFollowerIgnoreOutput, __MetadataBearer {}

/**
 * Ignores a recent follower, removing them from your recent followers list.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, RecentFollowerIgnoreCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, RecentFollowerIgnoreCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new RecentFollowerIgnoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecentFollowerIgnoreCommandInput} for command's `input` shape.
 * @see {@link RecentFollowerIgnoreCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class RecentFollowerIgnoreCommand extends $Command<RecentFollowerIgnoreCommandInput, RecentFollowerIgnoreCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecentFollowerIgnoreCommandInput) {
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
  ): Handler<RecentFollowerIgnoreCommandInput, RecentFollowerIgnoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "RecentFollowerIgnoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        RecentFollowerIgnoreInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        RecentFollowerIgnoreOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RecentFollowerIgnoreCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RecentFollowerIgnoreCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RecentFollowerIgnoreCommandOutput> {
    return deserializeAws_restJson1RecentFollowerIgnoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
