// smithy-typescript generated code
import { PartyServiceServiceException as __BaseException } from "./PartyServiceServiceException";
import {
  SENSITIVE_STRING,
  ExceptionOptionType as __ExceptionOptionType,
} from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";

/**
 * Configuration for creating a party invite.
 */
export interface CreatePartyInviteConfig {
  /**
   * An alias used to join a given party.
   *
   * This alias must be unique for all invites for your game.
   *
   * Pass this alias to `rivet.api.party.common#CreatedInvite$alias` to consume
   * the invite.
   */
  alias?: string;
}

export namespace CreatePartyInviteConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartyInviteConfig): any => ({
    ...obj,
  })
}

export enum PartyPublicityLevel {
  JOIN = "join",
  NONE = "none",
  VIEW = "view",
}

/**
 * Publicity configuration for creating a party.
 *
 * Null values will default
 */
export interface CreatePartyPublicityConfig {
  /**
   * Defaults to `rivet.party#PartyPublicityLevel$VIEW`.
   */
  public?: PartyPublicityLevel | string;

  /**
   * Defaults to `rivet.party#PartyPublicityLevel$JOIN`.
   */
  mutualFollowers?: PartyPublicityLevel | string;

  /**
   * Defaults to `rivet.party#PartyPublicityLevel$VIEW`.
   */
  groups?: PartyPublicityLevel | string;
}

export namespace CreatePartyPublicityConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartyPublicityConfig): any => ({
    ...obj,
  })
}

export interface CreatePartyInput {
  /**
   * How many members can join the party.
   *
   * If using this party with the matchmaker, this number should be less than
   * or equal to your party player limit. Super large parties may not be able
   * to fit insite a lobby and be unable to join the game.
   */
  partySize: number | undefined;

  /**
   * Publicity configuration for creating a party.
   *
   * Null values will default
   */
  publicity?: CreatePartyPublicityConfig;

  invites?: (CreatePartyInviteConfig)[];
  /**
   * If the player is currently in the lobby, pass the token from
   * `rivet.matchmaker#MatchmakerLobbyJoinInfoPlayer$token`.
   *
   * This will prevent issuing a new player token and automatically set the
   * party state to the player's current lobby.
   */
  matchmakerCurrentPlayerToken?: string;
}

export namespace CreatePartyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartyInput): any => ({
    ...obj,
    ...(obj.matchmakerCurrentPlayerToken && { matchmakerCurrentPlayerToken:
      SENSITIVE_STRING
    }),
  })
}

/**
 * Output from a created invite.
 */
export interface CreatedInvite {
  /**
   * An alias used to join a given party.
   *
   * This alias must be unique for all invites for your game.
   *
   * Pass this alias to `rivet.api.party.common#CreatedInvite$alias` to consume
   * the invite.
   */
  alias?: string;

  /**
   * A JSON Web Token.
   *
   * Slightly modified to include a description prefix and use Protobufs of
   * JSON.
   */
  token: string | undefined;
}

export namespace CreatedInvite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatedInvite): any => ({
    ...obj,
    ...(obj.token && { token:
      SENSITIVE_STRING
    }),
  })
}

export interface CreatePartyOutput {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;

  invites: (CreatedInvite)[] | undefined;
}

export namespace CreatePartyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartyOutput): any => ({
    ...obj,
    ...(obj.invites && { invites:
      obj.invites.map(
        item =>
        CreatedInvite.filterSensitiveLog(item)
      )
    }),
  })
}

export interface CreatePartyInviteInput {
  /**
   * An alias used to join a given party.
   */
  alias?: string;
}

export namespace CreatePartyInviteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartyInviteInput): any => ({
    ...obj,
  })
}

export interface CreatePartyInviteOutput {
  /**
   * Output from a created invite.
   */
  invite: CreatedInvite | undefined;
}

export namespace CreatePartyInviteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePartyInviteOutput): any => ({
    ...obj,
    ...(obj.invite && { invite:
      CreatedInvite.filterSensitiveLog(obj.invite)
    }),
  })
}

export interface GetPartyFromInviteInput {
  /**
   * See `rivet.api.party#CreatedInvite$token`.
   */
  token?: string;

  /**
   * An alias used to join a given party.
   *
   * This alias must be unique for all invites for your game.
   *
   * Pass this alias to `rivet.api.party.common#CreatedInvite$alias` to consume
   * the invite.
   */
  alias?: string;
}

export namespace GetPartyFromInviteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartyFromInviteInput): any => ({
    ...obj,
    ...(obj.token && { token:
      SENSITIVE_STRING
    }),
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
 * -   `Idle`: The party is not doing anything. For example, the leader is sitting in the game menu or the players are hanging out on the hub.
 * -   `MatchmakerFindingLobby`: There is a find request in progress for the lobby. If the find request fails, it will go back to `Idle`. If the find request succeeds, it will go to `MatchmakerLobby`.
 * -   `MatchmakerLobby`: The party is in a lobby. This does not mean that all of the party members are in the lobby, see the member-specific states.
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
   * -   `Idle`: The party is not doing anything. For example, the leader is sitting in the game menu or the players are hanging out on the hub.
   * -   `MatchmakerFindingLobby`: There is a find request in progress for the lobby. If the find request fails, it will go back to `Idle`. If the find request succeeds, it will go to `MatchmakerLobby`.
   * -   `MatchmakerLobby`: The party is in a lobby. This does not mean that all of the party members are in the lobby, see the member-specific states.
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
   * JSON data seen only by the given identity and their mutual followers.
   */
  mutualMetadata?: __DocumentType;
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
 * A party member state denoting that the member is inactive.
 */
export interface PartyMemberStateInactive {
}

export namespace PartyMemberStateInactive {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberStateInactive): any => ({
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
export interface PartyMemberStateMatchmakerReady {
}

export namespace PartyMemberStateMatchmakerReady {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberStateMatchmakerReady): any => ({
    ...obj,
  })
}

/**
 * A union representing the current state of a party member.
 * -   `Inactive`: The player is not doing anything. For example, the player can be sitting in the game menu or hanging out on the hub.
 *     -   It's possible for the member to be in an inactive state while the party is in a lobby; this means the player is simply observing/interacting with others in the party and not part of the matchmaking process.
 * -   `MatchmakerReady`: This means the member wants a player created for them.
 *     -   Members can be in the ready state while the party is in an idle state. This means that the player will get a player created for them.
 *     -   Members can be in the ready state while the party is in a lobby. This means that the player could not join the lobby because it was full or the player left the lobby unintentionally.
 * -   `MatchmakerFindingLobby`: A find request is in progress for the member.
 * -   `MatchmakerLobby`: The member is in a lobby.
 */
export type PartyMemberState =
  | PartyMemberState.InactiveMember
  | PartyMemberState.MatchmakerFindingLobbyMember
  | PartyMemberState.MatchmakerLobbyMember
  | PartyMemberState.MatchmakerReadyMember
  | PartyMemberState.$UnknownMember

export namespace PartyMemberState {

  /**
   * A party member state denoting that the member is inactive.
   */
  export interface InactiveMember {
    inactive: PartyMemberStateInactive;
    matchmakerReady?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party member state denoting that the member is currently waiting to start matchmaking.
   */
  export interface MatchmakerReadyMember {
    inactive?: never;
    matchmakerReady: PartyMemberStateMatchmakerReady;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party member state denoting that the member is currently searching for a lobby.
   */
  export interface MatchmakerFindingLobbyMember {
    inactive?: never;
    matchmakerReady?: never;
    matchmakerFindingLobby: PartyMemberStateMatchmakerFindingLobby;
    matchmakerLobby?: never;
    $unknown?: never;
  }

  /**
   * A party member state denoting that the member is in a lobby.
   */
  export interface MatchmakerLobbyMember {
    inactive?: never;
    matchmakerReady?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby: PartyMemberStateMatchmakerLobby;
    $unknown?: never;
  }

  export interface $UnknownMember {
    inactive?: never;
    matchmakerReady?: never;
    matchmakerFindingLobby?: never;
    matchmakerLobby?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    inactive: (value: PartyMemberStateInactive) => T;
    matchmakerReady: (value: PartyMemberStateMatchmakerReady) => T;
    matchmakerFindingLobby: (value: PartyMemberStateMatchmakerFindingLobby) => T;
    matchmakerLobby: (value: PartyMemberStateMatchmakerLobby) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: PartyMemberState,
    visitor: Visitor<T>
  ): T => {
    if (value.inactive !== undefined) return visitor.inactive(value.inactive);
    if (value.matchmakerReady !== undefined) return visitor.matchmakerReady(value.matchmakerReady);
    if (value.matchmakerFindingLobby !== undefined) return visitor.matchmakerFindingLobby(value.matchmakerFindingLobby);
    if (value.matchmakerLobby !== undefined) return visitor.matchmakerLobby(value.matchmakerLobby);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyMemberState): any => {
    if (obj.inactive !== undefined) return {inactive:
      PartyMemberStateInactive.filterSensitiveLog(obj.inactive)
    };
    if (obj.matchmakerReady !== undefined) return {matchmakerReady:
      PartyMemberStateMatchmakerReady.filterSensitiveLog(obj.matchmakerReady)
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
   * -   `Inactive`: The player is not doing anything. For example, the player can be sitting in the game menu or hanging out on the hub.
   *     -   It's possible for the member to be in an inactive state while the party is in a lobby; this means the player is simply observing/interacting with others in the party and not part of the matchmaking process.
   * -   `MatchmakerReady`: This means the member wants a player created for them.
   *     -   Members can be in the ready state while the party is in an idle state. This means that the player will get a player created for them.
   *     -   Members can be in the ready state while the party is in a lobby. This means that the player could not join the lobby because it was full or the player left the lobby unintentionally.
   * -   `MatchmakerFindingLobby`: A find request is in progress for the member.
   * -   `MatchmakerLobby`: The member is in a lobby.
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

export interface PartyPublicity {
  public: PartyPublicityLevel | string | undefined;
  mutualFollowers: PartyPublicityLevel | string | undefined;
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
   * -   `Idle`: The party is not doing anything. For example, the leader is sitting in the game menu or the players are hanging out on the hub.
   * -   `MatchmakerFindingLobby`: There is a find request in progress for the lobby. If the find request fails, it will go back to `Idle`. If the find request succeeds, it will go to `MatchmakerLobby`.
   * -   `MatchmakerLobby`: The party is in a lobby. This does not mean that all of the party members are in the lobby, see the member-specific states.
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

export interface GetPartyFromInviteOutput {
  /**
   * A party summary.
   */
  party: PartySummary | undefined;
}

export namespace GetPartyFromInviteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartyFromInviteOutput): any => ({
    ...obj,
    ...(obj.party && { party:
      PartySummary.filterSensitiveLog(obj.party)
    }),
  })
}

export interface GetPartyProfileInput {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;

  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetPartyProfileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartyProfileInput): any => ({
    ...obj,
  })
}

/**
 * An alias used to join a given party.
 */
export interface PartyInviteAlias {
  /**
   * A universally unique identifier.
   */
  namespaceId: string | undefined;

  /**
   * The alias used to join a given party.
   */
  alias: string | undefined;
}

export namespace PartyInviteAlias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyInviteAlias): any => ({
    ...obj,
  })
}

/**
 * Extenral links for a party invite.
 */
export interface PartyInviteExternalLinks {
  /**
   * The invite link used to join this party from an external site.
   */
  invite: string | undefined;
}

export namespace PartyInviteExternalLinks {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyInviteExternalLinks): any => ({
    ...obj,
  })
}

/**
 * A party invite.
 */
export interface PartyInvite {
  /**
   * A universally unique identifier.
   */
  inviteId: string | undefined;

  /**
   * RFC3339 timestamp.
   */
  createTs: Date | undefined;

  /**
   * A JSON Web Token.
   *
   * Slightly modified to include a description prefix and use Protobufs of
   * JSON.
   */
  token: string | undefined;

  /**
   * An alias used to join a given party.
   */
  alias?: PartyInviteAlias;

  /**
   * Extenral links for a party invite.
   */
  external: PartyInviteExternalLinks | undefined;
}

export namespace PartyInvite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyInvite): any => ({
    ...obj,
    ...(obj.token && { token:
      SENSITIVE_STRING
    }),
  })
}

export interface PartyProfile {
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
   * -   `Idle`: The party is not doing anything. For example, the leader is sitting in the game menu or the players are hanging out on the hub.
   * -   `MatchmakerFindingLobby`: There is a find request in progress for the lobby. If the find request fails, it will go back to `Idle`. If the find request succeeds, it will go to `MatchmakerLobby`.
   * -   `MatchmakerLobby`: The party is in a lobby. This does not mean that all of the party members are in the lobby, see the member-specific states.
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

  /**
   * A list of party invites.
   */
  invites: (PartyInvite)[] | undefined;
}

export namespace PartyProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PartyProfile): any => ({
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
    ...(obj.invites && { invites:
      obj.invites.map(
        item =>
        PartyInvite.filterSensitiveLog(item)
      )
    }),
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

export interface GetPartyProfileOutput {
  party: PartyProfile | undefined;
  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetPartyProfileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartyProfileOutput): any => ({
    ...obj,
    ...(obj.party && { party:
      PartyProfile.filterSensitiveLog(obj.party)
    }),
  })
}

export interface GetPartySelfProfileInput {
  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetPartySelfProfileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartySelfProfileInput): any => ({
    ...obj,
  })
}

export interface GetPartySelfProfileOutput {
  party?: PartyProfile;
  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetPartySelfProfileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartySelfProfileOutput): any => ({
    ...obj,
    ...(obj.party && { party:
      PartyProfile.filterSensitiveLog(obj.party)
    }),
  })
}

export interface GetPartySelfSummaryInput {
  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetPartySelfSummaryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartySelfSummaryInput): any => ({
    ...obj,
  })
}

export interface GetPartySelfSummaryOutput {
  /**
   * A party summary.
   */
  party?: PartySummary;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetPartySelfSummaryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartySelfSummaryOutput): any => ({
    ...obj,
    ...(obj.party && { party:
      PartySummary.filterSensitiveLog(obj.party)
    }),
  })
}

export interface GetPartySummaryInput {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;

  /**
   * A query parameter denoting the requests watch index.
   */
  watchIndex?: string;
}

export namespace GetPartySummaryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartySummaryInput): any => ({
    ...obj,
  })
}

export interface GetPartySummaryOutput {
  /**
   * A party summary.
   */
  party: PartySummary | undefined;

  /**
   * Provided by watchable endpoints used in blocking loops.
   */
  watch: WatchResponse | undefined;
}

export namespace GetPartySummaryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartySummaryOutput): any => ({
    ...obj,
    ...(obj.party && { party:
      PartySummary.filterSensitiveLog(obj.party)
    }),
  })
}

/**
 * Represents methods of joining a party.
 */
export type JoinPartyInvite =
  | JoinPartyInvite.AliasMember
  | JoinPartyInvite.PartyIdMember
  | JoinPartyInvite.TokenMember
  | JoinPartyInvite.$UnknownMember

export namespace JoinPartyInvite {

  /**
   * Requires the party publicity to this identity to be
   * `rivet.party#PartyPublicityLevel$JOIN`.
   */
  export interface PartyIdMember {
    partyId: string;
    token?: never;
    alias?: never;
    $unknown?: never;
  }

  /**
   * A party invite token.
   *
   * See `rivet.api.party.common#CreatedInvite$token`.
   */
  export interface TokenMember {
    partyId?: never;
    token: string;
    alias?: never;
    $unknown?: never;
  }

  /**
   * A party invite alias.
   *
   * See `rivet.api.party.common#CreatePartyInviteConfig$alias` and
   * `rivet.api.party#CreatePartyInvite$alias`.
   */
  export interface AliasMember {
    partyId?: never;
    token?: never;
    alias: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    partyId?: never;
    token?: never;
    alias?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    partyId: (value: string) => T;
    token: (value: string) => T;
    alias: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: JoinPartyInvite,
    visitor: Visitor<T>
  ): T => {
    if (value.partyId !== undefined) return visitor.partyId(value.partyId);
    if (value.token !== undefined) return visitor.token(value.token);
    if (value.alias !== undefined) return visitor.alias(value.alias);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinPartyInvite): any => {
    if (obj.partyId !== undefined) return {partyId:
      obj.partyId
    };
    if (obj.token !== undefined) return {token:
      SENSITIVE_STRING
    };
    if (obj.alias !== undefined) return {alias:
      obj.alias
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

export interface JoinPartyInput {
  /**
   * Represents methods of joining a party.
   */
  invite: JoinPartyInvite | undefined;

  /**
   * Whether or not to automatically join the game lobby if a party is currently in game.
   */
  matchmakerAutoJoinLobby?: boolean;

  /**
   * If the player is currently in the lobby, pass the token from
   * `rivet.matchmaker#MatchmakerLobbyJoinInfoPlayer$token`.
   *
   * This will prevent issuing a new player token.
   */
  matchmakerCurrentPlayerToken?: string;
}

export namespace JoinPartyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinPartyInput): any => ({
    ...obj,
    ...(obj.invite && { invite:
      JoinPartyInvite.filterSensitiveLog(obj.invite)
    }),
    ...(obj.matchmakerCurrentPlayerToken && { matchmakerCurrentPlayerToken:
      SENSITIVE_STRING
    }),
  })
}

export interface JoinPartyOutput {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;
}

export namespace JoinPartyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinPartyOutput): any => ({
    ...obj,
  })
}

export interface KickMemberInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;
}

export namespace KickMemberInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KickMemberInput): any => ({
    ...obj,
  })
}

export interface KickMemberOutput {
}

export namespace KickMemberOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KickMemberOutput): any => ({
    ...obj,
  })
}

export interface LeavePartyInput {
}

export namespace LeavePartyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LeavePartyInput): any => ({
    ...obj,
  })
}

export interface LeavePartyOutput {
}

export namespace LeavePartyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LeavePartyOutput): any => ({
    ...obj,
  })
}

export interface RevokePartyInviteInput {
  /**
   * A universally unique identifier.
   */
  inviteId: string | undefined;
}

export namespace RevokePartyInviteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokePartyInviteInput): any => ({
    ...obj,
  })
}

export interface RevokePartyInviteOutput {
}

export namespace RevokePartyInviteOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokePartyInviteOutput): any => ({
    ...obj,
  })
}

export interface SendJoinRequestInput {
  /**
   * A universally unique identifier.
   */
  partyId: string | undefined;
}

export namespace SendJoinRequestInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendJoinRequestInput): any => ({
    ...obj,
  })
}

export interface SendJoinRequestOutput {
}

export namespace SendJoinRequestOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendJoinRequestOutput): any => ({
    ...obj,
  })
}

export interface SetPartyPublicityInput {
  /**
   * Defaults to `rivet.party#PartyPublicityLevel$VIEW`.
   */
  public?: PartyPublicityLevel | string;

  /**
   * Defaults to `rivet.party#PartyPublicityLevel$JOIN`.
   */
  mutualFollowers?: PartyPublicityLevel | string;

  /**
   * Defaults to `rivet.party#PartyPublicityLevel$VIEW`.
   */
  groups?: PartyPublicityLevel | string;
}

export namespace SetPartyPublicityInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetPartyPublicityInput): any => ({
    ...obj,
  })
}

export interface SetPartyPublicityOutput {
}

export namespace SetPartyPublicityOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetPartyPublicityOutput): any => ({
    ...obj,
  })
}

export interface TransferPartyOwnershipInput {
  /**
   * A universally unique identifier.
   */
  identityId: string | undefined;
}

export namespace TransferPartyOwnershipInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferPartyOwnershipInput): any => ({
    ...obj,
  })
}

export interface TransferPartyOwnershipOutput {
}

export namespace TransferPartyOwnershipOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferPartyOwnershipOutput): any => ({
    ...obj,
  })
}

export interface SetPartyToIdleInput {
}

export namespace SetPartyToIdleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetPartyToIdleInput): any => ({
    ...obj,
  })
}

export interface SetPartyToIdleOutput {
}

export namespace SetPartyToIdleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetPartyToIdleOutput): any => ({
    ...obj,
  })
}

export interface SetSelfInactiveInput {
}

export namespace SetSelfInactiveInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetSelfInactiveInput): any => ({
    ...obj,
  })
}

export interface SetSelfInactiveOutput {
}

export namespace SetSelfInactiveOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetSelfInactiveOutput): any => ({
    ...obj,
  })
}

/**
 * hCaptcha configuration.
 */
export interface CaptchaConfigHcaptcha {
  clientResponse: string | undefined;
}

export namespace CaptchaConfigHcaptcha {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptchaConfigHcaptcha): any => ({
    ...obj,
  })
}

/**
 * Cloudflare Turnstile configuration.
 */
export interface CaptchaConfigTurnstile {
  clientResponse: string | undefined;
}

export namespace CaptchaConfigTurnstile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptchaConfigTurnstile): any => ({
    ...obj,
  })
}

/**
 * Methods to verify a captcha.
 */
export type CaptchaConfig =
  | CaptchaConfig.HcaptchaMember
  | CaptchaConfig.TurnstileMember
  | CaptchaConfig.$UnknownMember

export namespace CaptchaConfig {

  /**
   * hCaptcha configuration.
   */
  export interface HcaptchaMember {
    hcaptcha: CaptchaConfigHcaptcha;
    turnstile?: never;
    $unknown?: never;
  }

  /**
   * Cloudflare Turnstile configuration.
   */
  export interface TurnstileMember {
    hcaptcha?: never;
    turnstile: CaptchaConfigTurnstile;
    $unknown?: never;
  }

  export interface $UnknownMember {
    hcaptcha?: never;
    turnstile?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    hcaptcha: (value: CaptchaConfigHcaptcha) => T;
    turnstile: (value: CaptchaConfigTurnstile) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(
    value: CaptchaConfig,
    visitor: Visitor<T>
  ): T => {
    if (value.hcaptcha !== undefined) return visitor.hcaptcha(value.hcaptcha);
    if (value.turnstile !== undefined) return visitor.turnstile(value.turnstile);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CaptchaConfig): any => {
    if (obj.hcaptcha !== undefined) return {hcaptcha:
      CaptchaConfigHcaptcha.filterSensitiveLog(obj.hcaptcha)
    };
    if (obj.turnstile !== undefined) return {turnstile:
      CaptchaConfigTurnstile.filterSensitiveLog(obj.turnstile)
    };
    if (obj.$unknown !== undefined) return {[obj.$unknown[0]]: 'UNKNOWN'};
  }
}

export interface FindMatchmakerLobbyForPartyInput {
  /**
   * Game modes to match lobbies against.
   */
  gameModes: (string)[] | undefined;

  /**
   * Regions to match lobbies against. If not specified, the optimal region
   * will be determined and will attempt to find lobbies in that region.
   */
  regions?: (string)[];

  /**
   * Prevents a new lobby from being created when finding a lobby. If no
   * lobby is found, `MATCHMAKER_LOBBY_NOT_FOUND` will be returned.
   */
  preventAutoCreateLobby?: boolean;

  /**
   * Methods to verify a captcha.
   */
  captcha?: CaptchaConfig;

  origin?: string;
}

export namespace FindMatchmakerLobbyForPartyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchmakerLobbyForPartyInput): any => ({
    ...obj,
    ...(obj.captcha && { captcha:
      CaptchaConfig.filterSensitiveLog(obj.captcha)
    }),
  })
}

export interface FindMatchmakerLobbyForPartyOutput {
}

export namespace FindMatchmakerLobbyForPartyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchmakerLobbyForPartyOutput): any => ({
    ...obj,
  })
}

export interface JoinMatchmakerLobbyForPartyInput {
  /**
   * A universally unique identifier.
   */
  lobbyId: string | undefined;

  /**
   * Methods to verify a captcha.
   */
  captcha?: CaptchaConfig;
}

export namespace JoinMatchmakerLobbyForPartyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinMatchmakerLobbyForPartyInput): any => ({
    ...obj,
    ...(obj.captcha && { captcha:
      CaptchaConfig.filterSensitiveLog(obj.captcha)
    }),
  })
}

export interface JoinMatchmakerLobbyForPartyOutput {
}

export namespace JoinMatchmakerLobbyForPartyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinMatchmakerLobbyForPartyOutput): any => ({
    ...obj,
  })
}

export interface MatchmakerSelfReadyInput {
}

export namespace MatchmakerSelfReadyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerSelfReadyInput): any => ({
    ...obj,
  })
}

export interface MatchmakerSelfReadyOutput {
}

export namespace MatchmakerSelfReadyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MatchmakerSelfReadyOutput): any => ({
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
