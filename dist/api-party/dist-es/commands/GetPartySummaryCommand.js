import { __extends } from "tslib";
import { GetPartySummaryInput, GetPartySummaryOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetPartySummaryCommand, serializeAws_restJson1GetPartySummaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetPartySummaryCommand = (function (_super) {
    __extends(GetPartySummaryCommand, _super);
    function GetPartySummaryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPartySummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "GetPartySummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartySummaryInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartySummaryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartySummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPartySummaryCommand(input, context);
    };
    GetPartySummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPartySummaryCommand(output, context);
    };
    return GetPartySummaryCommand;
}($Command));
export { GetPartySummaryCommand };
