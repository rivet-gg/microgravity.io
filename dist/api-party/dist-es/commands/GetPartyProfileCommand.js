import { __extends } from "tslib";
import { GetPartyProfileInput, GetPartyProfileOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetPartyProfileCommand, serializeAws_restJson1GetPartyProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetPartyProfileCommand = (function (_super) {
    __extends(GetPartyProfileCommand, _super);
    function GetPartyProfileCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPartyProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "GetPartyProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartyProfileInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartyProfileOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartyProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPartyProfileCommand(input, context);
    };
    GetPartyProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPartyProfileCommand(output, context);
    };
    return GetPartyProfileCommand;
}($Command));
export { GetPartyProfileCommand };
