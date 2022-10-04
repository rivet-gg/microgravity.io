import { __extends } from "tslib";
import { SendJoinRequestInput, SendJoinRequestOutput, } from "../models/models_0";
import { deserializeAws_restJson1SendJoinRequestCommand, serializeAws_restJson1SendJoinRequestCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SendJoinRequestCommand = (function (_super) {
    __extends(SendJoinRequestCommand, _super);
    function SendJoinRequestCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SendJoinRequestCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "SendJoinRequestCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendJoinRequestInput.filterSensitiveLog,
            outputFilterSensitiveLog: SendJoinRequestOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendJoinRequestCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendJoinRequestCommand(input, context);
    };
    SendJoinRequestCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendJoinRequestCommand(output, context);
    };
    return SendJoinRequestCommand;
}($Command));
export { SendJoinRequestCommand };
