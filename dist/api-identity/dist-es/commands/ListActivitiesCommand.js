import { __extends } from "tslib";
import { ListActivitiesInput, ListActivitiesOutput, } from "../models/models_0";
import { deserializeAws_restJson1ListActivitiesCommand, serializeAws_restJson1ListActivitiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ListActivitiesCommand = (function (_super) {
    __extends(ListActivitiesCommand, _super);
    function ListActivitiesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListActivitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "ListActivitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListActivitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListActivitiesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListActivitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListActivitiesCommand(input, context);
    };
    ListActivitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListActivitiesCommand(output, context);
    };
    return ListActivitiesCommand;
}($Command));
export { ListActivitiesCommand };
