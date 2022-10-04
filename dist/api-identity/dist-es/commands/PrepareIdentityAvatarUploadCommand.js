import { __extends } from "tslib";
import { PrepareIdentityAvatarUploadInput, PrepareIdentityAvatarUploadOutput, } from "../models/models_0";
import { deserializeAws_restJson1PrepareIdentityAvatarUploadCommand, serializeAws_restJson1PrepareIdentityAvatarUploadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var PrepareIdentityAvatarUploadCommand = (function (_super) {
    __extends(PrepareIdentityAvatarUploadCommand, _super);
    function PrepareIdentityAvatarUploadCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PrepareIdentityAvatarUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "PrepareIdentityAvatarUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PrepareIdentityAvatarUploadInput.filterSensitiveLog,
            outputFilterSensitiveLog: PrepareIdentityAvatarUploadOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PrepareIdentityAvatarUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PrepareIdentityAvatarUploadCommand(input, context);
    };
    PrepareIdentityAvatarUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PrepareIdentityAvatarUploadCommand(output, context);
    };
    return PrepareIdentityAvatarUploadCommand;
}($Command));
export { PrepareIdentityAvatarUploadCommand };
