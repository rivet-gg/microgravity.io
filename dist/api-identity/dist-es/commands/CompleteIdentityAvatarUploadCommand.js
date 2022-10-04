import { __extends } from "tslib";
import { CompleteIdentityAvatarUploadInput, CompleteIdentityAvatarUploadOutput, } from "../models/models_0";
import { deserializeAws_restJson1CompleteIdentityAvatarUploadCommand, serializeAws_restJson1CompleteIdentityAvatarUploadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var CompleteIdentityAvatarUploadCommand = (function (_super) {
    __extends(CompleteIdentityAvatarUploadCommand, _super);
    function CompleteIdentityAvatarUploadCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CompleteIdentityAvatarUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "CompleteIdentityAvatarUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CompleteIdentityAvatarUploadInput.filterSensitiveLog,
            outputFilterSensitiveLog: CompleteIdentityAvatarUploadOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CompleteIdentityAvatarUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CompleteIdentityAvatarUploadCommand(input, context);
    };
    CompleteIdentityAvatarUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CompleteIdentityAvatarUploadCommand(output, context);
    };
    return CompleteIdentityAvatarUploadCommand;
}($Command));
export { CompleteIdentityAvatarUploadCommand };
