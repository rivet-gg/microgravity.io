"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1WatchEventsCommand = exports.deserializeAws_restJson1ValidateIdentityProfileCommand = exports.deserializeAws_restJson1UpdateIdentityStatusCommand = exports.deserializeAws_restJson1UpdateIdentityProfileCommand = exports.deserializeAws_restJson1UnfollowIdentityCommand = exports.deserializeAws_restJson1SignupForBetaCommand = exports.deserializeAws_restJson1SetupIdentityCommand = exports.deserializeAws_restJson1SetIdentityGameActivityCommand = exports.deserializeAws_restJson1SearchIdentitiesCommand = exports.deserializeAws_restJson1RemoveIdentityGameActivityCommand = exports.deserializeAws_restJson1PrepareIdentityAvatarUploadCommand = exports.deserializeAws_restJson1PrepareGameLinkCommand = exports.deserializeAws_restJson1ListFriendsCommand = exports.deserializeAws_restJson1ListFollowingCommand = exports.deserializeAws_restJson1ListFollowersCommand = exports.deserializeAws_restJson1ListActivitiesCommand = exports.deserializeAws_restJson1GetIdentitySelfProfileCommand = exports.deserializeAws_restJson1GetIdentityProfileCommand = exports.deserializeAws_restJson1GetGameLinkCommand = exports.deserializeAws_restJson1FollowIdentityCommand = exports.deserializeAws_restJson1CompleteIdentityAvatarUploadCommand = exports.deserializeAws_restJson1CompleteGameLinkCommand = exports.serializeAws_restJson1WatchEventsCommand = exports.serializeAws_restJson1ValidateIdentityProfileCommand = exports.serializeAws_restJson1UpdateIdentityStatusCommand = exports.serializeAws_restJson1UpdateIdentityProfileCommand = exports.serializeAws_restJson1UnfollowIdentityCommand = exports.serializeAws_restJson1SignupForBetaCommand = exports.serializeAws_restJson1SetupIdentityCommand = exports.serializeAws_restJson1SetIdentityGameActivityCommand = exports.serializeAws_restJson1SearchIdentitiesCommand = exports.serializeAws_restJson1RemoveIdentityGameActivityCommand = exports.serializeAws_restJson1PrepareIdentityAvatarUploadCommand = exports.serializeAws_restJson1PrepareGameLinkCommand = exports.serializeAws_restJson1ListFriendsCommand = exports.serializeAws_restJson1ListFollowingCommand = exports.serializeAws_restJson1ListFollowersCommand = exports.serializeAws_restJson1ListActivitiesCommand = exports.serializeAws_restJson1GetIdentitySelfProfileCommand = exports.serializeAws_restJson1GetIdentityProfileCommand = exports.serializeAws_restJson1GetGameLinkCommand = exports.serializeAws_restJson1FollowIdentityCommand = exports.serializeAws_restJson1CompleteIdentityAvatarUploadCommand = exports.serializeAws_restJson1CompleteGameLinkCommand = void 0;
const IdentityServiceServiceException_1 = require("../models/IdentityServiceServiceException");
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CompleteGameLinkCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links/complete";
    let body;
    body = JSON.stringify({
        ...(input.identityLinkToken !== undefined && input.identityLinkToken !== null && { "identity_link_token": input.identityLinkToken }),
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
exports.serializeAws_restJson1CompleteGameLinkCommand = serializeAws_restJson1CompleteGameLinkCommand;
const serializeAws_restJson1CompleteIdentityAvatarUploadCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/avatar-upload/{upload_id}/complete";
    if (input.uploadId !== undefined) {
        const labelValue = input.uploadId;
        if (labelValue.length <= 0) {
            throw new Error('Empty value provided for input HTTP label: uploadId.');
        }
        resolvedPath = resolvedPath.replace("{upload_id}", (0, smithy_client_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error('No value provided for input HTTP label: uploadId.');
    }
    let body;
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
exports.serializeAws_restJson1CompleteIdentityAvatarUploadCommand = serializeAws_restJson1CompleteIdentityAvatarUploadCommand;
const serializeAws_restJson1FollowIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/follow";
    if (input.identityId !== undefined) {
        const labelValue = input.identityId;
        if (labelValue.length <= 0) {
            throw new Error('Empty value provided for input HTTP label: identityId.');
        }
        resolvedPath = resolvedPath.replace("{identity_id}", (0, smithy_client_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error('No value provided for input HTTP label: identityId.');
    }
    let body;
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
exports.serializeAws_restJson1FollowIdentityCommand = serializeAws_restJson1FollowIdentityCommand;
const serializeAws_restJson1GetGameLinkCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links";
    const query = {
        ...(input.identityLinkToken !== undefined && { "identity_link_token": input.identityLinkToken }),
        ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetGameLinkCommand = serializeAws_restJson1GetGameLinkCommand;
const serializeAws_restJson1GetIdentityProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/profile";
    if (input.identityId !== undefined) {
        const labelValue = input.identityId;
        if (labelValue.length <= 0) {
            throw new Error('Empty value provided for input HTTP label: identityId.');
        }
        resolvedPath = resolvedPath.replace("{identity_id}", (0, smithy_client_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error('No value provided for input HTTP label: identityId.');
    }
    const query = {
        ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetIdentityProfileCommand = serializeAws_restJson1GetIdentityProfileCommand;
const serializeAws_restJson1GetIdentitySelfProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/profile";
    const query = {
        ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetIdentitySelfProfileCommand = serializeAws_restJson1GetIdentitySelfProfileCommand;
const serializeAws_restJson1ListActivitiesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/activities";
    const query = {
        ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListActivitiesCommand = serializeAws_restJson1ListActivitiesCommand;
const serializeAws_restJson1ListFollowersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/followers";
    if (input.identityId !== undefined) {
        const labelValue = input.identityId;
        if (labelValue.length <= 0) {
            throw new Error('Empty value provided for input HTTP label: identityId.');
        }
        resolvedPath = resolvedPath.replace("{identity_id}", (0, smithy_client_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error('No value provided for input HTTP label: identityId.');
    }
    const query = {
        ...(input.anchor !== undefined && { "anchor": input.anchor }),
        ...(input.limit !== undefined && { "limit": input.limit.toString() }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListFollowersCommand = serializeAws_restJson1ListFollowersCommand;
const serializeAws_restJson1ListFollowingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/following";
    if (input.identityId !== undefined) {
        const labelValue = input.identityId;
        if (labelValue.length <= 0) {
            throw new Error('Empty value provided for input HTTP label: identityId.');
        }
        resolvedPath = resolvedPath.replace("{identity_id}", (0, smithy_client_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error('No value provided for input HTTP label: identityId.');
    }
    const query = {
        ...(input.anchor !== undefined && { "anchor": input.anchor }),
        ...(input.limit !== undefined && { "limit": input.limit.toString() }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListFollowingCommand = serializeAws_restJson1ListFollowingCommand;
const serializeAws_restJson1ListFriendsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/friends";
    const query = {
        ...(input.anchor !== undefined && { "anchor": input.anchor }),
        ...(input.limit !== undefined && { "limit": input.limit.toString() }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListFriendsCommand = serializeAws_restJson1ListFriendsCommand;
const serializeAws_restJson1PrepareGameLinkCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links";
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
exports.serializeAws_restJson1PrepareGameLinkCommand = serializeAws_restJson1PrepareGameLinkCommand;
const serializeAws_restJson1PrepareIdentityAvatarUploadCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/avatar-upload/prepare";
    let body;
    body = JSON.stringify({
        ...(input.contentLength !== undefined && input.contentLength !== null && { "content_length": input.contentLength }),
        ...(input.mime !== undefined && input.mime !== null && { "mime": input.mime }),
        ...(input.path !== undefined && input.path !== null && { "path": input.path }),
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
exports.serializeAws_restJson1PrepareIdentityAvatarUploadCommand = serializeAws_restJson1PrepareIdentityAvatarUploadCommand;
const serializeAws_restJson1RemoveIdentityGameActivityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/activity";
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1RemoveIdentityGameActivityCommand = serializeAws_restJson1RemoveIdentityGameActivityCommand;
const serializeAws_restJson1SearchIdentitiesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/search";
    const query = {
        ...(input.query !== undefined && { "query": input.query }),
        ...(input.anchor !== undefined && { "anchor": input.anchor }),
        ...(input.limit !== undefined && { "limit": input.limit.toString() }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1SearchIdentitiesCommand = serializeAws_restJson1SearchIdentitiesCommand;
const serializeAws_restJson1SetIdentityGameActivityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/activity";
    let body;
    body = JSON.stringify({
        ...(input.gameActivity !== undefined && input.gameActivity !== null && { "game_activity": serializeAws_restJson1UpdateIdentityGameActivity(input.gameActivity, context) }),
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
exports.serializeAws_restJson1SetIdentityGameActivityCommand = serializeAws_restJson1SetIdentityGameActivityCommand;
const serializeAws_restJson1SetupIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities";
    let body;
    body = JSON.stringify({
        ...(input.existingIdentityToken !== undefined && input.existingIdentityToken !== null && { "existing_identity_token": input.existingIdentityToken }),
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
exports.serializeAws_restJson1SetupIdentityCommand = serializeAws_restJson1SetupIdentityCommand;
const serializeAws_restJson1SignupForBetaCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/beta-signup";
    let body;
    body = JSON.stringify({
        ...(input.companyName !== undefined && input.companyName !== null && { "company_name": input.companyName }),
        ...(input.companySize !== undefined && input.companySize !== null && { "company_size": input.companySize }),
        ...(input.goals !== undefined && input.goals !== null && { "goals": input.goals }),
        ...(input.name !== undefined && input.name !== null && { "name": input.name }),
        ...(input.preferredTools !== undefined && input.preferredTools !== null && { "preferred_tools": input.preferredTools }),
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
exports.serializeAws_restJson1SignupForBetaCommand = serializeAws_restJson1SignupForBetaCommand;
const serializeAws_restJson1UnfollowIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/follow";
    if (input.identityId !== undefined) {
        const labelValue = input.identityId;
        if (labelValue.length <= 0) {
            throw new Error('Empty value provided for input HTTP label: identityId.');
        }
        resolvedPath = resolvedPath.replace("{identity_id}", (0, smithy_client_1.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error('No value provided for input HTTP label: identityId.');
    }
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UnfollowIdentityCommand = serializeAws_restJson1UnfollowIdentityCommand;
const serializeAws_restJson1UpdateIdentityProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/profile";
    let body;
    body = JSON.stringify({
        ...(input.accountNumber !== undefined && input.accountNumber !== null && { "account_number": input.accountNumber }),
        ...(input.bio !== undefined && input.bio !== null && { "bio": input.bio }),
        ...(input.displayName !== undefined && input.displayName !== null && { "display_name": input.displayName }),
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
exports.serializeAws_restJson1UpdateIdentityProfileCommand = serializeAws_restJson1UpdateIdentityProfileCommand;
const serializeAws_restJson1UpdateIdentityStatusCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/status";
    let body;
    body = JSON.stringify({
        ...(input.status !== undefined && input.status !== null && { "status": input.status }),
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
exports.serializeAws_restJson1UpdateIdentityStatusCommand = serializeAws_restJson1UpdateIdentityStatusCommand;
const serializeAws_restJson1ValidateIdentityProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        'content-type': "application/json",
    };
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/profile/validate";
    let body;
    body = JSON.stringify({
        ...(input.accountNumber !== undefined && input.accountNumber !== null && { "account_number": input.accountNumber }),
        ...(input.bio !== undefined && input.bio !== null && { "bio": input.bio }),
        ...(input.displayName !== undefined && input.displayName !== null && { "display_name": input.displayName }),
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
exports.serializeAws_restJson1ValidateIdentityProfileCommand = serializeAws_restJson1ValidateIdentityProfileCommand;
const serializeAws_restJson1WatchEventsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${(basePath === null || basePath === void 0 ? void 0 : basePath.endsWith('/')) ? basePath.slice(0, -1) : (basePath || '')}` + "/events/live";
    const query = {
        ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
    };
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1WatchEventsCommand = serializeAws_restJson1WatchEventsCommand;
const deserializeAws_restJson1CompleteGameLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteGameLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CompleteGameLinkCommand = deserializeAws_restJson1CompleteGameLinkCommand;
const deserializeAws_restJson1CompleteGameLinkCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1CompleteIdentityAvatarUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteIdentityAvatarUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CompleteIdentityAvatarUploadCommand = deserializeAws_restJson1CompleteIdentityAvatarUploadCommand;
const deserializeAws_restJson1CompleteIdentityAvatarUploadCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1FollowIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1FollowIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FollowIdentityCommand = deserializeAws_restJson1FollowIdentityCommand;
const deserializeAws_restJson1FollowIdentityCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetGameLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGameLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        game: undefined,
        newIdentity: undefined,
        status: undefined,
        watch: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.game !== undefined && data.game !== null) {
        contents.game = deserializeAws_restJson1GameHandle(data.game, context);
    }
    if (data.new_identity !== undefined && data.new_identity !== null) {
        contents.newIdentity = deserializeAws_restJson1GetGameLinkNewIdentity(data.new_identity, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = (0, smithy_client_1.expectString)(data.status);
    }
    if (data.watch !== undefined && data.watch !== null) {
        contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGameLinkCommand = deserializeAws_restJson1GetGameLinkCommand;
const deserializeAws_restJson1GetGameLinkCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetIdentityProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIdentityProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        identity: undefined,
        watch: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.identity !== undefined && data.identity !== null) {
        contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
    }
    if (data.watch !== undefined && data.watch !== null) {
        contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIdentityProfileCommand = deserializeAws_restJson1GetIdentityProfileCommand;
const deserializeAws_restJson1GetIdentityProfileCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1GetIdentitySelfProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIdentitySelfProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        identity: undefined,
        watch: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.identity !== undefined && data.identity !== null) {
        contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
    }
    if (data.watch !== undefined && data.watch !== null) {
        contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIdentitySelfProfileCommand = deserializeAws_restJson1GetIdentitySelfProfileCommand;
const deserializeAws_restJson1GetIdentitySelfProfileCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListActivitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListActivitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        games: undefined,
        identities: undefined,
        parties: undefined,
        suggestedGroups: undefined,
        suggestedPlayers: undefined,
        watch: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListActivitiesCommand = deserializeAws_restJson1ListActivitiesCommand;
const deserializeAws_restJson1ListActivitiesCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListFollowersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFollowersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        anchor: undefined,
        identities: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.anchor !== undefined && data.anchor !== null) {
        contents.anchor = (0, smithy_client_1.expectString)(data.anchor);
    }
    if (data.identities !== undefined && data.identities !== null) {
        contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFollowersCommand = deserializeAws_restJson1ListFollowersCommand;
const deserializeAws_restJson1ListFollowersCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListFollowingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFollowingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        anchor: undefined,
        identities: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.anchor !== undefined && data.anchor !== null) {
        contents.anchor = (0, smithy_client_1.expectString)(data.anchor);
    }
    if (data.identities !== undefined && data.identities !== null) {
        contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFollowingCommand = deserializeAws_restJson1ListFollowingCommand;
const deserializeAws_restJson1ListFollowingCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ListFriendsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFriendsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        anchor: undefined,
        identities: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.anchor !== undefined && data.anchor !== null) {
        contents.anchor = (0, smithy_client_1.expectString)(data.anchor);
    }
    if (data.identities !== undefined && data.identities !== null) {
        contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFriendsCommand = deserializeAws_restJson1ListFriendsCommand;
const deserializeAws_restJson1ListFriendsCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PrepareGameLinkCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PrepareGameLinkCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        expireTs: undefined,
        identityLinkToken: undefined,
        identityLinkUrl: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.expire_ts !== undefined && data.expire_ts !== null) {
        contents.expireTs = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.expire_ts));
    }
    if (data.identity_link_token !== undefined && data.identity_link_token !== null) {
        contents.identityLinkToken = (0, smithy_client_1.expectString)(data.identity_link_token);
    }
    if (data.identity_link_url !== undefined && data.identity_link_url !== null) {
        contents.identityLinkUrl = (0, smithy_client_1.expectString)(data.identity_link_url);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PrepareGameLinkCommand = deserializeAws_restJson1PrepareGameLinkCommand;
const deserializeAws_restJson1PrepareGameLinkCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1PrepareIdentityAvatarUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PrepareIdentityAvatarUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        presignedRequest: undefined,
        uploadId: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.presigned_request !== undefined && data.presigned_request !== null) {
        contents.presignedRequest = deserializeAws_restJson1UploadPresignedRequest(data.presigned_request, context);
    }
    if (data.upload_id !== undefined && data.upload_id !== null) {
        contents.uploadId = (0, smithy_client_1.expectString)(data.upload_id);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PrepareIdentityAvatarUploadCommand = deserializeAws_restJson1PrepareIdentityAvatarUploadCommand;
const deserializeAws_restJson1PrepareIdentityAvatarUploadCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1RemoveIdentityGameActivityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveIdentityGameActivityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveIdentityGameActivityCommand = deserializeAws_restJson1RemoveIdentityGameActivityCommand;
const deserializeAws_restJson1RemoveIdentityGameActivityCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1SearchIdentitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchIdentitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        anchor: undefined,
        identities: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.anchor !== undefined && data.anchor !== null) {
        contents.anchor = (0, smithy_client_1.expectString)(data.anchor);
    }
    if (data.identities !== undefined && data.identities !== null) {
        contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchIdentitiesCommand = deserializeAws_restJson1SearchIdentitiesCommand;
const deserializeAws_restJson1SearchIdentitiesCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1SetIdentityGameActivityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetIdentityGameActivityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetIdentityGameActivityCommand = deserializeAws_restJson1SetIdentityGameActivityCommand;
const deserializeAws_restJson1SetIdentityGameActivityCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1SetupIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetupIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        identity: undefined,
        identityToken: undefined,
        identityTokenExpireTs: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.identity !== undefined && data.identity !== null) {
        contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
    }
    if (data.identity_token !== undefined && data.identity_token !== null) {
        contents.identityToken = (0, smithy_client_1.expectString)(data.identity_token);
    }
    if (data.identity_token_expire_ts !== undefined && data.identity_token_expire_ts !== null) {
        contents.identityTokenExpireTs = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(data.identity_token_expire_ts));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetupIdentityCommand = deserializeAws_restJson1SetupIdentityCommand;
const deserializeAws_restJson1SetupIdentityCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1SignupForBetaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SignupForBetaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SignupForBetaCommand = deserializeAws_restJson1SignupForBetaCommand;
const deserializeAws_restJson1SignupForBetaCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1UnfollowIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UnfollowIdentityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UnfollowIdentityCommand = deserializeAws_restJson1UnfollowIdentityCommand;
const deserializeAws_restJson1UnfollowIdentityCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1UpdateIdentityProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIdentityProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIdentityProfileCommand = deserializeAws_restJson1UpdateIdentityProfileCommand;
const deserializeAws_restJson1UpdateIdentityProfileCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1UpdateIdentityStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIdentityStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIdentityStatusCommand = deserializeAws_restJson1UpdateIdentityStatusCommand;
const deserializeAws_restJson1UpdateIdentityStatusCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1ValidateIdentityProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ValidateIdentityProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        errors: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.errors !== undefined && data.errors !== null) {
        contents.errors = deserializeAws_restJson1ValidationErrors(data.errors, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ValidateIdentityProfileCommand = deserializeAws_restJson1ValidateIdentityProfileCommand;
const deserializeAws_restJson1ValidateIdentityProfileCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
            });
            throw (0, smithy_client_1.decorateServiceException)(response, parsedBody);
    }
};
const deserializeAws_restJson1WatchEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1WatchEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        events: undefined,
        watch: undefined,
    };
    const data = (0, smithy_client_1.expectNonNull)(((0, smithy_client_1.expectObject)(await parseBody(output.body, context))), "body");
    if (data.events !== undefined && data.events !== null) {
        contents.events = deserializeAws_restJson1GlobalEvents(data.events, context);
    }
    if (data.watch !== undefined && data.watch !== null) {
        contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1WatchEventsCommand = deserializeAws_restJson1WatchEventsCommand;
const deserializeAws_restJson1WatchEventsCommandError = async (output, context) => {
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
            response = new IdentityServiceServiceException_1.IdentityServiceServiceException({
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
const serializeAws_restJson1UpdateIdentityGameActivity = (input, context) => {
    return {
        ...(input.friendMetadata !== undefined && input.friendMetadata !== null && { "friend_metadata": serializeAws_restJson1Document(input.friendMetadata, context) }),
        ...(input.message !== undefined && input.message !== null && { "message": input.message }),
        ...(input.publicMetadata !== undefined && input.publicMetadata !== null && { "public_metadata": serializeAws_restJson1Document(input.publicMetadata, context) }),
    };
};
const serializeAws_restJson1Document = (input, context) => {
    return input;
};
const deserializeAws_restJson1GetGameLinkNewIdentity = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityProfile(output.identity, context) : undefined,
        identityToken: (0, smithy_client_1.expectString)(output.identity_token),
        identityTokenExpireTs: (output.identity_token_expire_ts !== undefined && output.identity_token_expire_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.identity_token_expire_ts)) : undefined,
    };
};
const deserializeAws_restJson1GlobalEvent = (output, context) => {
    return {
        kind: (output.kind !== undefined && output.kind !== null) ? deserializeAws_restJson1GlobalEventKind((0, smithy_client_1.expectUnion)(output.kind), context) : undefined,
        notification: (output.notification !== undefined && output.notification !== null) ? deserializeAws_restJson1GlobalEventNotification(output.notification, context) : undefined,
        ts: (output.ts !== undefined && output.ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.ts)) : undefined,
    };
};
const deserializeAws_restJson1GlobalEventChatMessage = (output, context) => {
    return {
        thread: (output.thread !== undefined && output.thread !== null) ? deserializeAws_restJson1ChatThread(output.thread, context) : undefined,
    };
};
const deserializeAws_restJson1GlobalEventChatRead = (output, context) => {
    return {
        readTs: (output.read_ts !== undefined && output.read_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.read_ts)) : undefined,
        threadId: (0, smithy_client_1.expectString)(output.thread_id),
    };
};
const deserializeAws_restJson1GlobalEventIdentityUpdate = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityProfile(output.identity, context) : undefined,
    };
};
const deserializeAws_restJson1GlobalEventKind = (output, context) => {
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
const deserializeAws_restJson1GlobalEventMatchmakerLobbyJoin = (output, context) => {
    return {
        lobby: (output.lobby !== undefined && output.lobby !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfo(output.lobby, context) : undefined,
    };
};
const deserializeAws_restJson1GlobalEventNotification = (output, context) => {
    return {
        description: (0, smithy_client_1.expectString)(output.description),
        thumbnailUrl: (0, smithy_client_1.expectString)(output.thumbnail_url),
        title: (0, smithy_client_1.expectString)(output.title),
        url: (0, smithy_client_1.expectString)(output.url),
    };
};
const deserializeAws_restJson1GlobalEventPartyUpdate = (output, context) => {
    return {
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartySummary(output.party, context) : undefined,
    };
};
const deserializeAws_restJson1GlobalEvents = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GlobalEvent(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1ChatMessage = (output, context) => {
    return {
        body: (output.body !== undefined && output.body !== null) ? deserializeAws_restJson1ChatMessageBody((0, smithy_client_1.expectUnion)(output.body), context) : undefined,
        chatMessageId: (0, smithy_client_1.expectString)(output.chat_message_id),
        sendTs: (output.send_ts !== undefined && output.send_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.send_ts)) : undefined,
        threadId: (0, smithy_client_1.expectString)(output.thread_id),
    };
};
const deserializeAws_restJson1ChatMessageBody = (output, context) => {
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
const deserializeAws_restJson1ChatMessageBodyChatCreate = (output, context) => {
    return {};
};
const deserializeAws_restJson1ChatMessageBodyGroupJoin = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
const deserializeAws_restJson1ChatMessageBodyGroupLeave = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
const deserializeAws_restJson1ChatMessageBodyIdentityFollow = (output, context) => {
    return {};
};
const deserializeAws_restJson1ChatMessageBodyPartyActivityChange = (output, context) => {
    return {};
};
const deserializeAws_restJson1ChatMessageBodyPartyInvite = (output, context) => {
    return {
        inviteToken: (0, smithy_client_1.expectString)(output.invite_token),
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context) : undefined,
        sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context) : undefined,
    };
};
const deserializeAws_restJson1ChatMessageBodyPartyJoin = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
const deserializeAws_restJson1ChatMessageBodyPartyJoinRequest = (output, context) => {
    return {
        sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context) : undefined,
    };
};
const deserializeAws_restJson1ChatMessageBodyPartyLeave = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
    };
};
const deserializeAws_restJson1ChatMessageBodyText = (output, context) => {
    return {
        body: (0, smithy_client_1.expectString)(output.body),
        sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context) : undefined,
    };
};
const deserializeAws_restJson1ChatThread = (output, context) => {
    return {
        createTs: (output.create_ts !== undefined && output.create_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.create_ts)) : undefined,
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1ChatThreadExternalLinks(output.external, context) : undefined,
        lastReadTs: (output.last_read_ts !== undefined && output.last_read_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.last_read_ts)) : undefined,
        tailMessage: (output.tail_message !== undefined && output.tail_message !== null) ? deserializeAws_restJson1ChatMessage(output.tail_message, context) : undefined,
        threadId: (0, smithy_client_1.expectString)(output.thread_id),
        topic: (output.topic !== undefined && output.topic !== null) ? deserializeAws_restJson1ChatTopic((0, smithy_client_1.expectUnion)(output.topic), context) : undefined,
        unreadCount: (0, smithy_client_1.expectLong)(output.unread_count),
    };
};
const deserializeAws_restJson1ChatThreadExternalLinks = (output, context) => {
    return {
        chat: (0, smithy_client_1.expectString)(output.chat),
    };
};
const deserializeAws_restJson1ChatTopic = (output, context) => {
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
const deserializeAws_restJson1ChatTopicDirect = (output, context) => {
    return {
        identityA: (output.identity_a !== undefined && output.identity_a !== null) ? deserializeAws_restJson1IdentityHandle(output.identity_a, context) : undefined,
        identityB: (output.identity_b !== undefined && output.identity_b !== null) ? deserializeAws_restJson1IdentityHandle(output.identity_b, context) : undefined,
    };
};
const deserializeAws_restJson1ChatTopicGroup = (output, context) => {
    return {
        group: (output.group !== undefined && output.group !== null) ? deserializeAws_restJson1GroupHandle(output.group, context) : undefined,
    };
};
const deserializeAws_restJson1ChatTopicParty = (output, context) => {
    return {
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context) : undefined,
    };
};
const deserializeAws_restJson1ValidationError = (output, context) => {
    return {
        path: (output.path !== undefined && output.path !== null) ? deserializeAws_restJson1ValidationErrorPath(output.path, context) : undefined,
    };
};
const deserializeAws_restJson1ValidationErrorPath = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return (0, smithy_client_1.expectString)(entry);
    });
    return retVal;
};
const deserializeAws_restJson1ValidationErrors = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationError(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1WatchResponse = (output, context) => {
    return {
        index: (0, smithy_client_1.expectString)(output.index),
    };
};
const deserializeAws_restJson1ErrorMetadata = (output, context) => {
    return output;
};
const deserializeAws_restJson1GameHandle = (output, context) => {
    return {
        bannerUrl: (0, smithy_client_1.expectString)(output.banner_url),
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        gameId: (0, smithy_client_1.expectString)(output.game_id),
        logoUrl: (0, smithy_client_1.expectString)(output.logo_url),
        nameId: (0, smithy_client_1.expectString)(output.name_id),
    };
};
const deserializeAws_restJson1GameHandles = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameHandle(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1GameStat = (output, context) => {
    return {
        config: (output.config !== undefined && output.config !== null) ? deserializeAws_restJson1GameStatConfig(output.config, context) : undefined,
        overallValue: (0, smithy_client_1.limitedParseFloat32)(output.overall_value),
    };
};
const deserializeAws_restJson1GameStatConfig = (output, context) => {
    return {
        aggregation: (0, smithy_client_1.expectString)(output.aggregation),
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        format: (0, smithy_client_1.expectString)(output.format),
        iconId: (0, smithy_client_1.expectString)(output.icon_id),
        postfixPlural: (0, smithy_client_1.expectString)(output.postfix_plural),
        postfixSingular: (0, smithy_client_1.expectString)(output.postfix_singular),
        prefixPlural: (0, smithy_client_1.expectString)(output.prefix_plural),
        prefixSingular: (0, smithy_client_1.expectString)(output.prefix_singular),
        priority: (0, smithy_client_1.expectInt32)(output.priority),
        recordId: (0, smithy_client_1.expectString)(output.record_id),
        sorting: (0, smithy_client_1.expectString)(output.sorting),
    };
};
const deserializeAws_restJson1GameStats = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameStat(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1GameStatSummaries = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GameStatSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1GameStatSummary = (output, context) => {
    return {
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
        stats: (output.stats !== undefined && output.stats !== null) ? deserializeAws_restJson1GameStats(output.stats, context) : undefined,
    };
};
const deserializeAws_restJson1GroupExternalLinks = (output, context) => {
    return {
        chat: (0, smithy_client_1.expectString)(output.chat),
        profile: (0, smithy_client_1.expectString)(output.profile),
    };
};
const deserializeAws_restJson1GroupHandle = (output, context) => {
    return {
        avatarUrl: (0, smithy_client_1.expectString)(output.avatar_url),
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1GroupExternalLinks(output.external, context) : undefined,
        groupId: (0, smithy_client_1.expectString)(output.group_id),
        isDeveloper: (0, smithy_client_1.expectBoolean)(output.is_developer),
    };
};
const deserializeAws_restJson1GroupSummaries = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1GroupSummary = (output, context) => {
    return {
        avatarUrl: (0, smithy_client_1.expectString)(output.avatar_url),
        bio: (0, smithy_client_1.expectString)(output.bio),
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1GroupExternalLinks(output.external, context) : undefined,
        groupId: (0, smithy_client_1.expectString)(output.group_id),
        isCurrentIdentityMember: (0, smithy_client_1.expectBoolean)(output.is_current_identity_member),
        isDeveloper: (0, smithy_client_1.expectBoolean)(output.is_developer),
        memberCount: (0, smithy_client_1.expectInt32)(output.member_count),
        publicity: (0, smithy_client_1.expectString)(output.publicity),
    };
};
const deserializeAws_restJson1IdentityEmailLinkedAccount = (output, context) => {
    return {
        email: (0, smithy_client_1.expectString)(output.email),
    };
};
const deserializeAws_restJson1IdentityExternalLinks = (output, context) => {
    return {
        chat: (0, smithy_client_1.expectString)(output.chat),
        profile: (0, smithy_client_1.expectString)(output.profile),
        settings: (0, smithy_client_1.expectString)(output.settings),
    };
};
const deserializeAws_restJson1IdentityGameActivity = (output, context) => {
    return {
        friendMetadata: (output.friend_metadata !== undefined && output.friend_metadata !== null) ? deserializeAws_restJson1Document(output.friend_metadata, context) : undefined,
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
        message: (0, smithy_client_1.expectString)(output.message),
        publicMetadata: (output.public_metadata !== undefined && output.public_metadata !== null) ? deserializeAws_restJson1Document(output.public_metadata, context) : undefined,
    };
};
const deserializeAws_restJson1IdentityGroup = (output, context) => {
    return {
        group: (output.group !== undefined && output.group !== null) ? deserializeAws_restJson1GroupHandle(output.group, context) : undefined,
    };
};
const deserializeAws_restJson1IdentityGroups = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityGroup(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1IdentityHandle = (output, context) => {
    return {
        accountNumber: (0, smithy_client_1.expectInt32)(output.account_number),
        avatarUrl: (0, smithy_client_1.expectString)(output.avatar_url),
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context) : undefined,
        identityId: (0, smithy_client_1.expectString)(output.identity_id),
        isRegistered: (0, smithy_client_1.expectBoolean)(output.is_registered),
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context) : undefined,
        presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context) : undefined,
    };
};
const deserializeAws_restJson1IdentityHandles = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityHandle(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1IdentityLinkedAccount = (output, context) => {
    if (output.email !== undefined && output.email !== null) {
        return {
            email: deserializeAws_restJson1IdentityEmailLinkedAccount(output.email, context)
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1IdentityLinkedAccounts = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityLinkedAccount((0, smithy_client_1.expectUnion)(entry), context);
    });
    return retVal;
};
const deserializeAws_restJson1IdentityPresence = (output, context) => {
    return {
        gameActivity: (output.game_activity !== undefined && output.game_activity !== null) ? deserializeAws_restJson1IdentityGameActivity(output.game_activity, context) : undefined,
        status: (0, smithy_client_1.expectString)(output.status),
        updateTs: (output.update_ts !== undefined && output.update_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.update_ts)) : undefined,
    };
};
const deserializeAws_restJson1IdentityProfile = (output, context) => {
    return {
        accountNumber: (0, smithy_client_1.expectInt32)(output.account_number),
        avatarUrl: (0, smithy_client_1.expectString)(output.avatar_url),
        bio: (0, smithy_client_1.expectString)(output.bio),
        devState: (0, smithy_client_1.expectString)(output.dev_state),
        displayName: (0, smithy_client_1.expectString)(output.display_name),
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context) : undefined,
        followerCount: (0, smithy_client_1.expectInt32)(output.follower_count),
        followingCount: (0, smithy_client_1.expectInt32)(output.following_count),
        games: (output.games !== undefined && output.games !== null) ? deserializeAws_restJson1GameStatSummaries(output.games, context) : undefined,
        groups: (output.groups !== undefined && output.groups !== null) ? deserializeAws_restJson1IdentityGroups(output.groups, context) : undefined,
        identityId: (0, smithy_client_1.expectString)(output.identity_id),
        isAdmin: (0, smithy_client_1.expectBoolean)(output.is_admin),
        isGameLinked: (0, smithy_client_1.expectBoolean)(output.is_game_linked),
        isMutualFriend: (0, smithy_client_1.expectBoolean)(output.is_mutual_friend),
        isMyFriend: (0, smithy_client_1.expectBoolean)(output.is_my_friend),
        isRegistered: (0, smithy_client_1.expectBoolean)(output.is_registered),
        isTheirFriend: (0, smithy_client_1.expectBoolean)(output.is_their_friend),
        joinTs: (output.join_ts !== undefined && output.join_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.join_ts)) : undefined,
        linkedAccounts: (output.linked_accounts !== undefined && output.linked_accounts !== null) ? deserializeAws_restJson1IdentityLinkedAccounts(output.linked_accounts, context) : undefined,
        party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartySummary(output.party, context) : undefined,
        presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context) : undefined,
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
const deserializeAws_restJson1PartyActivity = (output, context) => {
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
const deserializeAws_restJson1PartyActivityIdle = (output, context) => {
    return {};
};
const deserializeAws_restJson1PartyActivityMatchmakerFindingLobby = (output, context) => {
    return {
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
    };
};
const deserializeAws_restJson1PartyActivityMatchmakerLobby = (output, context) => {
    return {
        game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context) : undefined,
        lobby: (output.lobby !== undefined && output.lobby !== null) ? deserializeAws_restJson1PartyMatchmakerLobby(output.lobby, context) : undefined,
    };
};
const deserializeAws_restJson1PartyExternalLinks = (output, context) => {
    return {
        chat: (0, smithy_client_1.expectString)(output.chat),
    };
};
const deserializeAws_restJson1PartyHandle = (output, context) => {
    return {
        activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity((0, smithy_client_1.expectUnion)(output.activity), context) : undefined,
        createTs: (output.create_ts !== undefined && output.create_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.create_ts)) : undefined,
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context) : undefined,
        partyId: (0, smithy_client_1.expectString)(output.party_id),
    };
};
const deserializeAws_restJson1PartyMatchmakerLobby = (output, context) => {
    return {
        lobbyId: (0, smithy_client_1.expectString)(output.lobby_id),
    };
};
const deserializeAws_restJson1PartyMemberState = (output, context) => {
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
const deserializeAws_restJson1PartyMemberStateIdle = (output, context) => {
    return {};
};
const deserializeAws_restJson1PartyMemberStateMatchmakerFindingLobby = (output, context) => {
    return {};
};
const deserializeAws_restJson1PartyMemberStateMatchmakerLobby = (output, context) => {
    return {
        playerId: (0, smithy_client_1.expectString)(output.player_id),
    };
};
const deserializeAws_restJson1PartyMemberStateMatchmakerPending = (output, context) => {
    return {};
};
const deserializeAws_restJson1PartyMemberSummaries = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PartyMemberSummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PartyMemberSummary = (output, context) => {
    return {
        identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context) : undefined,
        isLeader: (0, smithy_client_1.expectBoolean)(output.is_leader),
        joinTs: (output.join_ts !== undefined && output.join_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.join_ts)) : undefined,
        state: (output.state !== undefined && output.state !== null) ? deserializeAws_restJson1PartyMemberState((0, smithy_client_1.expectUnion)(output.state), context) : undefined,
    };
};
const deserializeAws_restJson1PartyPublicity = (output, context) => {
    return {
        friends: (0, smithy_client_1.expectString)(output.friends),
        groups: (0, smithy_client_1.expectString)(output.groups),
        public: (0, smithy_client_1.expectString)(output.public),
    };
};
const deserializeAws_restJson1PartySummaries = (output, context) => {
    const retVal = (output || []).filter((e) => e != null).map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PartySummary(entry, context);
    });
    return retVal;
};
const deserializeAws_restJson1PartySummary = (output, context) => {
    return {
        activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity((0, smithy_client_1.expectUnion)(output.activity), context) : undefined,
        createTs: (output.create_ts !== undefined && output.create_ts !== null) ? (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTime)(output.create_ts)) : undefined,
        external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context) : undefined,
        members: (output.members !== undefined && output.members !== null) ? deserializeAws_restJson1PartyMemberSummaries(output.members, context) : undefined,
        partyId: (0, smithy_client_1.expectString)(output.party_id),
        partySize: (0, smithy_client_1.expectInt32)(output.party_size),
        publicity: (output.publicity !== undefined && output.publicity !== null) ? deserializeAws_restJson1PartyPublicity(output.publicity, context) : undefined,
        threadId: (0, smithy_client_1.expectString)(output.thread_id),
    };
};
const deserializeAws_restJson1UploadPresignedRequest = (output, context) => {
    return {
        path: (0, smithy_client_1.expectString)(output.path),
        url: (0, smithy_client_1.expectString)(output.url),
    };
};
const deserializeAws_restJson1Document = (output, context) => {
    return output;
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
