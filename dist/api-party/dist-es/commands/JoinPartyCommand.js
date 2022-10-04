import { __extends } from "tslib";
import { JoinPartyInput, JoinPartyOutput, } from "../models/models_0";
import { deserializeAws_restJson1JoinPartyCommand, serializeAws_restJson1JoinPartyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var JoinPartyCommand = (function (_super) {
    __extends(JoinPartyCommand, _super);
    function JoinPartyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    JoinPartyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "JoinPartyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: JoinPartyInput.filterSensitiveLog,
            outputFilterSensitiveLog: JoinPartyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    JoinPartyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1JoinPartyCommand(input, context);
    };
    JoinPartyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1JoinPartyCommand(output, context);
    };
    return JoinPartyCommand;
}($Command));
export { JoinPartyCommand };
