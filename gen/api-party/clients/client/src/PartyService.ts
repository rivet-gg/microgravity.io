// smithy-typescript generated code
import { PartyServiceClient } from "./PartyServiceClient";
import {
  CreatePartyCommand,
  CreatePartyCommandInput,
  CreatePartyCommandOutput,
} from "./commands/CreatePartyCommand";
import {
  CreatePartyInviteCommand,
  CreatePartyInviteCommandInput,
  CreatePartyInviteCommandOutput,
} from "./commands/CreatePartyInviteCommand";
import {
  FindMatchmakerLobbyForPartyCommand,
  FindMatchmakerLobbyForPartyCommandInput,
  FindMatchmakerLobbyForPartyCommandOutput,
} from "./commands/FindMatchmakerLobbyForPartyCommand";
import {
  GetPartyFromInviteCommand,
  GetPartyFromInviteCommandInput,
  GetPartyFromInviteCommandOutput,
} from "./commands/GetPartyFromInviteCommand";
import {
  GetPartyProfileCommand,
  GetPartyProfileCommandInput,
  GetPartyProfileCommandOutput,
} from "./commands/GetPartyProfileCommand";
import {
  GetPartySelfProfileCommand,
  GetPartySelfProfileCommandInput,
  GetPartySelfProfileCommandOutput,
} from "./commands/GetPartySelfProfileCommand";
import {
  GetPartySelfSummaryCommand,
  GetPartySelfSummaryCommandInput,
  GetPartySelfSummaryCommandOutput,
} from "./commands/GetPartySelfSummaryCommand";
import {
  GetPartySummaryCommand,
  GetPartySummaryCommandInput,
  GetPartySummaryCommandOutput,
} from "./commands/GetPartySummaryCommand";
import {
  JoinMatchmakerLobbyForPartyCommand,
  JoinMatchmakerLobbyForPartyCommandInput,
  JoinMatchmakerLobbyForPartyCommandOutput,
} from "./commands/JoinMatchmakerLobbyForPartyCommand";
import {
  JoinPartyCommand,
  JoinPartyCommandInput,
  JoinPartyCommandOutput,
} from "./commands/JoinPartyCommand";
import {
  KickMemberCommand,
  KickMemberCommandInput,
  KickMemberCommandOutput,
} from "./commands/KickMemberCommand";
import {
  LeavePartyCommand,
  LeavePartyCommandInput,
  LeavePartyCommandOutput,
} from "./commands/LeavePartyCommand";
import {
  MatchmakerSelfReadyCommand,
  MatchmakerSelfReadyCommandInput,
  MatchmakerSelfReadyCommandOutput,
} from "./commands/MatchmakerSelfReadyCommand";
import {
  RevokePartyInviteCommand,
  RevokePartyInviteCommandInput,
  RevokePartyInviteCommandOutput,
} from "./commands/RevokePartyInviteCommand";
import {
  SendJoinRequestCommand,
  SendJoinRequestCommandInput,
  SendJoinRequestCommandOutput,
} from "./commands/SendJoinRequestCommand";
import {
  SetPartyPublicityCommand,
  SetPartyPublicityCommandInput,
  SetPartyPublicityCommandOutput,
} from "./commands/SetPartyPublicityCommand";
import {
  SetPartyToIdleCommand,
  SetPartyToIdleCommandInput,
  SetPartyToIdleCommandOutput,
} from "./commands/SetPartyToIdleCommand";
import {
  SetSelfInactiveCommand,
  SetSelfInactiveCommandInput,
  SetSelfInactiveCommandOutput,
} from "./commands/SetSelfInactiveCommand";
import {
  TransferPartyOwnershipCommand,
  TransferPartyOwnershipCommandInput,
  TransferPartyOwnershipCommandOutput,
} from "./commands/TransferPartyOwnershipCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class PartyService extends PartyServiceClient {
  /**
   * Creates a new party.
   */
  public createParty(
    args: CreatePartyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreatePartyCommandOutput>;
  public createParty(
    args: CreatePartyCommandInput,
    cb: (err: any, data?: CreatePartyCommandOutput) => void
  ): void;
  public createParty(
    args: CreatePartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartyCommandOutput) => void
  ): void;
  public createParty(
    args: CreatePartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePartyCommandOutput) => void),
    cb?: (err: any, data?: CreatePartyCommandOutput) => void
  ): Promise<CreatePartyCommandOutput> | void {
    const command = new CreatePartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a new party invite for the current identity's party.
   *
   * Identity must be the party leader.
   */
  public createPartyInvite(
    args: CreatePartyInviteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreatePartyInviteCommandOutput>;
  public createPartyInvite(
    args: CreatePartyInviteCommandInput,
    cb: (err: any, data?: CreatePartyInviteCommandOutput) => void
  ): void;
  public createPartyInvite(
    args: CreatePartyInviteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartyInviteCommandOutput) => void
  ): void;
  public createPartyInvite(
    args: CreatePartyInviteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePartyInviteCommandOutput) => void),
    cb?: (err: any, data?: CreatePartyInviteCommandOutput) => void
  ): Promise<CreatePartyInviteCommandOutput> | void {
    const command = new CreatePartyInviteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Fetches a party based on a given invite.
   */
  public getPartyFromInvite(
    args: GetPartyFromInviteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPartyFromInviteCommandOutput>;
  public getPartyFromInvite(
    args: GetPartyFromInviteCommandInput,
    cb: (err: any, data?: GetPartyFromInviteCommandOutput) => void
  ): void;
  public getPartyFromInvite(
    args: GetPartyFromInviteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartyFromInviteCommandOutput) => void
  ): void;
  public getPartyFromInvite(
    args: GetPartyFromInviteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartyFromInviteCommandOutput) => void),
    cb?: (err: any, data?: GetPartyFromInviteCommandOutput) => void
  ): Promise<GetPartyFromInviteCommandOutput> | void {
    const command = new GetPartyFromInviteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns a party profile.
   */
  public getPartyProfile(
    args: GetPartyProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPartyProfileCommandOutput>;
  public getPartyProfile(
    args: GetPartyProfileCommandInput,
    cb: (err: any, data?: GetPartyProfileCommandOutput) => void
  ): void;
  public getPartyProfile(
    args: GetPartyProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartyProfileCommandOutput) => void
  ): void;
  public getPartyProfile(
    args: GetPartyProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartyProfileCommandOutput) => void),
    cb?: (err: any, data?: GetPartyProfileCommandOutput) => void
  ): Promise<GetPartyProfileCommandOutput> | void {
    const command = new GetPartyProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns a party profile for the party the current identity is a member of.
   */
  public getPartySelfProfile(
    args: GetPartySelfProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPartySelfProfileCommandOutput>;
  public getPartySelfProfile(
    args: GetPartySelfProfileCommandInput,
    cb: (err: any, data?: GetPartySelfProfileCommandOutput) => void
  ): void;
  public getPartySelfProfile(
    args: GetPartySelfProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartySelfProfileCommandOutput) => void
  ): void;
  public getPartySelfProfile(
    args: GetPartySelfProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartySelfProfileCommandOutput) => void),
    cb?: (err: any, data?: GetPartySelfProfileCommandOutput) => void
  ): Promise<GetPartySelfProfileCommandOutput> | void {
    const command = new GetPartySelfProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns a party summary for the party the current identity is a member of.
   */
  public getPartySelfSummary(
    args: GetPartySelfSummaryCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPartySelfSummaryCommandOutput>;
  public getPartySelfSummary(
    args: GetPartySelfSummaryCommandInput,
    cb: (err: any, data?: GetPartySelfSummaryCommandOutput) => void
  ): void;
  public getPartySelfSummary(
    args: GetPartySelfSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartySelfSummaryCommandOutput) => void
  ): void;
  public getPartySelfSummary(
    args: GetPartySelfSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartySelfSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetPartySelfSummaryCommandOutput) => void
  ): Promise<GetPartySelfSummaryCommandOutput> | void {
    const command = new GetPartySelfSummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns a party summary.
   */
  public getPartySummary(
    args: GetPartySummaryCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetPartySummaryCommandOutput>;
  public getPartySummary(
    args: GetPartySummaryCommandInput,
    cb: (err: any, data?: GetPartySummaryCommandOutput) => void
  ): void;
  public getPartySummary(
    args: GetPartySummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartySummaryCommandOutput) => void
  ): void;
  public getPartySummary(
    args: GetPartySummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartySummaryCommandOutput) => void),
    cb?: (err: any, data?: GetPartySummaryCommandOutput) => void
  ): Promise<GetPartySummaryCommandOutput> | void {
    const command = new GetPartySummaryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Joins a party using a given party invite.
   */
  public joinParty(
    args: JoinPartyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<JoinPartyCommandOutput>;
  public joinParty(
    args: JoinPartyCommandInput,
    cb: (err: any, data?: JoinPartyCommandOutput) => void
  ): void;
  public joinParty(
    args: JoinPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinPartyCommandOutput) => void
  ): void;
  public joinParty(
    args: JoinPartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JoinPartyCommandOutput) => void),
    cb?: (err: any, data?: JoinPartyCommandOutput) => void
  ): Promise<JoinPartyCommandOutput> | void {
    const command = new JoinPartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Kicks a member from the current identity's current party.
   *
   * Identity must be the party leader.
   */
  public kickMember(
    args: KickMemberCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<KickMemberCommandOutput>;
  public kickMember(
    args: KickMemberCommandInput,
    cb: (err: any, data?: KickMemberCommandOutput) => void
  ): void;
  public kickMember(
    args: KickMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: KickMemberCommandOutput) => void
  ): void;
  public kickMember(
    args: KickMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: KickMemberCommandOutput) => void),
    cb?: (err: any, data?: KickMemberCommandOutput) => void
  ): Promise<KickMemberCommandOutput> | void {
    const command = new KickMemberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Leaves the current identity's party.
   */
  public leaveParty(
    args: LeavePartyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<LeavePartyCommandOutput>;
  public leaveParty(
    args: LeavePartyCommandInput,
    cb: (err: any, data?: LeavePartyCommandOutput) => void
  ): void;
  public leaveParty(
    args: LeavePartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LeavePartyCommandOutput) => void
  ): void;
  public leaveParty(
    args: LeavePartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LeavePartyCommandOutput) => void),
    cb?: (err: any, data?: LeavePartyCommandOutput) => void
  ): Promise<LeavePartyCommandOutput> | void {
    const command = new LeavePartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Revokes a party invite from the current identity's party.
   *
   * Identity must be the party leader.
   */
  public revokePartyInvite(
    args: RevokePartyInviteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RevokePartyInviteCommandOutput>;
  public revokePartyInvite(
    args: RevokePartyInviteCommandInput,
    cb: (err: any, data?: RevokePartyInviteCommandOutput) => void
  ): void;
  public revokePartyInvite(
    args: RevokePartyInviteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokePartyInviteCommandOutput) => void
  ): void;
  public revokePartyInvite(
    args: RevokePartyInviteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokePartyInviteCommandOutput) => void),
    cb?: (err: any, data?: RevokePartyInviteCommandOutput) => void
  ): Promise<RevokePartyInviteCommandOutput> | void {
    const command = new RevokePartyInviteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public sendJoinRequest(
    args: SendJoinRequestCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SendJoinRequestCommandOutput>;
  public sendJoinRequest(
    args: SendJoinRequestCommandInput,
    cb: (err: any, data?: SendJoinRequestCommandOutput) => void
  ): void;
  public sendJoinRequest(
    args: SendJoinRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendJoinRequestCommandOutput) => void
  ): void;
  public sendJoinRequest(
    args: SendJoinRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendJoinRequestCommandOutput) => void),
    cb?: (err: any, data?: SendJoinRequestCommandOutput) => void
  ): Promise<SendJoinRequestCommandOutput> | void {
    const command = new SendJoinRequestCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Sets the publicity of a party.
   *
   * This configures who can view and join the party.
   *
   * Identity must be the party leader.
   */
  public setPartyPublicity(
    args: SetPartyPublicityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetPartyPublicityCommandOutput>;
  public setPartyPublicity(
    args: SetPartyPublicityCommandInput,
    cb: (err: any, data?: SetPartyPublicityCommandOutput) => void
  ): void;
  public setPartyPublicity(
    args: SetPartyPublicityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetPartyPublicityCommandOutput) => void
  ): void;
  public setPartyPublicity(
    args: SetPartyPublicityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetPartyPublicityCommandOutput) => void),
    cb?: (err: any, data?: SetPartyPublicityCommandOutput) => void
  ): Promise<SetPartyPublicityCommandOutput> | void {
    const command = new SetPartyPublicityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Transfers ownership of the party to another party member.
   *
   * Identity must be the party leader.
   */
  public transferPartyOwnership(
    args: TransferPartyOwnershipCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<TransferPartyOwnershipCommandOutput>;
  public transferPartyOwnership(
    args: TransferPartyOwnershipCommandInput,
    cb: (err: any, data?: TransferPartyOwnershipCommandOutput) => void
  ): void;
  public transferPartyOwnership(
    args: TransferPartyOwnershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TransferPartyOwnershipCommandOutput) => void
  ): void;
  public transferPartyOwnership(
    args: TransferPartyOwnershipCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TransferPartyOwnershipCommandOutput) => void),
    cb?: (err: any, data?: TransferPartyOwnershipCommandOutput) => void
  ): Promise<TransferPartyOwnershipCommandOutput> | void {
    const command = new TransferPartyOwnershipCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public findMatchmakerLobbyForParty(
    args: FindMatchmakerLobbyForPartyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<FindMatchmakerLobbyForPartyCommandOutput>;
  public findMatchmakerLobbyForParty(
    args: FindMatchmakerLobbyForPartyCommandInput,
    cb: (err: any, data?: FindMatchmakerLobbyForPartyCommandOutput) => void
  ): void;
  public findMatchmakerLobbyForParty(
    args: FindMatchmakerLobbyForPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FindMatchmakerLobbyForPartyCommandOutput) => void
  ): void;
  public findMatchmakerLobbyForParty(
    args: FindMatchmakerLobbyForPartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FindMatchmakerLobbyForPartyCommandOutput) => void),
    cb?: (err: any, data?: FindMatchmakerLobbyForPartyCommandOutput) => void
  ): Promise<FindMatchmakerLobbyForPartyCommandOutput> | void {
    const command = new FindMatchmakerLobbyForPartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public joinMatchmakerLobbyForParty(
    args: JoinMatchmakerLobbyForPartyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<JoinMatchmakerLobbyForPartyCommandOutput>;
  public joinMatchmakerLobbyForParty(
    args: JoinMatchmakerLobbyForPartyCommandInput,
    cb: (err: any, data?: JoinMatchmakerLobbyForPartyCommandOutput) => void
  ): void;
  public joinMatchmakerLobbyForParty(
    args: JoinMatchmakerLobbyForPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinMatchmakerLobbyForPartyCommandOutput) => void
  ): void;
  public joinMatchmakerLobbyForParty(
    args: JoinMatchmakerLobbyForPartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JoinMatchmakerLobbyForPartyCommandOutput) => void),
    cb?: (err: any, data?: JoinMatchmakerLobbyForPartyCommandOutput) => void
  ): Promise<JoinMatchmakerLobbyForPartyCommandOutput> | void {
    const command = new JoinMatchmakerLobbyForPartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public matchmakerSelfReady(
    args: MatchmakerSelfReadyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<MatchmakerSelfReadyCommandOutput>;
  public matchmakerSelfReady(
    args: MatchmakerSelfReadyCommandInput,
    cb: (err: any, data?: MatchmakerSelfReadyCommandOutput) => void
  ): void;
  public matchmakerSelfReady(
    args: MatchmakerSelfReadyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MatchmakerSelfReadyCommandOutput) => void
  ): void;
  public matchmakerSelfReady(
    args: MatchmakerSelfReadyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MatchmakerSelfReadyCommandOutput) => void),
    cb?: (err: any, data?: MatchmakerSelfReadyCommandOutput) => void
  ): Promise<MatchmakerSelfReadyCommandOutput> | void {
    const command = new MatchmakerSelfReadyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Sets the activity of the current identity's party to idle.
   *
   * Identity must be the party leader.
   */
  public setPartyToIdle(
    args: SetPartyToIdleCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetPartyToIdleCommandOutput>;
  public setPartyToIdle(
    args: SetPartyToIdleCommandInput,
    cb: (err: any, data?: SetPartyToIdleCommandOutput) => void
  ): void;
  public setPartyToIdle(
    args: SetPartyToIdleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetPartyToIdleCommandOutput) => void
  ): void;
  public setPartyToIdle(
    args: SetPartyToIdleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetPartyToIdleCommandOutput) => void),
    cb?: (err: any, data?: SetPartyToIdleCommandOutput) => void
  ): Promise<SetPartyToIdleCommandOutput> | void {
    const command = new SetPartyToIdleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public setSelfInactive(
    args: SetSelfInactiveCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetSelfInactiveCommandOutput>;
  public setSelfInactive(
    args: SetSelfInactiveCommandInput,
    cb: (err: any, data?: SetSelfInactiveCommandOutput) => void
  ): void;
  public setSelfInactive(
    args: SetSelfInactiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSelfInactiveCommandOutput) => void
  ): void;
  public setSelfInactive(
    args: SetSelfInactiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSelfInactiveCommandOutput) => void),
    cb?: (err: any, data?: SetSelfInactiveCommandOutput) => void
  ): Promise<SetSelfInactiveCommandOutput> | void {
    const command = new SetSelfInactiveCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
