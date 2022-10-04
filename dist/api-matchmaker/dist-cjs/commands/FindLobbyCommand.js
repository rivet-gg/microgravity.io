"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindLobbyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
class FindLobbyCommand extends smithy_client_1.Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "MatchmakerServiceClient";
        const commandName = "FindLobbyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.FindLobbyInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.FindLobbyOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.serializeAws_restJson1FindLobbyCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.deserializeAws_restJson1FindLobbyCommand)(output, context);
    }
}
exports.FindLobbyCommand = FindLobbyCommand;
