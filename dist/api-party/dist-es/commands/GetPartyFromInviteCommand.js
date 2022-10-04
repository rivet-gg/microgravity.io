import { __extends } from "tslib";
import { GetPartyFromInviteInput, GetPartyFromInviteOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetPartyFromInviteCommand, serializeAws_restJson1GetPartyFromInviteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetPartyFromInviteCommand = (function (_super) {
    __extends(GetPartyFromInviteCommand, _super);
    function GetPartyFromInviteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPartyFromInviteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "GetPartyFromInviteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartyFromInviteInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartyFromInviteOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartyFromInviteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPartyFromInviteCommand(input, context);
    };
    GetPartyFromInviteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPartyFromInviteCommand(output, context);
    };
    return GetPartyFromInviteCommand;
}($Command));
export { GetPartyFromInviteCommand };
