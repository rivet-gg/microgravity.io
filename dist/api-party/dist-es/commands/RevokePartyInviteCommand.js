import { __extends } from "tslib";
import { RevokePartyInviteInput, RevokePartyInviteOutput, } from "../models/models_0";
import { deserializeAws_restJson1RevokePartyInviteCommand, serializeAws_restJson1RevokePartyInviteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var RevokePartyInviteCommand = (function (_super) {
    __extends(RevokePartyInviteCommand, _super);
    function RevokePartyInviteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RevokePartyInviteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "RevokePartyInviteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokePartyInviteInput.filterSensitiveLog,
            outputFilterSensitiveLog: RevokePartyInviteOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokePartyInviteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RevokePartyInviteCommand(input, context);
    };
    RevokePartyInviteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RevokePartyInviteCommand(output, context);
    };
    return RevokePartyInviteCommand;
}($Command));
export { RevokePartyInviteCommand };
