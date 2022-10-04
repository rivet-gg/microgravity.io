import { __extends } from "tslib";
import { GetGameLinkInput, GetGameLinkOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetGameLinkCommand, serializeAws_restJson1GetGameLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetGameLinkCommand = (function (_super) {
    __extends(GetGameLinkCommand, _super);
    function GetGameLinkCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetGameLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "GetGameLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGameLinkInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetGameLinkOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGameLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGameLinkCommand(input, context);
    };
    GetGameLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGameLinkCommand(output, context);
    };
    return GetGameLinkCommand;
}($Command));
export { GetGameLinkCommand };
