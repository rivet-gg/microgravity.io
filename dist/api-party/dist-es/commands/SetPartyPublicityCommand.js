import { __extends } from "tslib";
import { SetPartyPublicityInput, SetPartyPublicityOutput, } from "../models/models_0";
import { deserializeAws_restJson1SetPartyPublicityCommand, serializeAws_restJson1SetPartyPublicityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SetPartyPublicityCommand = (function (_super) {
    __extends(SetPartyPublicityCommand, _super);
    function SetPartyPublicityCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SetPartyPublicityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "SetPartyPublicityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetPartyPublicityInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetPartyPublicityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetPartyPublicityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetPartyPublicityCommand(input, context);
    };
    SetPartyPublicityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetPartyPublicityCommand(output, context);
    };
    return SetPartyPublicityCommand;
}($Command));
export { SetPartyPublicityCommand };
