"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityServiceServiceException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
class IdentityServiceServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, IdentityServiceServiceException.prototype);
    }
}
exports.IdentityServiceServiceException = IdentityServiceServiceException;
