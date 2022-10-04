import { __extends } from "tslib";
import { SearchIdentitiesInput, SearchIdentitiesOutput, } from "../models/models_0";
import { deserializeAws_restJson1SearchIdentitiesCommand, serializeAws_restJson1SearchIdentitiesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var SearchIdentitiesCommand = (function (_super) {
    __extends(SearchIdentitiesCommand, _super);
    function SearchIdentitiesCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    SearchIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IdentityServiceClient";
        var commandName = "SearchIdentitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchIdentitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: SearchIdentitiesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchIdentitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchIdentitiesCommand(input, context);
    };
    SearchIdentitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchIdentitiesCommand(output, context);
    };
    return SearchIdentitiesCommand;
}($Command));
export { SearchIdentitiesCommand };
