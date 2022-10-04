// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  GetGameLinkInput,
  GetGameLinkOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGameLinkCommand,
  serializeAws_restJson1GetGameLinkCommand,
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

export interface GetGameLinkCommandInput extends GetGameLinkInput {}
export interface GetGameLinkCommandOutput extends GetGameLinkOutput, __MetadataBearer {}

/**
 * Returns the current status of a linking process.
 *
 * Once `status` is `complete`, the identity's profile should be fetched again
 * since they may have switched accounts.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, GetGameLinkCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, GetGameLinkCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new GetGameLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGameLinkCommandInput} for command's `input` shape.
 * @see {@link GetGameLinkCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class GetGameLinkCommand extends $Command<GetGameLinkCommandInput, GetGameLinkCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGameLinkCommandInput) {
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
  ): Handler<GetGameLinkCommandInput, GetGameLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "GetGameLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetGameLinkInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetGameLinkOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetGameLinkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGameLinkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetGameLinkCommandOutput> {
    return deserializeAws_restJson1GetGameLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
