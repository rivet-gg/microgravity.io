import { __extends } from "tslib";
import { ListFollowingInput, ListFollowingOutput, } from "../models/models_0";
import { deserializeAws_restJson1ListFollowingCommand, serializeAws_restJson1ListFollowingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ListFollowingCommand = (function (_super) {
    __extends(ListFollowingCommand, _super);
    function ListFollowingCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListFollowingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "ListFollowingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFollowingInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListFollowingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFollowingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFollowingCommand(input, context);
    };
    ListFollowingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFollowingCommand(output, context);
    };
    return ListFollowingCommand;
}($Command));
export { ListFollowingCommand };
