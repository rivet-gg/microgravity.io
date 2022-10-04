import { __extends } from "tslib";
import { UnfollowIdentityInput, UnfollowIdentityOutput, } from "../models/models_0";
import { deserializeAws_restJson1UnfollowIdentityCommand, serializeAws_restJson1UnfollowIdentityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var UnfollowIdentityCommand = (function (_super) {
    __extends(UnfollowIdentityCommand, _super);
    function UnfollowIdentityCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    UnfollowIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "UnfollowIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnfollowIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: UnfollowIdentityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnfollowIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UnfollowIdentityCommand(input, context);
    };
    UnfollowIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UnfollowIdentityCommand(output, context);
    };
    return UnfollowIdentityCommand;
}($Command));
export { UnfollowIdentityCommand };
