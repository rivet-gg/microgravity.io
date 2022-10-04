import { __extends } from "tslib";
import { PrepareGameLinkInput, PrepareGameLinkOutput, } from "../models/models_0";
import { deserializeAws_restJson1PrepareGameLinkCommand, serializeAws_restJson1PrepareGameLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var PrepareGameLinkCommand = (function (_super) {
    __extends(PrepareGameLinkCommand, _super);
    function PrepareGameLinkCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    PrepareGameLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "PrepareGameLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PrepareGameLinkInput.filterSensitiveLog,
            outputFilterSensitiveLog: PrepareGameLinkOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PrepareGameLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PrepareGameLinkCommand(input, context);
    };
    PrepareGameLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PrepareGameLinkCommand(output, context);
    };
    return PrepareGameLinkCommand;
}($Command));
export { PrepareGameLinkCommand };
