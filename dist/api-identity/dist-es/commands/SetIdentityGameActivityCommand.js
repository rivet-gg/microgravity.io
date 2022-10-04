import { __extends } from "tslib";
import { SetIdentityGameActivityInput, SetIdentityGameActivityOutput, } from "../models/models_0";
import { deserializeAws_restJson1SetIdentityGameActivityCommand, serializeAws_restJson1SetIdentityGameActivityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SetIdentityGameActivityCommand = (function (_super) {
    __extends(SetIdentityGameActivityCommand, _super);
    function SetIdentityGameActivityCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SetIdentityGameActivityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "SetIdentityGameActivityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetIdentityGameActivityInput.filterSensitiveLog,
            outputFilterSensitiveLog: SetIdentityGameActivityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetIdentityGameActivityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetIdentityGameActivityCommand(input, context);
    };
    SetIdentityGameActivityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetIdentityGameActivityCommand(output, context);
    };
    return SetIdentityGameActivityCommand;
}($Command));
export { SetIdentityGameActivityCommand };
