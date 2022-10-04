import { __extends } from "tslib";
import { LeavePartyInput, LeavePartyOutput, } from "../models/models_0";
import { deserializeAws_restJson1LeavePartyCommand, serializeAws_restJson1LeavePartyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var LeavePartyCommand = (function (_super) {
    __extends(LeavePartyCommand, _super);
    function LeavePartyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    LeavePartyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "LeavePartyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LeavePartyInput.filterSensitiveLog,
            outputFilterSensitiveLog: LeavePartyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LeavePartyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1LeavePartyCommand(input, context);
    };
    LeavePartyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1LeavePartyCommand(output, context);
    };
    return LeavePartyCommand;
}($Command));
export { LeavePartyCommand };
