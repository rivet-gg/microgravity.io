"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1SetLobbyClosedCommand = exports.deserializeAws_restJson1PlayerDisconnectedCommand = exports.deserializeAws_restJson1PlayerConnectedCommand = exports.deserializeAws_restJson1LobbyReadyCommand = exports.deserializeAws_restJson1ListRegionsCommand = exports.deserializeAws_restJson1ListLobbiesCommand = exports.deserializeAws_restJson1JoinLobbyCommand = exports.deserializeAws_restJson1FindLobbyCommand = exports.serializeAws_restJson1SetLobbyClosedCommand = exports.serializeAws_restJson1PlayerDisconnectedCommand = exports.serializeAws_restJson1PlayerConnectedCommand = exports.serializeAws_restJson1LobbyReadyCommand = exports.serializeAws_restJson1ListRegionsCommand = exports.serializeAws_restJson1ListLobbiesCommand = exports.serializeAws_restJson1JoinLobbyCommand = exports.serializeAws_restJson1FindLobbyCommand = void 0;
const MatchmakerServiceServiceException_1 = require("../models/MatchmakerServiceServiceException");
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1FindLobbyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
        ...isSerializableHeaderValue(input.origin) && { "origin": input.origin },
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/find";
    let body;
    body = JSON.stringify({
        ...(input.captcha !== undefined && input.captcha !== null && { "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) }),
        ...(input.gameModes !== undefined && input.gameModes !== null && { "game_modes": serializeAws_restJson1FindGameModes(input.gameModes, context) }),
        ...(input.preventAutoCreateLobby !== undefined && input.preventAutoCreateLobby !== null && { "prevent_auto_create_lobby": input.preventAutoCreateLobby }),
        ...(input.regions !== undefined && input.regions !== null && { "regions": serializeAws_restJson1FindRegions(input.regions, context) }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1FindLobbyCommand = serializeAws_restJson1FindLobbyCommand;
const serializeAws_restJson1JoinLobbyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/join";
    let body;
    body = JSON.stringify({
        ...(input.captcha !== undefined && input.captcha !== null && { "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) }),
        ...(input.lobbyId !== undefined && input.lobbyId !== null && { "lobby_id": input.lobbyId }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1JoinLobbyCommand = serializeAws_restJson1JoinLobbyCommand;
const serializeAws_restJson1ListLobbiesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/list";
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListLobbiesCommand = serializeAws_restJson1ListLobbiesCommand;
const serializeAws_restJson1ListRegionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/regions";
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListRegionsCommand = serializeAws_restJson1ListRegionsCommand;
const serializeAws_restJson1LobbyReadyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/ready";
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1LobbyReadyCommand = serializeAws_restJson1LobbyReadyCommand;
const serializeAws_restJson1PlayerConnectedCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/players/connected";
    let body;
    body = JSON.stringify({
        ...(input.playerToken !== undefined && input.playerToken !== null && { "player_token": input.playerToken }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PlayerConnectedCommand = serializeAws_restJson1PlayerConnectedCommand;
const serializeAws_restJson1PlayerDisconnectedCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/players/disconnected";
    let body;
    body = JSON.stringify({
        ...(input.playerToken !== undefined && input.playerToken !== null && { "player_token": input.playerToken }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PlayerDisconnectedCommand = serializeAws_restJson1PlayerDisconnectedCommand;
const serializeAws_restJson1SetLobbyClosedCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/closed";
    let body;
    body = JSON.stringify({
        ...(input.isClosed !== undefined && input.isClosed !== null && { "is_closed": input.isClosed }),
    });
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SetLobbyClosedCommand = serializeAws_restJson1SetLobbyClosedCommand;
const deserializeAws_restJson1FindLobbyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1FindLobbyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        lobby: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.lobby !== undefined && data.lobby !== null) {
        contents.lobby = deserializeAws_restJson1MatchmakerLobbyJoinInfo(data.lobby, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FindLobbyCommand = deserializeAws_restJson1FindLobbyCommand;
const deserializeAws_restJson1FindLobbyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1JoinLobbyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1JoinLobbyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        lobby: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.lobby !== undefined && data.lobby !== null) {
        contents.lobby = deserializeAws_restJson1MatchmakerLobbyJoinInfo(data.lobby, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1JoinLobbyCommand = deserializeAws_restJson1JoinLobbyCommand;
const deserializeAws_restJson1JoinLobbyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListLobbiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLobbiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        gameModes: undefined,
        lobbies: undefined,
        regions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.game_modes !== undefined && data.game_modes !== null) {
        contents.gameModes = deserializeAws_restJson1GameModeInfos(data.game_modes, context);
    }
    if (data.lobbies !== undefined && data.lobbies !== null) {
        contents.lobbies = deserializeAws_restJson1LobbyInfos(data.lobbies, context);
    }
    if (data.regions !== undefined && data.regions !== null) {
        contents.regions = deserializeAws_restJson1RegionInfos(data.regions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLobbiesCommand = deserializeAws_restJson1ListLobbiesCommand;
const deserializeAws_restJson1ListLobbiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListRegionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRegionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        regions: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.regions !== undefined && data.regions !== null) {
        contents.regions = deserializeAws_restJson1RegionInfos(data.regions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRegionsCommand = deserializeAws_restJson1ListRegionsCommand;
const deserializeAws_restJson1ListRegionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1LobbyReadyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1LobbyReadyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1LobbyReadyCommand = deserializeAws_restJson1LobbyReadyCommand;
const deserializeAws_restJson1LobbyReadyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PlayerConnectedCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PlayerConnectedCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PlayerConnectedCommand = deserializeAws_restJson1PlayerConnectedCommand;
const deserializeAws_restJson1PlayerConnectedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PlayerDisconnectedCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PlayerDisconnectedCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PlayerDisconnectedCommand = deserializeAws_restJson1PlayerDisconnectedCommand;
const deserializeAws_restJson1PlayerDisconnectedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1SetLobbyClosedCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetLobbyClosedCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetLobbyClosedCommand = deserializeAws_restJson1SetLobbyClosedCommand;
const deserializeAws_restJson1SetLobbyClosedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context)
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestError":
        case "rivet.error#BadRequestError":
            throw await deserializeAws_restJson1BadRequestErrorResponse(parsedOutput, context);
        case "ForbiddenError":
        case "rivet.error#ForbiddenError":
            throw await deserializeAws_restJson1ForbiddenErrorResponse(parsedOutput, context);
        case "InternalError":
        case "rivet.error#InternalError":
            throw await deserializeAws_restJson1InternalErrorResponse(parsedOutput, context);
        case "NotFoundError":
        case "rivet.error#NotFoundError":
            throw await deserializeAws_restJson1NotFoundErrorResponse(parsedOutput, context);
        case "RateLimitError":
        case "rivet.error#RateLimitError":
            throw await deserializeAws_restJson1RateLimitErrorResponse(parsedOutput, context);
        case "UnauthorizedError":
        case "rivet.error#UnauthorizedError":
            throw await deserializeAws_restJson1UnauthorizedErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            response = new MatchmakerServiceServiceException_1.MatchmakerServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1BadRequestErrorResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = (0, smithy_client_1.expectString)(data.code);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.metadata !== undefined && data.metadata !== null) {
        contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
    }
    const exception = new models_0_1.BadRequestError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1ForbiddenErrorResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = (0, smithy_client_1.expectString)(data.code);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.metadata !== undefined && data.metadata !== null) {
        contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
    }
    const exception = new models_0_1.ForbiddenError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1InternalErrorResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = (0, smithy_client_1.expectString)(data.code);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.metadata !== undefined && data.metadata !== null) {
        contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
    }
    const exception = new models_0_1.InternalError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1NotFoundErrorResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = (0, smithy_client_1.expectString)(data.code);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.metadata !== undefined && data.metadata !== null) {
        contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
    }
    const exception = new models_0_1.NotFoundError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1RateLimitErrorResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = (0, smithy_client_1.expectString)(data.code);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.metadata !== undefined && data.metadata !== null) {
        contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
    }
    const exception = new models_0_1.RateLimitError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restJson1UnauthorizedErrorResponse = async (parsedOutput, context) => {
    const contents = {};
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = (0, smithy_client_1.expectString)(data.code);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = (0, smithy_client_1.expectString)(data.message);
    }
    if (data.metadata !== undefined && data.metadata !== null) {
        contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
    }
    const exception = new models_0_1.UnauthorizedError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const serializeAws_restJson1CaptchaConfig = (input, context) => {
    return models_0_1.CaptchaConfig.visit(input, {
        hcaptcha: value => ({ "hcaptcha": serializeAws_restJson1CaptchaConfigHcaptcha(value, context) }),
        _: (name, value) => ({ name: value })
    });
};
const serializeAws_restJson1CaptchaConfigHcaptcha = (input, context) => {
    return {
        ...(input.clientResponse !== undefined && input.clientResponse !== null && { "client_response": input.clientResponse }),
    };
};
const serializeAws_restJson1FindGameModes = (input, context) => {
    return input.filter((e) => e != null).map(entry => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FindRegions = (input, context) => {
    return input.filter((e) => e != null).map(entry => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1GameModeInfo = (output, context) => {
    return {
        gameModeId: (0, smithy_client_1.expectString)(output.game_mode_id),
    };
};
const deserializeAws_restJson1GameModeInfos = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameModeInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1LobbyInfo = (output, context) => {
    return {
        gameModeId: (0, smithy_client_1.expectString)(output.game_mode_id),
        lobbyId: (0, smithy_client_1.expectString)(output.lobby_id),
        maxPlayersDirect: (0, smithy_client_1.expectInt32)(output.max_players_direct),
        maxPlayersNormal: (0, smithy_client_1.expectInt32)(output.max_players_normal),
        maxPlayersParty: (0, smithy_client_1.expectInt32)(output.max_players_party),
        regionId: (0, smithy_client_1.expectString)(output.region_id),
        totalPlayerCount: (0, smithy_client_1.expectInt32)(output.total_player_count),
    };
};
const deserializeAws_restJson1LobbyInfos = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LobbyInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1RegionInfo = (output, context) => {
    return {
        datacenterCoord: (output.datacenter_coord !== undefined && output.datacenter_coord !== null) ? deserializeAws_restJson1Coord(output.datacenter_coord, context) : undefined,
        datacenterDistanceFromClient: (output.datacenter_distance_from_client !== undefined && output.datacenter_distance_from_client !== null) ? deserializeAws_restJson1Distance(output.datacenter_distance_from_client, context) : undefined,
        providerDisplayName: (0, smithy_client_1.expectString)(output.provider_display_name),
        regionDisplayName: (0, smithy_client_1.expectString)(output.region_display_name),
        regionId: (0, smithy_client_1.expectString)(output.region_id),
    };
};
const deserializeAws_restJson1RegionInfos = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RegionInfo(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ErrorMetadata = (output, context) => {
    return output;
};
const deserializeAws_restJson1Coord = (output, context) => {
    return {
        latitude: (0, smithy_client_1.limitedParseDouble)(output.latitude),
        longitude: (0, smithy_client_1.limitedParseDouble)(output.longitude),
    };
};
const deserializeAws_restJson1Distance = (output, context) => {
    return {
        kilometers: (0, smithy_client_1.limitedParseDouble)(output.kilometers),
        miles: (0, smithy_client_1.limitedParseDouble)(output.miles),
    };
};
const deserializeAws_restJson1MatchmakerLobbyJoinInfo = (output, context) => {
    return {
        lobbyId: (0, smithy_client_1.expectString)(output.lobby_id),
        player: (output.player !== undefined && output.player !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPlayer(output.player, context) : undefined,
        ports: (output.ports !== undefined && output.ports !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPorts(output.ports, context) : undefined,
        region: (output.region !== undefined && output.region !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoRegion(output.region, context) : undefined,
    };
};
const deserializeAws_restJson1MatchmakerLobbyJoinInfoPlayer = (output, context) => {
    return {
        token: (0, smithy_client_1.expectString)(output.token),
    };
};
const deserializeAws_restJson1MatchmakerLobbyJoinInfoPort = (output, context) => {
    return {
        host: (0, smithy_client_1.expectString)(output.host),
        hostname: (0, smithy_client_1.expectString)(output.hostname),
        isTls: (0, smithy_client_1.expectBoolean)(output.is_tls),
        port: (0, smithy_client_1.expectInt32)(output.port),
        portRange: (output.port_range !== undefined && output.port_range !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPortRange(output.port_range, context) : undefined,
    };
};
const deserializeAws_restJson1MatchmakerLobbyJoinInfoPortRange = (output, context) => {
    return {
        max: (0, smithy_client_1.expectInt32)(output.max),
        min: (0, smithy_client_1.expectInt32)(output.min),
    };
};
const deserializeAws_restJson1MatchmakerLobbyJoinInfoPorts = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1MatchmakerLobbyJoinInfoPort(value, context)
        };
    }, {});
};
const deserializeAws_restJson1MatchmakerLobbyJoinInfoRegion = (output, context) => {
    return {
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        regionId: (0, smithy_client_1.expectString)(output.region_id),
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then(body => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
        value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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
