import { __extends } from "tslib";
import { GetPartySelfSummaryInput, GetPartySelfSummaryOutput, } from "../models/models_0";
import { deserializeAws_restJson1GetPartySelfSummaryCommand, serializeAws_restJson1GetPartySelfSummaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var GetPartySelfSummaryCommand = (function (_super) {
    __extends(GetPartySelfSummaryCommand, _super);
    function GetPartySelfSummaryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetPartySelfSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "GetPartySelfSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPartySelfSummaryInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPartySelfSummaryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPartySelfSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPartySelfSummaryCommand(input, context);
    };
    GetPartySelfSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPartySelfSummaryCommand(output, context);
    };
    return GetPartySelfSummaryCommand;
}($Command));
export { GetPartySelfSummaryCommand };
