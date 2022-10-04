import { __assign, __awaiter, __generator, __read } from "tslib";
import { IdentityServiceServiceException as __BaseException } from "../models/IdentityServiceServiceException";
import { BadRequestError, ForbiddenError, InternalError, NotFoundError, RateLimitError, UnauthorizedError, } from "../models/models_0";
import { HttpRequest as __HttpRequest, } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectLong as __expectLong, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, expectUnion as __expectUnion, extendedEncodeURIComponent as __extendedEncodeURIComponent, limitedParseFloat32 as __limitedParseFloat32, parseRfc3339DateTime as __parseRfc3339DateTime, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CompleteGameLinkCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/game-links/complete";
                body = JSON.stringify(__assign({}, (input.identityLinkToken !== undefined && input.identityLinkToken !== null && { "identity_link_token": input.identityLinkToken })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CompleteIdentityAvatarUploadCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/avatar-upload/{upload_id}/complete";
                if (input.uploadId !== undefined) {
                    labelValue = input.uploadId;
                    if (labelValue.length <= 0) {
                        throw new Error('Empty value provided for input HTTP label: uploadId.');
                    }
                    resolvedPath = resolvedPath.replace("{upload_id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error('No value provided for input HTTP label: uploadId.');
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1FollowIdentityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/{identity_id}/follow";
                if (input.identityId !== undefined) {
                    labelValue = input.identityId;
                    if (labelValue.length <= 0) {
                        throw new Error('Empty value provided for input HTTP label: identityId.');
                    }
                    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error('No value provided for input HTTP label: identityId.');
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetGameLinkCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/game-links";
                query = __assign(__assign({}, (input.identityLinkToken !== undefined && { "identity_link_token": input.identityLinkToken })), (input.watchIndex !== undefined && { "watch_index": input.watchIndex }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetIdentityProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/{identity_id}/profile";
                if (input.identityId !== undefined) {
                    labelValue = input.identityId;
                    if (labelValue.length <= 0) {
                        throw new Error('Empty value provided for input HTTP label: identityId.');
                    }
                    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error('No value provided for input HTTP label: identityId.');
                }
                query = __assign({}, (input.watchIndex !== undefined && { "watch_index": input.watchIndex }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetIdentitySelfProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/profile";
                query = __assign({}, (input.watchIndex !== undefined && { "watch_index": input.watchIndex }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListActivitiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/activities";
                query = __assign({}, (input.watchIndex !== undefined && { "watch_index": input.watchIndex }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListFollowersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/{identity_id}/followers";
                if (input.identityId !== undefined) {
                    labelValue = input.identityId;
                    if (labelValue.length <= 0) {
                        throw new Error('Empty value provided for input HTTP label: identityId.');
                    }
                    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error('No value provided for input HTTP label: identityId.');
                }
                query = __assign(__assign({}, (input.anchor !== undefined && { "anchor": input.anchor })), (input.limit !== undefined && { "limit": input.limit.toString() }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListFollowingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/{identity_id}/following";
                if (input.identityId !== undefined) {
                    labelValue = input.identityId;
                    if (labelValue.length <= 0) {
                        throw new Error('Empty value provided for input HTTP label: identityId.');
                    }
                    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error('No value provided for input HTTP label: identityId.');
                }
                query = __assign(__assign({}, (input.anchor !== undefined && { "anchor": input.anchor })), (input.limit !== undefined && { "limit": input.limit.toString() }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListFriendsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/friends";
                query = __assign(__assign({}, (input.anchor !== undefined && { "anchor": input.anchor })), (input.limit !== undefined && { "limit": input.limit.toString() }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PrepareGameLinkCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/game-links";
                body = "";
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PrepareIdentityAvatarUploadCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/avatar-upload/prepare";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.contentLength !== undefined && input.contentLength !== null && { "content_length": input.contentLength })), (input.mime !== undefined && input.mime !== null && { "mime": input.mime })), (input.path !== undefined && input.path !== null && { "path": input.path })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1RemoveIdentityGameActivityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/activity";
                body = "";
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SearchIdentitiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/search";
                query = __assign(__assign(__assign({}, (input.query !== undefined && { "query": input.query })), (input.anchor !== undefined && { "anchor": input.anchor })), (input.limit !== undefined && { "limit": input.limit.toString() }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SetIdentityGameActivityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/activity";
                body = JSON.stringify(__assign({}, (input.gameActivity !== undefined && input.gameActivity !== null && { "game_activity": serializeAws_restJson1UpdateIdentityGameActivity(input.gameActivity, context) })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SetupIdentityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities";
                body = JSON.stringify(__assign({}, (input.existingIdentityToken !== undefined && input.existingIdentityToken !== null && { "existing_identity_token": input.existingIdentityToken })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SignupForBetaCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/beta-signup";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.companyName !== undefined && input.companyName !== null && { "company_name": input.companyName })), (input.companySize !== undefined && input.companySize !== null && { "company_size": input.companySize })), (input.goals !== undefined && input.goals !== null && { "goals": input.goals })), (input.name !== undefined && input.name !== null && { "name": input.name })), (input.preferredTools !== undefined && input.preferredTools !== null && { "preferred_tools": input.preferredTools })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UnfollowIdentityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, labelValue, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/{identity_id}/follow";
                if (input.identityId !== undefined) {
                    labelValue = input.identityId;
                    if (labelValue.length <= 0) {
                        throw new Error('Empty value provided for input HTTP label: identityId.');
                    }
                    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error('No value provided for input HTTP label: identityId.');
                }
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateIdentityProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/profile";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.accountNumber !== undefined && input.accountNumber !== null && { "account_number": input.accountNumber })), (input.bio !== undefined && input.bio !== null && { "bio": input.bio })), (input.displayName !== undefined && input.displayName !== null && { "display_name": input.displayName })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateIdentityStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/status";
                body = JSON.stringify(__assign({}, (input.status !== undefined && input.status !== null && { "status": input.status })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ValidateIdentityProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/identities/self/profile/validate";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.accountNumber !== undefined && input.accountNumber !== null && { "account_number": input.accountNumber })), (input.bio !== undefined && input.bio !== null && { "bio": input.bio })), (input.displayName !== undefined && input.displayName !== null && { "display_name": input.displayName })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1WatchEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {};
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/events/live";
                query = __assign({}, (input.watchIndex !== undefined && { "watch_index": input.watchIndex }));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1CompleteGameLinkCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CompleteGameLinkCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CompleteGameLinkCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1CompleteIdentityAvatarUploadCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1CompleteIdentityAvatarUploadCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CompleteIdentityAvatarUploadCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1FollowIdentityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1FollowIdentityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1FollowIdentityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1GetGameLinkCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetGameLinkCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    game: undefined,
                    newIdentity: undefined,
                    status: undefined,
                    watch: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.game !== undefined && data.game !== null) {
                    contents.game = deserializeAws_restJson1GameHandle(data.game, context);
                }
                if (data.new_identity !== undefined && data.new_identity !== null) {
                    contents.newIdentity = deserializeAws_restJson1GetGameLinkNewIdentity(data.new_identity, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = __expectString(data.status);
                }
                if (data.watch !== undefined && data.watch !== null) {
                    contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetGameLinkCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1GetIdentityProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetIdentityProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    identity: undefined,
                    watch: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.identity !== undefined && data.identity !== null) {
                    contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
                }
                if (data.watch !== undefined && data.watch !== null) {
                    contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetIdentityProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1GetIdentitySelfProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1GetIdentitySelfProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    identity: undefined,
                    watch: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.identity !== undefined && data.identity !== null) {
                    contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
                }
                if (data.watch !== undefined && data.watch !== null) {
                    contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetIdentitySelfProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1ListActivitiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListActivitiesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    games: undefined,
                    identities: undefined,
                    parties: undefined,
                    suggestedGroups: undefined,
                    suggestedPlayers: undefined,
                    watch: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.games !== undefined && data.games !== null) {
                    contents.games = deserializeAws_restJson1GameHandles(data.games, context);
                }
                if (data.identities !== undefined && data.identities !== null) {
                    contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                }
                if (data.parties !== undefined && data.parties !== null) {
                    contents.parties = deserializeAws_restJson1PartySummaries(data.parties, context);
                }
                if (data.suggested_groups !== undefined && data.suggested_groups !== null) {
                    contents.suggestedGroups = deserializeAws_restJson1GroupSummaries(data.suggested_groups, context);
                }
                if (data.suggested_players !== undefined && data.suggested_players !== null) {
                    contents.suggestedPlayers = deserializeAws_restJson1IdentityHandles(data.suggested_players, context);
                }
                if (data.watch !== undefined && data.watch !== null) {
                    contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListActivitiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1ListFollowersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListFollowersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    anchor: undefined,
                    identities: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.anchor !== undefined && data.anchor !== null) {
                    contents.anchor = __expectString(data.anchor);
                }
                if (data.identities !== undefined && data.identities !== null) {
                    contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFollowersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1ListFollowingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListFollowingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    anchor: undefined,
                    identities: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.anchor !== undefined && data.anchor !== null) {
                    contents.anchor = __expectString(data.anchor);
                }
                if (data.identities !== undefined && data.identities !== null) {
                    contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFollowingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1ListFriendsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListFriendsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    anchor: undefined,
                    identities: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.anchor !== undefined && data.anchor !== null) {
                    contents.anchor = __expectString(data.anchor);
                }
                if (data.identities !== undefined && data.identities !== null) {
                    contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFriendsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1PrepareGameLinkCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1PrepareGameLinkCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    expireTs: undefined,
                    identityLinkToken: undefined,
                    identityLinkUrl: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.expire_ts !== undefined && data.expire_ts !== null) {
                    contents.expireTs = __expectNonNull(__parseRfc3339DateTime(data.expire_ts));
                }
                if (data.identity_link_token !== undefined && data.identity_link_token !== null) {
                    contents.identityLinkToken = __expectString(data.identity_link_token);
                }
                if (data.identity_link_url !== undefined && data.identity_link_url !== null) {
                    contents.identityLinkUrl = __expectString(data.identity_link_url);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PrepareGameLinkCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1PrepareIdentityAvatarUploadCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1PrepareIdentityAvatarUploadCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    presignedRequest: undefined,
                    uploadId: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.presigned_request !== undefined && data.presigned_request !== null) {
                    contents.presignedRequest = deserializeAws_restJson1UploadPresignedRequest(data.presigned_request, context);
                }
                if (data.upload_id !== undefined && data.upload_id !== null) {
                    contents.uploadId = __expectString(data.upload_id);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PrepareIdentityAvatarUploadCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1RemoveIdentityGameActivityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1RemoveIdentityGameActivityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RemoveIdentityGameActivityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1SearchIdentitiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SearchIdentitiesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    anchor: undefined,
                    identities: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.anchor !== undefined && data.anchor !== null) {
                    contents.anchor = __expectString(data.anchor);
                }
                if (data.identities !== undefined && data.identities !== null) {
                    contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SearchIdentitiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1SetIdentityGameActivityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SetIdentityGameActivityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SetIdentityGameActivityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1SetupIdentityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SetupIdentityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    identity: undefined,
                    identityToken: undefined,
                    identityTokenExpireTs: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.identity !== undefined && data.identity !== null) {
                    contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
                }
                if (data.identity_token !== undefined && data.identity_token !== null) {
                    contents.identityToken = __expectString(data.identity_token);
                }
                if (data.identity_token_expire_ts !== undefined && data.identity_token_expire_ts !== null) {
                    contents.identityTokenExpireTs = __expectNonNull(__parseRfc3339DateTime(data.identity_token_expire_ts));
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SetupIdentityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1SignupForBetaCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SignupForBetaCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SignupForBetaCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1UnfollowIdentityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UnfollowIdentityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UnfollowIdentityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1UpdateIdentityProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdateIdentityProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateIdentityProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1UpdateIdentityStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1UpdateIdentityStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateIdentityStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1ValidateIdentityProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ValidateIdentityProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    errors: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.errors !== undefined && data.errors !== null) {
                    contents.errors = deserializeAws_restJson1ValidationErrors(data.errors, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ValidateIdentityProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
export var deserializeAws_restJson1WatchEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1WatchEventsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    events: undefined,
                    watch: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.events !== undefined && data.events !== null) {
                    contents.events = deserializeAws_restJson1GlobalEvents(data.events, context);
                }
                if (data.watch !== undefined && data.watch !== null) {
                    contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1WatchEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, parsedBody;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = [__assign({}, output)];
                _c = {};
                return [4, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_c.body = _d.sent(), _c)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestError": return [3, 2];
                    case "rivet.error#BadRequestError": return [3, 2];
                    case "ForbiddenError": return [3, 4];
                    case "rivet.error#ForbiddenError": return [3, 4];
                    case "InternalError": return [3, 6];
                    case "rivet.error#InternalError": return [3, 6];
                    case "NotFoundError": return [3, 8];
                    case "rivet.error#NotFoundError": return [3, 8];
                    case "RateLimitError": return [3, 10];
                    case "rivet.error#RateLimitError": return [3, 10];
                    case "UnauthorizedError": return [3, 12];
                    case "rivet.error#UnauthorizedError": return [3, 12];
                }
                return [3, 14];
            case 2: return [4, deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context)];
            case 3: throw _d.sent();
            case 4: return [4, deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context)];
            case 5: throw _d.sent();
            case 6: return [4, deserializeAws_restJson1InternalErrorResponse(parsedOutput, context)];
            case 7: throw _d.sent();
            case 8: return [4, deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context)];
            case 9: throw _d.sent();
            case 10: return [4, deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context)];
            case 11: throw _d.sent();
            case 12: return [4, deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context)];
            case 13: throw _d.sent();
            case 14:
                parsedBody = parsedOutput.body;
                response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
        }
    });
}); };
var deserializeAws_restJson1BadRequestErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = {};
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = __expectString(data.code);
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = __expectString(data.message);
        }
        if (data.metadata !== undefined && data.metadata !== null) {
            contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
        }
        exception = new BadRequestError(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1ForbiddenErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = {};
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = __expectString(data.code);
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = __expectString(data.message);
        }
        if (data.metadata !== undefined && data.metadata !== null) {
            contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
        }
        exception = new ForbiddenError(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1InternalErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = {};
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = __expectString(data.code);
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = __expectString(data.message);
        }
        if (data.metadata !== undefined && data.metadata !== null) {
            contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
        }
        exception = new InternalError(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1NotFoundErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = {};
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = __expectString(data.code);
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = __expectString(data.message);
        }
        if (data.metadata !== undefined && data.metadata !== null) {
            contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
        }
        exception = new NotFoundError(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1RateLimitErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = {};
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = __expectString(data.code);
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = __expectString(data.message);
        }
        if (data.metadata !== undefined && data.metadata !== null) {
            contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
        }
        exception = new RateLimitError(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var deserializeAws_restJson1UnauthorizedErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, exception;
    return __generator(this, function (_a) {
        contents = {};
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = __expectString(data.code);
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = __expectString(data.message);
        }
        if (data.metadata !== undefined && data.metadata !== null) {
            contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
        }
        exception = new UnauthorizedError(__assign({ $metadata: deserializeMetadata(parsedOutput) }, contents));
        return [2, __decorateServiceException(exception, parsedOutput.body)];
    });
}); };
var serializeAws_restJson1UpdateIdentityGameActivity = function (input, context) {
    return __assign(__assign(__assign({}, (input.friendMetadata !== undefined && input.friendMetadata !== null && { "friend_metadata": serializeAws_restJson1Document(input.friendMetadata, context) })), (input.message !== undefined && input.message !== null && { "message": input.message })), (input.publicMetadata !== undefined && input.publicMetadata !== null && { "public_metadata": serializeAws_restJson1Document(input.publicMetadata, context) }));
};
var serializeAws_restJson1Document = function (input, context) {
    return input;
};
var deserializeAws_restJson1GetGameLinkNewIdentity = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityProfile(output.identity, context) : undefined,
        identityToken: __expectString(output.identity_token),
        identityTokenExpireTs: (output.identity_token_expire_ts !== undefined && output.identity_token_expire_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.identity_token_expire_ts)) : undefined,
    };
};
var deserializeAws_restJson1GlobalEvent = function (output, context) {
    return {
        kind: (output.kind !== undefined && output.kind !== null) ? deserializeAws_restJson1GlobalEventKind(__expectUnion(output.kind), context) : undefined,
        notification: (output.notification !== undefined && output.notification !== null) ? deserializeAws_restJson1GlobalEventNotification(output.notification, context) : undefined,
        ts: (output.ts !== undefined && output.ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.ts)) : undefined,
    };
};
var deserializeAws_restJson1GlobalEventChatMessage = function (output, context) {
    return {
        thread: (output.thread !== undefined && output.thread !== null) ? deserializeAws_restJson1ChatThread(output.thread, context) : undefined,
    };
};
var deserializeAws_restJson1GlobalEventChatRead = function (output, context) {
    return {
        readTs: (output.read_ts !== undefined && output.read_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.read_ts)) : undefined,
        threadId: __expectString(output.thread_id),
    };
};
var deserializeAws_restJson1GlobalEventIdentityUpdate = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityProfile(output.identity, context) : undefined,
    };
};
var deserializeAws_restJson1GlobalEventKind = function (output, context) {
    if (output.chat_message !== undefined && output.chat_message !== null) {
        return {
            chatMessage: deserializeAws_restJson1GlobalEventChatMessage(output.chat_message, context)
        };
    }
    if (output.chat_read !== undefined && output.chat_read !== null) {
        return {
            chatRead: deserializeAws_restJson1GlobalEventChatRead(output.chat_read, context)
        };
    }
    if (output.identity_update !== undefined && output.identity_update !== null) {
        return {
            identityUpdate: deserializeAws_restJson1GlobalEventIdentityUpdate(output.identity_update, context)
        };
    }
    if (output.matchmaker_lobby_join !== undefined && output.matchmaker_lobby_join !== null) {
        return {
            matchmakerLobbyJoin: deserializeAws_restJson1GlobalEventMatchmakerLobbyJoin(output.matchmaker_lobby_join, context)
        };
    }
    if (output.party_update !== undefined && output.party_update !== null) {
        return {
            partyUpdate: deserializeAws_restJson1GlobalEventPartyUpdate(output.party_update, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1GlobalEventMatchmakerLobbyJoin = function (output, context) {
    return {
        lobby: (output.lobby !== undefined && output.lobby !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfo(output.lobby, context) : undefined,
    };
};
var deserializeAws_restJson1GlobalEventNotification = function (output, context) {
    return {
        description: __expectString(output.description),
        thumbnailUrl: __expectString(output.thumbnail_url),
        title: __expectString(output.title),
        url: __expectString(output.url),
    };
};
var deserializeAws_restJson1GlobalEventPartyUpdate = function (output, context) {
    return {
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartySummary(output.party, context) : undefined,
    };
};
var deserializeAws_restJson1GlobalEvents = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GlobalEvent(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ChatMessage = function (output, context) {
    return {
        body: (output.body !== undefined && output.body !== null) ? deserializeAws_restJson1ChatMessageBody(__expectUnion(output.body), context) : undefined,
        chatMessageId: __expectString(output.chat_message_id),
        sendTs: (output.send_ts !== undefined && output.send_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.send_ts)) : undefined,
        threadId: __expectString(output.thread_id),
    };
};
var deserializeAws_restJson1ChatMessageBody = function (output, context) {
    if (output.chat_create !== undefined && output.chat_create !== null) {
        return {
            chatCreate: deserializeAws_restJson1ChatMessageBodyChatCreate(output.chat_create, context)
        };
    }
    if (output.group_join !== undefined && output.group_join !== null) {
        return {
            groupJoin: deserializeAws_restJson1ChatMessageBodyGroupJoin(output.group_join, context)
        };
    }
    if (output.group_leave !== undefined && output.group_leave !== null) {
        return {
            groupLeave: deserializeAws_restJson1ChatMessageBodyGroupLeave(output.group_leave, context)
        };
    }
    if (output.identity_follow !== undefined && output.identity_follow !== null) {
        return {
            identityFollow: deserializeAws_restJson1ChatMessageBodyIdentityFollow(output.identity_follow, context)
        };
    }
    if (output.party_activity_change !== undefined && output.party_activity_change !== null) {
        return {
            partyActivityChange: deserializeAws_restJson1ChatMessageBodyPartyActivityChange(output.party_activity_change, context)
        };
    }
    if (output.party_invite !== undefined && output.party_invite !== null) {
        return {
            partyInvite: deserializeAws_restJson1ChatMessageBodyPartyInvite(output.party_invite, context)
        };
    }
    if (output.party_join !== undefined && output.party_join !== null) {
        return {
            partyJoin: deserializeAws_restJson1ChatMessageBodyPartyJoin(output.party_join, context)
        };
    }
    if (output.party_join_request !== undefined && output.party_join_request !== null) {
        return {
            partyJoinRequest: deserializeAws_restJson1ChatMessageBodyPartyJoinRequest(output.party_join_request, context)
        };
    }
    if (output.party_leave !== undefined && output.party_leave !== null) {
        return {
            partyLeave: deserializeAws_restJson1ChatMessageBodyPartyLeave(output.party_leave, context)
        };
    }
    if (output.text !== undefined && output.text !== null) {
        return {
            text: deserializeAws_restJson1ChatMessageBodyText(output.text, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1ChatMessageBodyChatCreate = function (output, context) {
    return {};
};
var deserializeAws_restJson1ChatMessageBodyGroupJoin = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
var deserializeAws_restJson1ChatMessageBodyGroupLeave = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
var deserializeAws_restJson1ChatMessageBodyIdentityFollow = function (output, context) {
    return {};
};
var deserializeAws_restJson1ChatMessageBodyPartyActivityChange = function (output, context) {
    return {};
};
var deserializeAws_restJson1ChatMessageBodyPartyInvite = function (output, context) {
    return {
        inviteToken: __expectString(output.invite_token),
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context) : undefined,
        sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context) : undefined,
    };
};
var deserializeAws_restJson1ChatMessageBodyPartyJoin = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
var deserializeAws_restJson1ChatMessageBodyPartyJoinRequest = function (output, context) {
    return {
        sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context) : undefined,
    };
};
var deserializeAws_restJson1ChatMessageBodyPartyLeave = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
var deserializeAws_restJson1ChatMessageBodyText = function (output, context) {
    return {
        body: __expectString(output.body),
        sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context) : undefined,
    };
};
var deserializeAws_restJson1ChatThread = function (output, context) {
    return {
        createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)) : undefined,
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1ChatThreadExternalLinks(output.external, context) : undefined,
        lastReadTs: (output.last_read_ts !== undefined && output.last_read_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.last_read_ts)) : undefined,
        tailMessage: (output.tail_message !== undefined && output.tail_message !== null) ? deserializeAws_restJson1ChatMessage(output.tail_message, context) : undefined,
        threadId: __expectString(output.thread_id),
        topic: (output.topic !== undefined && output.topic !== null) ? deserializeAws_restJson1ChatTopic(__expectUnion(output.topic), context) : undefined,
        unreadCount: __expectLong(output.unread_count),
    };
};
var deserializeAws_restJson1ChatThreadExternalLinks = function (output, context) {
    return {
        chat: __expectString(output.chat),
    };
};
var deserializeAws_restJson1ChatTopic = function (output, context) {
    if (output.direct !== undefined && output.direct !== null) {
        return {
            direct: deserializeAws_restJson1ChatTopicDirect(output.direct, context)
        };
    }
    if (output.group !== undefined && output.group !== null) {
        return {
            group: deserializeAws_restJson1ChatTopicGroup(output.group, context)
        };
    }
    if (output.party !== undefined && output.party !== null) {
        return {
            party: deserializeAws_restJson1ChatTopicParty(output.party, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1ChatTopicDirect = function (output, context) {
    return {
        identityA: (output.identity_a !== undefined && output.identity_a !== null) ? deserializeAws_restJson1IdentityHandle(output.identity_a, context) : undefined,
        identityB: (output.identity_b !== undefined && output.identity_b !== null) ? deserializeAws_restJson1IdentityHandle(output.identity_b, context) : undefined,
    };
};
var deserializeAws_restJson1ChatTopicGroup = function (output, context) {
    return {
        group: (output.group !== undefined && output.group !== null) ? deserializeAws_restJson1GroupHandle(output.group, context) : undefined,
    };
};
var deserializeAws_restJson1ChatTopicParty = function (output, context) {
    return {
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context) : undefined,
    };
};
var deserializeAws_restJson1ValidationError = function (output, context) {
    return {
        path: (output.path !== undefined && output.path !== null) ? deserializeAws_restJson1ValidationErrorPath(output.path, context) : undefined,
    };
};
var deserializeAws_restJson1ValidationErrorPath = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return __expectString(entry);
    });
    return retVal;
};
var deserializeAws_restJson1ValidationErrors = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationError(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1WatchResponse = function (output, context) {
    return {
        index: __expectString(output.index),
    };
};
var deserializeAws_restJson1ErrorMetadata = function (output, context) {
    return output;
};
var deserializeAws_restJson1GameHandle = function (output, context) {
    return {
        bannerUrl: __expectString(output.banner_url),
        displayName: __expectString(output.display_name),
        gameId: __expectString(output.game_id),
        logoUrl: __expectString(output.logo_url),
        nameId: __expectString(output.name_id),
    };
};
var deserializeAws_restJson1GameHandles = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameHandle(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1GameStat = function (output, context) {
    return {
        config: (output.config !== undefined && output.config !== null) ? deserializeAws_restJson1GameStatConfig(output.config, context) : undefined,
        overallValue: __limitedParseFloat32(output.overall_value),
    };
};
var deserializeAws_restJson1GameStatConfig = function (output, context) {
    return {
        aggregation: __expectString(output.aggregation),
        displayName: __expectString(output.display_name),
        format: __expectString(output.format),
        iconId: __expectString(output.icon_id),
        postfixPlural: __expectString(output.postfix_plural),
        postfixSingular: __expectString(output.postfix_singular),
        prefixPlural: __expectString(output.prefix_plural),
        prefixSingular: __expectString(output.prefix_singular),
        priority: __expectInt32(output.priority),
        recordId: __expectString(output.record_id),
        sorting: __expectString(output.sorting),
    };
};
var deserializeAws_restJson1GameStats = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameStat(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1GameStatSummaries = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameStatSummary(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1GameStatSummary = function (output, context) {
    return {
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
        stats: (output.stats !== undefined && output.stats !== null) ? deserializeAws_restJson1GameStats(output.stats, context) : undefined,
    };
};
var deserializeAws_restJson1GroupExternalLinks = function (output, context) {
    return {
        chat: __expectString(output.chat),
        profile: __expectString(output.profile),
    };
};
var deserializeAws_restJson1GroupHandle = function (output, context) {
    return {
        avatarUrl: __expectString(output.avatar_url),
        displayName: __expectString(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1GroupExternalLinks(output.external, context) : undefined,
        groupId: __expectString(output.group_id),
        isDeveloper: __expectBoolean(output.is_developer),
    };
};
var deserializeAws_restJson1GroupSummaries = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupSummary(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1GroupSummary = function (output, context) {
    return {
        avatarUrl: __expectString(output.avatar_url),
        bio: __expectString(output.bio),
        displayName: __expectString(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1GroupExternalLinks(output.external, context) : undefined,
        groupId: __expectString(output.group_id),
        isCurrentIdentityMember: __expectBoolean(output.is_current_identity_member),
        isDeveloper: __expectBoolean(output.is_developer),
        memberCount: __expectInt32(output.member_count),
        publicity: __expectString(output.publicity),
    };
};
var deserializeAws_restJson1IdentityEmailLinkedAccount = function (output, context) {
    return {
        email: __expectString(output.email),
    };
};
var deserializeAws_restJson1IdentityExternalLinks = function (output, context) {
    return {
        chat: __expectString(output.chat),
        profile: __expectString(output.profile),
        settings: __expectString(output.settings),
    };
};
var deserializeAws_restJson1IdentityGameActivity = function (output, context) {
    return {
        friendMetadata: (output.friend_metadata !== undefined && output.friend_metadata !== null) ? deserializeAws_restJson1Document(output.friend_metadata, context) : undefined,
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
        message: __expectString(output.message),
        publicMetadata: (output.public_metadata !== undefined && output.public_metadata !== null) ? deserializeAws_restJson1Document(output.public_metadata, context) : undefined,
    };
};
var deserializeAws_restJson1IdentityGroup = function (output, context) {
    return {
        group: (output.group !== undefined && output.group !== null) ? deserializeAws_restJson1GroupHandle(output.group, context) : undefined,
    };
};
var deserializeAws_restJson1IdentityGroups = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityGroup(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1IdentityHandle = function (output, context) {
    return {
        accountNumber: __expectInt32(output.account_number),
        avatarUrl: __expectString(output.avatar_url),
        displayName: __expectString(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context) : undefined,
        identityId: __expectString(output.identity_id),
        isRegistered: __expectBoolean(output.is_registered),
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context) : undefined,
        presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context) : undefined,
    };
};
var deserializeAws_restJson1IdentityHandles = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityHandle(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1IdentityLinkedAccount = function (output, context) {
    if (output.email !== undefined && output.email !== null) {
        return {
            email: deserializeAws_restJson1IdentityEmailLinkedAccount(output.email, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1IdentityLinkedAccounts = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityLinkedAccount(__expectUnion(entry), context);
    });
    return retVal;
};
var deserializeAws_restJson1IdentityPresence = function (output, context) {
    return {
        gameActivity: (output.game_activity !== undefined && output.game_activity !== null) ? deserializeAws_restJson1IdentityGameActivity(output.game_activity, context) : undefined,
        status: __expectString(output.status),
        updateTs: (output.update_ts !== undefined && output.update_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.update_ts)) : undefined,
    };
};
var deserializeAws_restJson1IdentityProfile = function (output, context) {
    return {
        accountNumber: __expectInt32(output.account_number),
        avatarUrl: __expectString(output.avatar_url),
        bio: __expectString(output.bio),
        devState: __expectString(output.dev_state),
        displayName: __expectString(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context) : undefined,
        followerCount: __expectInt32(output.follower_count),
        followingCount: __expectInt32(output.following_count),
        games: (output.games !== undefined && output.games !== null) ? deserializeAws_restJson1GameStatSummaries(output.games, context) : undefined,
        groups: (output.groups !== undefined && output.groups !== null) ? deserializeAws_restJson1IdentityGroups(output.groups, context) : undefined,
        identityId: __expectString(output.identity_id),
        isAdmin: __expectBoolean(output.is_admin),
        isGameLinked: __expectBoolean(output.is_game_linked),
        isMutualFriend: __expectBoolean(output.is_mutual_friend),
        isMyFriend: __expectBoolean(output.is_my_friend),
        isRegistered: __expectBoolean(output.is_registered),
        isTheirFriend: __expectBoolean(output.is_their_friend),
        joinTs: (output.join_ts !== undefined && output.join_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.join_ts)) : undefined,
        linkedAccounts: (output.linked_accounts !== undefined && output.linked_accounts !== null) ? deserializeAws_restJson1IdentityLinkedAccounts(output.linked_accounts, context) : undefined,
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartySummary(output.party, context) : undefined,
        presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context) : undefined,
    };
};
var deserializeAws_restJson1MatchmakerLobbyJoinInfo = function (output, context) {
    return {
        lobbyId: __expectString(output.lobby_id),
        player: (output.player !== undefined && output.player !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPlayer(output.player, context) : undefined,
        ports: (output.ports !== undefined && output.ports !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPorts(output.ports, context) : undefined,
        region: (output.region !== undefined && output.region !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoRegion(output.region, context) : undefined,
    };
};
var deserializeAws_restJson1MatchmakerLobbyJoinInfoPlayer = function (output, context) {
    return {
        token: __expectString(output.token),
    };
};
var deserializeAws_restJson1MatchmakerLobbyJoinInfoPort = function (output, context) {
    return {
        host: __expectString(output.host),
        hostname: __expectString(output.hostname),
        isTls: __expectBoolean(output.is_tls),
        port: __expectInt32(output.port),
        portRange: (output.port_range !== undefined && output.port_range !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPortRange(output.port_range, context) : undefined,
    };
};
var deserializeAws_restJson1MatchmakerLobbyJoinInfoPortRange = function (output, context) {
    return {
        max: __expectInt32(output.max),
        min: __expectInt32(output.min),
    };
};
var deserializeAws_restJson1MatchmakerLobbyJoinInfoPorts = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1MatchmakerLobbyJoinInfoPort(value, context), _b));
    }, {});
};
var deserializeAws_restJson1MatchmakerLobbyJoinInfoRegion = function (output, context) {
    return {
        displayName: __expectString(output.display_name),
        regionId: __expectString(output.region_id),
    };
};
var deserializeAws_restJson1PartyActivity = function (output, context) {
    if (output.idle !== undefined && output.idle !== null) {
        return {
            idle: deserializeAws_restJson1PartyActivityIdle(output.idle, context)
        };
    }
    if (output.matchmaker_finding_lobby !== undefined && output.matchmaker_finding_lobby !== null) {
        return {
            matchmakerFindingLobby: deserializeAws_restJson1PartyActivityMatchmakerFindingLobby(output.matchmaker_finding_lobby, context)
        };
    }
    if (output.matchmaker_lobby !== undefined && output.matchmaker_lobby !== null) {
        return {
            matchmakerLobby: deserializeAws_restJson1PartyActivityMatchmakerLobby(output.matchmaker_lobby, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1PartyActivityIdle = function (output, context) {
    return {};
};
var deserializeAws_restJson1PartyActivityMatchmakerFindingLobby = function (output, context) {
    return {
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
    };
};
var deserializeAws_restJson1PartyActivityMatchmakerLobby = function (output, context) {
    return {
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
        lobby: (output.lobby !== undefined && output.lobby !== null) ? deserializeAws_restJson1PartyMatchmakerLobby(output.lobby, context) : undefined,
    };
};
var deserializeAws_restJson1PartyExternalLinks = function (output, context) {
    return {
        chat: __expectString(output.chat),
    };
};
var deserializeAws_restJson1PartyHandle = function (output, context) {
    return {
        activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity(__expectUnion(output.activity), context) : undefined,
        createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)) : undefined,
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context) : undefined,
        partyId: __expectString(output.party_id),
    };
};
var deserializeAws_restJson1PartyMatchmakerLobby = function (output, context) {
    return {
        lobbyId: __expectString(output.lobby_id),
    };
};
var deserializeAws_restJson1PartyMemberState = function (output, context) {
    if (output.idle !== undefined && output.idle !== null) {
        return {
            idle: deserializeAws_restJson1PartyMemberStateIdle(output.idle, context)
        };
    }
    if (output.matchmaker_finding_lobby !== undefined && output.matchmaker_finding_lobby !== null) {
        return {
            matchmakerFindingLobby: deserializeAws_restJson1PartyMemberStateMatchmakerFindingLobby(output.matchmaker_finding_lobby, context)
        };
    }
    if (output.matchmaker_lobby !== undefined && output.matchmaker_lobby !== null) {
        return {
            matchmakerLobby: deserializeAws_restJson1PartyMemberStateMatchmakerLobby(output.matchmaker_lobby, context)
        };
    }
    if (output.matchmaker_pending !== undefined && output.matchmaker_pending !== null) {
        return {
            matchmakerPending: deserializeAws_restJson1PartyMemberStateMatchmakerPending(output.matchmaker_pending, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1PartyMemberStateIdle = function (output, context) {
    return {};
};
var deserializeAws_restJson1PartyMemberStateMatchmakerFindingLobby = function (output, context) {
    return {};
};
var deserializeAws_restJson1PartyMemberStateMatchmakerLobby = function (output, context) {
    return {
        playerId: __expectString(output.player_id),
    };
};
var deserializeAws_restJson1PartyMemberStateMatchmakerPending = function (output, context) {
    return {};
};
var deserializeAws_restJson1PartyMemberSummaries = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PartyMemberSummary(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1PartyMemberSummary = function (output, context) {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
        isLeader: __expectBoolean(output.is_leader),
        joinTs: (output.join_ts !== undefined && output.join_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.join_ts)) : undefined,
        state: (output.state !== undefined && output.state !== null) ? deserializeAws_restJson1PartyMemberState(__expectUnion(output.state), context) : undefined,
    };
};
var deserializeAws_restJson1PartyPublicity = function (output, context) {
    return {
        friends: __expectString(output.friends),
        groups: __expectString(output.groups),
        public: __expectString(output.public),
    };
};
var deserializeAws_restJson1PartySummaries = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PartySummary(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1PartySummary = function (output, context) {
    return {
        activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity(__expectUnion(output.activity), context) : undefined,
        createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)) : undefined,
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context) : undefined,
        members: (output.members !== undefined && output.members !== null) ? deserializeAws_restJson1PartyMemberSummaries(output.members, context) : undefined,
        partyId: __expectString(output.party_id),
        partySize: __expectInt32(output.party_size),
        publicity: (output.publicity !== undefined && output.publicity !== null) ? deserializeAws_restJson1PartyPublicity(output.publicity, context) : undefined,
        threadId: __expectString(output.thread_id),
    };
};
var deserializeAws_restJson1UploadPresignedRequest = function (output, context) {
    return {
        path: __expectString(output.path),
        url: __expectString(output.url),
    };
};
var deserializeAws_restJson1Document = function (output, context) {
    return output;
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
var collectBodyString = function (streamBody, context) { return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); }); };
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") ||
            value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) { return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
}); };
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
