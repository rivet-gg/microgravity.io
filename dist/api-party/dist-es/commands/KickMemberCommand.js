import { __extends } from "tslib";
import { KickMemberInput, KickMemberOutput, } from "../models/models_0";
import { deserializeAws_restJson1KickMemberCommand, serializeAws_restJson1KickMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var KickMemberCommand = (function (_super) {
    __extends(KickMemberCommand, _super);
    function KickMemberCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    KickMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "KickMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: KickMemberInput.filterSensitiveLog,
            outputFilterSensitiveLog: KickMemberOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    KickMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1KickMemberCommand(input, context);
    };
    KickMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1KickMemberCommand(output, context);
    };
    return KickMemberCommand;
}($Command));
export { KickMemberCommand };
