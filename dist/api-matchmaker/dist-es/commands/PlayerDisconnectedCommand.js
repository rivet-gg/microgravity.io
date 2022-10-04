import { __extends } from "tslib";
import { PlayerDisconnectedInput, PlayerDisconnectedOutput, } from "../models/models_0";
import { deserializeAws_restJson1PlayerDisconnectedCommand, serializeAws_restJson1PlayerDisconnectedCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var PlayerDisconnectedCommand = (function (_super) {
    __extends(PlayerDisconnectedCommand, _super);
    function PlayerDisconnectedCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PlayerDisconnectedCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "PlayerDisconnectedCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PlayerDisconnectedInput.filterSensitiveLog,
            outputFilterSensitiveLog: PlayerDisconnectedOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PlayerDisconnectedCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PlayerDisconnectedCommand(input, context);
    };
    PlayerDisconnectedCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PlayerDisconnectedCommand(output, context);
    };
    return PlayerDisconnectedCommand;
}($Command));
export { PlayerDisconnectedCommand };
