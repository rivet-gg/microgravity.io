import { __extends } from "tslib";
import { PlayerConnectedInput, PlayerConnectedOutput, } from "../models/models_0";
import { deserializeAws_restJson1PlayerConnectedCommand, serializeAws_restJson1PlayerConnectedCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var PlayerConnectedCommand = (function (_super) {
    __extends(PlayerConnectedCommand, _super);
    function PlayerConnectedCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PlayerConnectedCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MatchmakerServiceClient";
        var commandName = "PlayerConnectedCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PlayerConnectedInput.filterSensitiveLog,
            outputFilterSensitiveLog: PlayerConnectedOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PlayerConnectedCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PlayerConnectedCommand(input, context);
    };
    PlayerConnectedCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PlayerConnectedCommand(output, context);
    };
    return PlayerConnectedCommand;
}($Command));
export { PlayerConnectedCommand };
