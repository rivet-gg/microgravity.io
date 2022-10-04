import { __extends } from "tslib";
import { JoinMatchmakerLobbyForPartyInput, JoinMatchmakerLobbyForPartyOutput, } from "../models/models_0";
import { deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommand, serializeAws_restJson1JoinMatchmakerLobbyForPartyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var JoinMatchmakerLobbyForPartyCommand = (function (_super) {
    __extends(JoinMatchmakerLobbyForPartyCommand, _super);
    function JoinMatchmakerLobbyForPartyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    JoinMatchmakerLobbyForPartyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "JoinMatchmakerLobbyForPartyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: JoinMatchmakerLobbyForPartyInput.filterSensitiveLog,
            outputFilterSensitiveLog: JoinMatchmakerLobbyForPartyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    JoinMatchmakerLobbyForPartyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1JoinMatchmakerLobbyForPartyCommand(input, context);
    };
    JoinMatchmakerLobbyForPartyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommand(output, context);
    };
    return JoinMatchmakerLobbyForPartyCommand;
}($Command));
export { JoinMatchmakerLobbyForPartyCommand };
