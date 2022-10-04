import { __extends } from "tslib";
import { LobbyReadyInput, LobbyReadyOutput, } from "../models/models_0";
import { deserializeAws_restJson1LobbyReadyCommand, serializeAws_restJson1LobbyReadyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var LobbyReadyCommand = (function (_super) {
    __extends(LobbyReadyCommand, _super);
    function LobbyReadyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    LobbyReadyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "LobbyReadyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LobbyReadyInput.filterSensitiveLog,
            outputFilterSensitiveLog: LobbyReadyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LobbyReadyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1LobbyReadyCommand(input, context);
    };
    LobbyReadyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1LobbyReadyCommand(output, context);
    };
    return LobbyReadyCommand;
}($Command));
export { LobbyReadyCommand };
