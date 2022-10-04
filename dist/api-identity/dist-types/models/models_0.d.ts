import { IdentityServiceServiceException as __BaseException } from "./IdentityServiceServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";
export interface ListActivitiesInput {
    /**
     * A query parameter denoting the requests watch index.
     */
    watchIndex?: string;
}
export declare namespace ListActivitiesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListActivitiesInput) => any;
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
export declare namespace GameHandle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GameHandle) => any;
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
export declare namespace IdentityExternalLinks {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityExternalLinks) => any;
}
/**
 * A party activity denoting that the party is idle.
 */
export interface PartyActivityIdle {
}
export declare namespace PartyActivityIdle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyActivityIdle) => any;
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
export declare namespace PartyActivityMatchmakerFindingLobby {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyActivityMatchmakerFindingLobby) => any;
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
export declare namespace PartyMatchmakerLobby {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMatchmakerLobby) => any;
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
export declare namespace PartyActivityMatchmakerLobby {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyActivityMatchmakerLobby) => any;
}
/**
 * A union representing the activity of a given party.
 */
export declare type PartyActivity = PartyActivity.IdleMember | PartyActivity.MatchmakerFindingLobbyMember | PartyActivity.MatchmakerLobbyMember | PartyActivity.$UnknownMember;
export declare namespace PartyActivity {
    /**
     * A party activity denoting that the party is idle.
     */
    interface IdleMember {
        idle: PartyActivityIdle;
        matchmakerFindingLobby?: never;
        matchmakerLobby?: never;
        $unknown?: never;
    }
    /**
     * A party activity denoting that the party is currently searching for a lobby.
     */
    interface MatchmakerFindingLobbyMember {
        idle?: never;
        matchmakerFindingLobby: PartyActivityMatchmakerFindingLobby;
        matchmakerLobby?: never;
        $unknown?: never;
    }
    /**
     * A party activity denoting that the party is currently in a lobby.
     */
    interface MatchmakerLobbyMember {
        idle?: never;
        matchmakerFindingLobby?: never;
        matchmakerLobby: PartyActivityMatchmakerLobby;
        $unknown?: never;
    }
    interface $UnknownMember {
        idle?: never;
        matchmakerFindingLobby?: never;
        matchmakerLobby?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        idle: (value: PartyActivityIdle) => T;
        matchmakerFindingLobby: (value: PartyActivityMatchmakerFindingLobby) => T;
        matchmakerLobby: (value: PartyActivityMatchmakerLobby) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: PartyActivity, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyActivity) => any;
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
export declare namespace PartyExternalLinks {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyExternalLinks) => any;
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
export declare namespace PartyHandle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyHandle) => any;
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
export declare namespace IdentityGameActivity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityGameActivity) => any;
}
export declare enum IdentityStatus {
    AWAY = "away",
    OFFLINE = "offline",
    ONLINE = "online"
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
export declare namespace IdentityPresence {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityPresence) => any;
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
export declare namespace IdentityHandle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityHandle) => any;
}
/**
 * A party member state denoting that the member is idle.
 */
export interface PartyMemberStateIdle {
}
export declare namespace PartyMemberStateIdle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMemberStateIdle) => any;
}
/**
 * A party member state denoting that the member is currently searching for a lobby.
 */
export interface PartyMemberStateMatchmakerFindingLobby {
}
export declare namespace PartyMemberStateMatchmakerFindingLobby {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMemberStateMatchmakerFindingLobby) => any;
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
export declare namespace PartyMemberStateMatchmakerLobby {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMemberStateMatchmakerLobby) => any;
}
/**
 * A party member state denoting that the member is currently waiting to start matchmaking.
 */
export interface PartyMemberStateMatchmakerPending {
}
export declare namespace PartyMemberStateMatchmakerPending {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMemberStateMatchmakerPending) => any;
}
/**
 * A union representing the current state of a party member.
 */
export declare type PartyMemberState = PartyMemberState.IdleMember | PartyMemberState.MatchmakerFindingLobbyMember | PartyMemberState.MatchmakerLobbyMember | PartyMemberState.MatchmakerPendingMember | PartyMemberState.$UnknownMember;
export declare namespace PartyMemberState {
    /**
     * A party member state denoting that the member is idle.
     */
    interface IdleMember {
        idle: PartyMemberStateIdle;
        matchmakerPending?: never;
        matchmakerFindingLobby?: never;
        matchmakerLobby?: never;
        $unknown?: never;
    }
    /**
     * A party member state denoting that the member is currently waiting to start matchmaking.
     */
    interface MatchmakerPendingMember {
        idle?: never;
        matchmakerPending: PartyMemberStateMatchmakerPending;
        matchmakerFindingLobby?: never;
        matchmakerLobby?: never;
        $unknown?: never;
    }
    /**
     * A party member state denoting that the member is currently searching for a lobby.
     */
    interface MatchmakerFindingLobbyMember {
        idle?: never;
        matchmakerPending?: never;
        matchmakerFindingLobby: PartyMemberStateMatchmakerFindingLobby;
        matchmakerLobby?: never;
        $unknown?: never;
    }
    /**
     * A party member state denoting that the member is in a lobby.
     */
    interface MatchmakerLobbyMember {
        idle?: never;
        matchmakerPending?: never;
        matchmakerFindingLobby?: never;
        matchmakerLobby: PartyMemberStateMatchmakerLobby;
        $unknown?: never;
    }
    interface $UnknownMember {
        idle?: never;
        matchmakerPending?: never;
        matchmakerFindingLobby?: never;
        matchmakerLobby?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        idle: (value: PartyMemberStateIdle) => T;
        matchmakerPending: (value: PartyMemberStateMatchmakerPending) => T;
        matchmakerFindingLobby: (value: PartyMemberStateMatchmakerFindingLobby) => T;
        matchmakerLobby: (value: PartyMemberStateMatchmakerLobby) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: PartyMemberState, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMemberState) => any;
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
export declare namespace PartyMemberSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyMemberSummary) => any;
}
export declare enum PartyPublicityLevel {
    JOIN = "join",
    NONE = "none",
    VIEW = "view"
}
export interface PartyPublicity {
    public: PartyPublicityLevel | string | undefined;
    friends: PartyPublicityLevel | string | undefined;
    groups: PartyPublicityLevel | string | undefined;
}
export declare namespace PartyPublicity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartyPublicity) => any;
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
export declare namespace PartySummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PartySummary) => any;
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
export declare namespace GroupExternalLinks {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupExternalLinks) => any;
}
export declare enum GroupPublicity {
    CLOSED = "closed",
    OPEN = "open"
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
export declare namespace GroupSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupSummary) => any;
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
export declare namespace WatchResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WatchResponse) => any;
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
export declare namespace ListActivitiesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListActivitiesOutput) => any;
}
export interface CompleteGameLinkInput {
    /**
     * A JSON Web Token.
     *
     * Slightly modified to include a description prefix and use Protobufs  of
     * JSON.
     */
    identityLinkToken: string | undefined;
}
export declare namespace CompleteGameLinkInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CompleteGameLinkInput) => any;
}
export interface CompleteGameLinkOutput {
}
export declare namespace CompleteGameLinkOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CompleteGameLinkOutput) => any;
}
export interface CompleteIdentityAvatarUploadInput {
    /**
     * A universally unique identifier.
     */
    uploadId: string | undefined;
}
export declare namespace CompleteIdentityAvatarUploadInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CompleteIdentityAvatarUploadInput) => any;
}
export interface CompleteIdentityAvatarUploadOutput {
}
export declare namespace CompleteIdentityAvatarUploadOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CompleteIdentityAvatarUploadOutput) => any;
}
export interface WatchEventsInput {
    /**
     * A query parameter denoting the requests watch index.
     */
    watchIndex?: string;
}
export declare namespace WatchEventsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WatchEventsInput) => any;
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
export declare namespace ChatThreadExternalLinks {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatThreadExternalLinks) => any;
}
/**
 * `rivet.chat#ChatMessageBody` variant for indicating a new chat was created.
 */
export interface ChatMessageBodyChatCreate {
}
export declare namespace ChatMessageBodyChatCreate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyChatCreate) => any;
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
export declare namespace ChatMessageBodyGroupJoin {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyGroupJoin) => any;
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
export declare namespace ChatMessageBodyGroupLeave {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyGroupLeave) => any;
}
/**
 * `rivet.chat#ChatMessageBody` variant for indicating an identity followed the identity.
 */
export interface ChatMessageBodyIdentityFollow {
}
export declare namespace ChatMessageBodyIdentityFollow {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyIdentityFollow) => any;
}
/**
 * `rivet.chat#ChatMessageBody` variant for indicating a change in the party's current
 * activity.
 */
export interface ChatMessageBodyPartyActivityChange {
}
export declare namespace ChatMessageBodyPartyActivityChange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyPartyActivityChange) => any;
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
export declare namespace ChatMessageBodyPartyInvite {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyPartyInvite) => any;
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
export declare namespace ChatMessageBodyPartyJoin {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyPartyJoin) => any;
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
export declare namespace ChatMessageBodyPartyJoinRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyPartyJoinRequest) => any;
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
export declare namespace ChatMessageBodyPartyLeave {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyPartyLeave) => any;
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
export declare namespace ChatMessageBodyText {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBodyText) => any;
}
/**
 * Represents types of chat message bodies.
 */
export declare type ChatMessageBody = ChatMessageBody.ChatCreateMember | ChatMessageBody.GroupJoinMember | ChatMessageBody.GroupLeaveMember | ChatMessageBody.IdentityFollowMember | ChatMessageBody.PartyActivityChangeMember | ChatMessageBody.PartyInviteMember | ChatMessageBody.PartyJoinMember | ChatMessageBody.PartyJoinRequestMember | ChatMessageBody.PartyLeaveMember | ChatMessageBody.TextMember | ChatMessageBody.$UnknownMember;
export declare namespace ChatMessageBody {
    /**
     * `rivet.chat#ChatMessageBody` variant for text messages.
     *
     * Sent by other identities using the chat interface.
     */
    interface TextMember {
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
    interface ChatCreateMember {
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
    interface IdentityFollowMember {
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
    interface GroupJoinMember {
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
    interface GroupLeaveMember {
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
    interface PartyInviteMember {
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
    interface PartyJoinRequestMember {
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
    interface PartyJoinMember {
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
    interface PartyLeaveMember {
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
    interface PartyActivityChangeMember {
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
    interface $UnknownMember {
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
    interface Visitor<T> {
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
    const visit: <T>(value: ChatMessageBody, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessageBody) => any;
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
export declare namespace ChatMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatMessage) => any;
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
export declare namespace ChatTopicDirect {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatTopicDirect) => any;
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
export declare namespace GroupHandle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupHandle) => any;
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
export declare namespace ChatTopicGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatTopicGroup) => any;
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
export declare namespace ChatTopicParty {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatTopicParty) => any;
}
/**
 * Represents the topic of the given chat thread.
 */
export declare type ChatTopic = ChatTopic.DirectMember | ChatTopic.GroupMember | ChatTopic.PartyMember | ChatTopic.$UnknownMember;
export declare namespace ChatTopic {
    /**
     * `rivet.chat#ChatTopic` variant for groups.
     */
    interface GroupMember {
        group: ChatTopicGroup;
        party?: never;
        direct?: never;
        $unknown?: never;
    }
    /**
     * `rivet.chat#ChatTopic` variant for parties.
     */
    interface PartyMember {
        group?: never;
        party: ChatTopicParty;
        direct?: never;
        $unknown?: never;
    }
    /**
     * `rivet.chat#ChatTopic` variant for direct (identity to identity) chats.
     */
    interface DirectMember {
        group?: never;
        party?: never;
        direct: ChatTopicDirect;
        $unknown?: never;
    }
    interface $UnknownMember {
        group?: never;
        party?: never;
        direct?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        group: (value: ChatTopicGroup) => T;
        party: (value: ChatTopicParty) => T;
        direct: (value: ChatTopicDirect) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: ChatTopic, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatTopic) => any;
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
export declare namespace ChatThread {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ChatThread) => any;
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
export declare namespace GlobalEventChatMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventChatMessage) => any;
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
export declare namespace GlobalEventChatRead {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventChatRead) => any;
}
export declare enum IdentityDevState {
    ACCEPTED = "accepted",
    INACTIVE = "inactive",
    PENDING = "pending"
}
export declare enum GameStatAggregationMethod {
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
    SUM = "sum"
}
export declare enum GameStatFormatMethod {
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
    INTEGER = "integer"
}
export declare enum GameStatSortingMethod {
    /**
     * Ascending sorting.
     */
    ASC = "asc",
    /**
     * Descending sorting.
     */
    DESC = "desc"
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
export declare namespace GameStatConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GameStatConfig) => any;
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
export declare namespace GameStat {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GameStat) => any;
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
export declare namespace GameStatSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GameStatSummary) => any;
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
export declare namespace IdentityGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityGroup) => any;
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
export declare namespace IdentityEmailLinkedAccount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityEmailLinkedAccount) => any;
}
/**
 * A union representing an identity's linked accounts.
 */
export declare type IdentityLinkedAccount = IdentityLinkedAccount.EmailMember | IdentityLinkedAccount.$UnknownMember;
export declare namespace IdentityLinkedAccount {
    /**
     * An identity's linked email.
     */
    interface EmailMember {
        email: IdentityEmailLinkedAccount;
        $unknown?: never;
    }
    interface $UnknownMember {
        email?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        email: (value: IdentityEmailLinkedAccount) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: IdentityLinkedAccount, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityLinkedAccount) => any;
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
export declare namespace IdentityProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IdentityProfile) => any;
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
export declare namespace GlobalEventIdentityUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventIdentityUpdate) => any;
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
export declare namespace MatchmakerLobbyJoinInfoPlayer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MatchmakerLobbyJoinInfoPlayer) => any;
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
export declare namespace MatchmakerLobbyJoinInfoPortRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MatchmakerLobbyJoinInfoPortRange) => any;
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
export declare namespace MatchmakerLobbyJoinInfoPort {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MatchmakerLobbyJoinInfoPort) => any;
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
export declare namespace MatchmakerLobbyJoinInfoRegion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MatchmakerLobbyJoinInfoRegion) => any;
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
    ports: {
        [key: string]: MatchmakerLobbyJoinInfoPort;
    } | undefined;
    /**
     * A matchmaker lobby player.
     */
    player: MatchmakerLobbyJoinInfoPlayer | undefined;
}
export declare namespace MatchmakerLobbyJoinInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MatchmakerLobbyJoinInfo) => any;
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
export declare namespace GlobalEventMatchmakerLobbyJoin {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventMatchmakerLobbyJoin) => any;
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
export declare namespace GlobalEventPartyUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventPartyUpdate) => any;
}
/**
 * Kind of event that occured.
 */
export declare type GlobalEventKind = GlobalEventKind.ChatMessageMember | GlobalEventKind.ChatReadMember | GlobalEventKind.IdentityUpdateMember | GlobalEventKind.MatchmakerLobbyJoinMember | GlobalEventKind.PartyUpdateMember | GlobalEventKind.$UnknownMember;
export declare namespace GlobalEventKind {
    /**
     * `rivet.api.identity.common#GlobalEventKind` variant for chat messages.
     *
     * Received any time a message is sent to a chat the identity is in.
     */
    interface ChatMessageMember {
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
    interface ChatReadMember {
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
    interface PartyUpdateMember {
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
    interface IdentityUpdateMember {
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
    interface MatchmakerLobbyJoinMember {
        chatMessage?: never;
        chatRead?: never;
        partyUpdate?: never;
        identityUpdate?: never;
        matchmakerLobbyJoin: GlobalEventMatchmakerLobbyJoin;
        $unknown?: never;
    }
    interface $UnknownMember {
        chatMessage?: never;
        chatRead?: never;
        partyUpdate?: never;
        identityUpdate?: never;
        matchmakerLobbyJoin?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        chatMessage: (value: GlobalEventChatMessage) => T;
        chatRead: (value: GlobalEventChatRead) => T;
        partyUpdate: (value: GlobalEventPartyUpdate) => T;
        identityUpdate: (value: GlobalEventIdentityUpdate) => T;
        matchmakerLobbyJoin: (value: GlobalEventMatchmakerLobbyJoin) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: GlobalEventKind, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventKind) => any;
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
export declare namespace GlobalEventNotification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEventNotification) => any;
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
export declare namespace GlobalEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GlobalEvent) => any;
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
export declare namespace WatchEventsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WatchEventsOutput) => any;
}
export interface FollowIdentityInput {
    /**
     * A universally unique identifier.
     */
    identityId: string | undefined;
}
export declare namespace FollowIdentityInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FollowIdentityInput) => any;
}
export interface FollowIdentityOutput {
}
export declare namespace FollowIdentityOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FollowIdentityOutput) => any;
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
export declare namespace GetGameLinkInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGameLinkInput) => any;
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
export declare namespace GetGameLinkNewIdentity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGameLinkNewIdentity) => any;
}
export declare enum GameLinkStatus {
    COMPLETE = "complete",
    INCOMPLETE = "incomplete",
    REVOKED = "revoked"
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
export declare namespace GetGameLinkOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGameLinkOutput) => any;
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
export declare namespace GetIdentityProfileInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIdentityProfileInput) => any;
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
export declare namespace GetIdentityProfileOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIdentityProfileOutput) => any;
}
export interface GetIdentitySelfProfileInput {
    /**
     * A query parameter denoting the requests watch index.
     */
    watchIndex?: string;
}
export declare namespace GetIdentitySelfProfileInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIdentitySelfProfileInput) => any;
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
export declare namespace GetIdentitySelfProfileOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIdentitySelfProfileOutput) => any;
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
export declare namespace ListFollowersInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFollowersInput) => any;
}
export interface ListFollowersOutput {
    /**
     * A list of identity handles.
     */
    identities: (IdentityHandle)[] | undefined;
    anchor?: string;
}
export declare namespace ListFollowersOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFollowersOutput) => any;
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
export declare namespace ListFollowingInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFollowingInput) => any;
}
export interface ListFollowingOutput {
    /**
     * A list of identity handles.
     */
    identities: (IdentityHandle)[] | undefined;
    anchor?: string;
}
export declare namespace ListFollowingOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFollowingOutput) => any;
}
export interface ListFriendsInput {
    anchor?: string;
    /**
     * Unsigned 32 bit integer.
     */
    limit?: number;
}
export declare namespace ListFriendsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFriendsInput) => any;
}
export interface ListFriendsOutput {
    /**
     * A list of identity handles.
     */
    identities: (IdentityHandle)[] | undefined;
    anchor?: string;
}
export declare namespace ListFriendsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFriendsOutput) => any;
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
export declare namespace PrepareIdentityAvatarUploadInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrepareIdentityAvatarUploadInput) => any;
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
export declare namespace UploadPresignedRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UploadPresignedRequest) => any;
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
export declare namespace PrepareIdentityAvatarUploadOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrepareIdentityAvatarUploadOutput) => any;
}
export interface RemoveIdentityGameActivityInput {
}
export declare namespace RemoveIdentityGameActivityInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveIdentityGameActivityInput) => any;
}
export interface RemoveIdentityGameActivityOutput {
}
export declare namespace RemoveIdentityGameActivityOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveIdentityGameActivityOutput) => any;
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
export declare namespace SearchIdentitiesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchIdentitiesInput) => any;
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
export declare namespace SearchIdentitiesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchIdentitiesOutput) => any;
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
export declare namespace UpdateIdentityGameActivity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityGameActivity) => any;
}
export interface SetIdentityGameActivityInput {
    /**
     * Information about the identity's current game. This is information that all
     * other identities can see about what the current identity is doing.
     */
    gameActivity: UpdateIdentityGameActivity | undefined;
}
export declare namespace SetIdentityGameActivityInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetIdentityGameActivityInput) => any;
}
export interface SetIdentityGameActivityOutput {
}
export declare namespace SetIdentityGameActivityOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetIdentityGameActivityOutput) => any;
}
export interface SetupIdentityInput {
    /**
     * Token returned from previous call to
     * `rivet.api.identity#SetupIdentity`. If this token is invalid, a new
     * identity will be returned.
     */
    existingIdentityToken?: string;
}
export declare namespace SetupIdentityInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetupIdentityInput) => any;
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
export declare namespace SetupIdentityOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetupIdentityOutput) => any;
}
export interface SignupForBetaInput {
    name: string | undefined;
    companyName?: string;
    companySize: string | undefined;
    preferredTools: string | undefined;
    goals: string | undefined;
}
export declare namespace SignupForBetaInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SignupForBetaInput) => any;
}
export interface SignupForBetaOutput {
}
export declare namespace SignupForBetaOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SignupForBetaOutput) => any;
}
export interface UnfollowIdentityInput {
    /**
     * A universally unique identifier.
     */
    identityId: string | undefined;
}
export declare namespace UnfollowIdentityInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnfollowIdentityInput) => any;
}
export interface UnfollowIdentityOutput {
}
export declare namespace UnfollowIdentityOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnfollowIdentityOutput) => any;
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
export declare namespace UpdateIdentityProfileInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityProfileInput) => any;
}
export interface UpdateIdentityProfileOutput {
}
export declare namespace UpdateIdentityProfileOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityProfileOutput) => any;
}
export interface UpdateIdentityStatusInput {
    /**
     * The current status of an identity. This helps players understand if another
     * player is currently playing or has their game in the background.
     */
    status: IdentityStatus | string | undefined;
}
export declare namespace UpdateIdentityStatusInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityStatusInput) => any;
}
export interface UpdateIdentityStatusOutput {
}
export declare namespace UpdateIdentityStatusOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIdentityStatusOutput) => any;
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
export declare namespace ValidateIdentityProfileInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidateIdentityProfileInput) => any;
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
export declare namespace ValidationError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationError) => any;
}
export interface ValidateIdentityProfileOutput {
    /**
     * A list of validation errors.
     */
    errors: (ValidationError)[] | undefined;
}
export declare namespace ValidateIdentityProfileOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidateIdentityProfileOutput) => any;
}
export interface PrepareGameLinkInput {
}
export declare namespace PrepareGameLinkInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrepareGameLinkInput) => any;
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
export declare namespace PrepareGameLinkOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrepareGameLinkOutput) => any;
}
/**
 * An error thrown when the requestee has sent an invalid or malformed request.
 */
export declare class BadRequestError extends __BaseException {
    readonly name: "BadRequestError";
    readonly $fault: "client";
    code: string | undefined;
    /**
     * Unstructured metadata relating to an error. Must be manually parsed.
     */
    metadata?: __DocumentType;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<BadRequestError, __BaseException>);
}
/**
 * An error thrown when the requestee requests a resource they do not have access to.
 */
export declare class ForbiddenError extends __BaseException {
    readonly name: "ForbiddenError";
    readonly $fault: "client";
    code: string | undefined;
    /**
     * Unstructured metadata relating to an error. Must be manually parsed.
     */
    metadata?: __DocumentType;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ForbiddenError, __BaseException>);
}
/**
 * An error caused by internal server problems.
 */
export declare class InternalError extends __BaseException {
    readonly name: "InternalError";
    readonly $fault: "server";
    $retryable: {};
    code: string | undefined;
    /**
     * Unstructured metadata relating to an error. Must be manually parsed.
     */
    metadata?: __DocumentType;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InternalError, __BaseException>);
}
/**
 * An error thrown when the requestee requests a non existant resource.
 */
export declare class NotFoundError extends __BaseException {
    readonly name: "NotFoundError";
    readonly $fault: "client";
    code: string | undefined;
    /**
     * Unstructured metadata relating to an error. Must be manually parsed.
     */
    metadata?: __DocumentType;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<NotFoundError, __BaseException>);
}
/**
 * An error thrown when the requestee has hit a rate limit. You are sending too many requests too quickly.
 */
export declare class RateLimitError extends __BaseException {
    readonly name: "RateLimitError";
    readonly $fault: "client";
    code: string | undefined;
    /**
     * Unstructured metadata relating to an error. Must be manually parsed.
     */
    metadata?: __DocumentType;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<RateLimitError, __BaseException>);
}
/**
 * An error thrown when the requestee is not authenticated.
 */
export declare class UnauthorizedError extends __BaseException {
    readonly name: "UnauthorizedError";
    readonly $fault: "client";
    $retryable: {};
    code: string | undefined;
    /**
     * Unstructured metadata relating to an error. Must be manually parsed.
     */
    metadata?: __DocumentType;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<UnauthorizedError, __BaseException>);
}
