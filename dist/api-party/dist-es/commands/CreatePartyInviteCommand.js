import { __extends } from "tslib";
import { CreatePartyInviteInput, CreatePartyInviteOutput, } from "../models/models_0";
import { deserializeAws_restJson1CreatePartyInviteCommand, serializeAws_restJson1CreatePartyInviteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var CreatePartyInviteCommand = (function (_super) {
    __extends(CreatePartyInviteCommand, _super);
    function CreatePartyInviteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreatePartyInviteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "CreatePartyInviteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePartyInviteInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePartyInviteOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePartyInviteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePartyInviteCommand(input, context);
    };
    CreatePartyInviteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePartyInviteCommand(output, context);
    };
    return CreatePartyInviteCommand;
}($Command));
export { CreatePartyInviteCommand };
