import { __extends } from "tslib";
import { UpdateIdentityStatusInput, UpdateIdentityStatusOutput, } from "../models/models_0";
import { deserializeAws_restJson1UpdateIdentityStatusCommand, serializeAws_restJson1UpdateIdentityStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var UpdateIdentityStatusCommand = (function (_super) {
    __extends(UpdateIdentityStatusCommand, _super);
    function UpdateIdentityStatusCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UpdateIdentityStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "UpdateIdentityStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIdentityStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIdentityStatusOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIdentityStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIdentityStatusCommand(input, context);
    };
    UpdateIdentityStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIdentityStatusCommand(output, context);
    };
    return UpdateIdentityStatusCommand;
}($Command));
export { UpdateIdentityStatusCommand };
