import { __extends } from "tslib";
import { ListLobbiesInput, ListLobbiesOutput, } from "../models/models_0";
import { deserializeAws_restJson1ListLobbiesCommand, serializeAws_restJson1ListLobbiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ListLobbiesCommand = (function (_super) {
    __extends(ListLobbiesCommand, _super);
    function ListLobbiesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ListLobbiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "ListLobbiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLobbiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListLobbiesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLobbiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLobbiesCommand(input, context);
    };
    ListLobbiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLobbiesCommand(output, context);
    };
    return ListLobbiesCommand;
}($Command));
export { ListLobbiesCommand };
