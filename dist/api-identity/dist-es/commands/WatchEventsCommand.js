import { __extends } from "tslib";
import { WatchEventsInput, WatchEventsOutput, } from "../models/models_0";
import { deserializeAws_restJson1WatchEventsCommand, serializeAws_restJson1WatchEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var WatchEventsCommand = (function (_super) {
    __extends(WatchEventsCommand, _super);
    function WatchEventsCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    WatchEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "WatchEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: WatchEventsInput.filterSensitiveLog,
            outputFilterSensitiveLog: WatchEventsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    WatchEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1WatchEventsCommand(input, context);
    };
    WatchEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1WatchEventsCommand(output, context);
    };
    return WatchEventsCommand;
}($Command));
export { WatchEventsCommand };
