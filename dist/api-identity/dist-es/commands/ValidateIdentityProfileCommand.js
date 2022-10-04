import { __extends } from "tslib";
import { ValidateIdentityProfileInput, ValidateIdentityProfileOutput, } from "../models/models_0";
import { deserializeAws_restJson1ValidateIdentityProfileCommand, serializeAws_restJson1ValidateIdentityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ValidateIdentityProfileCommand = (function (_super) {
    __extends(ValidateIdentityProfileCommand, _super);
    function ValidateIdentityProfileCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    ValidateIdentityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "ValidateIdentityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ValidateIdentityProfileInput.filterSensitiveLog,
            outputFilterSensitiveLog: ValidateIdentityProfileOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ValidateIdentityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ValidateIdentityProfileCommand(input, context);
    };
    ValidateIdentityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ValidateIdentityProfileCommand(output, context);
    };
    return ValidateIdentityProfileCommand;
}($Command));
export { ValidateIdentityProfileCommand };
