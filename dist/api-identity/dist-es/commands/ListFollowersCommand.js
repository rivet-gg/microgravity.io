import { __extends } from "tslib";
import { ListFollowersInput, ListFollowersOutput, } from "../models/models_0";
import { deserializeAws_restJson1ListFollowersCommand, serializeAws_restJson1ListFollowersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ListFollowersCommand = (function (_super) {
    __extends(ListFollowersCommand, _super);
    function ListFollowersCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListFollowersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "ListFollowersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFollowersInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListFollowersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFollowersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFollowersCommand(input, context);
    };
    ListFollowersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFollowersCommand(output, context);
    };
    return ListFollowersCommand;
}($Command));
export { ListFollowersCommand };
