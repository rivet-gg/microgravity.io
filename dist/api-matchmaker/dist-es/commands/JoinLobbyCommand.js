import { __extends } from "tslib";
import { JoinLobbyInput, JoinLobbyOutput, } from "../models/models_0";
import { deserializeAws_restJson1JoinLobbyCommand, serializeAws_restJson1JoinLobbyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var JoinLobbyCommand = (function (_super) {
    __extends(JoinLobbyCommand, _super);
    function JoinLobbyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    JoinLobbyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "JoinLobbyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: JoinLobbyInput.filterSensitiveLog,
            outputFilterSensitiveLog: JoinLobbyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    JoinLobbyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1JoinLobbyCommand(input, context);
    };
    JoinLobbyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1JoinLobbyCommand(output, context);
    };
    return JoinLobbyCommand;
}($Command));
export { JoinLobbyCommand };
