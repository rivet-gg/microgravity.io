import { __extends } from "tslib";
import { RemoveIdentityGameActivityInput, RemoveIdentityGameActivityOutput, } from "../models/models_0";
import { deserializeAws_restJson1RemoveIdentityGameActivityCommand, serializeAws_restJson1RemoveIdentityGameActivityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var RemoveIdentityGameActivityCommand = (function (_super) {
    __extends(RemoveIdentityGameActivityCommand, _super);
    function RemoveIdentityGameActivityCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    RemoveIdentityGameActivityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "RemoveIdentityGameActivityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveIdentityGameActivityInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveIdentityGameActivityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveIdentityGameActivityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveIdentityGameActivityCommand(input, context);
    };
    RemoveIdentityGameActivityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveIdentityGameActivityCommand(output, context);
    };
    return RemoveIdentityGameActivityCommand;
}($Command));
export { RemoveIdentityGameActivityCommand };
