import { __extends } from "tslib";
import { FindLobbyInput, FindLobbyOutput, } from "../models/models_0";
import { deserializeAws_restJson1FindLobbyCommand, serializeAws_restJson1FindLobbyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var FindLobbyCommand = (function (_super) {
    __extends(FindLobbyCommand, _super);
    function FindLobbyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    FindLobbyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "FindLobbyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FindLobbyInput.filterSensitiveLog,
            outputFilterSensitiveLog: FindLobbyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FindLobbyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1FindLobbyCommand(input, context);
    };
    FindLobbyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1FindLobbyCommand(output, context);
    };
    return FindLobbyCommand;
}($Command));
export { FindLobbyCommand };
