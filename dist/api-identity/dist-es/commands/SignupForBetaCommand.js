import { __extends } from "tslib";
import { SignupForBetaInput, SignupForBetaOutput, } from "../models/models_0";
import { deserializeAws_restJson1SignupForBetaCommand, serializeAws_restJson1SignupForBetaCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SignupForBetaCommand = (function (_super) {
    __extends(SignupForBetaCommand, _super);
    function SignupForBetaCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SignupForBetaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "SignupForBetaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SignupForBetaInput.filterSensitiveLog,
            outputFilterSensitiveLog: SignupForBetaOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SignupForBetaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SignupForBetaCommand(input, context);
    };
    SignupForBetaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SignupForBetaCommand(output, context);
    };
    return SignupForBetaCommand;
}($Command));
export { SignupForBetaCommand };
