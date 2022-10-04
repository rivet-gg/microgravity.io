"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyServiceServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class PartyServiceServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, PartyServiceServiceException.prototype);
    }
}
exports.PartyServiceServiceException = PartyServiceServiceException;
