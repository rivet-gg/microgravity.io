// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  PrepareGameLinkInput,
  PrepareGameLinkOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1PrepareGameLinkCommand,
  serializeAws_restJson1PrepareGameLinkCommand,
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

export interface PrepareGameLinkCommandInput extends PrepareGameLinkInput {}
export interface PrepareGameLinkCommandOutput extends PrepareGameLinkOutput, __MetadataBearer {}

/**
 * Begins the process for linking an identity with the Rivet Hub.
 *
 * # Importance of Linking Identities
 *
 * When an identity is created via `rivet.api.identity#SetupIdentity`, the identity is temporary
 * and is not shared with other games the user plays.
 *
 * In order to make the identity permanent and synchronize the identity with
 * other games, the identity must be linked with the hub.
 *
 * # Linking Process
 *
 * The linking process works by opening `identity_link_url` in a browser then polling
 * `rivet.api.identity#GetGameLink` to wait for it to complete.
 *
 * This is designed to be as flexible as possible so `identity_link_url` can be opened
 * on any device. For example, when playing a console game, the user can scan a
 * QR code for `identity_link_url` to authenticate on their phone.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, PrepareGameLinkCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, PrepareGameLinkCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new PrepareGameLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PrepareGameLinkCommandInput} for command's `input` shape.
 * @see {@link PrepareGameLinkCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class PrepareGameLinkCommand extends $Command<PrepareGameLinkCommandInput, PrepareGameLinkCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PrepareGameLinkCommandInput) {
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
  ): Handler<PrepareGameLinkCommandInput, PrepareGameLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "PrepareGameLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        PrepareGameLinkInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        PrepareGameLinkOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PrepareGameLinkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PrepareGameLinkCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PrepareGameLinkCommandOutput> {
    return deserializeAws_restJson1PrepareGameLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
