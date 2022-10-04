import { __extends } from "tslib";
import { RequestMatchmakerPlayerInput, RequestMatchmakerPlayerOutput, } from "../models/models_0";
import { deserializeAws_restJson1RequestMatchmakerPlayerCommand, serializeAws_restJson1RequestMatchmakerPlayerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var RequestMatchmakerPlayerCommand = (function (_super) {
    __extends(RequestMatchmakerPlayerCommand, _super);
    function RequestMatchmakerPlayerCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RequestMatchmakerPlayerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "RequestMatchmakerPlayerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RequestMatchmakerPlayerInput.filterSensitiveLog,
            outputFilterSensitiveLog: RequestMatchmakerPlayerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RequestMatchmakerPlayerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RequestMatchmakerPlayerCommand(input, context);
    };
    RequestMatchmakerPlayerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RequestMatchmakerPlayerCommand(output, context);
    };
    return RequestMatchmakerPlayerCommand;
}($Command));
export { RequestMatchmakerPlayerCommand };
