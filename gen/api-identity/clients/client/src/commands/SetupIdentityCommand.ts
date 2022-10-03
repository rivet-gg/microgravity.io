// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  SetupIdentityInput,
  SetupIdentityOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1SetupIdentityCommand,
  serializeAws_restJson1SetupIdentityCommand,
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

export interface SetupIdentityCommandInput extends SetupIdentityInput {}
export interface SetupIdentityCommandOutput extends SetupIdentityOutput, __MetadataBearer {}

/**
 * Gets or creates an identity.
 *
 * Passing an existing identity token in the body refreshes the token.
 *
 * # Temporary Accounts
 *
 * Until the identity is linked with the Rivet Hub (see
 * `rivet.api.identity#PrepareGameLink`), this identity will be temporary but
 * still behave like all other identities.
 *
 * This is intended to allow users to play the game without signing up while
 * still having the benefits of having an account. When they are ready to save
 * their account, they should be instructed to link their account (see
 * `rivet.api.identity#PrepareGameLink`).
 *
 * # Storing Token
 *
 * `identity_token` should be stored in some form of persistent storage. The
 * token should be read from storage and passed to
 * `rivet.api.identity#SetupIdentity` every time the client starts.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, SetupIdentityCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, SetupIdentityCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new SetupIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetupIdentityCommandInput} for command's `input` shape.
 * @see {@link SetupIdentityCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class SetupIdentityCommand extends $Command<SetupIdentityCommandInput, SetupIdentityCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetupIdentityCommandInput) {
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
  ): Handler<SetupIdentityCommandInput, SetupIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "SetupIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        SetupIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        SetupIdentityOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SetupIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SetupIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetupIdentityCommandOutput> {
    return deserializeAws_restJson1SetupIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
