// smithy-typescript generated code
import {
  PartyServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartyServiceClient";
import {
  RevokePartyInviteInput,
  RevokePartyInviteOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1RevokePartyInviteCommand,
  serializeAws_restJson1RevokePartyInviteCommand,
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

export interface RevokePartyInviteCommandInput extends RevokePartyInviteInput {}
export interface RevokePartyInviteCommandOutput extends RevokePartyInviteOutput, __MetadataBearer {}

/**
 * Revokes a party invite from the current identity's party.
 *
 * Identity must be the party leader.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartyServiceClient, RevokePartyInviteCommand } from "@rivet-gg/party"; // ES Modules import
 * // const { PartyServiceClient, RevokePartyInviteCommand } = require("@rivet-gg/party"); // CommonJS import
 * const client = new PartyServiceClient(config);
 * const command = new RevokePartyInviteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokePartyInviteCommandInput} for command's `input` shape.
 * @see {@link RevokePartyInviteCommandOutput} for command's `response` shape.
 * @see {@link PartyServiceClientResolvedConfig | config} for PartyServiceClient's `config` shape.
 *
 */
export class RevokePartyInviteCommand extends $Command<RevokePartyInviteCommandInput, RevokePartyInviteCommandOutput, PartyServiceClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokePartyInviteCommandInput) {
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
  ): Handler<RevokePartyInviteCommandInput, RevokePartyInviteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PartyServiceClient";
    const commandName = "RevokePartyInviteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        RevokePartyInviteInput.filterSensitiveLog,
      outputFilterSensitiveLog:
        RevokePartyInviteOutput.filterSensitiveLog,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RevokePartyInviteCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokePartyInviteCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokePartyInviteCommandOutput> {
    return deserializeAws_restJson1RevokePartyInviteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
