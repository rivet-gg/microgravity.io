import { PartyServiceClient } from "./PartyServiceClient";
import { CreatePartyCommandInput, CreatePartyCommandOutput } from "./commands/CreatePartyCommand";
import { CreatePartyInviteCommandInput, CreatePartyInviteCommandOutput } from "./commands/CreatePartyInviteCommand";
import { FindMatchmakerLobbyForPartyCommandInput, FindMatchmakerLobbyForPartyCommandOutput } from "./commands/FindMatchmakerLobbyForPartyCommand";
import { GetPartyFromInviteCommandInput, GetPartyFromInviteCommandOutput } from "./commands/GetPartyFromInviteCommand";
import { GetPartyProfileCommandInput, GetPartyProfileCommandOutput } from "./commands/GetPartyProfileCommand";
import { GetPartySelfProfileCommandInput, GetPartySelfProfileCommandOutput } from "./commands/GetPartySelfProfileCommand";
import { GetPartySelfSummaryCommandInput, GetPartySelfSummaryCommandOutput } from "./commands/GetPartySelfSummaryCommand";
import { GetPartySummaryCommandInput, GetPartySummaryCommandOutput } from "./commands/GetPartySummaryCommand";
import { JoinMatchmakerLobbyForPartyCommandInput, JoinMatchmakerLobbyForPartyCommandOutput } from "./commands/JoinMatchmakerLobbyForPartyCommand";
import { JoinPartyCommandInput, JoinPartyCommandOutput } from "./commands/JoinPartyCommand";
import { KickMemberCommandInput, KickMemberCommandOutput } from "./commands/KickMemberCommand";
import { LeavePartyCommandInput, LeavePartyCommandOutput } from "./commands/LeavePartyCommand";
import { RequestMatchmakerPlayerCommandInput, RequestMatchmakerPlayerCommandOutput } from "./commands/RequestMatchmakerPlayerCommand";
import { RevokePartyInviteCommandInput, RevokePartyInviteCommandOutput } from "./commands/RevokePartyInviteCommand";
import { SendJoinRequestCommandInput, SendJoinRequestCommandOutput } from "./commands/SendJoinRequestCommand";
import { SetPartyPublicityCommandInput, SetPartyPublicityCommandOutput } from "./commands/SetPartyPublicityCommand";
import { SetPartyToIdleCommandInput, SetPartyToIdleCommandOutput } from "./commands/SetPartyToIdleCommand";
import { TransferPartyOwnershipCommandInput, TransferPartyOwnershipCommandOutput } from "./commands/TransferPartyOwnershipCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
export declare class PartyService extends PartyServiceClient {
    /**
     * Creates a new party.
     */
    createParty(args: CreatePartyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePartyCommandOutput>;
    createParty(args: CreatePartyCommandInput, cb: (err: any, data?: CreatePartyCommandOutput) => void): void;
    createParty(args: CreatePartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePartyCommandOutput) => void): void;
    /**
     * Creates a new party invite for the current identity's party.
     *
     * Identity must be the party leader.
     */
    createPartyInvite(args: CreatePartyInviteCommandInput, options?: __HttpHandlerOptions): Promise<CreatePartyInviteCommandOutput>;
    createPartyInvite(args: CreatePartyInviteCommandInput, cb: (err: any, data?: CreatePartyInviteCommandOutput) => void): void;
    createPartyInvite(args: CreatePartyInviteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePartyInviteCommandOutput) => void): void;
    /**
     * Fetches a party based on a given invite.
     */
    getPartyFromInvite(args: GetPartyFromInviteCommandInput, options?: __HttpHandlerOptions): Promise<GetPartyFromInviteCommandOutput>;
    getPartyFromInvite(args: GetPartyFromInviteCommandInput, cb: (err: any, data?: GetPartyFromInviteCommandOutput) => void): void;
    getPartyFromInvite(args: GetPartyFromInviteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartyFromInviteCommandOutput) => void): void;
    /**
     * Returns a party profile.
     */
    getPartyProfile(args: GetPartyProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetPartyProfileCommandOutput>;
    getPartyProfile(args: GetPartyProfileCommandInput, cb: (err: any, data?: GetPartyProfileCommandOutput) => void): void;
    getPartyProfile(args: GetPartyProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartyProfileCommandOutput) => void): void;
    /**
     * Returns a party profile for the party the current identity is a member of.
     */
    getPartySelfProfile(args: GetPartySelfProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetPartySelfProfileCommandOutput>;
    getPartySelfProfile(args: GetPartySelfProfileCommandInput, cb: (err: any, data?: GetPartySelfProfileCommandOutput) => void): void;
    getPartySelfProfile(args: GetPartySelfProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartySelfProfileCommandOutput) => void): void;
    /**
     * Returns a party summary for the party the current identity is a member of.
     */
    getPartySelfSummary(args: GetPartySelfSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetPartySelfSummaryCommandOutput>;
    getPartySelfSummary(args: GetPartySelfSummaryCommandInput, cb: (err: any, data?: GetPartySelfSummaryCommandOutput) => void): void;
    getPartySelfSummary(args: GetPartySelfSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartySelfSummaryCommandOutput) => void): void;
    /**
     * Returns a party summary.
     */
    getPartySummary(args: GetPartySummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetPartySummaryCommandOutput>;
    getPartySummary(args: GetPartySummaryCommandInput, cb: (err: any, data?: GetPartySummaryCommandOutput) => void): void;
    getPartySummary(args: GetPartySummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPartySummaryCommandOutput) => void): void;
    /**
     * Joins a party using a given party invite.
     */
    joinParty(args: JoinPartyCommandInput, options?: __HttpHandlerOptions): Promise<JoinPartyCommandOutput>;
    joinParty(args: JoinPartyCommandInput, cb: (err: any, data?: JoinPartyCommandOutput) => void): void;
    joinParty(args: JoinPartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: JoinPartyCommandOutput) => void): void;
    /**
     * Kicks a member from the current identity's current party.
     *
     * Identity must be the party leader.
     */
    kickMember(args: KickMemberCommandInput, options?: __HttpHandlerOptions): Promise<KickMemberCommandOutput>;
    kickMember(args: KickMemberCommandInput, cb: (err: any, data?: KickMemberCommandOutput) => void): void;
    kickMember(args: KickMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: KickMemberCommandOutput) => void): void;
    /**
     * Leaves the current identity's party.
     */
    leaveParty(args: LeavePartyCommandInput, options?: __HttpHandlerOptions): Promise<LeavePartyCommandOutput>;
    leaveParty(args: LeavePartyCommandInput, cb: (err: any, data?: LeavePartyCommandOutput) => void): void;
    leaveParty(args: LeavePartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LeavePartyCommandOutput) => void): void;
    /**
     * Revokes a party invite from the current identity's party.
     *
     * Identity must be the party leader.
     */
    revokePartyInvite(args: RevokePartyInviteCommandInput, options?: __HttpHandlerOptions): Promise<RevokePartyInviteCommandOutput>;
    revokePartyInvite(args: RevokePartyInviteCommandInput, cb: (err: any, data?: RevokePartyInviteCommandOutput) => void): void;
    revokePartyInvite(args: RevokePartyInviteCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokePartyInviteCommandOutput) => void): void;
    sendJoinRequest(args: SendJoinRequestCommandInput, options?: __HttpHandlerOptions): Promise<SendJoinRequestCommandOutput>;
    sendJoinRequest(args: SendJoinRequestCommandInput, cb: (err: any, data?: SendJoinRequestCommandOutput) => void): void;
    sendJoinRequest(args: SendJoinRequestCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendJoinRequestCommandOutput) => void): void;
    /**
     * Sets the publicity of a party.
     *
     * This configures who can view and join the party.
     *
     * Identity must be the party leader.
     */
    setPartyPublicity(args: SetPartyPublicityCommandInput, options?: __HttpHandlerOptions): Promise<SetPartyPublicityCommandOutput>;
    setPartyPublicity(args: SetPartyPublicityCommandInput, cb: (err: any, data?: SetPartyPublicityCommandOutput) => void): void;
    setPartyPublicity(args: SetPartyPublicityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetPartyPublicityCommandOutput) => void): void;
    /**
     * Transfers ownership of the party to another party member.
     *
     * Identity must be the party leader.
     */
    transferPartyOwnership(args: TransferPartyOwnershipCommandInput, options?: __HttpHandlerOptions): Promise<TransferPartyOwnershipCommandOutput>;
    transferPartyOwnership(args: TransferPartyOwnershipCommandInput, cb: (err: any, data?: TransferPartyOwnershipCommandOutput) => void): void;
    transferPartyOwnership(args: TransferPartyOwnershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TransferPartyOwnershipCommandOutput) => void): void;
    /**
     * Attempts to make the current identity's party find a lobby based on the
     * given criteria.
     *
     *
     * If succeeds, all party members will receive a
     * `GlobalEventMatchmakerLobbyJoin` event with all the information required to
     * join the lobby.
     *
     * This request will use the party player count configured for the lobby
     * group.
     *
     * See `FindLobby`.
     */
    findMatchmakerLobbyForParty(args: FindMatchmakerLobbyForPartyCommandInput, options?: __HttpHandlerOptions): Promise<FindMatchmakerLobbyForPartyCommandOutput>;
    findMatchmakerLobbyForParty(args: FindMatchmakerLobbyForPartyCommandInput, cb: (err: any, data?: FindMatchmakerLobbyForPartyCommandOutput) => void): void;
    findMatchmakerLobbyForParty(args: FindMatchmakerLobbyForPartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FindMatchmakerLobbyForPartyCommandOutput) => void): void;
    /**
     * Attempts to make the current identity's party join a specific matchmaker
     * lobby.
     *
     * This request will use the party player count configured for the lobby
     * group.
     *
     * If succeeds, all party members will receive a
     * `GlobalEventMatchmakerLobbyJoin` event with all the information required to
     * join the lobby.
     *
     * Identity must be the party leader.
     *
     * See `JoinLobby`.
     */
    joinMatchmakerLobbyForParty(args: JoinMatchmakerLobbyForPartyCommandInput, options?: __HttpHandlerOptions): Promise<JoinMatchmakerLobbyForPartyCommandOutput>;
    joinMatchmakerLobbyForParty(args: JoinMatchmakerLobbyForPartyCommandInput, cb: (err: any, data?: JoinMatchmakerLobbyForPartyCommandOutput) => void): void;
    joinMatchmakerLobbyForParty(args: JoinMatchmakerLobbyForPartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: JoinMatchmakerLobbyForPartyCommandOutput) => void): void;
    /**
     * Attempts to create a new matchmaker player for the current identity.
     *
     * If succeeds, the identity will receive a `GlobalEventMatchmakerLobbyJoin`
     * event with all the information required to join the lobby.
     *
     * Only relevant if the party is already in a matchmaker lobby.
     *
     * # When To Use This Endpoint
     *
     * ## Joining a Party Already In a Lobby
     *
     * When an identity joins a party that's already in a lobby, a new matchmaker
     * player will not automatically be created unless
     * `JoinParty#matchmaker_auto_join_lobby` is set to `true`.
     *
     * ## Leaving the Game and Returning
     *
     * If the user leaves the game and comes back but is still in the party, then
     * they will have to create a new matchmaker player.
     *
     * ## Failed to Connect to Lobby or Disconnected From Lobby
     *
     * If the user failed to establish a connection with the lobby or they got
     * disconnected, their matchmaker player will be removed. Use this endpoint to
     * create a new matchmaker player.
     */
    requestMatchmakerPlayer(args: RequestMatchmakerPlayerCommandInput, options?: __HttpHandlerOptions): Promise<RequestMatchmakerPlayerCommandOutput>;
    requestMatchmakerPlayer(args: RequestMatchmakerPlayerCommandInput, cb: (err: any, data?: RequestMatchmakerPlayerCommandOutput) => void): void;
    requestMatchmakerPlayer(args: RequestMatchmakerPlayerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RequestMatchmakerPlayerCommandOutput) => void): void;
    /**
     * Sets the activity of the current identity's party to idle.
     *
     * Identity must be the party leader.
     */
    setPartyToIdle(args: SetPartyToIdleCommandInput, options?: __HttpHandlerOptions): Promise<SetPartyToIdleCommandOutput>;
    setPartyToIdle(args: SetPartyToIdleCommandInput, cb: (err: any, data?: SetPartyToIdleCommandOutput) => void): void;
    setPartyToIdle(args: SetPartyToIdleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetPartyToIdleCommandOutput) => void): void;
}
