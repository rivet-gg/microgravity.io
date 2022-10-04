import { __extends } from "tslib";
import { ListRegionsInput, ListRegionsOutput, } from "../models/models_0";
import { deserializeAws_restJson1ListRegionsCommand, serializeAws_restJson1ListRegionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ListRegionsCommand = (function (_super) {
    __extends(ListRegionsCommand, _super);
    function ListRegionsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListRegionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "ListRegionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRegionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListRegionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRegionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRegionsCommand(input, context);
    };
    ListRegionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRegionsCommand(output, context);
    };
    return ListRegionsCommand;
}($Command));
export { ListRegionsCommand };
