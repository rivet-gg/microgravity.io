import { __extends } from "tslib";
import { GetIdentityProfileInput, GetIdentityProfileOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetIdentityProfileCommand, serializeAws_restJson1GetIdentityProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetIdentityProfileCommand = (function (_super) {
    __extends(GetIdentityProfileCommand, _super);
    function GetIdentityProfileCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetIdentityProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "GetIdentityProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIdentityProfileInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetIdentityProfileOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIdentityProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIdentityProfileCommand(input, context);
    };
    GetIdentityProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIdentityProfileCommand(output, context);
    };
    return GetIdentityProfileCommand;
}($Command));
export { GetIdentityProfileCommand };
