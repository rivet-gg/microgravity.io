// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  GetPartyFromInviteInput,
  GetPartyFromInviteOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPartyFromInviteCommand,
  serializeAws_restJson1GetPartyFromInviteCommand,
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

export interface GetPartyFromInviteCommandInput extends GetPartyFromInviteInput {}
export interface GetPartyFromInviteCommandOutput extends GetPartyFromInviteOutput, __MetadataBearer {}

/**
 * Fetches a party based on a given invite.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, GetPartyFromInviteCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, GetPartyFromInviteCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new GetPartyFromInviteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartyFromInviteCommandInput} for command's `input` shape.
 * @see {@link GetPartyFromInviteCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class GetPartyFromInviteCommand extends $Command<GetPartyFromInviteCommandInput, GetPartyFromInviteCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartyFromInviteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PartyServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPartyFromInviteCommandInput, GetPartyFromInviteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "GetPartyFromInviteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        GetPartyFromInviteInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        GetPartyFromInviteOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetPartyFromInviteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPartyFromInviteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPartyFromInviteCommandOutput> {
    return deserializeAws_restJson1GetPartyFromInviteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
