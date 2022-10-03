// smithy-typescript generated code
import { IdentityServiceServiceException as __BaseException } from "./IdentityServiceServiceException";
import {
  SENSITIVE_STRING,
  ExceptionOptionType as __ExceptionOptionType,
} from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";

export interface ListActivitiesInput {
  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace ListActivitiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActivitiesInput): any => ({
    ...obj,
  })
}

/**
 * A game handle.
 */
export interface GameHandle {
  /**
   * A universally unique identifier.
   */
  gameId: string | undefined;

  /**
   * A human readable short identifier used to references resources.
   *
   * Different than a `rivet.common#Uuid` because this is intended to be human readable.
   *
   * Different than `rivet.common#DisplayName` because this should not include special
   * characters and be short.
   */
  nameId: string | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;

  /**
   * The URL of this game's logo image.
   */
  logoUrl?: string;

  /**
   * The URL of this game's banner image.
   */
  bannerUrl?: string;
}

export namespace GameHandle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GameHandle): any => ({
    ...obj,
  })
}

/**
 * External links for an identity.
 */
export interface IdentityExternalLinks {
  /**
   * A link to this identity's profile page.
   */
  profile: string | undefined;

  /**
   * A link to the Rivet settings page.
   */
  settings?: string;

  /**
   * A link to a chat page with the given identity.
   */
  chat?: string;
}

export namespace IdentityExternalLinks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityExternalLinks): any => ({
    ...obj,
  })
}

/**
 * A party activity denoting that the party is idle.
 */
export interface PartyActivityIdle {
}

export namespace PartyActivityIdle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyActivityIdle): any => ({
    ...obj,
  })
}

/**
 * A party activity denoting that the party is currently searching for a lobby.
 */
export interface PartyActivityMatchmakerFindingLobby {
  /**
   * A game handle.
   */
  game: GameHandle | undefined;
}

export namespace PartyActivityMatchmakerFindingLobby {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyActivityMatchmakerFindingLobby): any => ({
    ...obj,
  })
}

/**
 * A party lobby.
 */
export interface PartyMatchmakerLobby {
  /**
   * A universally unique identifier.
   */
  lobbyId: string | undefined;
}

export namespace PartyMatchmakerLobby {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMatchmakerLobby): any => ({
    ...obj,
  })
}

/**
 * A party activity denoting that the party is currently in a lobby.
 */
export interface PartyActivityMatchmakerLobby {
  /**
   * A party lobby.
   */
  lobby: PartyMatchmakerLobby | undefined;

  /**
   * A game handle.
   */
  game: GameHandle | undefined;
}

export namespace PartyActivityMatchmakerLobby {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyActivityMatchmakerLobby): any => ({
    ...obj,
  })
}

/**
 * A union representing the activity of a given party.
 */
export type PartyActivity =
  | PartyActivity.IdleMember
  | PartyActivity.MatchmakerFindingLobbyMember
  | PartyActivity.MatchmakerLobbyMember
  | PartyActivity.$UnknownMember

export namespace PartyActivity {

  /**
   * A party activity denoting that the party is idle.
   */
  export interface IdleMember {
    idle: PartyActivityIdle;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party activity denoting that the party is currently searching for a lobby.
   */
  export interface MatchmakerFindingLobbyMember {
    idle?: never;
    matchmakerFindingLobby: PartyActivityMatchmakerFindingLobby;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party activity denoting that the party is currently in a lobby.
   */
  export interface MatchmakerLobbyMember {
    idle?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby: PartyActivityMatchmakerLobby;
    $unknown?: never;
  }

  export interface $UnknownMember {
    idle?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    idle: (value: PartyActivityIdle) => T;
    matchmakerFindingLobby: (value: PartyActivityMatchmakerFindingLobby) => T;
    matchmakerLobby: (value: PartyActivityMatchmakerLobby) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: PartyActivity,
    visitor: Visitor<T>
  ): T => {
    if (value.idle !== undefined) return visitor.idle(value.idle);
    if (value.matchmakerFindingLobby !== undefined) return visitor.matchmakerFindingLobby(value.matchmakerFindingLobby);
    if (value.matchmakerLobby !== undefined) return visitor.matchmakerLobby(value.matchmakerLobby);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyActivity): any => {
    if (obj.idle !== undefined) return {idle:
      PartyActivityIdle.filterSensitiveLog(obj.idle)
    };
    if (obj.matchmakerFindingLobby !== undefined) return {matchmakerFindingLobby:
      PartyActivityMatchmakerFindingLobby.filterSensitiveLog(obj.matchmakerFindingLobby)
    };
    if (obj.matchmakerLobby !== undefined) return {matchmakerLobby:
      PartyActivityMatchmakerLobby.filterSensitiveLog(obj.matchmakerLobby)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

/**
 * External links for a party.
 */
export interface PartyExternalLinks {
  /**
   * A link to the given party's chat thread.
   */
  chat: string | undefined;
}

export namespace PartyExternalLinks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyExternalLinks): any => ({
    ...obj,
  })
}

/**
 * A party handle.
 */
export interface PartyHandle {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;

  /**
   * RFC3339 timestamp.
   */
  createTs: Date | undefined;

  /**
   * A union representing the activity of a given party.
   */
  activity: PartyActivity | undefined;

  /**
   * External links for a party.
   */
  external: PartyExternalLinks | undefined;
}

export namespace PartyHandle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyHandle): any => ({
    ...obj,
    ...(obj.activity && { activity:
      PartyActivity.filterSensitiveLog(obj.activity)
    }),
  })
}

/**
 * The game an identity is currently participating in.
 */
export interface IdentityGameActivity {
  /**
   * A game handle.
   */
  game: GameHandle | undefined;

  /**
   * A short activity message about the current game activity.
   */
  message: string | undefined;

  /**
   * JSON data seen by anyone.
   */
  publicMetadata?: __DocumentType;

  /**
   * JSON data seen only by the given identity and their friends.
   */
  friendMetadata?: __DocumentType;
}

export namespace IdentityGameActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityGameActivity): any => ({
    ...obj,
  })
}

export enum IdentityStatus {
  AWAY = "away",
  OFFLINE = "offline",
  ONLINE = "online",
}

/**
 * Information about the identity's current status, party, and active game.
 */
export interface IdentityPresence {
  /**
   * RFC3339 timestamp.
   */
  updateTs: Date | undefined;

  /**
   * The current status of an identity. This helps players understand if another
   * player is currently playing or has their game in the background.
   */
  status: IdentityStatus | string | undefined;

  /**
   * The game an identity is currently participating in.
   */
  gameActivity?: IdentityGameActivity;
}

export namespace IdentityPresence {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityPresence): any => ({
    ...obj,
  })
}

/**
 * An identity handle.
 */
export interface IdentityHandle {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;

  /**
   * Identity profile account number (#1234).
   *
   * These are assigned in addition to an identity's display name in order to
   * allow multiple identities to have the same display name while still
   * providing a unique handle.
   *
   * These are unique to each display name; you can have multiple accounts with
   * different display names and the same account number.
   */
  accountNumber: number | undefined;

  /**
   * The URL of this identity's avatar image.
   */
  avatarUrl: string | undefined;

  /**
   * Information about the identity's current status, party, and active game.
   */
  presence?: IdentityPresence;

  /**
   * A party handle.
   */
  party?: PartyHandle;

  /**
   * Whether or not this identity is registered with a linked account.
   */
  isRegistered: boolean | undefined;

  /**
   * External links for an identity.
   */
  external: IdentityExternalLinks | undefined;
}

export namespace IdentityHandle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityHandle): any => ({
    ...obj,
    ...(obj.party && { party:
      PartyHandle.filterSensitiveLog(obj.party)
    }),
  })
}

/**
 * A party member state denoting that the member is idle.
 */
export interface PartyMemberStateIdle {
}

export namespace PartyMemberStateIdle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberStateIdle): any => ({
    ...obj,
  })
}

/**
 * A party member state denoting that the member is currently searching for a lobby.
 */
export interface PartyMemberStateMatchmakerFindingLobby {
}

export namespace PartyMemberStateMatchmakerFindingLobby {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberStateMatchmakerFindingLobby): any => ({
    ...obj,
  })
}

/**
 * A party member state denoting that the member is in a lobby.
 */
export interface PartyMemberStateMatchmakerLobby {
  /**
   * A universally unique identifier.
   */
  playerId: string | undefined;
}

export namespace PartyMemberStateMatchmakerLobby {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberStateMatchmakerLobby): any => ({
    ...obj,
  })
}

/**
 * A party member state denoting that the member is currently waiting to start matchmaking.
 */
export interface PartyMemberStateMatchmakerPending {
}

export namespace PartyMemberStateMatchmakerPending {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberStateMatchmakerPending): any => ({
    ...obj,
  })
}

/**
 * A union representing the current state of a party member.
 */
export type PartyMemberState =
  | PartyMemberState.IdleMember
  | PartyMemberState.MatchmakerFindingLobbyMember
  | PartyMemberState.MatchmakerLobbyMember
  | PartyMemberState.MatchmakerPendingMember
  | PartyMemberState.$UnknownMember

export namespace PartyMemberState {

  /**
   * A party member state denoting that the member is idle.
   */
  export interface IdleMember {
    idle: PartyMemberStateIdle;
    matchmakerPending?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party member state denoting that the member is currently waiting to start matchmaking.
   */
  export interface MatchmakerPendingMember {
    idle?: never;
    matchmakerPending: PartyMemberStateMatchmakerPending;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party member state denoting that the member is currently searching for a lobby.
   */
  export interface MatchmakerFindingLobbyMember {
    idle?: never;
    matchmakerPending?: never;
    matchmakerFindingLobby: PartyMemberStateMatchmakerFindingLobby;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party member state denoting that the member is in a lobby.
   */
  export interface MatchmakerLobbyMember {
    idle?: never;
    matchmakerPending?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby: PartyMemberStateMatchmakerLobby;
    $unknown?: never;
  }

  export interface $UnknownMember {
    idle?: never;
    matchmakerPending?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    idle: (value: PartyMemberStateIdle) => T;
    matchmakerPending: (value: PartyMemberStateMatchmakerPending) => T;
    matchmakerFindingLobby: (value: PartyMemberStateMatchmakerFindingLobby) => T;
    matchmakerLobby: (value: PartyMemberStateMatchmakerLobby) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: PartyMemberState,
    visitor: Visitor<T>
  ): T => {
    if (value.idle !== undefined) return visitor.idle(value.idle);
    if (value.matchmakerPending !== undefined) return visitor.matchmakerPending(value.matchmakerPending);
    if (value.matchmakerFindingLobby !== undefined) return visitor.matchmakerFindingLobby(value.matchmakerFindingLobby);
    if (value.matchmakerLobby !== undefined) return visitor.matchmakerLobby(value.matchmakerLobby);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberState): any => {
    if (obj.idle !== undefined) return {idle:
      PartyMemberStateIdle.filterSensitiveLog(obj.idle)
    };
    if (obj.matchmakerPending !== undefined) return {matchmakerPending:
      PartyMemberStateMatchmakerPending.filterSensitiveLog(obj.matchmakerPending)
    };
    if (obj.matchmakerFindingLobby !== undefined) return {matchmakerFindingLobby:
      PartyMemberStateMatchmakerFindingLobby.filterSensitiveLog(obj.matchmakerFindingLobby)
    };
    if (obj.matchmakerLobby !== undefined) return {matchmakerLobby:
      PartyMemberStateMatchmakerLobby.filterSensitiveLog(obj.matchmakerLobby)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

/**
 * A party member summary.
 */
export interface PartyMemberSummary {
  /**
   * An identity handle.
   */
  identity: IdentityHandle | undefined;

  /**
   * Whether or not this party member is the leader of the given party.
   */
  isLeader: boolean | undefined;

  /**
   * RFC3339 timestamp.
   */
  joinTs: Date | undefined;

  /**
   * A union representing the current state of a party member.
   */
  state: PartyMemberState | undefined;
}

export namespace PartyMemberSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberSummary): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityHandle.filterSensitiveLog(obj.identity)
    }),
    ...(obj.state && { state:
      PartyMemberState.filterSensitiveLog(obj.state)
    }),
  })
}

export enum PartyPublicityLevel {
  JOIN = "join",
  NONE = "none",
  VIEW = "view",
}

export interface PartyPublicity {
  public: PartyPublicityLevel | string | undefined;
  friends: PartyPublicityLevel | string | undefined;
  groups: PartyPublicityLevel | string | undefined;
}

export namespace PartyPublicity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyPublicity): any => ({
    ...obj,
  })
}

/**
 * A party summary.
 */
export interface PartySummary {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;

  /**
   * RFC3339 timestamp.
   */
  createTs: Date | undefined;

  /**
   * A union representing the activity of a given party.
   */
  activity: PartyActivity | undefined;

  /**
   * External links for a party.
   */
  external: PartyExternalLinks | undefined;

  publicity: PartyPublicity | undefined;
  /**
   * Unsigned 32 bit integer.
   */
  partySize: number | undefined;

  /**
   * A list of party members.
   */
  members: (PartyMemberSummary)[] | undefined;

  /**
   * A universally unique identifier.
   */
  threadId: string | undefined;
}

export namespace PartySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartySummary): any => ({
    ...obj,
    ...(obj.activity && { activity:
      PartyActivity.filterSensitiveLog(obj.activity)
    }),
    ...(obj.members && { members:
      obj.members.map(
        item =>
        PartyMemberSummary.filterSensitiveLog(item)
      )
    }),
  })
}

/**
 * External links for this group.
 */
export interface GroupExternalLinks {
  /**
   * A link to this group's profile page.
   */
  profile: string | undefined;

  /**
   * A link to this group's chat page.
   */
  chat: string | undefined;
}

export namespace GroupExternalLinks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupExternalLinks): any => ({
    ...obj,
  })
}

export enum GroupPublicity {
  CLOSED = "closed",
  OPEN = "open",
}

/**
 * A group summary.
 */
export interface GroupSummary {
  /**
   * A universally unique identifier.
   */
  groupId: string | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;

  /**
   * The URL of this group's avatar image.
   */
  avatarUrl?: string;

  /**
   * External links for this group.
   */
  external: GroupExternalLinks | undefined;

  /**
   * Whether or not this group is a developer.
   */
  isDeveloper: boolean | undefined;

  /**
   * Detailed information about a profile.
   */
  bio: string | undefined;

  /**
   * Whether or not the current identity is a member of this group.
   */
  isCurrentIdentityMember: boolean | undefined;

  /**
   * The current publicity value for the given group.
   */
  publicity: GroupPublicity | string | undefined;

  /**
   * Unsigned 32 bit integer.
   */
  memberCount: number | undefined;
}

export namespace GroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupSummary): any => ({
    ...obj,
  })
}

/**
 * Provided by watchable endpoints used in blocking loops.
 */
export interface WatchResponse {
  /**
   * Index indicating the version of the data responded.
   *
   * Pas this to `rivet.common#WatchQuery` to block and wait for the next response.
   */
  index: string | undefined;
}

export namespace WatchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WatchResponse): any => ({
    ...obj,
  })
}

export interface ListActivitiesOutput {
  /**
   * A list of identity handles.
   */
  identities: (IdentityHandle)[] | undefined;

  /**
   * A list of game handles.
   */
  games: (GameHandle)[] | undefined;

  /**
   * A list of party summaries.
   */
  parties: (PartySummary)[] | undefined;

  /**
   * A list of group summaries.
   */
  suggestedGroups: (GroupSummary)[] | undefined;

  /**
   * A list of identity handles.
   */
  suggestedPlayers: (IdentityHandle)[] | undefined;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace ListActivitiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActivitiesOutput): any => ({
    ...obj,
    ...(obj.identities && { identities:
      obj.identities.map(
        item =>
        IdentityHandle.filterSensitiveLog(item)
      )
    }),
    ...(obj.parties && { parties:
      obj.parties.map(
        item =>
        PartySummary.filterSensitiveLog(item)
      )
    }),
    ...(obj.suggestedPlayers && { suggestedPlayers:
      obj.suggestedPlayers.map(
        item =>
        IdentityHandle.filterSensitiveLog(item)
      )
    }),
  })
}

export interface CompleteGameLinkInput {
  /**
   * A JSON Web Token.
   *
   * Slightly modified to include a description prefix and use Protobufs of
   * JSON.
   */
  identityLinkToken: string | undefined;
}

export namespace CompleteGameLinkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteGameLinkInput): any => ({
    ...obj,
    ...(obj.identityLinkToken && { identityLinkToken:
      SENSITIVE_STRING
    }),
  })
}

export interface CompleteGameLinkOutput {
}

export namespace CompleteGameLinkOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteGameLinkOutput): any => ({
    ...obj,
  })
}

export interface CompleteIdentityAvatarUploadInput {
  /**
   * A universally unique identifier.
   */
  uploadId: string | undefined;
}

export namespace CompleteIdentityAvatarUploadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteIdentityAvatarUploadInput): any => ({
    ...obj,
  })
}

export interface CompleteIdentityAvatarUploadOutput {
}

export namespace CompleteIdentityAvatarUploadOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompleteIdentityAvatarUploadOutput): any => ({
    ...obj,
  })
}

export interface WatchEventsInput {
  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace WatchEventsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WatchEventsInput): any => ({
    ...obj,
  })
}

/**
 * External links for a chat thread.
 */
export interface ChatThreadExternalLinks {
  /**
   * A link to opening the chat thread.
   */
  chat: string | undefined;
}

export namespace ChatThreadExternalLinks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatThreadExternalLinks): any => ({
    ...obj,
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating a new chat was created.
 */
export interface ChatMessageBodyChatCreate {
}

export namespace ChatMessageBodyChatCreate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyChatCreate): any => ({
    ...obj,
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity joined the group.
 */
export interface ChatMessageBodyGroupJoin {
  /**
   * An identity handle.
   */
  identity: IdentityHandle | undefined;
}

export namespace ChatMessageBodyGroupJoin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyGroupJoin): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityHandle.filterSensitiveLog(obj.identity)
    }),
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity left the group.
 */
export interface ChatMessageBodyGroupLeave {
  /**
   * An identity handle.
   */
  identity: IdentityHandle | undefined;
}

export namespace ChatMessageBodyGroupLeave {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyGroupLeave): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityHandle.filterSensitiveLog(obj.identity)
    }),
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity followed the identity.
 */
export interface ChatMessageBodyIdentityFollow {
}

export namespace ChatMessageBodyIdentityFollow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyIdentityFollow): any => ({
    ...obj,
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating a change in the party's current
 * activity.
 */
export interface ChatMessageBodyPartyActivityChange {
}

export namespace ChatMessageBodyPartyActivityChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyPartyActivityChange): any => ({
    ...obj,
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant holding an a party invitation.
 */
export interface ChatMessageBodyPartyInvite {
  /**
   * An identity handle.
   */
  sender: IdentityHandle | undefined;

  /**
   * A party handle.
   */
  party?: PartyHandle;

  /**
   * Pass to `rivet.api.party#GetPartyFromInvite$token` to view more information about the party.
   *
   * Pass to `rivet.api.party.common#JoinPartyInvite$token` to join the party.
   */
  inviteToken?: string;
}

export namespace ChatMessageBodyPartyInvite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyPartyInvite): any => ({
    ...obj,
    ...(obj.sender && { sender:
      IdentityHandle.filterSensitiveLog(obj.sender)
    }),
    ...(obj.party && { party:
      PartyHandle.filterSensitiveLog(obj.party)
    }),
    ...(obj.inviteToken && { inviteToken:
      SENSITIVE_STRING
    }),
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity joined the party.
 */
export interface ChatMessageBodyPartyJoin {
  /**
   * An identity handle.
   */
  identity: IdentityHandle | undefined;
}

export namespace ChatMessageBodyPartyJoin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyPartyJoin): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityHandle.filterSensitiveLog(obj.identity)
    }),
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity requesting to join your party.
 */
export interface ChatMessageBodyPartyJoinRequest {
  /**
   * An identity handle.
   */
  sender: IdentityHandle | undefined;
}

export namespace ChatMessageBodyPartyJoinRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyPartyJoinRequest): any => ({
    ...obj,
    ...(obj.sender && { sender:
      IdentityHandle.filterSensitiveLog(obj.sender)
    }),
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity left the party.
 */
export interface ChatMessageBodyPartyLeave {
  /**
   * An identity handle.
   */
  identity: IdentityHandle | undefined;
}

export namespace ChatMessageBodyPartyLeave {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyPartyLeave): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityHandle.filterSensitiveLog(obj.identity)
    }),
  })
}

/**
 * `rivet.chat#ChatMessageBody` variant for text messages.
 *
 * Sent by other identities using the chat interface.
 */
export interface ChatMessageBodyText {
  /**
   * An identity handle.
   */
  sender: IdentityHandle | undefined;

  /**
   * The text in the message.
   */
  body: string | undefined;
}

export namespace ChatMessageBodyText {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBodyText): any => ({
    ...obj,
    ...(obj.sender && { sender:
      IdentityHandle.filterSensitiveLog(obj.sender)
    }),
  })
}

/**
 * Represents types of chat message bodies.
 */
export type ChatMessageBody =
  | ChatMessageBody.ChatCreateMember
  | ChatMessageBody.GroupJoinMember
  | ChatMessageBody.GroupLeaveMember
  | ChatMessageBody.IdentityFollowMember
  | ChatMessageBody.PartyActivityChangeMember
  | ChatMessageBody.PartyInviteMember
  | ChatMessageBody.PartyJoinMember
  | ChatMessageBody.PartyJoinRequestMember
  | ChatMessageBody.PartyLeaveMember
  | ChatMessageBody.TextMember
  | ChatMessageBody.$UnknownMember

export namespace ChatMessageBody {

  /**
   * `rivet.chat#ChatMessageBody` variant for text messages.
   *
   * Sent by other identities using the chat interface.
   */
  export interface TextMember {
    text: ChatMessageBodyText;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating a new chat was created.
   */
  export interface ChatCreateMember {
    text?: never;
    chatCreate: ChatMessageBodyChatCreate;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating an identity followed the identity.
   */
  export interface IdentityFollowMember {
    text?: never;
    chatCreate?: never;
    identityFollow: ChatMessageBodyIdentityFollow;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating an identity joined the group.
   */
  export interface GroupJoinMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin: ChatMessageBodyGroupJoin;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating an identity left the group.
   */
  export interface GroupLeaveMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave: ChatMessageBodyGroupLeave;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant holding an a party invitation.
   */
  export interface PartyInviteMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite: ChatMessageBodyPartyInvite;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating an identity requesting to join your party.
   */
  export interface PartyJoinRequestMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest: ChatMessageBodyPartyJoinRequest;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating an identity joined the party.
   */
  export interface PartyJoinMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin: ChatMessageBodyPartyJoin;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating an identity left the party.
   */
  export interface PartyLeaveMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave: ChatMessageBodyPartyLeave;
    partyActivityChange?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatMessageBody` variant for indicating a change in the party's current
   * activity.
   */
  export interface PartyActivityChangeMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange: ChatMessageBodyPartyActivityChange;
    $unknown?: never;
  }

  export interface $UnknownMember {
    text?: never;
    chatCreate?: never;
    identityFollow?: never;
    groupJoin?: never;
    groupLeave?: never;
    partyInvite?: never;
    partyJoinRequest?: never;
    partyJoin?: never;
    partyLeave?: never;
    partyActivityChange?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    text: (value: ChatMessageBodyText) => T;
    chatCreate: (value: ChatMessageBodyChatCreate) => T;
    identityFollow: (value: ChatMessageBodyIdentityFollow) => T;
    groupJoin: (value: ChatMessageBodyGroupJoin) => T;
    groupLeave: (value: ChatMessageBodyGroupLeave) => T;
    partyInvite: (value: ChatMessageBodyPartyInvite) => T;
    partyJoinRequest: (value: ChatMessageBodyPartyJoinRequest) => T;
    partyJoin: (value: ChatMessageBodyPartyJoin) => T;
    partyLeave: (value: ChatMessageBodyPartyLeave) => T;
    partyActivityChange: (value: ChatMessageBodyPartyActivityChange) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: ChatMessageBody,
    visitor: Visitor<T>
  ): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.chatCreate !== undefined) return visitor.chatCreate(value.chatCreate);
    if (value.identityFollow !== undefined) return visitor.identityFollow(value.identityFollow);
    if (value.groupJoin !== undefined) return visitor.groupJoin(value.groupJoin);
    if (value.groupLeave !== undefined) return visitor.groupLeave(value.groupLeave);
    if (value.partyInvite !== undefined) return visitor.partyInvite(value.partyInvite);
    if (value.partyJoinRequest !== undefined) return visitor.partyJoinRequest(value.partyJoinRequest);
    if (value.partyJoin !== undefined) return visitor.partyJoin(value.partyJoin);
    if (value.partyLeave !== undefined) return visitor.partyLeave(value.partyLeave);
    if (value.partyActivityChange !== undefined) return visitor.partyActivityChange(value.partyActivityChange);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessageBody): any => {
    if (obj.text !== undefined) return {text:
      ChatMessageBodyText.filterSensitiveLog(obj.text)
    };
    if (obj.chatCreate !== undefined) return {chatCreate:
      ChatMessageBodyChatCreate.filterSensitiveLog(obj.chatCreate)
    };
    if (obj.identityFollow !== undefined) return {identityFollow:
      ChatMessageBodyIdentityFollow.filterSensitiveLog(obj.identityFollow)
    };
    if (obj.groupJoin !== undefined) return {groupJoin:
      ChatMessageBodyGroupJoin.filterSensitiveLog(obj.groupJoin)
    };
    if (obj.groupLeave !== undefined) return {groupLeave:
      ChatMessageBodyGroupLeave.filterSensitiveLog(obj.groupLeave)
    };
    if (obj.partyInvite !== undefined) return {partyInvite:
      ChatMessageBodyPartyInvite.filterSensitiveLog(obj.partyInvite)
    };
    if (obj.partyJoinRequest !== undefined) return {partyJoinRequest:
      ChatMessageBodyPartyJoinRequest.filterSensitiveLog(obj.partyJoinRequest)
    };
    if (obj.partyJoin !== undefined) return {partyJoin:
      ChatMessageBodyPartyJoin.filterSensitiveLog(obj.partyJoin)
    };
    if (obj.partyLeave !== undefined) return {partyLeave:
      ChatMessageBodyPartyLeave.filterSensitiveLog(obj.partyLeave)
    };
    if (obj.partyActivityChange !== undefined) return {partyActivityChange:
      ChatMessageBodyPartyActivityChange.filterSensitiveLog(obj.partyActivityChange)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

/**
 * A chat message.
 */
export interface ChatMessage {
  /**
   * A universally unique identifier.
   */
  chatMessageId: string | undefined;

  /**
   * A universally unique identifier.
   */
  threadId: string | undefined;

  /**
   * RFC3339 timestamp.
   */
  sendTs: Date | undefined;

  /**
   * Represents types of chat message bodies.
   */
  body: ChatMessageBody | undefined;
}

export namespace ChatMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessage): any => ({
    ...obj,
    ...(obj.body && { body:
      ChatMessageBody.filterSensitiveLog(obj.body)
    }),
  })
}

/**
 * `rivet.chat#ChatTopic` variant for direct (identity to identity) chats.
 */
export interface ChatTopicDirect {
  /**
   * An identity handle.
   */
  identityA: IdentityHandle | undefined;

  /**
   * An identity handle.
   */
  identityB: IdentityHandle | undefined;
}

export namespace ChatTopicDirect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatTopicDirect): any => ({
    ...obj,
    ...(obj.identityA && { identityA:
      IdentityHandle.filterSensitiveLog(obj.identityA)
    }),
    ...(obj.identityB && { identityB:
      IdentityHandle.filterSensitiveLog(obj.identityB)
    }),
  })
}

/**
 * A group handle.
 */
export interface GroupHandle {
  /**
   * A universally unique identifier.
   */
  groupId: string | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;

  /**
   * The URL of this group's avatar image.
   */
  avatarUrl?: string;

  /**
   * External links for this group.
   */
  external: GroupExternalLinks | undefined;

  /**
   * Whether or not this group is a developer group.
   */
  isDeveloper?: boolean;
}

export namespace GroupHandle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupHandle): any => ({
    ...obj,
  })
}

/**
 * `rivet.chat#ChatTopic` variant for groups.
 */
export interface ChatTopicGroup {
  /**
   * A group handle.
   */
  group: GroupHandle | undefined;
}

export namespace ChatTopicGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatTopicGroup): any => ({
    ...obj,
  })
}

/**
 * `rivet.chat#ChatTopic` variant for parties.
 */
export interface ChatTopicParty {
  /**
   * A party handle.
   */
  party: PartyHandle | undefined;
}

export namespace ChatTopicParty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatTopicParty): any => ({
    ...obj,
    ...(obj.party && { party:
      PartyHandle.filterSensitiveLog(obj.party)
    }),
  })
}

/**
 * Represents the topic of the given chat thread.
 */
export type ChatTopic =
  | ChatTopic.DirectMember
  | ChatTopic.GroupMember
  | ChatTopic.PartyMember
  | ChatTopic.$UnknownMember

export namespace ChatTopic {

  /**
   * `rivet.chat#ChatTopic` variant for groups.
   */
  export interface GroupMember {
    group: ChatTopicGroup;
    party?: never;
    direct?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatTopic` variant for parties.
   */
  export interface PartyMember {
    group?: never;
    party: ChatTopicParty;
    direct?: never;
    $unknown?: never;
  }

  /**
   * `rivet.chat#ChatTopic` variant for direct (identity to identity) chats.
   */
  export interface DirectMember {
    group?: never;
    party?: never;
    direct: ChatTopicDirect;
    $unknown?: never;
  }

  export interface $UnknownMember {
    group?: never;
    party?: never;
    direct?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    group: (value: ChatTopicGroup) => T;
    party: (value: ChatTopicParty) => T;
    direct: (value: ChatTopicDirect) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: ChatTopic,
    visitor: Visitor<T>
  ): T => {
    if (value.group !== undefined) return visitor.group(value.group);
    if (value.party !== undefined) return visitor.party(value.party);
    if (value.direct !== undefined) return visitor.direct(value.direct);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatTopic): any => {
    if (obj.group !== undefined) return {group:
      ChatTopicGroup.filterSensitiveLog(obj.group)
    };
    if (obj.party !== undefined) return {party:
      ChatTopicParty.filterSensitiveLog(obj.party)
    };
    if (obj.direct !== undefined) return {direct:
      ChatTopicDirect.filterSensitiveLog(obj.direct)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

/**
 * A chat thread.
 */
export interface ChatThread {
  /**
   * A universally unique identifier.
   */
  threadId: string | undefined;

  /**
   * RFC3339 timestamp.
   */
  createTs: Date | undefined;

  /**
   * Represents the topic of the given chat thread.
   */
  topic: ChatTopic | undefined;

  /**
   * A chat message.
   */
  tailMessage?: ChatMessage;

  /**
   * RFC3339 timestamp.
   */
  lastReadTs: Date | undefined;

  /**
   * Unsigned 64 bit integer.
   */
  unreadCount: number | undefined;

  /**
   * External links for a chat thread.
   */
  external: ChatThreadExternalLinks | undefined;
}

export namespace ChatThread {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatThread): any => ({
    ...obj,
    ...(obj.topic && { topic:
      ChatTopic.filterSensitiveLog(obj.topic)
    }),
    ...(obj.tailMessage && { tailMessage:
      ChatMessage.filterSensitiveLog(obj.tailMessage)
    }),
  })
}

/**
 * `rivet.api.identity.common#GlobalEventKind` variant for chat messages.
 *
 * Received any time a message is sent to a chat the identity is in.
 */
export interface GlobalEventChatMessage {
  /**
   * A chat thread.
   */
  thread: ChatThread | undefined;
}

export namespace GlobalEventChatMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventChatMessage): any => ({
    ...obj,
    ...(obj.thread && { thread:
      ChatThread.filterSensitiveLog(obj.thread)
    }),
  })
}

/**
 * `rivet.api.identity.common#GlobalEventKind` variant for chat reads.
 *
 * Received any time the last read timestamp is set. Used to update the status
 * of unread indicators on chats.
 */
export interface GlobalEventChatRead {
  /**
   * A universally unique identifier.
   */
  threadId: string | undefined;

  /**
   * RFC3339 timestamp.
   */
  readTs: Date | undefined;
}

export namespace GlobalEventChatRead {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventChatRead): any => ({
    ...obj,
  })
}

export enum IdentityDevState {
  ACCEPTED = "accepted",
  INACTIVE = "inactive",
  PENDING = "pending",
}

export enum GameStatAggregationMethod {
  /**
   * Average aggergation.
   */
  AVERAGE = "average",
  /**
   * Maximum value aggregation.
   */
  MAX = "max",
  /**
   * Minimum value aggregation.
   */
  MIN = "min",
  /**
   * Summation aggregation.
   */
  SUM = "sum",
}

export enum GameStatFormatMethod {
  /**
   * A duration with second precision (1d 2h 45m 21s).
   */
  DURACTION_SECOND = "duration_second",
  /**
   * A duration with hundredth-second precision (1d 2h 45m 21.46s).
   */
  DURATION_HUNDREDTH_SECOND = "duration_hundredth_second",
  /**
   * A duration with minute precision (1d 2h 45m).
   */
  DURATION_MINUTE = "duration_minute",
  /**
   * A float with 1 decimal (1,234.5).
   */
  FLOAT_1 = "float_1",
  /**
   * A float with 2 decimals (1,234.56).
   */
  FLOAT_2 = "float_2",
  /**
   * A float with 3 decimals (1,234.567).
   */
  FLOAT_3 = "float_3",
  /**
   * An integer with no decimals (1,234).
   */
  INTEGER = "integer",
}

export enum GameStatSortingMethod {
  /**
   * Ascending sorting.
   */
  ASC = "asc",
  /**
   * Descending sorting.
   */
  DESC = "desc",
}

/**
 * A game statistic config.
 */
export interface GameStatConfig {
  /**
   * A universally unique identifier.
   */
  recordId: string | undefined;

  /**
   * A universally unique identifier.
   */
  iconId: string | undefined;

  /**
   * A value denoting the format method of a game statistic.
   */
  format: GameStatFormatMethod | string | undefined;

  /**
   * A value denoting the aggregation method of a game statistic.
   */
  aggregation: GameStatAggregationMethod | string | undefined;

  /**
   * A value denoting the sorting method of a game statistic.
   */
  sorting: GameStatSortingMethod | string | undefined;

  /**
   * Unsigned 32 bit integer.
   */
  priority: number | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;

  /**
   * A string appended to the end of a singular game statistic's value. Example: 1 **dollar**.
   */
  postfixSingular?: string;

  /**
   * A string appended to the end of a game statistic's value that is not exactly 1. Example: 45 **dollars**.
   */
  postfixPlural?: string;

  /**
   * A string appended to the beginning of a singular game statistic's value. Example: **value** 1.
   */
  prefixSingular?: string;

  /**
   * A string prepended to the beginning of a game statistic's value that is not exactly 1. Example: **values** 45.
   */
  prefixPlural?: string;
}

export namespace GameStatConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GameStatConfig): any => ({
    ...obj,
  })
}

/**
 * A game statistic.
 */
export interface GameStat {
  /**
   * A game statistic config.
   */
  config: GameStatConfig | undefined;

  /**
   * A single overall value of the given statistic.
   */
  overallValue: number | undefined;
}

export namespace GameStat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GameStat): any => ({
    ...obj,
  })
}

/**
 * A game statistic summary.
 */
export interface GameStatSummary {
  /**
   * A game handle.
   */
  game: GameHandle | undefined;

  /**
   * A list of game statistics.
   */
  stats: (GameStat)[] | undefined;
}

export namespace GameStatSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GameStatSummary): any => ({
    ...obj,
  })
}

/**
 * A group that the given identity.
 */
export interface IdentityGroup {
  /**
   * A group handle.
   */
  group: GroupHandle | undefined;
}

export namespace IdentityGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityGroup): any => ({
    ...obj,
  })
}

/**
 * An identity's linked email.
 */
export interface IdentityEmailLinkedAccount {
  /**
   * A valid email address.
   */
  email: string | undefined;
}

export namespace IdentityEmailLinkedAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityEmailLinkedAccount): any => ({
    ...obj,
    ...(obj.email && { email:
      SENSITIVE_STRING
    }),
  })
}

/**
 * A union representing an identity's linked accounts.
 */
export type IdentityLinkedAccount =
  | IdentityLinkedAccount.EmailMember
  | IdentityLinkedAccount.$UnknownMember

export namespace IdentityLinkedAccount {

  /**
   * An identity's linked email.
   */
  export interface EmailMember {
    email: IdentityEmailLinkedAccount;
    $unknown?: never;
  }

  export interface $UnknownMember {
    email?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    email: (value: IdentityEmailLinkedAccount) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: IdentityLinkedAccount,
    visitor: Visitor<T>
  ): T => {
    if (value.email !== undefined) return visitor.email(value.email);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityLinkedAccount): any => {
    if (obj.email !== undefined) return {email:
      IdentityEmailLinkedAccount.filterSensitiveLog(obj.email)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

/**
 * An identity profile.
 */
export interface IdentityProfile {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;

  /**
   * Identity profile account number (#1234).
   *
   * These are assigned in addition to an identity's display name in order to
   * allow multiple identities to have the same display name while still
   * providing a unique handle.
   *
   * These are unique to each display name; you can have multiple accounts with
   * different display names and the same account number.
   */
  accountNumber: number | undefined;

  /**
   * The URL of this identity's avatar image.
   */
  avatarUrl: string | undefined;

  /**
   * Information about the identity's current status, party, and active game.
   */
  presence?: IdentityPresence;

  /**
   * A party summary.
   */
  party?: PartySummary;

  /**
   * Whether or not this identity is registered with a linked account.
   */
  isRegistered: boolean | undefined;

  /**
   * External links for an identity.
   */
  external: IdentityExternalLinks | undefined;

  /**
   * Whether or not this identity is an admin.
   */
  isAdmin: boolean | undefined;

  /**
   * Whether or not this game user has been linked through the Rivet
   * dashboard.
   */
  isGameLinked?: boolean;

  /**
   * The state of the given identity's developer status.
   */
  devState?: IdentityDevState | string;

  /**
   * Unsigned 32 bit integer.
   */
  followerCount: number | undefined;

  /**
   * Unsigned 32 bit integer.
   */
  followingCount: number | undefined;

  /**
   * Whether or not this identity is a friend of the requestee's identity.
   */
  isMyFriend: boolean | undefined;

  /**
   * Whether or not this identity is friended by the requestee's identity.
   */
  isTheirFriend: boolean | undefined;

  /**
   * Whether or not this identity is both friended by and a friend of the requestee's identity.
   */
  isMutualFriend: boolean | undefined;

  /**
   * RFC3339 timestamp.
   */
  joinTs: Date | undefined;

  /**
   * Detailed information about a profile.
   */
  bio: string | undefined;

  /**
   * A list of an identity's linked accounts.
   */
  linkedAccounts: (IdentityLinkedAccount)[] | undefined;

  /**
   * A list of groups that the given identity is in.
   */
  groups: (IdentityGroup)[] | undefined;

  /**
   * A list of game statistic summaries.
   */
  games: (GameStatSummary)[] | undefined;
}

export namespace IdentityProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IdentityProfile): any => ({
    ...obj,
    ...(obj.party && { party:
      PartySummary.filterSensitiveLog(obj.party)
    }),
    ...(obj.linkedAccounts && { linkedAccounts:
      SENSITIVE_STRING
    }),
  })
}

/**
 * `rivet.api.identity.common#GlobalEventKind` variant for identity updates.
 *
 * Received any time identity details are changed OR the identity switches.
 */
export interface GlobalEventIdentityUpdate {
  /**
   * An identity profile.
   */
  identity: IdentityProfile | undefined;
}

export namespace GlobalEventIdentityUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventIdentityUpdate): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityProfile.filterSensitiveLog(obj.identity)
    }),
  })
}

/**
 * A matchmaker lobby player.
 */
export interface MatchmakerLobbyJoinInfoPlayer {
  /**
   * Pass this token through the socket to the lobby server. The lobby server
   * will validate this token with `rivet.api.matchmaker#PlayerConnected$player_token`.
   */
  token: string | undefined;
}

export namespace MatchmakerLobbyJoinInfoPlayer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerLobbyJoinInfoPlayer): any => ({
    ...obj,
    ...(obj.token && { token:
      SENSITIVE_STRING
    }),
  })
}

/**
 * Inclusive range of ports that can be connected to.
 */
export interface MatchmakerLobbyJoinInfoPortRange {
  /**
   * Minimum port that can be connected to. Inclusive range.
   */
  min: number | undefined;

  /**
   * Maximum port that can be connected to. Inclusive range.
   */
  max: number | undefined;
}

export namespace MatchmakerLobbyJoinInfoPortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerLobbyJoinInfoPortRange): any => ({
    ...obj,
  })
}

/**
 * A matchmaker lobby port.
 *
 * Configured by `rivet.cloud#LobbyGroupRuntimeDockerPort$label`.
 */
export interface MatchmakerLobbyJoinInfoPort {
  /**
   * The host for the given port.
   *
   * Will be null if using a port range.
   */
  host?: string;

  /**
   * The hostname for the given port.
   */
  hostname: string | undefined;

  /**
   * The port number for this lobby.
   *
   * Will be null if using a port range.
   */
  port?: number;

  /**
   * The port range for this lobby.
   */
  portRange?: MatchmakerLobbyJoinInfoPortRange;

  /**
   * Wether or not this lobby port uses TLS.
   *
   * You cannot mix a non-TLS and TLS ports.
   */
  isTls: boolean | undefined;
}

export namespace MatchmakerLobbyJoinInfoPort {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerLobbyJoinInfoPort): any => ({
    ...obj,
  })
}

/**
 * A matchmaker lobby region.
 */
export interface MatchmakerLobbyJoinInfoRegion {
  /**
   * A human readable short identifier used to references resources.
   *
   * Different than a `rivet.common#Uuid` because this is intended to be human readable.
   *
   * Different than `rivet.common#DisplayName` because this should not include special
   * characters and be short.
   */
  regionId: string | undefined;

  /**
   * Represent a resource's readable display name.
   */
  displayName: string | undefined;
}

export namespace MatchmakerLobbyJoinInfoRegion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerLobbyJoinInfoRegion): any => ({
    ...obj,
  })
}

/**
 * A matchmaker lobby.
 */
export interface MatchmakerLobbyJoinInfo {
  /**
   * A universally unique identifier.
   */
  lobbyId: string | undefined;

  /**
   * A matchmaker lobby region.
   */
  region: MatchmakerLobbyJoinInfoRegion | undefined;

  /**
   * A list of lobby ports.
   */
  ports: { [key: string]: MatchmakerLobbyJoinInfoPort } | undefined;

  /**
   * A matchmaker lobby player.
   */
  player: MatchmakerLobbyJoinInfoPlayer | undefined;
}

export namespace MatchmakerLobbyJoinInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerLobbyJoinInfo): any => ({
    ...obj,
    ...(obj.player && { player:
      MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog(obj.player)
    }),
  })
}

/**
 * `rivet.api.identity.common#GlobalEventKind` variant for party updates.
 *
 * Received when the identity should be instructed to join a lobby.
 *
 * This needs to be implemented in conjunction with parties in order to force
 * clients to join the same lobby as the party they're in.
 */
export interface GlobalEventMatchmakerLobbyJoin {
  /**
   * A matchmaker lobby.
   */
  lobby: MatchmakerLobbyJoinInfo | undefined;
}

export namespace GlobalEventMatchmakerLobbyJoin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventMatchmakerLobbyJoin): any => ({
    ...obj,
    ...(obj.lobby && { lobby:
      MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
    }),
  })
}

/**
 * `rivet.api.identity.common#GlobalEventKind` variant for party updates.
 *
 * Received any time the identity joins a party, a party is updated, or when the
 * identity leaves a party.
 */
export interface GlobalEventPartyUpdate {
  /**
   * If null, the identity left the party.
   */
  party?: PartySummary;
}

export namespace GlobalEventPartyUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventPartyUpdate): any => ({
    ...obj,
    ...(obj.party && { party:
      PartySummary.filterSensitiveLog(obj.party)
    }),
  })
}

/**
 * Kind of event that occured.
 */
export type GlobalEventKind =
  | GlobalEventKind.ChatMessageMember
  | GlobalEventKind.ChatReadMember
  | GlobalEventKind.IdentityUpdateMember
  | GlobalEventKind.MatchmakerLobbyJoinMember
  | GlobalEventKind.PartyUpdateMember
  | GlobalEventKind.$UnknownMember

export namespace GlobalEventKind {

  /**
   * `rivet.api.identity.common#GlobalEventKind` variant for chat messages.
   *
   * Received any time a message is sent to a chat the identity is in.
   */
  export interface ChatMessageMember {
    chatMessage: GlobalEventChatMessage;
    chatRead?: never;
    partyUpdate?: never;
    identityUpdate?: never;
    matchmakerLobbyJoin?: never;
    $unknown?: never;
  }

  /**
   * `rivet.api.identity.common#GlobalEventKind` variant for chat reads.
   *
   * Received any time the last read timestamp is set. Used to update the status
   * of unread indicators on chats.
   */
  export interface ChatReadMember {
    chatMessage?: never;
    chatRead: GlobalEventChatRead;
    partyUpdate?: never;
    identityUpdate?: never;
    matchmakerLobbyJoin?: never;
    $unknown?: never;
  }

  /**
   * `rivet.api.identity.common#GlobalEventKind` variant for party updates.
   *
   * Received any time the identity joins a party, a party is updated, or when the
   * identity leaves a party.
   */
  export interface PartyUpdateMember {
    chatMessage?: never;
    chatRead?: never;
    partyUpdate: GlobalEventPartyUpdate;
    identityUpdate?: never;
    matchmakerLobbyJoin?: never;
    $unknown?: never;
  }

  /**
   * `rivet.api.identity.common#GlobalEventKind` variant for identity updates.
   *
   * Received any time identity details are changed OR the identity switches.
   */
  export interface IdentityUpdateMember {
    chatMessage?: never;
    chatRead?: never;
    partyUpdate?: never;
    identityUpdate: GlobalEventIdentityUpdate;
    matchmakerLobbyJoin?: never;
    $unknown?: never;
  }

  /**
   * `rivet.api.identity.common#GlobalEventKind` variant for party updates.
   *
   * Received when the identity should be instructed to join a lobby.
   *
   * This needs to be implemented in conjunction with parties in order to force
   * clients to join the same lobby as the party they're in.
   */
  export interface MatchmakerLobbyJoinMember {
    chatMessage?: never;
    chatRead?: never;
    partyUpdate?: never;
    identityUpdate?: never;
    matchmakerLobbyJoin: GlobalEventMatchmakerLobbyJoin;
    $unknown?: never;
  }

  export interface $UnknownMember {
    chatMessage?: never;
    chatRead?: never;
    partyUpdate?: never;
    identityUpdate?: never;
    matchmakerLobbyJoin?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    chatMessage: (value: GlobalEventChatMessage) => T;
    chatRead: (value: GlobalEventChatRead) => T;
    partyUpdate: (value: GlobalEventPartyUpdate) => T;
    identityUpdate: (value: GlobalEventIdentityUpdate) => T;
    matchmakerLobbyJoin: (value: GlobalEventMatchmakerLobbyJoin) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: GlobalEventKind,
    visitor: Visitor<T>
  ): T => {
    if (value.chatMessage !== undefined) return visitor.chatMessage(value.chatMessage);
    if (value.chatRead !== undefined) return visitor.chatRead(value.chatRead);
    if (value.partyUpdate !== undefined) return visitor.partyUpdate(value.partyUpdate);
    if (value.identityUpdate !== undefined) return visitor.identityUpdate(value.identityUpdate);
    if (value.matchmakerLobbyJoin !== undefined) return visitor.matchmakerLobbyJoin(value.matchmakerLobbyJoin);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventKind): any => {
    if (obj.chatMessage !== undefined) return {chatMessage:
      GlobalEventChatMessage.filterSensitiveLog(obj.chatMessage)
    };
    if (obj.chatRead !== undefined) return {chatRead:
      GlobalEventChatRead.filterSensitiveLog(obj.chatRead)
    };
    if (obj.partyUpdate !== undefined) return {partyUpdate:
      GlobalEventPartyUpdate.filterSensitiveLog(obj.partyUpdate)
    };
    if (obj.identityUpdate !== undefined) return {identityUpdate:
      GlobalEventIdentityUpdate.filterSensitiveLog(obj.identityUpdate)
    };
    if (obj.matchmakerLobbyJoin !== undefined) return {matchmakerLobbyJoin:
      GlobalEventMatchmakerLobbyJoin.filterSensitiveLog(obj.matchmakerLobbyJoin)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

/**
 * Notifications represent information that should be presented to the user
 * immediately.
 *
 * At the moment, only chat message events have associated notifications.
 *
 * # Display
 *
 * Notifications should be displayed in an unobtrusive manner throughout the
 * entire game. Notifications should disappear after a few seconds if not
 * interacted with.
 *
 * # Interactions
 *
 * If your platform supports it, notifications should be able to be clicked or
 * tapped in order to open the relevant context for the event.
 *
 * For a simple implementation of notification interactions, open `url` in a
 * web browser to present the relevant context. For example, a chat message
 * notification will open the thread the chat message was sent in.
 *
 * For advanced implementations that implement a custom chat UI, use
 * `rivet.api.identity.common#GlobalEvent$kind` to determine what action to
 * take when the notification is interacted with. For example, if the global
 * event kind is `rivet.api.identity.common#GlobalEventChatMessage`, then open
 * the chat UI for the given thread.
 */
export interface GlobalEventNotification {
  title: string | undefined;
  description: string | undefined;
  /**
   * URL to an image thumbnail that should be shown for this notification.
   */
  thumbnailUrl: string | undefined;

  /**
   * Rivet Hub URL that holds the relevant context for this notification.
   */
  url: string | undefined;
}

export namespace GlobalEventNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEventNotification): any => ({
    ...obj,
  })
}

/**
 * An event relevant to the current identity.
 */
export interface GlobalEvent {
  /**
   * RFC3339 timestamp.
   */
  ts: Date | undefined;

  /**
   * Kind of event that occured.
   */
  kind: GlobalEventKind | undefined;

  /**
   * Notifications represent information that should be presented to the user
   * immediately.
   *
   * At the moment, only chat message events have associated notifications.
   *
   * # Display
   *
   * Notifications should be displayed in an unobtrusive manner throughout the
   * entire game. Notifications should disappear after a few seconds if not
   * interacted with.
   *
   * # Interactions
   *
   * If your platform supports it, notifications should be able to be clicked or
   * tapped in order to open the relevant context for the event.
   *
   * For a simple implementation of notification interactions, open `url` in a
   * web browser to present the relevant context. For example, a chat message
   * notification will open the thread the chat message was sent in.
   *
   * For advanced implementations that implement a custom chat UI, use
   * `rivet.api.identity.common#GlobalEvent$kind` to determine what action to
   * take when the notification is interacted with. For example, if the global
   * event kind is `rivet.api.identity.common#GlobalEventChatMessage`, then open
   * the chat UI for the given thread.
   */
  notification?: GlobalEventNotification;
}

export namespace GlobalEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalEvent): any => ({
    ...obj,
    ...(obj.kind && { kind:
      GlobalEventKind.filterSensitiveLog(obj.kind)
    }),
  })
}

export interface WatchEventsOutput {
  /**
   * A list of global events. Ordered old to new.
   */
  events: (GlobalEvent)[] | undefined;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace WatchEventsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WatchEventsOutput): any => ({
    ...obj,
    ...(obj.events && { events:
      obj.events.map(
        item =>
        GlobalEvent.filterSensitiveLog(item)
      )
    }),
  })
}

export interface FollowIdentityInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;
}

export namespace FollowIdentityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FollowIdentityInput): any => ({
    ...obj,
  })
}

export interface FollowIdentityOutput {
}

export namespace FollowIdentityOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FollowIdentityOutput): any => ({
    ...obj,
  })
}

export interface GetGameLinkInput {
  /**
   * `identity_link_token` returned by `PrepareGameLink`.
   */
  identityLinkToken: string | undefined;

  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetGameLinkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGameLinkInput): any => ({
    ...obj,
    ...(obj.identityLinkToken && { identityLinkToken:
      SENSITIVE_STRING
    }),
  })
}

export interface GetGameLinkNewIdentity {
  /**
   * See `rivet.api.identity#SetupIdentityOutput$identity_token`.
   */
  identityToken: string | undefined;

  /**
   * See `rivet.api.identity#SetupIdentityOutput$identity_token_expire_ts`.
   */
  identityTokenExpireTs: Date | undefined;

  /**
   * See `rivet.api.identity#SetupIdentityOutput$identity`.
   */
  identity: IdentityProfile | undefined;
}

export namespace GetGameLinkNewIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGameLinkNewIdentity): any => ({
    ...obj,
    ...(obj.identityToken && { identityToken:
      SENSITIVE_STRING
    }),
    ...(obj.identity && { identity:
      IdentityProfile.filterSensitiveLog(obj.identity)
    }),
  })
}

export enum GameLinkStatus {
  COMPLETE = "complete",
  INCOMPLETE = "incomplete",
  REVOKED = "revoked",
}

export interface GetGameLinkOutput {
  /**
   * The link status between an identity and a game user.
   */
  status: GameLinkStatus | string | undefined;

  /**
   * A game handle.
   */
  game: GameHandle | undefined;

  /**
   * If `status` is `GameLinkStatus$COMPLETE`, this will return the new
   * identity and identity token to use for all future requests.
   */
  newIdentity?: GetGameLinkNewIdentity;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetGameLinkOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGameLinkOutput): any => ({
    ...obj,
    ...(obj.newIdentity && { newIdentity:
      GetGameLinkNewIdentity.filterSensitiveLog(obj.newIdentity)
    }),
  })
}

export interface GetIdentityProfileInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;

  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetIdentityProfileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIdentityProfileInput): any => ({
    ...obj,
  })
}

export interface GetIdentityProfileOutput {
  /**
   * An identity profile.
   */
  identity: IdentityProfile | undefined;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetIdentityProfileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIdentityProfileOutput): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityProfile.filterSensitiveLog(obj.identity)
    }),
  })
}

export interface GetIdentitySelfProfileInput {
  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetIdentitySelfProfileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIdentitySelfProfileInput): any => ({
    ...obj,
  })
}

export interface GetIdentitySelfProfileOutput {
  /**
   * An identity profile.
   */
  identity: IdentityProfile | undefined;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetIdentitySelfProfileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIdentitySelfProfileOutput): any => ({
    ...obj,
    ...(obj.identity && { identity:
      IdentityProfile.filterSensitiveLog(obj.identity)
    }),
  })
}

export interface ListFollowersInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;

  anchor?: string;
  /**
   * Unsigned 32 bit integer.
   */
  limit?: number;
}

export namespace ListFollowersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFollowersInput): any => ({
    ...obj,
  })
}

export interface ListFollowersOutput {
  /**
   * A list of identity handles.
   */
  identities: (IdentityHandle)[] | undefined;

  anchor?: string;
}

export namespace ListFollowersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFollowersOutput): any => ({
    ...obj,
    ...(obj.identities && { identities:
      obj.identities.map(
        item =>
        IdentityHandle.filterSensitiveLog(item)
      )
    }),
  })
}

export interface ListFollowingInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;

  anchor?: string;
  /**
   * Unsigned 32 bit integer.
   */
  limit?: number;
}

export namespace ListFollowingInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFollowingInput): any => ({
    ...obj,
  })
}

export interface ListFollowingOutput {
  /**
   * A list of identity handles.
   */
  identities: (IdentityHandle)[] | undefined;

  anchor?: string;
}

export namespace ListFollowingOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFollowingOutput): any => ({
    ...obj,
    ...(obj.identities && { identities:
      obj.identities.map(
        item =>
        IdentityHandle.filterSensitiveLog(item)
      )
    }),
  })
}

export interface ListFriendsInput {
  anchor?: string;
  /**
   * Unsigned 32 bit integer.
   */
  limit?: number;
}

export namespace ListFriendsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFriendsInput): any => ({
    ...obj,
  })
}

export interface ListFriendsOutput {
  /**
   * A list of identity handles.
   */
  identities: (IdentityHandle)[] | undefined;

  anchor?: string;
}

export namespace ListFriendsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFriendsOutput): any => ({
    ...obj,
    ...(obj.identities && { identities:
      obj.identities.map(
        item =>
        IdentityHandle.filterSensitiveLog(item)
      )
    }),
  })
}

export interface PrepareIdentityAvatarUploadInput {
  /**
   * The path/filename of the identity avatar.
   */
  path: string | undefined;

  /**
   * The MIME type of the identity avatar.
   */
  mime?: string;

  /**
   * Unsigned 64 bit integer.
   */
  contentLength: number | undefined;
}

export namespace PrepareIdentityAvatarUploadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrepareIdentityAvatarUploadInput): any => ({
    ...obj,
  })
}

/**
 * A presigned request used to upload files. Upload your file to the given URL via a PUT request.
 */
export interface UploadPresignedRequest {
  /**
   * The name of the file to upload. This is the same as the one given in the upload prepare file.
   */
  path: string | undefined;

  /**
   * The URL of the presigned request for which to upload your file to.
   */
  url: string | undefined;
}

export namespace UploadPresignedRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UploadPresignedRequest): any => ({
    ...obj,
  })
}

export interface PrepareIdentityAvatarUploadOutput {
  /**
   * A universally unique identifier.
   */
  uploadId: string | undefined;

  /**
   * A presigned request used to upload files. Upload your file to the given URL via a PUT request.
   */
  presignedRequest: UploadPresignedRequest | undefined;
}

export namespace PrepareIdentityAvatarUploadOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrepareIdentityAvatarUploadOutput): any => ({
    ...obj,
  })
}

export interface RemoveIdentityGameActivityInput {
}

export namespace RemoveIdentityGameActivityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveIdentityGameActivityInput): any => ({
    ...obj,
  })
}

export interface RemoveIdentityGameActivityOutput {
}

export namespace RemoveIdentityGameActivityOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveIdentityGameActivityOutput): any => ({
    ...obj,
  })
}

export interface SearchIdentitiesInput {
  /**
   * The query to match identity display names and account numbers against.
   */
  query: string | undefined;

  /**
   * How many identities to offset the search by.
   */
  anchor?: string;

  /**
   * Amount of identities to return.
   */
  limit?: number;
}

export namespace SearchIdentitiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchIdentitiesInput): any => ({
    ...obj,
  })
}

export interface SearchIdentitiesOutput {
  /**
   * A list of identity handles.
   */
  identities: (IdentityHandle)[] | undefined;

  /**
   * The pagination anchor.
   */
  anchor?: string;
}

export namespace SearchIdentitiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchIdentitiesOutput): any => ({
    ...obj,
    ...(obj.identities && { identities:
      obj.identities.map(
        item =>
        IdentityHandle.filterSensitiveLog(item)
      )
    }),
  })
}

/**
 * Information about the identity's current game. This is information that all
 * other identities can see about what the current identity is doing.
 */
export interface UpdateIdentityGameActivity {
  /**
   * A short message about the current game activity.
   */
  message: string | undefined;

  /**
   * JSON data seen by anyone.
   */
  publicMetadata?: __DocumentType;

  /**
   * JSON data seen only by the given identity and their friends.
   */
  friendMetadata?: __DocumentType;
}

export namespace UpdateIdentityGameActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityGameActivity): any => ({
    ...obj,
  })
}

export interface SetIdentityGameActivityInput {
  /**
   * Information about the identity's current game. This is information that all
   * other identities can see about what the current identity is doing.
   */
  gameActivity: UpdateIdentityGameActivity | undefined;
}

export namespace SetIdentityGameActivityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetIdentityGameActivityInput): any => ({
    ...obj,
  })
}

export interface SetIdentityGameActivityOutput {
}

export namespace SetIdentityGameActivityOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetIdentityGameActivityOutput): any => ({
    ...obj,
  })
}

export interface SetupIdentityInput {
  /**
   * Token returned from previous call to
   * `rivet.api.identity#SetupIdentity`. If this token is invalid, a new
   * identity will be returned.
   */
  existingIdentityToken?: string;
}

export namespace SetupIdentityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetupIdentityInput): any => ({
    ...obj,
    ...(obj.existingIdentityToken && { existingIdentityToken:
      SENSITIVE_STRING
    }),
  })
}

export interface SetupIdentityOutput {
  /**
   * Token used to authenticate the identity.
   *
   * Should be stored somewhere permanent.
   *
   * Pass this to `rivet.api.identity#SetupIdentity$existing_identity_token`
   * next time `rivet.api.identity#SetupIdentity` is called.
   *
   * Token has a 90 day TTL. This means that if `rivet.api.identity#SetupIdentity` is not called
   * again within 90 days, the token will no longer be valid. If this
   * happens, the user can recover their account through the linking process
   * (see `rivet.api.identity#PrepareGameLink`).
   *
   * This token should be stored locally and never sent to a server or
   * another device.
   *
   * If this token is comprimised, anyone with access to this token has
   * control of the identity.
   */
  identityToken: string | undefined;

  /**
   * Timestamp (in milliseconds) at which the token expires.
   */
  identityTokenExpireTs: Date | undefined;

  /**
   * Information about the identity that was just authenticated.
   */
  identity: IdentityProfile | undefined;
}

export namespace SetupIdentityOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetupIdentityOutput): any => ({
    ...obj,
    ...(obj.identityToken && { identityToken:
      SENSITIVE_STRING
    }),
    ...(obj.identity && { identity:
      IdentityProfile.filterSensitiveLog(obj.identity)
    }),
  })
}

export interface SignupForBetaInput {
  name: string | undefined;
  companyName?: string;
  companySize: string | undefined;
  preferredTools: string | undefined;
  goals: string | undefined;
}

export namespace SignupForBetaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SignupForBetaInput): any => ({
    ...obj,
  })
}

export interface SignupForBetaOutput {
}

export namespace SignupForBetaOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SignupForBetaOutput): any => ({
    ...obj,
  })
}

export interface UnfollowIdentityInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;
}

export namespace UnfollowIdentityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnfollowIdentityInput): any => ({
    ...obj,
  })
}

export interface UnfollowIdentityOutput {
}

export namespace UnfollowIdentityOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnfollowIdentityOutput): any => ({
    ...obj,
  })
}

export interface UpdateIdentityProfileInput {
  /**
   * Represent a resource's readable display name.
   */
  displayName?: string;

  /**
   * Identity profile account number (#1234).
   *
   * These are assigned in addition to an identity's display name in order to
   * allow multiple identities to have the same display name while still
   * providing a unique handle.
   *
   * These are unique to each display name; you can have multiple accounts with
   * different display names and the same account number.
   */
  accountNumber?: number;

  /**
   * Detailed information about a profile.
   */
  bio?: string;
}

export namespace UpdateIdentityProfileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityProfileInput): any => ({
    ...obj,
  })
}

export interface UpdateIdentityProfileOutput {
}

export namespace UpdateIdentityProfileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityProfileOutput): any => ({
    ...obj,
  })
}

export interface UpdateIdentityStatusInput {
  /**
   * The current status of an identity. This helps players understand if another
   * player is currently playing or has their game in the background.
   */
  status: IdentityStatus | string | undefined;
}

export namespace UpdateIdentityStatusInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityStatusInput): any => ({
    ...obj,
  })
}

export interface UpdateIdentityStatusOutput {
}

export namespace UpdateIdentityStatusOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIdentityStatusOutput): any => ({
    ...obj,
  })
}

export interface ValidateIdentityProfileInput {
  /**
   * Represent a resource's readable display name.
   */
  displayName?: string;

  /**
   * Identity profile account number (#1234).
   *
   * These are assigned in addition to an identity's display name in order to
   * allow multiple identities to have the same display name while still
   * providing a unique handle.
   *
   * These are unique to each display name; you can have multiple accounts with
   * different display names and the same account number.
   */
  accountNumber?: number;

  /**
   * Detailed information about a profile.
   */
  bio?: string;
}

export namespace ValidateIdentityProfileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateIdentityProfileInput): any => ({
    ...obj,
  })
}

/**
 * An error given by failed content validation.
 */
export interface ValidationError {
  /**
   * A list of strings denoting the origin of a validation error.
   */
  path: (string)[] | undefined;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  })
}

export interface ValidateIdentityProfileOutput {
  /**
   * A list of validation errors.
   */
  errors: (ValidationError)[] | undefined;
}

export namespace ValidateIdentityProfileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateIdentityProfileOutput): any => ({
    ...obj,
  })
}

export interface PrepareGameLinkInput {
}

export namespace PrepareGameLinkInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrepareGameLinkInput): any => ({
    ...obj,
  })
}

export interface PrepareGameLinkOutput {
  /**
   * Pass this to `rivet.api.identity#GetGameLink` to get the linking status.
   *
   * Valid for 15 minutes.
   */
  identityLinkToken: string | undefined;

  /**
   * The URL that the user should visit to link their Rivet account.
   */
  identityLinkUrl: string | undefined;

  /**
   * Timestamp (in milliseconds) at which the link will expire.
   */
  expireTs: Date | undefined;
}

export namespace PrepareGameLinkOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrepareGameLinkOutput): any => ({
    ...obj,
  })
}

/**
 * An error thrown when the requestee has sent an invalid or malformed request.
 */
export class BadRequestError extends __BaseException {
  readonly name: "BadRequestError" = "BadRequestError";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * Unstructured metadata relating to an error. Must be manually parsed.
   */
  metadata?: __DocumentType;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestError, __BaseException>) {
    super({
      name: "BadRequestError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, BadRequestError.prototype);
    this.code = opts.code;
    this.metadata = opts.metadata;
  }
}

/**
 * An error thrown when the requestee requests a resource they do not have access to.
 */
export class ForbiddenError extends __BaseException {
  readonly name: "ForbiddenError" = "ForbiddenError";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * Unstructured metadata relating to an error. Must be manually parsed.
   */
  metadata?: __DocumentType;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenError, __BaseException>) {
    super({
      name: "ForbiddenError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ForbiddenError.prototype);
    this.code = opts.code;
    this.metadata = opts.metadata;
  }
}

/**
 * An error caused by internal server problems.
 */
export class InternalError extends __BaseException {
  readonly name: "InternalError" = "InternalError";
  readonly $fault: "server" = "server";
  $retryable = {
  };
  code: string | undefined;
  /**
   * Unstructured metadata relating to an error. Must be manually parsed.
   */
  metadata?: __DocumentType;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalError, __BaseException>) {
    super({
      name: "InternalError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, InternalError.prototype);
    this.code = opts.code;
    this.metadata = opts.metadata;
  }
}

/**
 * An error thrown when the requestee requests a non existant resource.
 */
export class NotFoundError extends __BaseException {
  readonly name: "NotFoundError" = "NotFoundError";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * Unstructured metadata relating to an error. Must be manually parsed.
   */
  metadata?: __DocumentType;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundError, __BaseException>) {
    super({
      name: "NotFoundError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, NotFoundError.prototype);
    this.code = opts.code;
    this.metadata = opts.metadata;
  }
}

/**
 * An error thrown when the requestee has hit a rate limit. You are sending too many requests too quickly.
 */
export class RateLimitError extends __BaseException {
  readonly name: "RateLimitError" = "RateLimitError";
  readonly $fault: "client" = "client";
  code: string | undefined;
  /**
   * Unstructured metadata relating to an error. Must be manually parsed.
   */
  metadata?: __DocumentType;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RateLimitError, __BaseException>) {
    super({
      name: "RateLimitError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, RateLimitError.prototype);
    this.code = opts.code;
    this.metadata = opts.metadata;
  }
}

/**
 * An error thrown when the requestee is not authenticated.
 */
export class UnauthorizedError extends __BaseException {
  readonly name: "UnauthorizedError" = "UnauthorizedError";
  readonly $fault: "client" = "client";
  $retryable = {
  };
  code: string | undefined;
  /**
   * Unstructured metadata relating to an error. Must be manually parsed.
   */
  metadata?: __DocumentType;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedError, __BaseException>) {
    super({
      name: "UnauthorizedError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
    this.code = opts.code;
    this.metadata = opts.metadata;
  }
}
