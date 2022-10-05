// smithy-typescript generated code
import {
  IdentityServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IdentityServiceClient";
import {
  GetIdentitySelfProfileInput,
  GetIdentitySelfProfileOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIdentitySelfProfileCommand,
  serializeAws_restJson1GetIdentitySelfProfileCommand,
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

export interface GetIdentitySelfProfileCommandInput extends GetIdentitySelfProfileInput {}
export interface GetIdentitySelfProfileCommandOutput extends GetIdentitySelfProfileOutput, __MetadataBearer {}

/**
 * Fetches the current identity's profile.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentityServiceClient, GetIdentitySelfProfileCommand } from "@rivet-gg/identity"; // ES Modules import
 * // const { IdentityServiceClient, GetIdentitySelfProfileCommand } = require("@rivet-gg/identity"); // CommonJS import
 * const client = new IdentityServiceClient(config);
 * const command = new GetIdentitySelfProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentitySelfProfileCommandInput} for command's `input` shape.
 * @see {@link GetIdentitySelfProfileCommandOutput} for command's `response` shape.
 * @see {@link IdentityServiceClientResolvedConfig | config} for IdentityServiceClient's `config` shape.
 *
 */
export class GetIdentitySelfProfileCommand extends $Command<GetIdentitySelfProfileCommandInput, GetIdentitySelfProfileCommandOutput, IdentityServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentitySelfProfileCommandInput) {
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
  ): Handler<GetIdentitySelfProfileCommandInput, GetIdentitySelfProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentityServiceClient";
    const commandName = "GetIdentitySelfProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetIdentitySelfProfileInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetIdentitySelfProfileOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentitySelfProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIdentitySelfProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentitySelfProfileCommandOutput> {
    return deserializeAws_restJson1GetIdentitySelfProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
