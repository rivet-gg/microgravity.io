// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  CompleteGameLinkInput,
  CompleteGameLinkOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1CompleteGameLinkCommand,
  serializeAws_restJson1CompleteGameLinkCommand,
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

export interface CompleteGameLinkCommandInput extends CompleteGameLinkInput {}
export interface CompleteGameLinkCommandOutput extends CompleteGameLinkOutput, __MetadataBearer {}

/**
 * Completes a game link process and returns whether or not the link is valid.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, CompleteGameLinkCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, CompleteGameLinkCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new CompleteGameLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteGameLinkCommandInput} for command's `input` shape.
 * @see {@link CompleteGameLinkCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class CompleteGameLinkCommand extends $Command<CompleteGameLinkCommandInput, CompleteGameLinkCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteGameLinkCommandInput) {
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
  ): Handler<CompleteGameLinkCommandInput, CompleteGameLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "CompleteGameLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        CompleteGameLinkInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        CompleteGameLinkOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CompleteGameLinkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CompleteGameLinkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CompleteGameLinkCommandOutput> {
    return deserializeAws_restJson1CompleteGameLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
