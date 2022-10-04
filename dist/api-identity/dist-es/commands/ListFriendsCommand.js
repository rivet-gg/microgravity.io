import { __extends } from "tslib";
import { ListFriendsInput, ListFriendsOutput, } from "../models/models_0";
import { deserializeAws_restJson1ListFriendsCommand, serializeAws_restJson1ListFriendsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ListFriendsCommand = (function (_super) {
    __extends(ListFriendsCommand, _super);
    function ListFriendsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListFriendsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "ListFriendsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFriendsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListFriendsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFriendsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFriendsCommand(input, context);
    };
    ListFriendsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFriendsCommand(output, context);
    };
    return ListFriendsCommand;
}($Command));
export { ListFriendsCommand };
