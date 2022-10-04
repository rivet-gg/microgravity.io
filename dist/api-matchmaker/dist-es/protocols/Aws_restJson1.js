import { __assign, __awaiter, __generator, __read } from "tslib";
import { MatchmakerServiceServiceException as __BaseException } from "../models/MatchmakerServiceServiceException";
import { BadRequestError, CaptchaConfig, ForbiddenError, InternalError, NotFoundError, RateLimitError, UnauthorizedError, } from "../models/models_0";
import { HttpRequest as __HttpRequest, } from "@aws-sdk/protocol-http";
import { decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, limitedParseDouble as __limitedParseDouble, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1FindLobbyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = __assign({ 'content-type': "application/json" }, isSerializableHeaderValue(input.origin) && { "origin": input.origin });
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/lobbies/find";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.captcha !== undefined && input.captcha !== null && { "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) })), (input.gameModes !== undefined && input.gameModes !== null && { "game_modes": serializeAws_restJson1FindGameModes(input.gameModes, context) })), (input.preventAutoCreateLobby !== undefined && input.preventAutoCreateLobby !== null && { "prevent_auto_create_lobby": input.preventAutoCreateLobby })), (input.regions !== undefined && input.regions !== null && { "regions": serializeAws_restJson1FindRegions(input.regions, context) })));
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
export var serializeAws_restJson1JoinLobbyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/lobbies/join";
                body = JSON.stringify(__assign(__assign({}, (input.captcha !== undefined && input.captcha !== null && { "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) })), (input.lobbyId !== undefined && input.lobbyId !== null && { "lobby_id": input.lobbyId })));
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
export var serializeAws_restJson1ListLobbiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/lobbies/list";
                body = "";
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListRegionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/regions";
                body = "";
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1LobbyReadyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/lobbies/ready";
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
export var serializeAws_restJson1PlayerConnectedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/players/connected";
                body = JSON.stringify(__assign({}, (input.playerToken !== undefined && input.playerToken !== null && { "player_token": input.playerToken })));
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
export var serializeAws_restJson1PlayerDisconnectedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/players/disconnected";
                body = JSON.stringify(__assign({}, (input.playerToken !== undefined && input.playerToken !== null && { "player_token": input.playerToken })));
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
export var serializeAws_restJson1SetLobbyClosedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, body;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = {
                    'content-type': "application/json",
                };
                resolvedPath = "".concat((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')) + "/lobbies/closed";
                body = JSON.stringify(__assign({}, (input.isClosed !== undefined && input.isClosed !== null && { "is_closed": input.isClosed })));
                return [2, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1FindLobbyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1FindLobbyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    lobby: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.lobby !== undefined && data.lobby !== null) {
                    contents.lobby = deserializeAws_restJson1MatchmakerLobbyJoinInfo(data.lobby, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1FindLobbyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1JoinLobbyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1JoinLobbyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    lobby: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.lobby !== undefined && data.lobby !== null) {
                    contents.lobby = deserializeAws_restJson1MatchmakerLobbyJoinInfo(data.lobby, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1JoinLobbyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1ListLobbiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListLobbiesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    gameModes: undefined,
                    lobbies: undefined,
                    regions: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.game_modes !== undefined && data.game_modes !== null) {
                    contents.gameModes = deserializeAws_restJson1GameModeInfos(data.game_modes, context);
                }
                if (data.lobbies !== undefined && data.lobbies !== null) {
                    contents.lobbies = deserializeAws_restJson1LobbyInfos(data.lobbies, context);
                }
                if (data.regions !== undefined && data.regions !== null) {
                    contents.regions = deserializeAws_restJson1RegionInfos(data.regions, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListLobbiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1ListRegionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1ListRegionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    regions: undefined,
                };
                _a = __expectNonNull;
                _b = __expectObject;
                return [4, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [(_b.apply(void 0, [_c.sent()])), "body"]);
                if (data.regions !== undefined && data.regions !== null) {
                    contents.regions = deserializeAws_restJson1RegionInfos(data.regions, context);
                }
                return [2, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListRegionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1LobbyReadyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1LobbyReadyCommandError(output, context)];
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
var deserializeAws_restJson1LobbyReadyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1PlayerConnectedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1PlayerConnectedCommandError(output, context)];
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
var deserializeAws_restJson1PlayerConnectedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1PlayerDisconnectedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1PlayerDisconnectedCommandError(output, context)];
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
var deserializeAws_restJson1PlayerDisconnectedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_restJson1SetLobbyClosedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2, deserializeAws_restJson1SetLobbyClosedCommandError(output, context)];
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
var deserializeAws_restJson1SetLobbyClosedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
var serializeAws_restJson1CaptchaConfig = function (input, context) {
    return CaptchaConfig.visit(input, {
        hcaptcha: function (value) { return ({ "hcaptcha": serializeAws_restJson1CaptchaConfigHcaptcha(value, context) }); },
        _: function (name, value) { return ({ name: value }); }
    });
};
var serializeAws_restJson1CaptchaConfigHcaptcha = function (input, context) {
    return __assign({}, (input.clientResponse !== undefined && input.clientResponse !== null && { "client_response": input.clientResponse }));
};
var serializeAws_restJson1FindGameModes = function (input, context) {
    return input.filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1FindRegions = function (input, context) {
    return input.filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1GameModeInfo = function (output, context) {
    return {
        gameModeId: __expectString(output.game_mode_id),
    };
};
var deserializeAws_restJson1GameModeInfos = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameModeInfo(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1LobbyInfo = function (output, context) {
    return {
        gameModeId: __expectString(output.game_mode_id),
        lobbyId: __expectString(output.lobby_id),
        maxPlayersDirect: __expectInt32(output.max_players_direct),
        maxPlayersNormal: __expectInt32(output.max_players_normal),
        maxPlayersParty: __expectInt32(output.max_players_party),
        regionId: __expectString(output.region_id),
        totalPlayerCount: __expectInt32(output.total_player_count),
    };
};
var deserializeAws_restJson1LobbyInfos = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LobbyInfo(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1RegionInfo = function (output, context) {
    return {
        datacenterCoord: (output.datacenter_coord !== undefined && output.datacenter_coord !== null) ? deserializeAws_restJson1Coord(output.datacenter_coord, context) : undefined,
        datacenterDistanceFromClient: (output.datacenter_distance_from_client !== undefined && output.datacenter_distance_from_client !== null) ? deserializeAws_restJson1Distance(output.datacenter_distance_from_client, context) : undefined,
        providerDisplayName: __expectString(output.provider_display_name),
        regionDisplayName: __expectString(output.region_display_name),
        regionId: __expectString(output.region_id),
    };
};
var deserializeAws_restJson1RegionInfos = function (output, context) {
    var retVal = (output || []).filter(function (e) { return e != null; }).map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RegionInfo(entry, context);
    });
    return retVal;
};
var deserializeAws_restJson1ErrorMetadata = function (output, context) {
    return output;
};
var deserializeAws_restJson1Coord = function (output, context) {
    return {
        latitude: __limitedParseDouble(output.latitude),
        longitude: __limitedParseDouble(output.longitude),
    };
};
var deserializeAws_restJson1Distance = function (output, context) {
    return {
        kilometers: __limitedParseDouble(output.kilometers),
        miles: __limitedParseDouble(output.miles),
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
