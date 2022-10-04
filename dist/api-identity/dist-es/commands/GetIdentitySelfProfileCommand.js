import { __extends } from "tslib";
import { GetIdentitySelfProfileInput, GetIdentitySelfProfileOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetIdentitySelfProfileCommand, serializeAws_restJson1GetIdentitySelfProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetIdentitySelfProfileCommand = (function (_super) {
    __extends(GetIdentitySelfProfileCommand, _super);
    function GetIdentitySelfProfileCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetIdentitySelfProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "GetIdentitySelfProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIdentitySelfProfileInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetIdentitySelfProfileOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIdentitySelfProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIdentitySelfProfileCommand(input, context);
    };
    GetIdentitySelfProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIdentitySelfProfileCommand(output, context);
    };
    return GetIdentitySelfProfileCommand;
}($Command));
export { GetIdentitySelfProfileCommand };
