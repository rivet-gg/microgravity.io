import { __extends } from "tslib";
import { FollowIdentityInput, FollowIdentityOutput, } from "../models/models_0";
import { deserializeAws_restJson1FollowIdentityCommand, serializeAws_restJson1FollowIdentityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var FollowIdentityCommand = (function (_super) {
    __extends(FollowIdentityCommand, _super);
    function FollowIdentityCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    FollowIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "FollowIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FollowIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: FollowIdentityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FollowIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1FollowIdentityCommand(input, context);
    };
    FollowIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1FollowIdentityCommand(output, context);
    };
    return FollowIdentityCommand;
}($Command));
export { FollowIdentityCommand };
