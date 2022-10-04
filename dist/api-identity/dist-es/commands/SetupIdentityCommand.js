import { __extends } from "tslib";
import { SetupIdentityInput, SetupIdentityOutput, } from "../models/models_0";
import { deserializeAws_restJson1SetupIdentityCommand, serializeAws_restJson1SetupIdentityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SetupIdentityCommand = (function (_super) {
    __extends(SetupIdentityCommand, _super);
    function SetupIdentityCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SetupIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "SetupIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetupIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetupIdentityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetupIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetupIdentityCommand(input, context);
    };
    SetupIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetupIdentityCommand(output, context);
    };
    return SetupIdentityCommand;
}($Command));
export { SetupIdentityCommand };
