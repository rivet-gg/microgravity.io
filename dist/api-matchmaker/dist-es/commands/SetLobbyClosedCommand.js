import { __extends } from "tslib";
import { SetLobbyClosedInput, SetLobbyClosedOutput, } from "../models/models_0";
import { deserializeAws_restJson1SetLobbyClosedCommand, serializeAws_restJson1SetLobbyClosedCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SetLobbyClosedCommand = (function (_super) {
    __extends(SetLobbyClosedCommand, _super);
    function SetLobbyClosedCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SetLobbyClosedCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "SetLobbyClosedCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetLobbyClosedInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetLobbyClosedOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetLobbyClosedCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetLobbyClosedCommand(input, context);
    };
    SetLobbyClosedCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetLobbyClosedCommand(output, context);
    };
    return SetLobbyClosedCommand;
}($Command));
export { SetLobbyClosedCommand };
