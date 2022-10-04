import { __extends } from "tslib";
import { FindMatchmakerLobbyForPartyInput, FindMatchmakerLobbyForPartyOutput, } from "../models/models_0";
import { deserializeAws_restJson1FindMatchmakerLobbyForPartyCommand, serializeAws_restJson1FindMatchmakerLobbyForPartyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var FindMatchmakerLobbyForPartyCommand = (function (_super) {
    __extends(FindMatchmakerLobbyForPartyCommand, _super);
    function FindMatchmakerLobbyForPartyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    FindMatchmakerLobbyForPartyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "FindMatchmakerLobbyForPartyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FindMatchmakerLobbyForPartyInput.filterSensitiveLog,
            outputFilterSensitiveLog: FindMatchmakerLobbyForPartyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FindMatchmakerLobbyForPartyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1FindMatchmakerLobbyForPartyCommand(input, context);
    };
    FindMatchmakerLobbyForPartyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1FindMatchmakerLobbyForPartyCommand(output, context);
    };
    return FindMatchmakerLobbyForPartyCommand;
}($Command));
export { FindMatchmakerLobbyForPartyCommand };
