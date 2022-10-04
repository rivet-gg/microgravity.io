// smithy-typescript generated code
import { MatchmakerServiceClient } from "./MatchmakerServiceClient";
import {
  FindLobbyCommand,
  FindLobbyCommandInput,
  FindLobbyCommandOutput,
} from "./commands/FindLobbyCommand";
import {
  JoinLobbyCommand,
  JoinLobbyCommandInput,
  JoinLobbyCommandOutput,
} from "./commands/JoinLobbyCommand";
import {
  ListLobbiesCommand,
  ListLobbiesCommandInput,
  ListLobbiesCommandOutput,
} from "./commands/ListLobbiesCommand";
import {
  ListRegionsCommand,
  ListRegionsCommandInput,
  ListRegionsCommandOutput,
} from "./commands/ListRegionsCommand";
import {
  LobbyReadyCommand,
  LobbyReadyCommandInput,
  LobbyReadyCommandOutput,
} from "./commands/LobbyReadyCommand";
import {
  PlayerConnectedCommand,
  PlayerConnectedCommandInput,
  PlayerConnectedCommandOutput,
} from "./commands/PlayerConnectedCommand";
import {
  PlayerDisconnectedCommand,
  PlayerDisconnectedCommandInput,
  PlayerDisconnectedCommandOutput,
} from "./commands/PlayerDisconnectedCommand";
import {
  SetLobbyClosedCommand,
  SetLobbyClosedCommandInput,
  SetLobbyClosedCommandOutput,
} from "./commands/SetLobbyClosedCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class MatchmakerService extends MatchmakerServiceClient {
  /**
   * Finds a lobby based on the given criteria.
   *
   * If a lobby is not found and `prevent_auto_create_lobby` is `true`, a new lobby will be created.
   */
  public findLobby(
    args: FindLobbyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<FindLobbyCommandOutput>;
  public findLobby(
    args: FindLobbyCommandInput,
    cb: (err: any, data?: FindLobbyCommandOutput) => void
  ): void;
  public findLobby(
    args: FindLobbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FindLobbyCommandOutput) => void
  ): void;
  public findLobby(
    args: FindLobbyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FindLobbyCommandOutput) => void),
    cb?: (err: any, data?: FindLobbyCommandOutput) => void
  ): Promise<FindLobbyCommandOutput> | void {
    const command = new FindLobbyCommand(args);
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
   * Joins a specific lobby.
   *
   * This request will use the direct player count configured for the lobby
   * group.
   */
  public joinLobby(
    args: JoinLobbyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<JoinLobbyCommandOutput>;
  public joinLobby(
    args: JoinLobbyCommandInput,
    cb: (err: any, data?: JoinLobbyCommandOutput) => void
  ): void;
  public joinLobby(
    args: JoinLobbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: JoinLobbyCommandOutput) => void
  ): void;
  public joinLobby(
    args: JoinLobbyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: JoinLobbyCommandOutput) => void),
    cb?: (err: any, data?: JoinLobbyCommandOutput) => void
  ): Promise<JoinLobbyCommandOutput> | void {
    const command = new JoinLobbyCommand(args);
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
   * Lists all open lobbies.
   */
  public listLobbies(
    args: ListLobbiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListLobbiesCommandOutput>;
  public listLobbies(
    args: ListLobbiesCommandInput,
    cb: (err: any, data?: ListLobbiesCommandOutput) => void
  ): void;
  public listLobbies(
    args: ListLobbiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLobbiesCommandOutput) => void
  ): void;
  public listLobbies(
    args: ListLobbiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLobbiesCommandOutput) => void),
    cb?: (err: any, data?: ListLobbiesCommandOutput) => void
  ): Promise<ListLobbiesCommandOutput> | void {
    const command = new ListLobbiesCommand(args);
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
   * Returns a list of regions available to this namespace.
   *
   * Regions are sorted by most optimal to least optimal. The player's IP address
   * is used to calculate the regions' optimality.
   */
  public listRegions(
    args: ListRegionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListRegionsCommandOutput>;
  public listRegions(
    args: ListRegionsCommandInput,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;
  public listRegions(
    args: ListRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;
  public listRegions(
    args: ListRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegionsCommandOutput) => void),
    cb?: (err: any, data?: ListRegionsCommandOutput) => void
  ): Promise<ListRegionsCommandOutput> | void {
    const command = new ListRegionsCommand(args);
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
   * Marks the current lobby as ready to accept connections. Players will not be
   * able to connect to this lobby until the lobby is flagged as ready.
   */
  public lobbyReady(
    args: LobbyReadyCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<LobbyReadyCommandOutput>;
  public lobbyReady(
    args: LobbyReadyCommandInput,
    cb: (err: any, data?: LobbyReadyCommandOutput) => void
  ): void;
  public lobbyReady(
    args: LobbyReadyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LobbyReadyCommandOutput) => void
  ): void;
  public lobbyReady(
    args: LobbyReadyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LobbyReadyCommandOutput) => void),
    cb?: (err: any, data?: LobbyReadyCommandOutput) => void
  ): Promise<LobbyReadyCommandOutput> | void {
    const command = new LobbyReadyCommand(args);
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
   * Validates the player token is valid and has not already been consumed then
   * marks the player as connected.
   *
   * # Player Tokens and Reserved Slots
   *
   * Player tokens reserve a spot in the lobby until they expire. This allows for
   * precise matchmaking up to exactly the lobby's player limit, which is
   * important for games with small lobbies and a high influx of players.
   *
   * By calling this endpoint with the player token, the player's spot is marked
   * as connected and will not expire. If this endpoint is never called, the
   * player's token will expire and this spot will be filled by another player.
   *
   * # Anti-Botting
   *
   * Player tokens are only issued by caling `rivet.api.matchmaker#JoinLobby`, calling `rivet.api.matchmaker#FindLobby`, or
   * from the `rivet.api.identity.common#GlobalEventMatchmakerLobbyJoin` event.
   * These endpoints have anti-botting measures (i.e. enforcing max player
   * limits, captchas, and detecting bots), so valid player tokens provide some
   * confidence that the player is not a bot.
   *
   * Therefore, it's important to make sure the token is valid by waiting for
   * this endpoint to return OK before allowing the connected socket to do
   * anything else. If this endpoint returns an error, the socket should be
   * disconnected immediately.
   *
   * # How to Transmit the Player Token
   *
   * The client is responsible for acquiring the player token by caling
   * `rivet.api.matchmaker#JoinLobby`, calling `rivet.api.matchmaker#FindLobby`,
   * or from the `rivet.api.identity.common#GlobalEventMatchmakerLobbyJoin`
   * event.  Beyond that, it's up to the developer how the player token is
   * transmitted to the lobby.
   *
   * If using WebSockets, the player token can be transmitted as a query
   * paramter.
   *
   * Otherwise, the player token will likely be automatically sent by the client
   * once the socket opens. As mentioned above, nothing else should happen until
   * the player token is validated.
   */
  public playerConnected(
    args: PlayerConnectedCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PlayerConnectedCommandOutput>;
  public playerConnected(
    args: PlayerConnectedCommandInput,
    cb: (err: any, data?: PlayerConnectedCommandOutput) => void
  ): void;
  public playerConnected(
    args: PlayerConnectedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PlayerConnectedCommandOutput) => void
  ): void;
  public playerConnected(
    args: PlayerConnectedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PlayerConnectedCommandOutput) => void),
    cb?: (err: any, data?: PlayerConnectedCommandOutput) => void
  ): Promise<PlayerConnectedCommandOutput> | void {
    const command = new PlayerConnectedCommand(args);
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
   * Marks a player as disconnected.
   *
   * # Ghost Players
   *
   * If players are not marked as disconnected, lobbies will result with "ghost
   * players" that the matchmaker thinks exist but are no longer connected to the
   * lobby.
   */
  public playerDisconnected(
    args: PlayerDisconnectedCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PlayerDisconnectedCommandOutput>;
  public playerDisconnected(
    args: PlayerDisconnectedCommandInput,
    cb: (err: any, data?: PlayerDisconnectedCommandOutput) => void
  ): void;
  public playerDisconnected(
    args: PlayerDisconnectedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PlayerDisconnectedCommandOutput) => void
  ): void;
  public playerDisconnected(
    args: PlayerDisconnectedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PlayerDisconnectedCommandOutput) => void),
    cb?: (err: any, data?: PlayerDisconnectedCommandOutput) => void
  ): Promise<PlayerDisconnectedCommandOutput> | void {
    const command = new PlayerDisconnectedCommand(args);
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
   * If `is_closed` is `true`, players will be prevented from joining the lobby.
   *
   * Does not shutdown the lobby.
   */
  public setLobbyClosed(
    args: SetLobbyClosedCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetLobbyClosedCommandOutput>;
  public setLobbyClosed(
    args: SetLobbyClosedCommandInput,
    cb: (err: any, data?: SetLobbyClosedCommandOutput) => void
  ): void;
  public setLobbyClosed(
    args: SetLobbyClosedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetLobbyClosedCommandOutput) => void
  ): void;
  public setLobbyClosed(
    args: SetLobbyClosedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetLobbyClosedCommandOutput) => void),
    cb?: (err: any, data?: SetLobbyClosedCommandOutput) => void
  ): Promise<SetLobbyClosedCommandOutput> | void {
    const command = new SetLobbyClosedCommand(args);
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
