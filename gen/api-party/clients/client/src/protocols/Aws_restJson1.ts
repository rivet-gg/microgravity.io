// smithy-typescript generated code
import {
  CreatePartyCommandInput,
  CreatePartyCommandOutput,
} from "../commands/CreatePartyCommand";
import {
  CreatePartyInviteCommandInput,
  CreatePartyInviteCommandOutput,
} from "../commands/CreatePartyInviteCommand";
import {
  FindMatchmakerLobbyForPartyCommandInput,
  FindMatchmakerLobbyForPartyCommandOutput,
} from "../commands/FindMatchmakerLobbyForPartyCommand";
import {
  GetPartyFromInviteCommandInput,
  GetPartyFromInviteCommandOutput,
} from "../commands/GetPartyFromInviteCommand";
import {
  GetPartyProfileCommandInput,
  GetPartyProfileCommandOutput,
} from "../commands/GetPartyProfileCommand";
import {
  GetPartySelfProfileCommandInput,
  GetPartySelfProfileCommandOutput,
} from "../commands/GetPartySelfProfileCommand";
import {
  GetPartySelfSummaryCommandInput,
  GetPartySelfSummaryCommandOutput,
} from "../commands/GetPartySelfSummaryCommand";
import {
  GetPartySummaryCommandInput,
  GetPartySummaryCommandOutput,
} from "../commands/GetPartySummaryCommand";
import {
  JoinMatchmakerLobbyForPartyCommandInput,
  JoinMatchmakerLobbyForPartyCommandOutput,
} from "../commands/JoinMatchmakerLobbyForPartyCommand";
import {
  JoinPartyCommandInput,
  JoinPartyCommandOutput,
} from "../commands/JoinPartyCommand";
import {
  KickMemberCommandInput,
  KickMemberCommandOutput,
} from "../commands/KickMemberCommand";
import {
  LeavePartyCommandInput,
  LeavePartyCommandOutput,
} from "../commands/LeavePartyCommand";
import {
  MatchmakerSelfReadyCommandInput,
  MatchmakerSelfReadyCommandOutput,
} from "../commands/MatchmakerSelfReadyCommand";
import {
  RevokePartyInviteCommandInput,
  RevokePartyInviteCommandOutput,
} from "../commands/RevokePartyInviteCommand";
import {
  SendJoinRequestCommandInput,
  SendJoinRequestCommandOutput,
} from "../commands/SendJoinRequestCommand";
import {
  SetPartyPublicityCommandInput,
  SetPartyPublicityCommandOutput,
} from "../commands/SetPartyPublicityCommand";
import {
  SetPartyToIdleCommandInput,
  SetPartyToIdleCommandOutput,
} from "../commands/SetPartyToIdleCommand";
import {
  SetSelfInactiveCommandInput,
  SetSelfInactiveCommandOutput,
} from "../commands/SetSelfInactiveCommand";
import {
  TransferPartyOwnershipCommandInput,
  TransferPartyOwnershipCommandOutput,
} from "../commands/TransferPartyOwnershipCommand";
import { PartyServiceServiceException as __BaseException } from "../models/PartyServiceServiceException";
import {
  BadRequestError,
  CaptchaConfig,
  CaptchaConfigHcaptcha,
  CaptchaConfigTurnstile,
  CreatePartyInviteConfig,
  CreatePartyPublicityConfig,
  CreatedInvite,
  ForbiddenError,
  GameHandle,
  IdentityExternalLinks,
  IdentityGameActivity,
  IdentityHandle,
  IdentityPresence,
  InternalError,
  JoinPartyInvite,
  NotFoundError,
  PartyActivity,
  PartyActivityIdle,
  PartyActivityMatchmakerFindingLobby,
  PartyActivityMatchmakerLobby,
  PartyExternalLinks,
  PartyHandle,
  PartyInvite,
  PartyInviteAlias,
  PartyInviteExternalLinks,
  PartyMatchmakerLobby,
  PartyMemberState,
  PartyMemberStateInactive,
  PartyMemberStateMatchmakerFindingLobby,
  PartyMemberStateMatchmakerLobby,
  PartyMemberStateMatchmakerReady,
  PartyMemberSummary,
  PartyProfile,
  PartyPublicity,
  PartySummary,
  RateLimitError,
  UnauthorizedError,
  WatchResponse,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreatePartyCommand = async(
  input: CreatePartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties";
  let body: any;
  body = JSON.stringify({
    ...(input.invites !== undefined && input.invites !== null &&{ "invites": serializeAws_restJson1CreatePartyInviteConfigs(input.invites, context) }),
    ...(input.matchmakerCurrentPlayerToken !== undefined && input.matchmakerCurrentPlayerToken !== null &&{ "matchmaker_current_player_token": input.matchmakerCurrentPlayerToken }),
    ...(input.partySize !== undefined && input.partySize !== null &&{ "party_size": input.partySize }),
    ...(input.publicity !== undefined && input.publicity !== null &&{ "publicity": serializeAws_restJson1CreatePartyPublicityConfig(input.publicity, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1CreatePartyInviteCommand = async(
  input: CreatePartyInviteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/invites";
  let body: any;
  body = JSON.stringify({
    ...(input.alias !== undefined && input.alias !== null &&{ "alias": input.alias }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1GetPartyFromInviteCommand = async(
  input: GetPartyFromInviteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/invites";
  const query: any = {
    ...(input.token !== undefined && { "token": input.token }),
    ...(input.alias !== undefined && { "alias": input.alias }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

export const serializeAws_restJson1GetPartyProfileCommand = async(
  input: GetPartyProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/{party_id}/profile";
  if (input.partyId !== undefined) {
    const labelValue: string = input.partyId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: partyId.');
    }
    resolvedPath = resolvedPath.replace("{party_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: partyId.');
  }
  const query: any = {
    ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

export const serializeAws_restJson1GetPartySelfProfileCommand = async(
  input: GetPartySelfProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/profile";
  const query: any = {
    ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

export const serializeAws_restJson1GetPartySelfSummaryCommand = async(
  input: GetPartySelfSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/summary";
  const query: any = {
    ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

export const serializeAws_restJson1GetPartySummaryCommand = async(
  input: GetPartySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/{party_id}/summary";
  if (input.partyId !== undefined) {
    const labelValue: string = input.partyId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: partyId.');
    }
    resolvedPath = resolvedPath.replace("{party_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: partyId.');
  }
  const query: any = {
    ...(input.watchIndex !== undefined && { "watch_index": input.watchIndex }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
}

export const serializeAws_restJson1JoinPartyCommand = async(
  input: JoinPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/join";
  let body: any;
  body = JSON.stringify({
    ...(input.invite !== undefined && input.invite !== null &&{ "invite": serializeAws_restJson1JoinPartyInvite(input.invite, context) }),
    ...(input.matchmakerAutoJoinLobby !== undefined && input.matchmakerAutoJoinLobby !== null &&{ "matchmaker_auto_join_lobby": input.matchmakerAutoJoinLobby }),
    ...(input.matchmakerCurrentPlayerToken !== undefined && input.matchmakerCurrentPlayerToken !== null &&{ "matchmaker_current_player_token": input.matchmakerCurrentPlayerToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1KickMemberCommand = async(
  input: KickMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/members/{identity_id}/kick";
  if (input.identityId !== undefined) {
    const labelValue: string = input.identityId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: identityId.');
    }
    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: identityId.');
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1LeavePartyCommand = async(
  input: LeavePartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/leave";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1RevokePartyInviteCommand = async(
  input: RevokePartyInviteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/invites/{invite_id}";
  if (input.inviteId !== undefined) {
    const labelValue: string = input.inviteId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: inviteId.');
    }
    resolvedPath = resolvedPath.replace("{invite_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: inviteId.');
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1SendJoinRequestCommand = async(
  input: SendJoinRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/{party_id}/join-request/send";
  if (input.partyId !== undefined) {
    const labelValue: string = input.partyId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: partyId.');
    }
    resolvedPath = resolvedPath.replace("{party_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: partyId.');
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1SetPartyPublicityCommand = async(
  input: SetPartyPublicityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/publicity";
  let body: any;
  body = JSON.stringify({
    ...(input.groups !== undefined && input.groups !== null &&{ "groups": input.groups }),
    ...(input.mutualFollowers !== undefined && input.mutualFollowers !== null &&{ "mutual_followers": input.mutualFollowers }),
    ...(input.public !== undefined && input.public !== null &&{ "public": input.public }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1TransferPartyOwnershipCommand = async(
  input: TransferPartyOwnershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/members/{identity_id}/transfer-ownership";
  if (input.identityId !== undefined) {
    const labelValue: string = input.identityId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: identityId.');
    }
    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: identityId.');
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1FindMatchmakerLobbyForPartyCommand = async(
  input: FindMatchmakerLobbyForPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
    ...isSerializableHeaderValue(input.origin) && { "origin": input.origin! },
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/activity/matchmaker/lobbies/find";
  let body: any;
  body = JSON.stringify({
    ...(input.captcha !== undefined && input.captcha !== null &&{ "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) }),
    ...(input.gameModes !== undefined && input.gameModes !== null &&{ "game_modes": serializeAws_restJson1FindGameModes(input.gameModes, context) }),
    ...(input.preventAutoCreateLobby !== undefined && input.preventAutoCreateLobby !== null &&{ "prevent_auto_create_lobby": input.preventAutoCreateLobby }),
    ...(input.regions !== undefined && input.regions !== null &&{ "regions": serializeAws_restJson1FindRegions(input.regions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1JoinMatchmakerLobbyForPartyCommand = async(
  input: JoinMatchmakerLobbyForPartyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/activity/matchmaker/lobbies/join";
  let body: any;
  body = JSON.stringify({
    ...(input.captcha !== undefined && input.captcha !== null &&{ "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) }),
    ...(input.lobbyId !== undefined && input.lobbyId !== null &&{ "lobby_id": input.lobbyId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1MatchmakerSelfReadyCommand = async(
  input: MatchmakerSelfReadyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/members/self/matchmaker/ready";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1SetPartyToIdleCommand = async(
  input: SetPartyToIdleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/activity";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1SetSelfInactiveCommand = async(
  input: SetSelfInactiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/parties/self/members/self/inactive";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

export const deserializeAws_restJson1CreatePartyCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePartyCommandError(output, context);
  }
  const contents: CreatePartyCommandOutput = {
    $metadata: deserializeMetadata(output),
    invites: undefined,
    partyId: undefined,
  };
  const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  if (data.invites !== undefined && data.invites !== null) {
    contents.invites = deserializeAws_restJson1CreatedInvites(data.invites, context);
  }
  if (data.party_id !== undefined && data.party_id !== null) {
    contents.partyId = __expectString(data.party_id);
  }
  return Promise.resolve(contents);
}

const deserializeAws_restJson1CreatePartyCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreatePartyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __BaseException;
  let errorCode: string = "UnknownError";
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      });
      throw __decorateServiceException(response, parsedBody);
    }
  }

  export const deserializeAws_restJson1CreatePartyInviteCommand = async(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePartyInviteCommandOutput> => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
      return deserializeAws_restJson1CreatePartyInviteCommandError(output, context);
    }
    const contents: CreatePartyInviteCommandOutput = {
      $metadata: deserializeMetadata(output),
      invite: undefined,
    };
    const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    if (data.invite !== undefined && data.invite !== null) {
      contents.invite = deserializeAws_restJson1CreatedInvite(data.invite, context);
    }
    return Promise.resolve(contents);
  }

  const deserializeAws_restJson1CreatePartyInviteCommandError = async(
    output: __HttpResponse,
    context: __SerdeContext,
  ): Promise<CreatePartyInviteCommandOutput> => {
    const parsedOutput: any = {
      ...output,
      body: await parseBody(output.body, context)
    };
    let response: __BaseException;
    let errorCode: string = "UnknownError";
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
        response = new __BaseException({
          name: parsedBody.code || parsedBody.Code || errorCode,
          $fault: "client",
          $metadata: deserializeMetadata(output)
        });
        throw __decorateServiceException(response, parsedBody);
      }
    }

    export const deserializeAws_restJson1GetPartyFromInviteCommand = async(
      output: __HttpResponse,
      context: __SerdeContext
    ): Promise<GetPartyFromInviteCommandOutput> => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPartyFromInviteCommandError(output, context);
      }
      const contents: GetPartyFromInviteCommandOutput = {
        $metadata: deserializeMetadata(output),
        party: undefined,
      };
      const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
      if (data.party !== undefined && data.party !== null) {
        contents.party = deserializeAws_restJson1PartySummary(data.party, context);
      }
      return Promise.resolve(contents);
    }

    const deserializeAws_restJson1GetPartyFromInviteCommandError = async(
      output: __HttpResponse,
      context: __SerdeContext,
    ): Promise<GetPartyFromInviteCommandOutput> => {
      const parsedOutput: any = {
        ...output,
        body: await parseBody(output.body, context)
      };
      let response: __BaseException;
      let errorCode: string = "UnknownError";
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
          response = new __BaseException({
            name: parsedBody.code || parsedBody.Code || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output)
          });
          throw __decorateServiceException(response, parsedBody);
        }
      }

      export const deserializeAws_restJson1GetPartyProfileCommand = async(
        output: __HttpResponse,
        context: __SerdeContext
      ): Promise<GetPartyProfileCommandOutput> => {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
          return deserializeAws_restJson1GetPartyProfileCommandError(output, context);
        }
        const contents: GetPartyProfileCommandOutput = {
          $metadata: deserializeMetadata(output),
          party: undefined,
          watch: undefined,
        };
        const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
        if (data.party !== undefined && data.party !== null) {
          contents.party = deserializeAws_restJson1PartyProfile(data.party, context);
        }
        if (data.watch !== undefined && data.watch !== null) {
          contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
        }
        return Promise.resolve(contents);
      }

      const deserializeAws_restJson1GetPartyProfileCommandError = async(
        output: __HttpResponse,
        context: __SerdeContext,
      ): Promise<GetPartyProfileCommandOutput> => {
        const parsedOutput: any = {
          ...output,
          body: await parseBody(output.body, context)
        };
        let response: __BaseException;
        let errorCode: string = "UnknownError";
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
            response = new __BaseException({
              name: parsedBody.code || parsedBody.Code || errorCode,
              $fault: "client",
              $metadata: deserializeMetadata(output)
            });
            throw __decorateServiceException(response, parsedBody);
          }
        }

        export const deserializeAws_restJson1GetPartySelfProfileCommand = async(
          output: __HttpResponse,
          context: __SerdeContext
        ): Promise<GetPartySelfProfileCommandOutput> => {
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return deserializeAws_restJson1GetPartySelfProfileCommandError(output, context);
          }
          const contents: GetPartySelfProfileCommandOutput = {
            $metadata: deserializeMetadata(output),
            party: undefined,
            watch: undefined,
          };
          const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
          if (data.party !== undefined && data.party !== null) {
            contents.party = deserializeAws_restJson1PartyProfile(data.party, context);
          }
          if (data.watch !== undefined && data.watch !== null) {
            contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
          }
          return Promise.resolve(contents);
        }

        const deserializeAws_restJson1GetPartySelfProfileCommandError = async(
          output: __HttpResponse,
          context: __SerdeContext,
        ): Promise<GetPartySelfProfileCommandOutput> => {
          const parsedOutput: any = {
            ...output,
            body: await parseBody(output.body, context)
          };
          let response: __BaseException;
          let errorCode: string = "UnknownError";
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
              response = new __BaseException({
                name: parsedBody.code || parsedBody.Code || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output)
              });
              throw __decorateServiceException(response, parsedBody);
            }
          }

          export const deserializeAws_restJson1GetPartySelfSummaryCommand = async(
            output: __HttpResponse,
            context: __SerdeContext
          ): Promise<GetPartySelfSummaryCommandOutput> => {
            if (output.statusCode !== 200 && output.statusCode >= 300) {
              return deserializeAws_restJson1GetPartySelfSummaryCommandError(output, context);
            }
            const contents: GetPartySelfSummaryCommandOutput = {
              $metadata: deserializeMetadata(output),
              party: undefined,
              watch: undefined,
            };
            const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
            if (data.party !== undefined && data.party !== null) {
              contents.party = deserializeAws_restJson1PartySummary(data.party, context);
            }
            if (data.watch !== undefined && data.watch !== null) {
              contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
            }
            return Promise.resolve(contents);
          }

          const deserializeAws_restJson1GetPartySelfSummaryCommandError = async(
            output: __HttpResponse,
            context: __SerdeContext,
          ): Promise<GetPartySelfSummaryCommandOutput> => {
            const parsedOutput: any = {
              ...output,
              body: await parseBody(output.body, context)
            };
            let response: __BaseException;
            let errorCode: string = "UnknownError";
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
                response = new __BaseException({
                  name: parsedBody.code || parsedBody.Code || errorCode,
                  $fault: "client",
                  $metadata: deserializeMetadata(output)
                });
                throw __decorateServiceException(response, parsedBody);
              }
            }

            export const deserializeAws_restJson1GetPartySummaryCommand = async(
              output: __HttpResponse,
              context: __SerdeContext
            ): Promise<GetPartySummaryCommandOutput> => {
              if (output.statusCode !== 200 && output.statusCode >= 300) {
                return deserializeAws_restJson1GetPartySummaryCommandError(output, context);
              }
              const contents: GetPartySummaryCommandOutput = {
                $metadata: deserializeMetadata(output),
                party: undefined,
                watch: undefined,
              };
              const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
              if (data.party !== undefined && data.party !== null) {
                contents.party = deserializeAws_restJson1PartySummary(data.party, context);
              }
              if (data.watch !== undefined && data.watch !== null) {
                contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
              }
              return Promise.resolve(contents);
            }

            const deserializeAws_restJson1GetPartySummaryCommandError = async(
              output: __HttpResponse,
              context: __SerdeContext,
            ): Promise<GetPartySummaryCommandOutput> => {
              const parsedOutput: any = {
                ...output,
                body: await parseBody(output.body, context)
              };
              let response: __BaseException;
              let errorCode: string = "UnknownError";
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
                  response = new __BaseException({
                    name: parsedBody.code || parsedBody.Code || errorCode,
                    $fault: "client",
                    $metadata: deserializeMetadata(output)
                  });
                  throw __decorateServiceException(response, parsedBody);
                }
              }

              export const deserializeAws_restJson1JoinPartyCommand = async(
                output: __HttpResponse,
                context: __SerdeContext
              ): Promise<JoinPartyCommandOutput> => {
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                  return deserializeAws_restJson1JoinPartyCommandError(output, context);
                }
                const contents: JoinPartyCommandOutput = {
                  $metadata: deserializeMetadata(output),
                  partyId: undefined,
                };
                const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                if (data.party_id !== undefined && data.party_id !== null) {
                  contents.partyId = __expectString(data.party_id);
                }
                return Promise.resolve(contents);
              }

              const deserializeAws_restJson1JoinPartyCommandError = async(
                output: __HttpResponse,
                context: __SerdeContext,
              ): Promise<JoinPartyCommandOutput> => {
                const parsedOutput: any = {
                  ...output,
                  body: await parseBody(output.body, context)
                };
                let response: __BaseException;
                let errorCode: string = "UnknownError";
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
                    response = new __BaseException({
                      name: parsedBody.code || parsedBody.Code || errorCode,
                      $fault: "client",
                      $metadata: deserializeMetadata(output)
                    });
                    throw __decorateServiceException(response, parsedBody);
                  }
                }

                export const deserializeAws_restJson1KickMemberCommand = async(
                  output: __HttpResponse,
                  context: __SerdeContext
                ): Promise<KickMemberCommandOutput> => {
                  if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return deserializeAws_restJson1KickMemberCommandError(output, context);
                  }
                  const contents: KickMemberCommandOutput = {
                    $metadata: deserializeMetadata(output),
                  };
                  await collectBody(output.body, context);
                  return Promise.resolve(contents);
                }

                const deserializeAws_restJson1KickMemberCommandError = async(
                  output: __HttpResponse,
                  context: __SerdeContext,
                ): Promise<KickMemberCommandOutput> => {
                  const parsedOutput: any = {
                    ...output,
                    body: await parseBody(output.body, context)
                  };
                  let response: __BaseException;
                  let errorCode: string = "UnknownError";
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
                      response = new __BaseException({
                        name: parsedBody.code || parsedBody.Code || errorCode,
                        $fault: "client",
                        $metadata: deserializeMetadata(output)
                      });
                      throw __decorateServiceException(response, parsedBody);
                    }
                  }

                  export const deserializeAws_restJson1LeavePartyCommand = async(
                    output: __HttpResponse,
                    context: __SerdeContext
                  ): Promise<LeavePartyCommandOutput> => {
                    if (output.statusCode !== 200 && output.statusCode >= 300) {
                      return deserializeAws_restJson1LeavePartyCommandError(output, context);
                    }
                    const contents: LeavePartyCommandOutput = {
                      $metadata: deserializeMetadata(output),
                    };
                    await collectBody(output.body, context);
                    return Promise.resolve(contents);
                  }

                  const deserializeAws_restJson1LeavePartyCommandError = async(
                    output: __HttpResponse,
                    context: __SerdeContext,
                  ): Promise<LeavePartyCommandOutput> => {
                    const parsedOutput: any = {
                      ...output,
                      body: await parseBody(output.body, context)
                    };
                    let response: __BaseException;
                    let errorCode: string = "UnknownError";
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
                        response = new __BaseException({
                          name: parsedBody.code || parsedBody.Code || errorCode,
                          $fault: "client",
                          $metadata: deserializeMetadata(output)
                        });
                        throw __decorateServiceException(response, parsedBody);
                      }
                    }

                    export const deserializeAws_restJson1RevokePartyInviteCommand = async(
                      output: __HttpResponse,
                      context: __SerdeContext
                    ): Promise<RevokePartyInviteCommandOutput> => {
                      if (output.statusCode !== 200 && output.statusCode >= 300) {
                        return deserializeAws_restJson1RevokePartyInviteCommandError(output, context);
                      }
                      const contents: RevokePartyInviteCommandOutput = {
                        $metadata: deserializeMetadata(output),
                      };
                      await collectBody(output.body, context);
                      return Promise.resolve(contents);
                    }

                    const deserializeAws_restJson1RevokePartyInviteCommandError = async(
                      output: __HttpResponse,
                      context: __SerdeContext,
                    ): Promise<RevokePartyInviteCommandOutput> => {
                      const parsedOutput: any = {
                        ...output,
                        body: await parseBody(output.body, context)
                      };
                      let response: __BaseException;
                      let errorCode: string = "UnknownError";
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
                          response = new __BaseException({
                            name: parsedBody.code || parsedBody.Code || errorCode,
                            $fault: "client",
                            $metadata: deserializeMetadata(output)
                          });
                          throw __decorateServiceException(response, parsedBody);
                        }
                      }

                      export const deserializeAws_restJson1SendJoinRequestCommand = async(
                        output: __HttpResponse,
                        context: __SerdeContext
                      ): Promise<SendJoinRequestCommandOutput> => {
                        if (output.statusCode !== 200 && output.statusCode >= 300) {
                          return deserializeAws_restJson1SendJoinRequestCommandError(output, context);
                        }
                        const contents: SendJoinRequestCommandOutput = {
                          $metadata: deserializeMetadata(output),
                        };
                        await collectBody(output.body, context);
                        return Promise.resolve(contents);
                      }

                      const deserializeAws_restJson1SendJoinRequestCommandError = async(
                        output: __HttpResponse,
                        context: __SerdeContext,
                      ): Promise<SendJoinRequestCommandOutput> => {
                        const parsedOutput: any = {
                          ...output,
                          body: await parseBody(output.body, context)
                        };
                        let response: __BaseException;
                        let errorCode: string = "UnknownError";
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
                            response = new __BaseException({
                              name: parsedBody.code || parsedBody.Code || errorCode,
                              $fault: "client",
                              $metadata: deserializeMetadata(output)
                            });
                            throw __decorateServiceException(response, parsedBody);
                          }
                        }

                        export const deserializeAws_restJson1SetPartyPublicityCommand = async(
                          output: __HttpResponse,
                          context: __SerdeContext
                        ): Promise<SetPartyPublicityCommandOutput> => {
                          if (output.statusCode !== 200 && output.statusCode >= 300) {
                            return deserializeAws_restJson1SetPartyPublicityCommandError(output, context);
                          }
                          const contents: SetPartyPublicityCommandOutput = {
                            $metadata: deserializeMetadata(output),
                          };
                          await collectBody(output.body, context);
                          return Promise.resolve(contents);
                        }

                        const deserializeAws_restJson1SetPartyPublicityCommandError = async(
                          output: __HttpResponse,
                          context: __SerdeContext,
                        ): Promise<SetPartyPublicityCommandOutput> => {
                          const parsedOutput: any = {
                            ...output,
                            body: await parseBody(output.body, context)
                          };
                          let response: __BaseException;
                          let errorCode: string = "UnknownError";
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
                              response = new __BaseException({
                                name: parsedBody.code || parsedBody.Code || errorCode,
                                $fault: "client",
                                $metadata: deserializeMetadata(output)
                              });
                              throw __decorateServiceException(response, parsedBody);
                            }
                          }

                          export const deserializeAws_restJson1TransferPartyOwnershipCommand = async(
                            output: __HttpResponse,
                            context: __SerdeContext
                          ): Promise<TransferPartyOwnershipCommandOutput> => {
                            if (output.statusCode !== 200 && output.statusCode >= 300) {
                              return deserializeAws_restJson1TransferPartyOwnershipCommandError(output, context);
                            }
                            const contents: TransferPartyOwnershipCommandOutput = {
                              $metadata: deserializeMetadata(output),
                            };
                            await collectBody(output.body, context);
                            return Promise.resolve(contents);
                          }

                          const deserializeAws_restJson1TransferPartyOwnershipCommandError = async(
                            output: __HttpResponse,
                            context: __SerdeContext,
                          ): Promise<TransferPartyOwnershipCommandOutput> => {
                            const parsedOutput: any = {
                              ...output,
                              body: await parseBody(output.body, context)
                            };
                            let response: __BaseException;
                            let errorCode: string = "UnknownError";
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
                                response = new __BaseException({
                                  name: parsedBody.code || parsedBody.Code || errorCode,
                                  $fault: "client",
                                  $metadata: deserializeMetadata(output)
                                });
                                throw __decorateServiceException(response, parsedBody);
                              }
                            }

                            export const deserializeAws_restJson1FindMatchmakerLobbyForPartyCommand = async(
                              output: __HttpResponse,
                              context: __SerdeContext
                            ): Promise<FindMatchmakerLobbyForPartyCommandOutput> => {
                              if (output.statusCode !== 200 && output.statusCode >= 300) {
                                return deserializeAws_restJson1FindMatchmakerLobbyForPartyCommandError(output, context);
                              }
                              const contents: FindMatchmakerLobbyForPartyCommandOutput = {
                                $metadata: deserializeMetadata(output),
                              };
                              await collectBody(output.body, context);
                              return Promise.resolve(contents);
                            }

                            const deserializeAws_restJson1FindMatchmakerLobbyForPartyCommandError = async(
                              output: __HttpResponse,
                              context: __SerdeContext,
                            ): Promise<FindMatchmakerLobbyForPartyCommandOutput> => {
                              const parsedOutput: any = {
                                ...output,
                                body: await parseBody(output.body, context)
                              };
                              let response: __BaseException;
                              let errorCode: string = "UnknownError";
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
                                  response = new __BaseException({
                                    name: parsedBody.code || parsedBody.Code || errorCode,
                                    $fault: "client",
                                    $metadata: deserializeMetadata(output)
                                  });
                                  throw __decorateServiceException(response, parsedBody);
                                }
                              }

                              export const deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommand = async(
                                output: __HttpResponse,
                                context: __SerdeContext
                              ): Promise<JoinMatchmakerLobbyForPartyCommandOutput> => {
                                if (output.statusCode !== 200 && output.statusCode >= 300) {
                                  return deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommandError(output, context);
                                }
                                const contents: JoinMatchmakerLobbyForPartyCommandOutput = {
                                  $metadata: deserializeMetadata(output),
                                };
                                await collectBody(output.body, context);
                                return Promise.resolve(contents);
                              }

                              const deserializeAws_restJson1JoinMatchmakerLobbyForPartyCommandError = async(
                                output: __HttpResponse,
                                context: __SerdeContext,
                              ): Promise<JoinMatchmakerLobbyForPartyCommandOutput> => {
                                const parsedOutput: any = {
                                  ...output,
                                  body: await parseBody(output.body, context)
                                };
                                let response: __BaseException;
                                let errorCode: string = "UnknownError";
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
                                    response = new __BaseException({
                                      name: parsedBody.code || parsedBody.Code || errorCode,
                                      $fault: "client",
                                      $metadata: deserializeMetadata(output)
                                    });
                                    throw __decorateServiceException(response, parsedBody);
                                  }
                                }

                                export const deserializeAws_restJson1MatchmakerSelfReadyCommand = async(
                                  output: __HttpResponse,
                                  context: __SerdeContext
                                ): Promise<MatchmakerSelfReadyCommandOutput> => {
                                  if (output.statusCode !== 200 && output.statusCode >= 300) {
                                    return deserializeAws_restJson1MatchmakerSelfReadyCommandError(output, context);
                                  }
                                  const contents: MatchmakerSelfReadyCommandOutput = {
                                    $metadata: deserializeMetadata(output),
                                  };
                                  await collectBody(output.body, context);
                                  return Promise.resolve(contents);
                                }

                                const deserializeAws_restJson1MatchmakerSelfReadyCommandError = async(
                                  output: __HttpResponse,
                                  context: __SerdeContext,
                                ): Promise<MatchmakerSelfReadyCommandOutput> => {
                                  const parsedOutput: any = {
                                    ...output,
                                    body: await parseBody(output.body, context)
                                  };
                                  let response: __BaseException;
                                  let errorCode: string = "UnknownError";
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
                                      response = new __BaseException({
                                        name: parsedBody.code || parsedBody.Code || errorCode,
                                        $fault: "client",
                                        $metadata: deserializeMetadata(output)
                                      });
                                      throw __decorateServiceException(response, parsedBody);
                                    }
                                  }

                                  export const deserializeAws_restJson1SetPartyToIdleCommand = async(
                                    output: __HttpResponse,
                                    context: __SerdeContext
                                  ): Promise<SetPartyToIdleCommandOutput> => {
                                    if (output.statusCode !== 200 && output.statusCode >= 300) {
                                      return deserializeAws_restJson1SetPartyToIdleCommandError(output, context);
                                    }
                                    const contents: SetPartyToIdleCommandOutput = {
                                      $metadata: deserializeMetadata(output),
                                    };
                                    await collectBody(output.body, context);
                                    return Promise.resolve(contents);
                                  }

                                  const deserializeAws_restJson1SetPartyToIdleCommandError = async(
                                    output: __HttpResponse,
                                    context: __SerdeContext,
                                  ): Promise<SetPartyToIdleCommandOutput> => {
                                    const parsedOutput: any = {
                                      ...output,
                                      body: await parseBody(output.body, context)
                                    };
                                    let response: __BaseException;
                                    let errorCode: string = "UnknownError";
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
                                        response = new __BaseException({
                                          name: parsedBody.code || parsedBody.Code || errorCode,
                                          $fault: "client",
                                          $metadata: deserializeMetadata(output)
                                        });
                                        throw __decorateServiceException(response, parsedBody);
                                      }
                                    }

                                    export const deserializeAws_restJson1SetSelfInactiveCommand = async(
                                      output: __HttpResponse,
                                      context: __SerdeContext
                                    ): Promise<SetSelfInactiveCommandOutput> => {
                                      if (output.statusCode !== 200 && output.statusCode >= 300) {
                                        return deserializeAws_restJson1SetSelfInactiveCommandError(output, context);
                                      }
                                      const contents: SetSelfInactiveCommandOutput = {
                                        $metadata: deserializeMetadata(output),
                                      };
                                      await collectBody(output.body, context);
                                      return Promise.resolve(contents);
                                    }

                                    const deserializeAws_restJson1SetSelfInactiveCommandError = async(
                                      output: __HttpResponse,
                                      context: __SerdeContext,
                                    ): Promise<SetSelfInactiveCommandOutput> => {
                                      const parsedOutput: any = {
                                        ...output,
                                        body: await parseBody(output.body, context)
                                      };
                                      let response: __BaseException;
                                      let errorCode: string = "UnknownError";
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
                                          response = new __BaseException({
                                            name: parsedBody.code || parsedBody.Code || errorCode,
                                            $fault: "client",
                                            $metadata: deserializeMetadata(output)
                                          });
                                          throw __decorateServiceException(response, parsedBody);
                                        }
                                      }

                                      const deserializeAws_restJson1BadRequestErrorResponse = async (
                                        parsedOutput: any,
                                        context: __SerdeContext
                                      ): Promise<BadRequestError> => {
                                        const contents: any = {};
                                        const data: any = parsedOutput.body;
                                        if (data.code !== undefined && data.code !== null) {
                                          contents.code = __expectString(data.code);
                                        }
                                        if (data.message !== undefined && data.message !== null) {
                                          contents.message = __expectString(data.message);
                                        }
                                        if (data.metadata !== undefined && data.metadata !== null) {
                                          contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
                                        }
                                        const exception = new BadRequestError({
                                          $metadata: deserializeMetadata(parsedOutput),
                                          ...contents
                                        });
                                        return __decorateServiceException(exception, parsedOutput.body);
                                      };

                                      const deserializeAws_restJson1ForbiddenErrorResponse = async (
                                        parsedOutput: any,
                                        context: __SerdeContext
                                      ): Promise<ForbiddenError> => {
                                        const contents: any = {};
                                        const data: any = parsedOutput.body;
                                        if (data.code !== undefined && data.code !== null) {
                                          contents.code = __expectString(data.code);
                                        }
                                        if (data.message !== undefined && data.message !== null) {
                                          contents.message = __expectString(data.message);
                                        }
                                        if (data.metadata !== undefined && data.metadata !== null) {
                                          contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
                                        }
                                        const exception = new ForbiddenError({
                                          $metadata: deserializeMetadata(parsedOutput),
                                          ...contents
                                        });
                                        return __decorateServiceException(exception, parsedOutput.body);
                                      };

                                      const deserializeAws_restJson1InternalErrorResponse = async (
                                        parsedOutput: any,
                                        context: __SerdeContext
                                      ): Promise<InternalError> => {
                                        const contents: any = {};
                                        const data: any = parsedOutput.body;
                                        if (data.code !== undefined && data.code !== null) {
                                          contents.code = __expectString(data.code);
                                        }
                                        if (data.message !== undefined && data.message !== null) {
                                          contents.message = __expectString(data.message);
                                        }
                                        if (data.metadata !== undefined && data.metadata !== null) {
                                          contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
                                        }
                                        const exception = new InternalError({
                                          $metadata: deserializeMetadata(parsedOutput),
                                          ...contents
                                        });
                                        return __decorateServiceException(exception, parsedOutput.body);
                                      };

                                      const deserializeAws_restJson1NotFoundErrorResponse = async (
                                        parsedOutput: any,
                                        context: __SerdeContext
                                      ): Promise<NotFoundError> => {
                                        const contents: any = {};
                                        const data: any = parsedOutput.body;
                                        if (data.code !== undefined && data.code !== null) {
                                          contents.code = __expectString(data.code);
                                        }
                                        if (data.message !== undefined && data.message !== null) {
                                          contents.message = __expectString(data.message);
                                        }
                                        if (data.metadata !== undefined && data.metadata !== null) {
                                          contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
                                        }
                                        const exception = new NotFoundError({
                                          $metadata: deserializeMetadata(parsedOutput),
                                          ...contents
                                        });
                                        return __decorateServiceException(exception, parsedOutput.body);
                                      };

                                      const deserializeAws_restJson1RateLimitErrorResponse = async (
                                        parsedOutput: any,
                                        context: __SerdeContext
                                      ): Promise<RateLimitError> => {
                                        const contents: any = {};
                                        const data: any = parsedOutput.body;
                                        if (data.code !== undefined && data.code !== null) {
                                          contents.code = __expectString(data.code);
                                        }
                                        if (data.message !== undefined && data.message !== null) {
                                          contents.message = __expectString(data.message);
                                        }
                                        if (data.metadata !== undefined && data.metadata !== null) {
                                          contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
                                        }
                                        const exception = new RateLimitError({
                                          $metadata: deserializeMetadata(parsedOutput),
                                          ...contents
                                        });
                                        return __decorateServiceException(exception, parsedOutput.body);
                                      };

                                      const deserializeAws_restJson1UnauthorizedErrorResponse = async (
                                        parsedOutput: any,
                                        context: __SerdeContext
                                      ): Promise<UnauthorizedError> => {
                                        const contents: any = {};
                                        const data: any = parsedOutput.body;
                                        if (data.code !== undefined && data.code !== null) {
                                          contents.code = __expectString(data.code);
                                        }
                                        if (data.message !== undefined && data.message !== null) {
                                          contents.message = __expectString(data.message);
                                        }
                                        if (data.metadata !== undefined && data.metadata !== null) {
                                          contents.metadata = deserializeAws_restJson1ErrorMetadata(data.metadata, context);
                                        }
                                        const exception = new UnauthorizedError({
                                          $metadata: deserializeMetadata(parsedOutput),
                                          ...contents
                                        });
                                        return __decorateServiceException(exception, parsedOutput.body);
                                      };

                                      const serializeAws_restJson1CreatePartyInviteConfig = (
                                        input: CreatePartyInviteConfig,
                                        context: __SerdeContext
                                      ): any => {
                                        return {
                                          ...(input.alias !== undefined && input.alias !== null && { "alias": input.alias }),
                                        };
                                      }

                                      const serializeAws_restJson1CreatePartyInviteConfigs = (
                                        input: (CreatePartyInviteConfig)[],
                                        context: __SerdeContext
                                      ): any => {
                                        return input.filter((e: any) => e != null).map(entry => {
                                          if (entry === null) { return null as any; }
                                          return serializeAws_restJson1CreatePartyInviteConfig(entry, context);
                                        });
                                      }

                                      const serializeAws_restJson1CreatePartyPublicityConfig = (
                                        input: CreatePartyPublicityConfig,
                                        context: __SerdeContext
                                      ): any => {
                                        return {
                                          ...(input.groups !== undefined && input.groups !== null && { "groups": input.groups }),
                                          ...(input.mutualFollowers !== undefined && input.mutualFollowers !== null && { "mutual_followers": input.mutualFollowers }),
                                          ...(input.public !== undefined && input.public !== null && { "public": input.public }),
                                        };
                                      }

                                      const serializeAws_restJson1JoinPartyInvite = (
                                        input: JoinPartyInvite,
                                        context: __SerdeContext
                                      ): any => {
                                        return JoinPartyInvite.visit(input, {
                                          alias: value => ({ "alias": value }),
                                          partyId: value => ({ "party_id": value }),
                                          token: value => ({ "token": value }),
                                          _: (name, value) => ({ name: value } as any)
                                        });
                                      }

                                      const serializeAws_restJson1CaptchaConfig = (
                                        input: CaptchaConfig,
                                        context: __SerdeContext
                                      ): any => {
                                        return CaptchaConfig.visit(input, {
                                          hcaptcha: value => ({ "hcaptcha": serializeAws_restJson1CaptchaConfigHcaptcha(value, context) }),
                                          turnstile: value => ({ "turnstile": serializeAws_restJson1CaptchaConfigTurnstile(value, context) }),
                                          _: (name, value) => ({ name: value } as any)
                                        });
                                      }

                                      const serializeAws_restJson1CaptchaConfigHcaptcha = (
                                        input: CaptchaConfigHcaptcha,
                                        context: __SerdeContext
                                      ): any => {
                                        return {
                                          ...(input.clientResponse !== undefined && input.clientResponse !== null && { "client_response": input.clientResponse }),
                                        };
                                      }

                                      const serializeAws_restJson1CaptchaConfigTurnstile = (
                                        input: CaptchaConfigTurnstile,
                                        context: __SerdeContext
                                      ): any => {
                                        return {
                                          ...(input.clientResponse !== undefined && input.clientResponse !== null && { "client_response": input.clientResponse }),
                                        };
                                      }

                                      const serializeAws_restJson1FindGameModes = (
                                        input: (string)[],
                                        context: __SerdeContext
                                      ): any => {
                                        return input.filter((e: any) => e != null).map(entry => {
                                          if (entry === null) { return null as any; }
                                          return entry;
                                        });
                                      }

                                      const serializeAws_restJson1FindRegions = (
                                        input: (string)[],
                                        context: __SerdeContext
                                      ): any => {
                                        return input.filter((e: any) => e != null).map(entry => {
                                          if (entry === null) { return null as any; }
                                          return entry;
                                        });
                                      }

                                      const deserializeAws_restJson1CreatedInvite = (
                                        output: any,
                                        context: __SerdeContext
                                      ): CreatedInvite => {
                                        return {
                                          alias: __expectString(output.alias),
                                          token: __expectString(output.token),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1CreatedInvites = (
                                        output: any,
                                        context: __SerdeContext
                                      ): (CreatedInvite)[] => {
                                        const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                          if (entry === null) {
                                            return null as any;
                                          }
                                          return deserializeAws_restJson1CreatedInvite(entry, context);
                                        });
                                        return retVal;
                                      }

                                      const deserializeAws_restJson1WatchResponse = (
                                        output: any,
                                        context: __SerdeContext
                                      ): WatchResponse => {
                                        return {
                                          index: __expectString(output.index),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1ErrorMetadata = (
                                        output: any,
                                        context: __SerdeContext
                                      ): __DocumentType => {
                                        return output;
                                      }

                                      const deserializeAws_restJson1GameHandle = (
                                        output: any,
                                        context: __SerdeContext
                                      ): GameHandle => {
                                        return {
                                          bannerUrl: __expectString(output.banner_url),
                                          displayName: __expectString(output.display_name),
                                          gameId: __expectString(output.game_id),
                                          logoUrl: __expectString(output.logo_url),
                                          nameId: __expectString(output.name_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1IdentityExternalLinks = (
                                        output: any,
                                        context: __SerdeContext
                                      ): IdentityExternalLinks => {
                                        return {
                                          chat: __expectString(output.chat),
                                          profile: __expectString(output.profile),
                                          settings: __expectString(output.settings),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1IdentityGameActivity = (
                                        output: any,
                                        context: __SerdeContext
                                      ): IdentityGameActivity => {
                                        return {
                                          game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context): undefined,
                                          message: __expectString(output.message),
                                          mutualMetadata: (output.mutual_metadata !== undefined && output.mutual_metadata !== null) ? deserializeAws_restJson1Document(output.mutual_metadata, context): undefined,
                                          publicMetadata: (output.public_metadata !== undefined && output.public_metadata !== null) ? deserializeAws_restJson1Document(output.public_metadata, context): undefined,
                                        } as any;
                                      }

                                      const deserializeAws_restJson1IdentityHandle = (
                                        output: any,
                                        context: __SerdeContext
                                      ): IdentityHandle => {
                                        return {
                                          accountNumber: __expectInt32(output.account_number),
                                          avatarUrl: __expectString(output.avatar_url),
                                          displayName: __expectString(output.display_name),
                                          external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context): undefined,
                                          identityId: __expectString(output.identity_id),
                                          isRegistered: __expectBoolean(output.is_registered),
                                          party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context): undefined,
                                          presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context): undefined,
                                        } as any;
                                      }

                                      const deserializeAws_restJson1IdentityPresence = (
                                        output: any,
                                        context: __SerdeContext
                                      ): IdentityPresence => {
                                        return {
                                          gameActivity: (output.game_activity !== undefined && output.game_activity !== null) ? deserializeAws_restJson1IdentityGameActivity(output.game_activity, context): undefined,
                                          status: __expectString(output.status),
                                          updateTs: (output.update_ts !== undefined && output.update_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.update_ts)): undefined,
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyActivity = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyActivity => {
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
                                      }

                                      const deserializeAws_restJson1PartyActivityIdle = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyActivityIdle => {
                                        return {
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyActivityMatchmakerFindingLobby = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyActivityMatchmakerFindingLobby => {
                                        return {
                                          game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context): undefined,
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyActivityMatchmakerLobby = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyActivityMatchmakerLobby => {
                                        return {
                                          game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context): undefined,
                                          lobby: (output.lobby !== undefined && output.lobby !== null) ? deserializeAws_restJson1PartyMatchmakerLobby(output.lobby, context): undefined,
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyExternalLinks = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyExternalLinks => {
                                        return {
                                          chat: __expectString(output.chat),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyHandle = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyHandle => {
                                        return {
                                          activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity(__expectUnion(output.activity), context): undefined,
                                          createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)): undefined,
                                          external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context): undefined,
                                          partyId: __expectString(output.party_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyInvite = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyInvite => {
                                        return {
                                          alias: (output.alias !== undefined && output.alias !== null) ? deserializeAws_restJson1PartyInviteAlias(output.alias, context): undefined,
                                          createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)): undefined,
                                          external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyInviteExternalLinks(output.external, context): undefined,
                                          inviteId: __expectString(output.invite_id),
                                          token: __expectString(output.token),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyInviteAlias = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyInviteAlias => {
                                        return {
                                          alias: __expectString(output.alias),
                                          namespaceId: __expectString(output.namespace_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyInviteExternalLinks = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyInviteExternalLinks => {
                                        return {
                                          invite: __expectString(output.invite),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyInvites = (
                                        output: any,
                                        context: __SerdeContext
                                      ): (PartyInvite)[] => {
                                        const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                          if (entry === null) {
                                            return null as any;
                                          }
                                          return deserializeAws_restJson1PartyInvite(entry, context);
                                        });
                                        return retVal;
                                      }

                                      const deserializeAws_restJson1PartyMatchmakerLobby = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMatchmakerLobby => {
                                        return {
                                          lobbyId: __expectString(output.lobby_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyMemberState = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMemberState => {
                                        if (output.inactive !== undefined && output.inactive !== null) {
                                          return {
                                            inactive: deserializeAws_restJson1PartyMemberStateInactive(output.inactive, context)
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
                                        if (output.matchmaker_ready !== undefined && output.matchmaker_ready !== null) {
                                          return {
                                            matchmakerReady: deserializeAws_restJson1PartyMemberStateMatchmakerReady(output.matchmaker_ready, context)
                                          };
                                        }
                                        return { $unknown: Object.entries(output)[0] };
                                      }

                                      const deserializeAws_restJson1PartyMemberStateInactive = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMemberStateInactive => {
                                        return {
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyMemberStateMatchmakerFindingLobby = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMemberStateMatchmakerFindingLobby => {
                                        return {
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyMemberStateMatchmakerLobby = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMemberStateMatchmakerLobby => {
                                        return {
                                          playerId: __expectString(output.player_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyMemberStateMatchmakerReady = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMemberStateMatchmakerReady => {
                                        return {
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyMemberSummaries = (
                                        output: any,
                                        context: __SerdeContext
                                      ): (PartyMemberSummary)[] => {
                                        const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                          if (entry === null) {
                                            return null as any;
                                          }
                                          return deserializeAws_restJson1PartyMemberSummary(entry, context);
                                        });
                                        return retVal;
                                      }

                                      const deserializeAws_restJson1PartyMemberSummary = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyMemberSummary => {
                                        return {
                                          identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context): undefined,
                                          isLeader: __expectBoolean(output.is_leader),
                                          joinTs: (output.join_ts !== undefined && output.join_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.join_ts)): undefined,
                                          state: (output.state !== undefined && output.state !== null) ? deserializeAws_restJson1PartyMemberState(__expectUnion(output.state), context): undefined,
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyProfile = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyProfile => {
                                        return {
                                          activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity(__expectUnion(output.activity), context): undefined,
                                          createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)): undefined,
                                          external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context): undefined,
                                          invites: (output.invites !== undefined && output.invites !== null) ? deserializeAws_restJson1PartyInvites(output.invites, context): undefined,
                                          members: (output.members !== undefined && output.members !== null) ? deserializeAws_restJson1PartyMemberSummaries(output.members, context): undefined,
                                          partyId: __expectString(output.party_id),
                                          partySize: __expectInt32(output.party_size),
                                          publicity: (output.publicity !== undefined && output.publicity !== null) ? deserializeAws_restJson1PartyPublicity(output.publicity, context): undefined,
                                          threadId: __expectString(output.thread_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartyPublicity = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartyPublicity => {
                                        return {
                                          groups: __expectString(output.groups),
                                          mutualFollowers: __expectString(output.mutual_followers),
                                          public: __expectString(output.public),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1PartySummary = (
                                        output: any,
                                        context: __SerdeContext
                                      ): PartySummary => {
                                        return {
                                          activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity(__expectUnion(output.activity), context): undefined,
                                          createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)): undefined,
                                          external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1PartyExternalLinks(output.external, context): undefined,
                                          members: (output.members !== undefined && output.members !== null) ? deserializeAws_restJson1PartyMemberSummaries(output.members, context): undefined,
                                          partyId: __expectString(output.party_id),
                                          partySize: __expectInt32(output.party_size),
                                          publicity: (output.publicity !== undefined && output.publicity !== null) ? deserializeAws_restJson1PartyPublicity(output.publicity, context): undefined,
                                          threadId: __expectString(output.thread_id),
                                        } as any;
                                      }

                                      const deserializeAws_restJson1Document = (
                                        output: any,
                                        context: __SerdeContext
                                      ): __DocumentType => {
                                        return output;
                                      }

                                      const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
                                        httpStatusCode: output.statusCode,
                                        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
                                        extendedRequestId: output.headers["x-amz-id-2"],
                                        cfId: output.headers["x-amz-cf-id"],
                                      });

                                      // Collect low-level response body stream to Uint8Array.
                                      const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
                                        if (streamBody instanceof Uint8Array) {
                                          return Promise.resolve(streamBody);
                                        }
                                        return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
                                      };

                                      // Encode Uint8Array data into string with utf-8.
                                      const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> => collectBody(streamBody, context).then(body => context.utf8Encoder(body))

                                      const isSerializableHeaderValue = (value: any): boolean =>
                                        value !== undefined &&
                                        value !== null &&
                                        value !== "" &&
                                        (!Object.getOwnPropertyNames(value).includes("length") ||
                                          value.length != 0) &&
                                        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

                                      const parseBody = (streamBody: any, context: __SerdeContext): any => collectBodyString(streamBody, context).then(encoded => {
                                        if (encoded.length) {
                                          return JSON.parse(encoded);
                                        }
                                        return {};
                                      });

                                      /**
                                       * Load an error code for the aws.rest-json-1.1 protocol.
                                       */
                                      const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
                                        const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

                                        const sanitizeErrorCode = (rawValue: string): string => {
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
