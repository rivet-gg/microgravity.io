import { __extends } from "tslib";
import { CreatePartyInput, CreatePartyOutput, } from "../models/models_0";
import { deserializeAws_restJson1CreatePartyCommand, serializeAws_restJson1CreatePartyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var CreatePartyCommand = (function (_super) {
    __extends(CreatePartyCommand, _super);
    function CreatePartyCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    CreatePartyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PartyServiceClient";
        var commandName = "CreatePartyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePartyInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePartyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePartyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePartyCommand(input, context);
    };
    CreatePartyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePartyCommand(output, context);
    };
    return CreatePartyCommand;
}($Command));
export { CreatePartyCommand };
