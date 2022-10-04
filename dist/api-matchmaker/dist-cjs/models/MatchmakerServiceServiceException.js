"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchmakerServiceServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class MatchmakerServiceServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, MatchmakerServiceServiceException.prototype);
    }
}
exports.MatchmakerServiceServiceException = MatchmakerServiceServiceException;
