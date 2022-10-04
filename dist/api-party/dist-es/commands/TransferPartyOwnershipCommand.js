import { __extends } from "tslib";
import { TransferPartyOwnershipInput, TransferPartyOwnershipOutput, } from "../models/models_0";
import { deserializeAws_restJson1TransferPartyOwnershipCommand, serializeAws_restJson1TransferPartyOwnershipCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var TransferPartyOwnershipCommand = (function (_super) {
    __extends(TransferPartyOwnershipCommand, _super);
    function TransferPartyOwnershipCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    TransferPartyOwnershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "TransferPartyOwnershipCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TransferPartyOwnershipInput.filterSensitiveLog,
            outputFilterSensitiveLog: TransferPartyOwnershipOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TransferPartyOwnershipCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TransferPartyOwnershipCommand(input, context);
    };
    TransferPartyOwnershipCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TransferPartyOwnershipCommand(output, context);
    };
    return TransferPartyOwnershipCommand;
}($Command));
export { TransferPartyOwnershipCommand };
