import { __extends } from "tslib";
import { GetPartySelfProfileInput, GetPartySelfProfileOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetPartySelfProfileCommand, serializeAws_restJson1GetPartySelfProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetPartySelfProfileCommand = (function (_super) {
    __extends(GetPartySelfProfileCommand, _super);
    function GetPartySelfProfileCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPartySelfProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "GetPartySelfProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartySelfProfileInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartySelfProfileOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartySelfProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPartySelfProfileCommand(input, context);
    };
    GetPartySelfProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPartySelfProfileCommand(output, context);
    };
    return GetPartySelfProfileCommand;
}($Command));
export { GetPartySelfProfileCommand };
