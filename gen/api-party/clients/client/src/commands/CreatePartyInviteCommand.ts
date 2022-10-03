// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  CreatePartyInviteInput,
  CreatePartyInviteOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePartyInviteCommand,
  serializeAws_restJson1CreatePartyInviteCommand,
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

export interface CreatePartyInviteCommandInput extends CreatePartyInviteInput {}
export interface CreatePartyInviteCommandOutput extends CreatePartyInviteOutput, __MetadataBearer {}

/**
 * Creates a new party invite for the current identity's party.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, CreatePartyInviteCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, CreatePartyInviteCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new CreatePartyInviteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartyInviteCommandInput} for command's `input` shape.
 * @see {@link CreatePartyInviteCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class CreatePartyInviteCommand extends $Command<CreatePartyInviteCommandInput, CreatePartyInviteCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePartyInviteCommandInput) {
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
  ): Handler<CreatePartyInviteCommandInput, CreatePartyInviteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "CreatePartyInviteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        CreatePartyInviteInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        CreatePartyInviteOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreatePartyInviteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePartyInviteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePartyInviteCommandOutput> {
    return deserializeAws_restJson1CreatePartyInviteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
