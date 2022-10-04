import { __extends } from "tslib";
import { SetPartyToIdleInput, SetPartyToIdleOutput, } from "../models/models_0";
import { deserializeAws_restJson1SetPartyToIdleCommand, serializeAws_restJson1SetPartyToIdleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SetPartyToIdleCommand = (function (_super) {
    __extends(SetPartyToIdleCommand, _super);
    function SetPartyToIdleCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SetPartyToIdleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "SetPartyToIdleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetPartyToIdleInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetPartyToIdleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetPartyToIdleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetPartyToIdleCommand(input, context);
    };
    SetPartyToIdleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetPartyToIdleCommand(output, context);
    };
    return SetPartyToIdleCommand;
}($Command));
export { SetPartyToIdleCommand };
