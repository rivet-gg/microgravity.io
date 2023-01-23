// smithy-typescript generated code
import {
  CancelGameLinkCommandInput,
  CancelGameLinkCommandOutput,
} from "../commands/CancelGameLinkCommand";
import {
  CompleteGameLinkCommandInput,
  CompleteGameLinkCommandOutput,
} from "../commands/CompleteGameLinkCommand";
import {
  CompleteIdentityAvatarUploadCommandInput,
  CompleteIdentityAvatarUploadCommandOutput,
} from "../commands/CompleteIdentityAvatarUploadCommand";
import {
  FollowIdentityCommandInput,
  FollowIdentityCommandOutput,
} from "../commands/FollowIdentityCommand";
import {
  GetGameLinkCommandInput,
  GetGameLinkCommandOutput,
} from "../commands/GetGameLinkCommand";
import {
  GetIdentityHandlesCommandInput,
  GetIdentityHandlesCommandOutput,
} from "../commands/GetIdentityHandlesCommand";
import {
  GetIdentityProfileCommandInput,
  GetIdentityProfileCommandOutput,
} from "../commands/GetIdentityProfileCommand";
import {
  GetIdentitySelfProfileCommandInput,
  GetIdentitySelfProfileCommandOutput,
} from "../commands/GetIdentitySelfProfileCommand";
import {
  GetIdentitySummariesCommandInput,
  GetIdentitySummariesCommandOutput,
} from "../commands/GetIdentitySummariesCommand";
import {
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "../commands/ListActivitiesCommand";
import {
  ListFollowersCommandInput,
  ListFollowersCommandOutput,
} from "../commands/ListFollowersCommand";
import {
  ListFollowingCommandInput,
  ListFollowingCommandOutput,
} from "../commands/ListFollowingCommand";
import {
  ListFriendsCommandInput,
  ListFriendsCommandOutput,
} from "../commands/ListFriendsCommand";
import {
  ListMutualFriendsCommandInput,
  ListMutualFriendsCommandOutput,
} from "../commands/ListMutualFriendsCommand";
import {
  ListRecentFollowersCommandInput,
  ListRecentFollowersCommandOutput,
} from "../commands/ListRecentFollowersCommand";
import {
  MarkDeletionCommandInput,
  MarkDeletionCommandOutput,
} from "../commands/MarkDeletionCommand";
import {
  PrepareGameLinkCommandInput,
  PrepareGameLinkCommandOutput,
} from "../commands/PrepareGameLinkCommand";
import {
  PrepareIdentityAvatarUploadCommandInput,
  PrepareIdentityAvatarUploadCommandOutput,
} from "../commands/PrepareIdentityAvatarUploadCommand";
import {
  RecentFollowerIgnoreCommandInput,
  RecentFollowerIgnoreCommandOutput,
} from "../commands/RecentFollowerIgnoreCommand";
import {
  RemoveIdentityGameActivityCommandInput,
  RemoveIdentityGameActivityCommandOutput,
} from "../commands/RemoveIdentityGameActivityCommand";
import {
  ReportIdentityCommandInput,
  ReportIdentityCommandOutput,
} from "../commands/ReportIdentityCommand";
import {
  SearchIdentitiesCommandInput,
  SearchIdentitiesCommandOutput,
} from "../commands/SearchIdentitiesCommand";
import {
  SetIdentityGameActivityCommandInput,
  SetIdentityGameActivityCommandOutput,
} from "../commands/SetIdentityGameActivityCommand";
import {
  SetupIdentityCommandInput,
  SetupIdentityCommandOutput,
} from "../commands/SetupIdentityCommand";
import {
  SignupForBetaCommandInput,
  SignupForBetaCommandOutput,
} from "../commands/SignupForBetaCommand";
import {
  UnfollowIdentityCommandInput,
  UnfollowIdentityCommandOutput,
} from "../commands/UnfollowIdentityCommand";
import {
  UnmarkDeletionCommandInput,
  UnmarkDeletionCommandOutput,
} from "../commands/UnmarkDeletionCommand";
import {
  UpdateIdentityProfileCommandInput,
  UpdateIdentityProfileCommandOutput,
} from "../commands/UpdateIdentityProfileCommand";
import {
  UpdateIdentityStatusCommandInput,
  UpdateIdentityStatusCommandOutput,
} from "../commands/UpdateIdentityStatusCommand";
import {
  ValidateIdentityProfileCommandInput,
  ValidateIdentityProfileCommandOutput,
} from "../commands/ValidateIdentityProfileCommand";
import {
  WatchEventsCommandInput,
  WatchEventsCommandOutput,
} from "../commands/WatchEventsCommand";
import { IdentityServiceServiceException as __BaseException } from "../models/IdentityServiceServiceException";
import {
  BadRequestError,
  ChatMessage,
  ChatMessageBody,
  ChatMessageBodyChatCreate,
  ChatMessageBodyDeleted,
  ChatMessageBodyGroupJoin,
  ChatMessageBodyGroupLeave,
  ChatMessageBodyGroupMemberKick,
  ChatMessageBodyIdentityFollow,
  ChatMessageBodyPartyActivityChange,
  ChatMessageBodyPartyInvite,
  ChatMessageBodyPartyJoin,
  ChatMessageBodyPartyJoinRequest,
  ChatMessageBodyPartyLeave,
  ChatMessageBodyText,
  ChatThread,
  ChatThreadExternalLinks,
  ChatTopic,
  ChatTopicDirect,
  ChatTopicGroup,
  ChatTopicParty,
  ForbiddenError,
  GameHandle,
  GameStat,
  GameStatConfig,
  GameStatSummary,
  GameSummary,
  GetGameLinkNewIdentity,
  GlobalEvent,
  GlobalEventChatMessage,
  GlobalEventChatRead,
  GlobalEventChatThreadRemove,
  GlobalEventIdentityUpdate,
  GlobalEventKind,
  GlobalEventMatchmakerLobbyJoin,
  GlobalEventNotification,
  GlobalEventPartyUpdate,
  GroupExternalLinks,
  GroupHandle,
  GroupSummary,
  IdentityEmailLinkedAccount,
  IdentityExternalLinks,
  IdentityGameActivity,
  IdentityGroup,
  IdentityHandle,
  IdentityLinkedAccount,
  IdentityPresence,
  IdentityProfile,
  IdentitySummary,
  InternalError,
  MatchmakerLobbyJoinInfo,
  MatchmakerLobbyJoinInfoPlayer,
  MatchmakerLobbyJoinInfoPort,
  MatchmakerLobbyJoinInfoPortRange,
  MatchmakerLobbyJoinInfoRegion,
  NotFoundError,
  PartyActivity,
  PartyActivityIdle,
  PartyActivityMatchmakerFindingLobby,
  PartyActivityMatchmakerLobby,
  PartyExternalLinks,
  PartyHandle,
  PartyMatchmakerLobby,
  PartyMemberState,
  PartyMemberStateInactive,
  PartyMemberStateMatchmakerFindingLobby,
  PartyMemberStateMatchmakerLobby,
  PartyMemberStateMatchmakerReady,
  PartyMemberSummary,
  PartyPublicity,
  PartySummary,
  RateLimitError,
  UnauthorizedError,
  UpdateIdentityGameActivity,
  UploadPresignedRequest,
  ValidationError,
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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelGameLinkCommand = async(
  input: CancelGameLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links/cancel";
  let body: any;
  body = JSON.stringify({
    ...(input.identityLinkToken !== undefined && input.identityLinkToken !== null &&{ "identity_link_token": input.identityLinkToken }),
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

export const serializeAws_restJson1CompleteGameLinkCommand = async(
  input: CompleteGameLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links/complete";
  let body: any;
  body = JSON.stringify({
    ...(input.identityLinkToken !== undefined && input.identityLinkToken !== null &&{ "identity_link_token": input.identityLinkToken }),
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

export const serializeAws_restJson1CompleteIdentityAvatarUploadCommand = async(
  input: CompleteIdentityAvatarUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/avatar-upload/{upload_id}/complete";
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: uploadId.');
    }
    resolvedPath = resolvedPath.replace("{upload_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: uploadId.');
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

export const serializeAws_restJson1FollowIdentityCommand = async(
  input: FollowIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/follow";
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

export const serializeAws_restJson1GetGameLinkCommand = async(
  input: GetGameLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links";
  const query: any = {
    ...(input.identityLinkToken !== undefined && { "identity_link_token": input.identityLinkToken }),
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

export const serializeAws_restJson1GetIdentityHandlesCommand = async(
  input: GetIdentityHandlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/batch/handle";
  const query: any = {
    ...(input.identityIds !== undefined && { "identity_ids": (input.identityIds || []).map(_entry => _entry as any) }),
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

export const serializeAws_restJson1GetIdentityProfileCommand = async(
  input: GetIdentityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/profile";
  if (input.identityId !== undefined) {
    const labelValue: string = input.identityId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: identityId.');
    }
    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: identityId.');
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

export const serializeAws_restJson1GetIdentitySelfProfileCommand = async(
  input: GetIdentitySelfProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/profile";
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

export const serializeAws_restJson1GetIdentitySummariesCommand = async(
  input: GetIdentitySummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/batch/summary";
  const query: any = {
    ...(input.identityIds !== undefined && { "identity_ids": (input.identityIds || []).map(_entry => _entry as any) }),
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

export const serializeAws_restJson1ListActivitiesCommand = async(
  input: ListActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/activities";
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

export const serializeAws_restJson1ListFollowersCommand = async(
  input: ListFollowersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/followers";
  if (input.identityId !== undefined) {
    const labelValue: string = input.identityId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: identityId.');
    }
    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: identityId.');
  }
  const query: any = {
    ...(input.anchor !== undefined && { "anchor": input.anchor }),
    ...(input.count !== undefined && { "count": input.count.toString() }),
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

export const serializeAws_restJson1ListFollowingCommand = async(
  input: ListFollowingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/following";
  if (input.identityId !== undefined) {
    const labelValue: string = input.identityId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: identityId.');
    }
    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: identityId.');
  }
  const query: any = {
    ...(input.anchor !== undefined && { "anchor": input.anchor }),
    ...(input.count !== undefined && { "count": input.count.toString() }),
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

export const serializeAws_restJson1ListFriendsCommand = async(
  input: ListFriendsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/friends";
  const query: any = {
    ...(input.anchor !== undefined && { "anchor": input.anchor }),
    ...(input.count !== undefined && { "count": input.count.toString() }),
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

export const serializeAws_restJson1ListMutualFriendsCommand = async(
  input: ListMutualFriendsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/mutual-friends";
  if (input.identityId !== undefined) {
    const labelValue: string = input.identityId;
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: identityId.');
    }
    resolvedPath = resolvedPath.replace("{identity_id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error('No value provided for input HTTP label: identityId.');
  }
  const query: any = {
    ...(input.anchor !== undefined && { "anchor": input.anchor }),
    ...(input.count !== undefined && { "count": input.count.toString() }),
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

export const serializeAws_restJson1ListRecentFollowersCommand = async(
  input: ListRecentFollowersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/recent-followers";
  const query: any = {
    ...(input.anchor !== undefined && { "anchor": input.anchor }),
    ...(input.count !== undefined && { "count": input.count.toString() }),
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

export const serializeAws_restJson1MarkDeletionCommand = async(
  input: MarkDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/delete-request";
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

export const serializeAws_restJson1PrepareGameLinkCommand = async(
  input: PrepareGameLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/game-links";
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

export const serializeAws_restJson1PrepareIdentityAvatarUploadCommand = async(
  input: PrepareIdentityAvatarUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/avatar-upload/prepare";
  let body: any;
  body = JSON.stringify({
    ...(input.contentLength !== undefined && input.contentLength !== null &&{ "content_length": input.contentLength }),
    ...(input.mime !== undefined && input.mime !== null &&{ "mime": input.mime }),
    ...(input.path !== undefined && input.path !== null &&{ "path": input.path }),
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

export const serializeAws_restJson1RecentFollowerIgnoreCommand = async(
  input: RecentFollowerIgnoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/recent-followers/{identity_id}/ignore";
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

export const serializeAws_restJson1RemoveIdentityGameActivityCommand = async(
  input: RemoveIdentityGameActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/activity";
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

export const serializeAws_restJson1ReportIdentityCommand = async(
  input: ReportIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/report";
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
  body = JSON.stringify({
    ...(input.reason !== undefined && input.reason !== null &&{ "reason": input.reason }),
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

export const serializeAws_restJson1SearchIdentitiesCommand = async(
  input: SearchIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/search";
  const query: any = {
    ...(input.query !== undefined && { "query": input.query }),
    ...(input.anchor !== undefined && { "anchor": input.anchor }),
    ...(input.limit !== undefined && { "limit": input.limit.toString() }),
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

export const serializeAws_restJson1SetIdentityGameActivityCommand = async(
  input: SetIdentityGameActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/activity";
  let body: any;
  body = JSON.stringify({
    ...(input.gameActivity !== undefined && input.gameActivity !== null &&{ "game_activity": serializeAws_restJson1UpdateIdentityGameActivity(input.gameActivity, context) }),
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

export const serializeAws_restJson1SetupIdentityCommand = async(
  input: SetupIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities";
  let body: any;
  body = JSON.stringify({
    ...(input.existingIdentityToken !== undefined && input.existingIdentityToken !== null &&{ "existing_identity_token": input.existingIdentityToken }),
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

export const serializeAws_restJson1SignupForBetaCommand = async(
  input: SignupForBetaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/beta-signup";
  let body: any;
  body = JSON.stringify({
    ...(input.companyName !== undefined && input.companyName !== null &&{ "company_name": input.companyName }),
    ...(input.companySize !== undefined && input.companySize !== null &&{ "company_size": input.companySize }),
    ...(input.goals !== undefined && input.goals !== null &&{ "goals": input.goals }),
    ...(input.name !== undefined && input.name !== null &&{ "name": input.name }),
    ...(input.preferredTools !== undefined && input.preferredTools !== null &&{ "preferred_tools": input.preferredTools }),
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

export const serializeAws_restJson1UnfollowIdentityCommand = async(
  input: UnfollowIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/{identity_id}/follow";
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
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1UnmarkDeletionCommand = async(
  input: UnmarkDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/delete-request";
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

export const serializeAws_restJson1UpdateIdentityProfileCommand = async(
  input: UpdateIdentityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/profile";
  let body: any;
  body = JSON.stringify({
    ...(input.accountNumber !== undefined && input.accountNumber !== null &&{ "account_number": input.accountNumber }),
    ...(input.bio !== undefined && input.bio !== null &&{ "bio": input.bio }),
    ...(input.displayName !== undefined && input.displayName !== null &&{ "display_name": input.displayName }),
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

export const serializeAws_restJson1UpdateIdentityStatusCommand = async(
  input: UpdateIdentityStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/status";
  let body: any;
  body = JSON.stringify({
    ...(input.status !== undefined && input.status !== null &&{ "status": input.status }),
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

export const serializeAws_restJson1ValidateIdentityProfileCommand = async(
  input: ValidateIdentityProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/identities/self/profile/validate";
  let body: any;
  body = JSON.stringify({
    ...(input.accountNumber !== undefined && input.accountNumber !== null &&{ "account_number": input.accountNumber }),
    ...(input.bio !== undefined && input.bio !== null &&{ "bio": input.bio }),
    ...(input.displayName !== undefined && input.displayName !== null &&{ "display_name": input.displayName }),
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

export const serializeAws_restJson1WatchEventsCommand = async(
  input: WatchEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/events/live";
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

export const deserializeAws_restJson1CancelGameLinkCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelGameLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelGameLinkCommandError(output, context);
  }
  const contents: CancelGameLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

const deserializeAws_restJson1CancelGameLinkCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CancelGameLinkCommandOutput> => {
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

  export const deserializeAws_restJson1CompleteGameLinkCommand = async(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CompleteGameLinkCommandOutput> => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
      return deserializeAws_restJson1CompleteGameLinkCommandError(output, context);
    }
    const contents: CompleteGameLinkCommandOutput = {
      $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
  }

  const deserializeAws_restJson1CompleteGameLinkCommandError = async(
    output: __HttpResponse,
    context: __SerdeContext,
  ): Promise<CompleteGameLinkCommandOutput> => {
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

    export const deserializeAws_restJson1CompleteIdentityAvatarUploadCommand = async(
      output: __HttpResponse,
      context: __SerdeContext
    ): Promise<CompleteIdentityAvatarUploadCommandOutput> => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteIdentityAvatarUploadCommandError(output, context);
      }
      const contents: CompleteIdentityAvatarUploadCommandOutput = {
        $metadata: deserializeMetadata(output),
      };
      await collectBody(output.body, context);
      return Promise.resolve(contents);
    }

    const deserializeAws_restJson1CompleteIdentityAvatarUploadCommandError = async(
      output: __HttpResponse,
      context: __SerdeContext,
    ): Promise<CompleteIdentityAvatarUploadCommandOutput> => {
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

      export const deserializeAws_restJson1FollowIdentityCommand = async(
        output: __HttpResponse,
        context: __SerdeContext
      ): Promise<FollowIdentityCommandOutput> => {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
          return deserializeAws_restJson1FollowIdentityCommandError(output, context);
        }
        const contents: FollowIdentityCommandOutput = {
          $metadata: deserializeMetadata(output),
        };
        await collectBody(output.body, context);
        return Promise.resolve(contents);
      }

      const deserializeAws_restJson1FollowIdentityCommandError = async(
        output: __HttpResponse,
        context: __SerdeContext,
      ): Promise<FollowIdentityCommandOutput> => {
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

        export const deserializeAws_restJson1GetGameLinkCommand = async(
          output: __HttpResponse,
          context: __SerdeContext
        ): Promise<GetGameLinkCommandOutput> => {
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return deserializeAws_restJson1GetGameLinkCommandError(output, context);
          }
          const contents: GetGameLinkCommandOutput = {
            $metadata: deserializeMetadata(output),
            currentIdentity: undefined,
            game: undefined,
            newIdentity: undefined,
            status: undefined,
            watch: undefined,
          };
          const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
          if (data.current_identity !== undefined && data.current_identity !== null) {
            contents.currentIdentity = deserializeAws_restJson1IdentityHandle(data.current_identity, context);
          }
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
          return Promise.resolve(contents);
        }

        const deserializeAws_restJson1GetGameLinkCommandError = async(
          output: __HttpResponse,
          context: __SerdeContext,
        ): Promise<GetGameLinkCommandOutput> => {
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

          export const deserializeAws_restJson1GetIdentityHandlesCommand = async(
            output: __HttpResponse,
            context: __SerdeContext
          ): Promise<GetIdentityHandlesCommandOutput> => {
            if (output.statusCode !== 200 && output.statusCode >= 300) {
              return deserializeAws_restJson1GetIdentityHandlesCommandError(output, context);
            }
            const contents: GetIdentityHandlesCommandOutput = {
              $metadata: deserializeMetadata(output),
              identities: undefined,
            };
            const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
            if (data.identities !== undefined && data.identities !== null) {
              contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
            }
            return Promise.resolve(contents);
          }

          const deserializeAws_restJson1GetIdentityHandlesCommandError = async(
            output: __HttpResponse,
            context: __SerdeContext,
          ): Promise<GetIdentityHandlesCommandOutput> => {
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

            export const deserializeAws_restJson1GetIdentityProfileCommand = async(
              output: __HttpResponse,
              context: __SerdeContext
            ): Promise<GetIdentityProfileCommandOutput> => {
              if (output.statusCode !== 200 && output.statusCode >= 300) {
                return deserializeAws_restJson1GetIdentityProfileCommandError(output, context);
              }
              const contents: GetIdentityProfileCommandOutput = {
                $metadata: deserializeMetadata(output),
                identity: undefined,
                watch: undefined,
              };
              const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
              if (data.identity !== undefined && data.identity !== null) {
                contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
              }
              if (data.watch !== undefined && data.watch !== null) {
                contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
              }
              return Promise.resolve(contents);
            }

            const deserializeAws_restJson1GetIdentityProfileCommandError = async(
              output: __HttpResponse,
              context: __SerdeContext,
            ): Promise<GetIdentityProfileCommandOutput> => {
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

              export const deserializeAws_restJson1GetIdentitySelfProfileCommand = async(
                output: __HttpResponse,
                context: __SerdeContext
              ): Promise<GetIdentitySelfProfileCommandOutput> => {
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                  return deserializeAws_restJson1GetIdentitySelfProfileCommandError(output, context);
                }
                const contents: GetIdentitySelfProfileCommandOutput = {
                  $metadata: deserializeMetadata(output),
                  identity: undefined,
                  watch: undefined,
                };
                const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                if (data.identity !== undefined && data.identity !== null) {
                  contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
                }
                if (data.watch !== undefined && data.watch !== null) {
                  contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                }
                return Promise.resolve(contents);
              }

              const deserializeAws_restJson1GetIdentitySelfProfileCommandError = async(
                output: __HttpResponse,
                context: __SerdeContext,
              ): Promise<GetIdentitySelfProfileCommandOutput> => {
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

                export const deserializeAws_restJson1GetIdentitySummariesCommand = async(
                  output: __HttpResponse,
                  context: __SerdeContext
                ): Promise<GetIdentitySummariesCommandOutput> => {
                  if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return deserializeAws_restJson1GetIdentitySummariesCommandError(output, context);
                  }
                  const contents: GetIdentitySummariesCommandOutput = {
                    $metadata: deserializeMetadata(output),
                    identities: undefined,
                  };
                  const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                  if (data.identities !== undefined && data.identities !== null) {
                    contents.identities = deserializeAws_restJson1IdentitySummaries(data.identities, context);
                  }
                  return Promise.resolve(contents);
                }

                const deserializeAws_restJson1GetIdentitySummariesCommandError = async(
                  output: __HttpResponse,
                  context: __SerdeContext,
                ): Promise<GetIdentitySummariesCommandOutput> => {
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

                  export const deserializeAws_restJson1ListActivitiesCommand = async(
                    output: __HttpResponse,
                    context: __SerdeContext
                  ): Promise<ListActivitiesCommandOutput> => {
                    if (output.statusCode !== 200 && output.statusCode >= 300) {
                      return deserializeAws_restJson1ListActivitiesCommandError(output, context);
                    }
                    const contents: ListActivitiesCommandOutput = {
                      $metadata: deserializeMetadata(output),
                      games: undefined,
                      identities: undefined,
                      parties: undefined,
                      suggestedGroups: undefined,
                      suggestedPlayers: undefined,
                      watch: undefined,
                    };
                    const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                    if (data.games !== undefined && data.games !== null) {
                      contents.games = deserializeAws_restJson1GameSummaries(data.games, context);
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
                  }

                  const deserializeAws_restJson1ListActivitiesCommandError = async(
                    output: __HttpResponse,
                    context: __SerdeContext,
                  ): Promise<ListActivitiesCommandOutput> => {
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

                    export const deserializeAws_restJson1ListFollowersCommand = async(
                      output: __HttpResponse,
                      context: __SerdeContext
                    ): Promise<ListFollowersCommandOutput> => {
                      if (output.statusCode !== 200 && output.statusCode >= 300) {
                        return deserializeAws_restJson1ListFollowersCommandError(output, context);
                      }
                      const contents: ListFollowersCommandOutput = {
                        $metadata: deserializeMetadata(output),
                        anchor: undefined,
                        identities: undefined,
                        watch: undefined,
                      };
                      const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                      if (data.anchor !== undefined && data.anchor !== null) {
                        contents.anchor = __expectString(data.anchor);
                      }
                      if (data.identities !== undefined && data.identities !== null) {
                        contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                      }
                      if (data.watch !== undefined && data.watch !== null) {
                        contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                      }
                      return Promise.resolve(contents);
                    }

                    const deserializeAws_restJson1ListFollowersCommandError = async(
                      output: __HttpResponse,
                      context: __SerdeContext,
                    ): Promise<ListFollowersCommandOutput> => {
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

                      export const deserializeAws_restJson1ListFollowingCommand = async(
                        output: __HttpResponse,
                        context: __SerdeContext
                      ): Promise<ListFollowingCommandOutput> => {
                        if (output.statusCode !== 200 && output.statusCode >= 300) {
                          return deserializeAws_restJson1ListFollowingCommandError(output, context);
                        }
                        const contents: ListFollowingCommandOutput = {
                          $metadata: deserializeMetadata(output),
                          anchor: undefined,
                          identities: undefined,
                          watch: undefined,
                        };
                        const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                        if (data.anchor !== undefined && data.anchor !== null) {
                          contents.anchor = __expectString(data.anchor);
                        }
                        if (data.identities !== undefined && data.identities !== null) {
                          contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                        }
                        if (data.watch !== undefined && data.watch !== null) {
                          contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                        }
                        return Promise.resolve(contents);
                      }

                      const deserializeAws_restJson1ListFollowingCommandError = async(
                        output: __HttpResponse,
                        context: __SerdeContext,
                      ): Promise<ListFollowingCommandOutput> => {
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

                        export const deserializeAws_restJson1ListFriendsCommand = async(
                          output: __HttpResponse,
                          context: __SerdeContext
                        ): Promise<ListFriendsCommandOutput> => {
                          if (output.statusCode !== 200 && output.statusCode >= 300) {
                            return deserializeAws_restJson1ListFriendsCommandError(output, context);
                          }
                          const contents: ListFriendsCommandOutput = {
                            $metadata: deserializeMetadata(output),
                            anchor: undefined,
                            identities: undefined,
                            watch: undefined,
                          };
                          const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                          if (data.anchor !== undefined && data.anchor !== null) {
                            contents.anchor = __expectString(data.anchor);
                          }
                          if (data.identities !== undefined && data.identities !== null) {
                            contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                          }
                          if (data.watch !== undefined && data.watch !== null) {
                            contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                          }
                          return Promise.resolve(contents);
                        }

                        const deserializeAws_restJson1ListFriendsCommandError = async(
                          output: __HttpResponse,
                          context: __SerdeContext,
                        ): Promise<ListFriendsCommandOutput> => {
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

                          export const deserializeAws_restJson1ListMutualFriendsCommand = async(
                            output: __HttpResponse,
                            context: __SerdeContext
                          ): Promise<ListMutualFriendsCommandOutput> => {
                            if (output.statusCode !== 200 && output.statusCode >= 300) {
                              return deserializeAws_restJson1ListMutualFriendsCommandError(output, context);
                            }
                            const contents: ListMutualFriendsCommandOutput = {
                              $metadata: deserializeMetadata(output),
                              anchor: undefined,
                              identities: undefined,
                            };
                            const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                            if (data.anchor !== undefined && data.anchor !== null) {
                              contents.anchor = __expectString(data.anchor);
                            }
                            if (data.identities !== undefined && data.identities !== null) {
                              contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                            }
                            return Promise.resolve(contents);
                          }

                          const deserializeAws_restJson1ListMutualFriendsCommandError = async(
                            output: __HttpResponse,
                            context: __SerdeContext,
                          ): Promise<ListMutualFriendsCommandOutput> => {
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

                            export const deserializeAws_restJson1ListRecentFollowersCommand = async(
                              output: __HttpResponse,
                              context: __SerdeContext
                            ): Promise<ListRecentFollowersCommandOutput> => {
                              if (output.statusCode !== 200 && output.statusCode >= 300) {
                                return deserializeAws_restJson1ListRecentFollowersCommandError(output, context);
                              }
                              const contents: ListRecentFollowersCommandOutput = {
                                $metadata: deserializeMetadata(output),
                                anchor: undefined,
                                identities: undefined,
                                watch: undefined,
                              };
                              const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                              if (data.anchor !== undefined && data.anchor !== null) {
                                contents.anchor = __expectString(data.anchor);
                              }
                              if (data.identities !== undefined && data.identities !== null) {
                                contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                              }
                              if (data.watch !== undefined && data.watch !== null) {
                                contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                              }
                              return Promise.resolve(contents);
                            }

                            const deserializeAws_restJson1ListRecentFollowersCommandError = async(
                              output: __HttpResponse,
                              context: __SerdeContext,
                            ): Promise<ListRecentFollowersCommandOutput> => {
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

                              export const deserializeAws_restJson1MarkDeletionCommand = async(
                                output: __HttpResponse,
                                context: __SerdeContext
                              ): Promise<MarkDeletionCommandOutput> => {
                                if (output.statusCode !== 200 && output.statusCode >= 300) {
                                  return deserializeAws_restJson1MarkDeletionCommandError(output, context);
                                }
                                const contents: MarkDeletionCommandOutput = {
                                  $metadata: deserializeMetadata(output),
                                };
                                await collectBody(output.body, context);
                                return Promise.resolve(contents);
                              }

                              const deserializeAws_restJson1MarkDeletionCommandError = async(
                                output: __HttpResponse,
                                context: __SerdeContext,
                              ): Promise<MarkDeletionCommandOutput> => {
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

                                export const deserializeAws_restJson1PrepareGameLinkCommand = async(
                                  output: __HttpResponse,
                                  context: __SerdeContext
                                ): Promise<PrepareGameLinkCommandOutput> => {
                                  if (output.statusCode !== 200 && output.statusCode >= 300) {
                                    return deserializeAws_restJson1PrepareGameLinkCommandError(output, context);
                                  }
                                  const contents: PrepareGameLinkCommandOutput = {
                                    $metadata: deserializeMetadata(output),
                                    expireTs: undefined,
                                    identityLinkToken: undefined,
                                    identityLinkUrl: undefined,
                                  };
                                  const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                                  if (data.expire_ts !== undefined && data.expire_ts !== null) {
                                    contents.expireTs = __expectNonNull(__parseRfc3339DateTime(data.expire_ts));
                                  }
                                  if (data.identity_link_token !== undefined && data.identity_link_token !== null) {
                                    contents.identityLinkToken = __expectString(data.identity_link_token);
                                  }
                                  if (data.identity_link_url !== undefined && data.identity_link_url !== null) {
                                    contents.identityLinkUrl = __expectString(data.identity_link_url);
                                  }
                                  return Promise.resolve(contents);
                                }

                                const deserializeAws_restJson1PrepareGameLinkCommandError = async(
                                  output: __HttpResponse,
                                  context: __SerdeContext,
                                ): Promise<PrepareGameLinkCommandOutput> => {
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

                                  export const deserializeAws_restJson1PrepareIdentityAvatarUploadCommand = async(
                                    output: __HttpResponse,
                                    context: __SerdeContext
                                  ): Promise<PrepareIdentityAvatarUploadCommandOutput> => {
                                    if (output.statusCode !== 200 && output.statusCode >= 300) {
                                      return deserializeAws_restJson1PrepareIdentityAvatarUploadCommandError(output, context);
                                    }
                                    const contents: PrepareIdentityAvatarUploadCommandOutput = {
                                      $metadata: deserializeMetadata(output),
                                      presignedRequest: undefined,
                                      uploadId: undefined,
                                    };
                                    const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                                    if (data.presigned_request !== undefined && data.presigned_request !== null) {
                                      contents.presignedRequest = deserializeAws_restJson1UploadPresignedRequest(data.presigned_request, context);
                                    }
                                    if (data.upload_id !== undefined && data.upload_id !== null) {
                                      contents.uploadId = __expectString(data.upload_id);
                                    }
                                    return Promise.resolve(contents);
                                  }

                                  const deserializeAws_restJson1PrepareIdentityAvatarUploadCommandError = async(
                                    output: __HttpResponse,
                                    context: __SerdeContext,
                                  ): Promise<PrepareIdentityAvatarUploadCommandOutput> => {
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

                                    export const deserializeAws_restJson1RecentFollowerIgnoreCommand = async(
                                      output: __HttpResponse,
                                      context: __SerdeContext
                                    ): Promise<RecentFollowerIgnoreCommandOutput> => {
                                      if (output.statusCode !== 200 && output.statusCode >= 300) {
                                        return deserializeAws_restJson1RecentFollowerIgnoreCommandError(output, context);
                                      }
                                      const contents: RecentFollowerIgnoreCommandOutput = {
                                        $metadata: deserializeMetadata(output),
                                      };
                                      await collectBody(output.body, context);
                                      return Promise.resolve(contents);
                                    }

                                    const deserializeAws_restJson1RecentFollowerIgnoreCommandError = async(
                                      output: __HttpResponse,
                                      context: __SerdeContext,
                                    ): Promise<RecentFollowerIgnoreCommandOutput> => {
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

                                      export const deserializeAws_restJson1RemoveIdentityGameActivityCommand = async(
                                        output: __HttpResponse,
                                        context: __SerdeContext
                                      ): Promise<RemoveIdentityGameActivityCommandOutput> => {
                                        if (output.statusCode !== 200 && output.statusCode >= 300) {
                                          return deserializeAws_restJson1RemoveIdentityGameActivityCommandError(output, context);
                                        }
                                        const contents: RemoveIdentityGameActivityCommandOutput = {
                                          $metadata: deserializeMetadata(output),
                                        };
                                        await collectBody(output.body, context);
                                        return Promise.resolve(contents);
                                      }

                                      const deserializeAws_restJson1RemoveIdentityGameActivityCommandError = async(
                                        output: __HttpResponse,
                                        context: __SerdeContext,
                                      ): Promise<RemoveIdentityGameActivityCommandOutput> => {
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

                                        export const deserializeAws_restJson1ReportIdentityCommand = async(
                                          output: __HttpResponse,
                                          context: __SerdeContext
                                        ): Promise<ReportIdentityCommandOutput> => {
                                          if (output.statusCode !== 200 && output.statusCode >= 300) {
                                            return deserializeAws_restJson1ReportIdentityCommandError(output, context);
                                          }
                                          const contents: ReportIdentityCommandOutput = {
                                            $metadata: deserializeMetadata(output),
                                          };
                                          await collectBody(output.body, context);
                                          return Promise.resolve(contents);
                                        }

                                        const deserializeAws_restJson1ReportIdentityCommandError = async(
                                          output: __HttpResponse,
                                          context: __SerdeContext,
                                        ): Promise<ReportIdentityCommandOutput> => {
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

                                          export const deserializeAws_restJson1SearchIdentitiesCommand = async(
                                            output: __HttpResponse,
                                            context: __SerdeContext
                                          ): Promise<SearchIdentitiesCommandOutput> => {
                                            if (output.statusCode !== 200 && output.statusCode >= 300) {
                                              return deserializeAws_restJson1SearchIdentitiesCommandError(output, context);
                                            }
                                            const contents: SearchIdentitiesCommandOutput = {
                                              $metadata: deserializeMetadata(output),
                                              anchor: undefined,
                                              identities: undefined,
                                            };
                                            const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                                            if (data.anchor !== undefined && data.anchor !== null) {
                                              contents.anchor = __expectString(data.anchor);
                                            }
                                            if (data.identities !== undefined && data.identities !== null) {
                                              contents.identities = deserializeAws_restJson1IdentityHandles(data.identities, context);
                                            }
                                            return Promise.resolve(contents);
                                          }

                                          const deserializeAws_restJson1SearchIdentitiesCommandError = async(
                                            output: __HttpResponse,
                                            context: __SerdeContext,
                                          ): Promise<SearchIdentitiesCommandOutput> => {
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

                                            export const deserializeAws_restJson1SetIdentityGameActivityCommand = async(
                                              output: __HttpResponse,
                                              context: __SerdeContext
                                            ): Promise<SetIdentityGameActivityCommandOutput> => {
                                              if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                return deserializeAws_restJson1SetIdentityGameActivityCommandError(output, context);
                                              }
                                              const contents: SetIdentityGameActivityCommandOutput = {
                                                $metadata: deserializeMetadata(output),
                                              };
                                              await collectBody(output.body, context);
                                              return Promise.resolve(contents);
                                            }

                                            const deserializeAws_restJson1SetIdentityGameActivityCommandError = async(
                                              output: __HttpResponse,
                                              context: __SerdeContext,
                                            ): Promise<SetIdentityGameActivityCommandOutput> => {
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

                                              export const deserializeAws_restJson1SetupIdentityCommand = async(
                                                output: __HttpResponse,
                                                context: __SerdeContext
                                              ): Promise<SetupIdentityCommandOutput> => {
                                                if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                  return deserializeAws_restJson1SetupIdentityCommandError(output, context);
                                                }
                                                const contents: SetupIdentityCommandOutput = {
                                                  $metadata: deserializeMetadata(output),
                                                  gameId: undefined,
                                                  identity: undefined,
                                                  identityToken: undefined,
                                                  identityTokenExpireTs: undefined,
                                                };
                                                const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                                                if (data.game_id !== undefined && data.game_id !== null) {
                                                  contents.gameId = __expectString(data.game_id);
                                                }
                                                if (data.identity !== undefined && data.identity !== null) {
                                                  contents.identity = deserializeAws_restJson1IdentityProfile(data.identity, context);
                                                }
                                                if (data.identity_token !== undefined && data.identity_token !== null) {
                                                  contents.identityToken = __expectString(data.identity_token);
                                                }
                                                if (data.identity_token_expire_ts !== undefined && data.identity_token_expire_ts !== null) {
                                                  contents.identityTokenExpireTs = __expectNonNull(__parseRfc3339DateTime(data.identity_token_expire_ts));
                                                }
                                                return Promise.resolve(contents);
                                              }

                                              const deserializeAws_restJson1SetupIdentityCommandError = async(
                                                output: __HttpResponse,
                                                context: __SerdeContext,
                                              ): Promise<SetupIdentityCommandOutput> => {
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

                                                export const deserializeAws_restJson1SignupForBetaCommand = async(
                                                  output: __HttpResponse,
                                                  context: __SerdeContext
                                                ): Promise<SignupForBetaCommandOutput> => {
                                                  if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                    return deserializeAws_restJson1SignupForBetaCommandError(output, context);
                                                  }
                                                  const contents: SignupForBetaCommandOutput = {
                                                    $metadata: deserializeMetadata(output),
                                                  };
                                                  await collectBody(output.body, context);
                                                  return Promise.resolve(contents);
                                                }

                                                const deserializeAws_restJson1SignupForBetaCommandError = async(
                                                  output: __HttpResponse,
                                                  context: __SerdeContext,
                                                ): Promise<SignupForBetaCommandOutput> => {
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

                                                  export const deserializeAws_restJson1UnfollowIdentityCommand = async(
                                                    output: __HttpResponse,
                                                    context: __SerdeContext
                                                  ): Promise<UnfollowIdentityCommandOutput> => {
                                                    if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                      return deserializeAws_restJson1UnfollowIdentityCommandError(output, context);
                                                    }
                                                    const contents: UnfollowIdentityCommandOutput = {
                                                      $metadata: deserializeMetadata(output),
                                                    };
                                                    await collectBody(output.body, context);
                                                    return Promise.resolve(contents);
                                                  }

                                                  const deserializeAws_restJson1UnfollowIdentityCommandError = async(
                                                    output: __HttpResponse,
                                                    context: __SerdeContext,
                                                  ): Promise<UnfollowIdentityCommandOutput> => {
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

                                                    export const deserializeAws_restJson1UnmarkDeletionCommand = async(
                                                      output: __HttpResponse,
                                                      context: __SerdeContext
                                                    ): Promise<UnmarkDeletionCommandOutput> => {
                                                      if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                        return deserializeAws_restJson1UnmarkDeletionCommandError(output, context);
                                                      }
                                                      const contents: UnmarkDeletionCommandOutput = {
                                                        $metadata: deserializeMetadata(output),
                                                      };
                                                      await collectBody(output.body, context);
                                                      return Promise.resolve(contents);
                                                    }

                                                    const deserializeAws_restJson1UnmarkDeletionCommandError = async(
                                                      output: __HttpResponse,
                                                      context: __SerdeContext,
                                                    ): Promise<UnmarkDeletionCommandOutput> => {
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

                                                      export const deserializeAws_restJson1UpdateIdentityProfileCommand = async(
                                                        output: __HttpResponse,
                                                        context: __SerdeContext
                                                      ): Promise<UpdateIdentityProfileCommandOutput> => {
                                                        if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                          return deserializeAws_restJson1UpdateIdentityProfileCommandError(output, context);
                                                        }
                                                        const contents: UpdateIdentityProfileCommandOutput = {
                                                          $metadata: deserializeMetadata(output),
                                                        };
                                                        await collectBody(output.body, context);
                                                        return Promise.resolve(contents);
                                                      }

                                                      const deserializeAws_restJson1UpdateIdentityProfileCommandError = async(
                                                        output: __HttpResponse,
                                                        context: __SerdeContext,
                                                      ): Promise<UpdateIdentityProfileCommandOutput> => {
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

                                                        export const deserializeAws_restJson1UpdateIdentityStatusCommand = async(
                                                          output: __HttpResponse,
                                                          context: __SerdeContext
                                                        ): Promise<UpdateIdentityStatusCommandOutput> => {
                                                          if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                            return deserializeAws_restJson1UpdateIdentityStatusCommandError(output, context);
                                                          }
                                                          const contents: UpdateIdentityStatusCommandOutput = {
                                                            $metadata: deserializeMetadata(output),
                                                          };
                                                          await collectBody(output.body, context);
                                                          return Promise.resolve(contents);
                                                        }

                                                        const deserializeAws_restJson1UpdateIdentityStatusCommandError = async(
                                                          output: __HttpResponse,
                                                          context: __SerdeContext,
                                                        ): Promise<UpdateIdentityStatusCommandOutput> => {
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

                                                          export const deserializeAws_restJson1ValidateIdentityProfileCommand = async(
                                                            output: __HttpResponse,
                                                            context: __SerdeContext
                                                          ): Promise<ValidateIdentityProfileCommandOutput> => {
                                                            if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                              return deserializeAws_restJson1ValidateIdentityProfileCommandError(output, context);
                                                            }
                                                            const contents: ValidateIdentityProfileCommandOutput = {
                                                              $metadata: deserializeMetadata(output),
                                                              errors: undefined,
                                                            };
                                                            const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                                                            if (data.errors !== undefined && data.errors !== null) {
                                                              contents.errors = deserializeAws_restJson1ValidationErrors(data.errors, context);
                                                            }
                                                            return Promise.resolve(contents);
                                                          }

                                                          const deserializeAws_restJson1ValidateIdentityProfileCommandError = async(
                                                            output: __HttpResponse,
                                                            context: __SerdeContext,
                                                          ): Promise<ValidateIdentityProfileCommandOutput> => {
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

                                                            export const deserializeAws_restJson1WatchEventsCommand = async(
                                                              output: __HttpResponse,
                                                              context: __SerdeContext
                                                            ): Promise<WatchEventsCommandOutput> => {
                                                              if (output.statusCode !== 200 && output.statusCode >= 300) {
                                                                return deserializeAws_restJson1WatchEventsCommandError(output, context);
                                                              }
                                                              const contents: WatchEventsCommandOutput = {
                                                                $metadata: deserializeMetadata(output),
                                                                events: undefined,
                                                                watch: undefined,
                                                              };
                                                              const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
                                                              if (data.events !== undefined && data.events !== null) {
                                                                contents.events = deserializeAws_restJson1GlobalEvents(data.events, context);
                                                              }
                                                              if (data.watch !== undefined && data.watch !== null) {
                                                                contents.watch = deserializeAws_restJson1WatchResponse(data.watch, context);
                                                              }
                                                              return Promise.resolve(contents);
                                                            }

                                                            const deserializeAws_restJson1WatchEventsCommandError = async(
                                                              output: __HttpResponse,
                                                              context: __SerdeContext,
                                                            ): Promise<WatchEventsCommandOutput> => {
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

                                                              const serializeAws_restJson1UpdateIdentityGameActivity = (
                                                                input: UpdateIdentityGameActivity,
                                                                context: __SerdeContext
                                                              ): any => {
                                                                return {
                                                                  ...(input.message !== undefined && input.message !== null && { "message": input.message }),
                                                                  ...(input.mutualMetadata !== undefined && input.mutualMetadata !== null && { "mutual_metadata": serializeAws_restJson1Document(input.mutualMetadata, context) }),
                                                                  ...(input.publicMetadata !== undefined && input.publicMetadata !== null && { "public_metadata": serializeAws_restJson1Document(input.publicMetadata, context) }),
                                                                };
                                                              }

                                                              const serializeAws_restJson1Document = (
                                                                input: __DocumentType,
                                                                context: __SerdeContext
                                                              ): any => {
                                                                return input;
                                                              }

                                                              const deserializeAws_restJson1GetGameLinkNewIdentity = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GetGameLinkNewIdentity => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityProfile(output.identity, context): undefined,
                                                                  identityToken: __expectString(output.identity_token),
                                                                  identityTokenExpireTs: (output.identity_token_expire_ts !== undefined && output.identity_token_expire_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.identity_token_expire_ts)): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEvent = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEvent => {
                                                                return {
                                                                  kind: (output.kind !== undefined && output.kind !== null) ? deserializeAws_restJson1GlobalEventKind(__expectUnion(output.kind), context): undefined,
                                                                  notification: (output.notification !== undefined && output.notification !== null) ? deserializeAws_restJson1GlobalEventNotification(output.notification, context): undefined,
                                                                  ts: (output.ts !== undefined && output.ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.ts)): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventChatMessage = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventChatMessage => {
                                                                return {
                                                                  thread: (output.thread !== undefined && output.thread !== null) ? deserializeAws_restJson1ChatThread(output.thread, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventChatRead = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventChatRead => {
                                                                return {
                                                                  readTs: (output.read_ts !== undefined && output.read_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.read_ts)): undefined,
                                                                  threadId: __expectString(output.thread_id),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventChatThreadRemove = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventChatThreadRemove => {
                                                                return {
                                                                  threadId: __expectString(output.thread_id),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventIdentityUpdate = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventIdentityUpdate => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityProfile(output.identity, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventKind = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventKind => {
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
                                                                if (output.chat_thread_remove !== undefined && output.chat_thread_remove !== null) {
                                                                  return {
                                                                    chatThreadRemove: deserializeAws_restJson1GlobalEventChatThreadRemove(output.chat_thread_remove, context)
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
                                                              }

                                                              const deserializeAws_restJson1GlobalEventMatchmakerLobbyJoin = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventMatchmakerLobbyJoin => {
                                                                return {
                                                                  lobby: (output.lobby !== undefined && output.lobby !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfo(output.lobby, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventNotification = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventNotification => {
                                                                return {
                                                                  description: __expectString(output.description),
                                                                  thumbnailUrl: __expectString(output.thumbnail_url),
                                                                  title: __expectString(output.title),
                                                                  url: __expectString(output.url),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEventPartyUpdate = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GlobalEventPartyUpdate => {
                                                                return {
                                                                  party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartySummary(output.party, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GlobalEvents = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (GlobalEvent)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1GlobalEvent(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1ChatMessage = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessage => {
                                                                return {
                                                                  body: (output.body !== undefined && output.body !== null) ? deserializeAws_restJson1ChatMessageBody(__expectUnion(output.body), context): undefined,
                                                                  chatMessageId: __expectString(output.chat_message_id),
                                                                  sendTs: (output.send_ts !== undefined && output.send_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.send_ts)): undefined,
                                                                  threadId: __expectString(output.thread_id),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBody = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBody => {
                                                                if (output.chat_create !== undefined && output.chat_create !== null) {
                                                                  return {
                                                                    chatCreate: deserializeAws_restJson1ChatMessageBodyChatCreate(output.chat_create, context)
                                                                  };
                                                                }
                                                                if (output.deleted !== undefined && output.deleted !== null) {
                                                                  return {
                                                                    deleted: deserializeAws_restJson1ChatMessageBodyDeleted(output.deleted, context)
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
                                                                if (output.group_member_kick !== undefined && output.group_member_kick !== null) {
                                                                  return {
                                                                    groupMemberKick: deserializeAws_restJson1ChatMessageBodyGroupMemberKick(output.group_member_kick, context)
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
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyChatCreate = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyChatCreate => {
                                                                return {
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyDeleted = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyDeleted => {
                                                                return {
                                                                  sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyGroupJoin = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyGroupJoin => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyGroupLeave = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyGroupLeave => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyGroupMemberKick = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyGroupMemberKick => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyIdentityFollow = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyIdentityFollow => {
                                                                return {
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyPartyActivityChange = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyPartyActivityChange => {
                                                                return {
                                                                  activity: (output.activity !== undefined && output.activity !== null) ? deserializeAws_restJson1PartyActivity(__expectUnion(output.activity), context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyPartyInvite = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyPartyInvite => {
                                                                return {
                                                                  inviteToken: __expectString(output.invite_token),
                                                                  party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context): undefined,
                                                                  sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyPartyJoin = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyPartyJoin => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyPartyJoinRequest = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyPartyJoinRequest => {
                                                                return {
                                                                  sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyPartyLeave = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyPartyLeave => {
                                                                return {
                                                                  identity: (output.identity !== undefined && output.identity !== null) ? deserializeAws_restJson1IdentityHandle(output.identity, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatMessageBodyText = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatMessageBodyText => {
                                                                return {
                                                                  body: __expectString(output.body),
                                                                  sender: (output.sender !== undefined && output.sender !== null) ? deserializeAws_restJson1IdentityHandle(output.sender, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatThread = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatThread => {
                                                                return {
                                                                  createTs: (output.create_ts !== undefined && output.create_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.create_ts)): undefined,
                                                                  external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1ChatThreadExternalLinks(output.external, context): undefined,
                                                                  lastReadTs: (output.last_read_ts !== undefined && output.last_read_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.last_read_ts)): undefined,
                                                                  tailMessage: (output.tail_message !== undefined && output.tail_message !== null) ? deserializeAws_restJson1ChatMessage(output.tail_message, context): undefined,
                                                                  threadId: __expectString(output.thread_id),
                                                                  topic: (output.topic !== undefined && output.topic !== null) ? deserializeAws_restJson1ChatTopic(__expectUnion(output.topic), context): undefined,
                                                                  unreadCount: __expectLong(output.unread_count),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatThreadExternalLinks = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatThreadExternalLinks => {
                                                                return {
                                                                  chat: __expectString(output.chat),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatTopic = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatTopic => {
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
                                                              }

                                                              const deserializeAws_restJson1ChatTopicDirect = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatTopicDirect => {
                                                                return {
                                                                  identityA: (output.identity_a !== undefined && output.identity_a !== null) ? deserializeAws_restJson1IdentityHandle(output.identity_a, context): undefined,
                                                                  identityB: (output.identity_b !== undefined && output.identity_b !== null) ? deserializeAws_restJson1IdentityHandle(output.identity_b, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatTopicGroup = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatTopicGroup => {
                                                                return {
                                                                  group: (output.group !== undefined && output.group !== null) ? deserializeAws_restJson1GroupHandle(output.group, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ChatTopicParty = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ChatTopicParty => {
                                                                return {
                                                                  party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ValidationError = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): ValidationError => {
                                                                return {
                                                                  path: (output.path !== undefined && output.path !== null) ? deserializeAws_restJson1ValidationErrorPath(output.path, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1ValidationErrorPath = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (string)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return __expectString(entry) as any;
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1ValidationErrors = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (ValidationError)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1ValidationError(entry, context);
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

                                                              const deserializeAws_restJson1GameStat = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GameStat => {
                                                                return {
                                                                  config: (output.config !== undefined && output.config !== null) ? deserializeAws_restJson1GameStatConfig(output.config, context): undefined,
                                                                  overallValue: __limitedParseFloat32(output.overall_value),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GameStatConfig = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GameStatConfig => {
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
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GameStats = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (GameStat)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1GameStat(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1GameStatSummaries = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (GameStatSummary)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1GameStatSummary(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1GameStatSummary = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GameStatSummary => {
                                                                return {
                                                                  game: (output.game !== undefined && output.game !== null) ? deserializeAws_restJson1GameHandle(output.game, context): undefined,
                                                                  stats: (output.stats !== undefined && output.stats !== null) ? deserializeAws_restJson1GameStats(output.stats, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GameSummaries = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (GameSummary)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1GameSummary(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1GameSummary = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GameSummary => {
                                                                return {
                                                                  bannerUrl: __expectString(output.banner_url),
                                                                  developer: (output.developer !== undefined && output.developer !== null) ? deserializeAws_restJson1GroupHandle(output.developer, context): undefined,
                                                                  displayName: __expectString(output.display_name),
                                                                  gameId: __expectString(output.game_id),
                                                                  logoUrl: __expectString(output.logo_url),
                                                                  nameId: __expectString(output.name_id),
                                                                  tags: (output.tags !== undefined && output.tags !== null) ? deserializeAws_restJson1GameTags(output.tags, context): undefined,
                                                                  url: __expectString(output.url),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GameTags = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (string)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return __expectString(entry) as any;
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1GroupExternalLinks = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GroupExternalLinks => {
                                                                return {
                                                                  chat: __expectString(output.chat),
                                                                  profile: __expectString(output.profile),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GroupHandle = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GroupHandle => {
                                                                return {
                                                                  avatarUrl: __expectString(output.avatar_url),
                                                                  displayName: __expectString(output.display_name),
                                                                  external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1GroupExternalLinks(output.external, context): undefined,
                                                                  groupId: __expectString(output.group_id),
                                                                  isDeveloper: __expectBoolean(output.is_developer),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1GroupSummaries = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (GroupSummary)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1GroupSummary(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1GroupSummary = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): GroupSummary => {
                                                                return {
                                                                  avatarUrl: __expectString(output.avatar_url),
                                                                  bio: __expectString(output.bio),
                                                                  displayName: __expectString(output.display_name),
                                                                  external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1GroupExternalLinks(output.external, context): undefined,
                                                                  groupId: __expectString(output.group_id),
                                                                  isCurrentIdentityMember: __expectBoolean(output.is_current_identity_member),
                                                                  isDeveloper: __expectBoolean(output.is_developer),
                                                                  memberCount: __expectInt32(output.member_count),
                                                                  publicity: __expectString(output.publicity),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1IdentityEmailLinkedAccount = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): IdentityEmailLinkedAccount => {
                                                                return {
                                                                  email: __expectString(output.email),
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

                                                              const deserializeAws_restJson1IdentityGroup = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): IdentityGroup => {
                                                                return {
                                                                  group: (output.group !== undefined && output.group !== null) ? deserializeAws_restJson1GroupHandle(output.group, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1IdentityGroups = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (IdentityGroup)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1IdentityGroup(entry, context);
                                                                });
                                                                return retVal;
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

                                                              const deserializeAws_restJson1IdentityHandles = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (IdentityHandle)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1IdentityHandle(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1IdentityLinkedAccount = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): IdentityLinkedAccount => {
                                                                if (output.email !== undefined && output.email !== null) {
                                                                  return {
                                                                    email: deserializeAws_restJson1IdentityEmailLinkedAccount(output.email, context)
                                                                  };
                                                                }
                                                                return { $unknown: Object.entries(output)[0] };
                                                              }

                                                              const deserializeAws_restJson1IdentityLinkedAccounts = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (IdentityLinkedAccount)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1IdentityLinkedAccount(__expectUnion(entry), context);
                                                                });
                                                                return retVal;
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

                                                              const deserializeAws_restJson1IdentityProfile = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): IdentityProfile => {
                                                                return {
                                                                  accountNumber: __expectInt32(output.account_number),
                                                                  avatarUrl: __expectString(output.avatar_url),
                                                                  awaitingDeletion: __expectBoolean(output.awaiting_deletion),
                                                                  bio: __expectString(output.bio),
                                                                  devState: __expectString(output.dev_state),
                                                                  displayName: __expectString(output.display_name),
                                                                  external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context): undefined,
                                                                  followerCount: __expectLong(output.follower_count),
                                                                  following: __expectBoolean(output.following),
                                                                  followingCount: __expectLong(output.following_count),
                                                                  games: (output.games !== undefined && output.games !== null) ? deserializeAws_restJson1GameStatSummaries(output.games, context): undefined,
                                                                  groups: (output.groups !== undefined && output.groups !== null) ? deserializeAws_restJson1IdentityGroups(output.groups, context): undefined,
                                                                  identityId: __expectString(output.identity_id),
                                                                  isAdmin: __expectBoolean(output.is_admin),
                                                                  isFollowingMe: __expectBoolean(output.is_following_me),
                                                                  isGameLinked: __expectBoolean(output.is_game_linked),
                                                                  isMutualFollowing: __expectBoolean(output.is_mutual_following),
                                                                  isRegistered: __expectBoolean(output.is_registered),
                                                                  joinTs: (output.join_ts !== undefined && output.join_ts !== null) ? __expectNonNull(__parseRfc3339DateTime(output.join_ts)): undefined,
                                                                  linkedAccounts: (output.linked_accounts !== undefined && output.linked_accounts !== null) ? deserializeAws_restJson1IdentityLinkedAccounts(output.linked_accounts, context): undefined,
                                                                  party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartySummary(output.party, context): undefined,
                                                                  presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1IdentitySummaries = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (IdentitySummary)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1IdentitySummary(entry, context);
                                                                });
                                                                return retVal;
                                                              }

                                                              const deserializeAws_restJson1IdentitySummary = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): IdentitySummary => {
                                                                return {
                                                                  accountNumber: __expectInt32(output.account_number),
                                                                  avatarUrl: __expectString(output.avatar_url),
                                                                  displayName: __expectString(output.display_name),
                                                                  external: (output.external !== undefined && output.external !== null) ? deserializeAws_restJson1IdentityExternalLinks(output.external, context): undefined,
                                                                  following: __expectBoolean(output.following),
                                                                  identityId: __expectString(output.identity_id),
                                                                  isFollowingMe: __expectBoolean(output.is_following_me),
                                                                  isMutualFollowing: __expectBoolean(output.is_mutual_following),
                                                                  isRegistered: __expectBoolean(output.is_registered),
                                                                  party: (output.party !== undefined && output.party !== null) ? deserializeAws_restJson1PartyHandle(output.party, context): undefined,
                                                                  presence: (output.presence !== undefined && output.presence !== null) ? deserializeAws_restJson1IdentityPresence(output.presence, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1MatchmakerLobbyJoinInfo = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): MatchmakerLobbyJoinInfo => {
                                                                return {
                                                                  lobbyId: __expectString(output.lobby_id),
                                                                  player: (output.player !== undefined && output.player !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPlayer(output.player, context): undefined,
                                                                  ports: (output.ports !== undefined && output.ports !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPorts(output.ports, context): undefined,
                                                                  region: (output.region !== undefined && output.region !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoRegion(output.region, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1MatchmakerLobbyJoinInfoPlayer = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): MatchmakerLobbyJoinInfoPlayer => {
                                                                return {
                                                                  token: __expectString(output.token),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1MatchmakerLobbyJoinInfoPort = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): MatchmakerLobbyJoinInfoPort => {
                                                                return {
                                                                  host: __expectString(output.host),
                                                                  hostname: __expectString(output.hostname),
                                                                  isTls: __expectBoolean(output.is_tls),
                                                                  port: __expectInt32(output.port),
                                                                  portRange: (output.port_range !== undefined && output.port_range !== null) ? deserializeAws_restJson1MatchmakerLobbyJoinInfoPortRange(output.port_range, context): undefined,
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1MatchmakerLobbyJoinInfoPortRange = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): MatchmakerLobbyJoinInfoPortRange => {
                                                                return {
                                                                  max: __expectInt32(output.max),
                                                                  min: __expectInt32(output.min),
                                                                } as any;
                                                              }

                                                              const deserializeAws_restJson1MatchmakerLobbyJoinInfoPorts = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): { [key: string]: MatchmakerLobbyJoinInfoPort } => {
                                                                return Object.entries(output).reduce((acc: { [key: string]: MatchmakerLobbyJoinInfoPort }, [key, value]: [string, any]) => {
                                                                  if (value === null) {
                                                                    return acc;
                                                                  }
                                                                  return {
                                                                    ...acc,
                                                                    [key]: deserializeAws_restJson1MatchmakerLobbyJoinInfoPort(value, context)
                                                                  };
                                                                }, {});
                                                              }

                                                              const deserializeAws_restJson1MatchmakerLobbyJoinInfoRegion = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): MatchmakerLobbyJoinInfoRegion => {
                                                                return {
                                                                  displayName: __expectString(output.display_name),
                                                                  regionId: __expectString(output.region_id),
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

                                                              const deserializeAws_restJson1PartySummaries = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): (PartySummary)[] => {
                                                                const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                                                                  if (entry === null) {
                                                                    return null as any;
                                                                  }
                                                                  return deserializeAws_restJson1PartySummary(entry, context);
                                                                });
                                                                return retVal;
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

                                                              const deserializeAws_restJson1UploadPresignedRequest = (
                                                                output: any,
                                                                context: __SerdeContext
                                                              ): UploadPresignedRequest => {
                                                                return {
                                                                  path: __expectString(output.path),
                                                                  url: __expectString(output.url),
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
