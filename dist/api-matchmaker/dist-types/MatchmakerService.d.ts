import { MatchmakerServiceClient } from "./MatchmakerServiceClient";
import { FindLobbyCommandInput, FindLobbyCommandOutput } from "./commands/FindLobbyCommand";
import { JoinLobbyCommandInput, JoinLobbyCommandOutput } from "./commands/JoinLobbyCommand";
import { ListLobbiesCommandInput, ListLobbiesCommandOutput } from "./commands/ListLobbiesCommand";
import { ListRegionsCommandInput, ListRegionsCommandOutput } from "./commands/ListRegionsCommand";
import { LobbyReadyCommandInput, LobbyReadyCommandOutput } from "./commands/LobbyReadyCommand";
import { PlayerConnectedCommandInput, PlayerConnectedCommandOutput } from "./commands/PlayerConnectedCommand";
import { PlayerDisconnectedCommandInput, PlayerDisconnectedCommandOutput } from "./commands/PlayerDisconnectedCommand";
import { SetLobbyClosedCommandInput, SetLobbyClosedCommandOutput } from "./commands/SetLobbyClosedCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
export declare class MatchmakerService extends MatchmakerServiceClient {
    /**
     * Finds a lobby based on the given criteria.
     *
     * If a lobby is not found and `prevent_auto_create_lobby` is `true`, a new lobby will be created.
     */
    findLobby(args: FindLobbyCommandInput, options?: __HttpHandlerOptions): Promise<FindLobbyCommandOutput>;
    findLobby(args: FindLobbyCommandInput, cb: (err: any, data?: FindLobbyCommandOutput) => void): void;
    findLobby(args: FindLobbyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FindLobbyCommandOutput) => void): void;
    /**
     * Joins a specific lobby.
     *
     * This request will use the direct player count configured for the lobby
     * group.
     */
    joinLobby(args: JoinLobbyCommandInput, options?: __HttpHandlerOptions): Promise<JoinLobbyCommandOutput>;
    joinLobby(args: JoinLobbyCommandInput, cb: (err: any, data?: JoinLobbyCommandOutput) => void): void;
    joinLobby(args: JoinLobbyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: JoinLobbyCommandOutput) => void): void;
    /**
     * Lists all open lobbies.
     */
    listLobbies(args: ListLobbiesCommandInput, options?: __HttpHandlerOptions): Promise<ListLobbiesCommandOutput>;
    listLobbies(args: ListLobbiesCommandInput, cb: (err: any, data?: ListLobbiesCommandOutput) => void): void;
    listLobbies(args: ListLobbiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLobbiesCommandOutput) => void): void;
    /**
     * Returns a list of regions available to this namespace.
     *
     * Regions are sorted by most optimal to least optimal. The player's IP address
     * is used to calculate the regions' optimality.
     */
    listRegions(args: ListRegionsCommandInput, options?: __HttpHandlerOptions): Promise<ListRegionsCommandOutput>;
    listRegions(args: ListRegionsCommandInput, cb: (err: any, data?: ListRegionsCommandOutput) => void): void;
    listRegions(args: ListRegionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRegionsCommandOutput) => void): void;
    /**
     * Marks the current lobby as ready to accept connections. Players will not be
     * able to connect to this lobby until the lobby is flagged as ready.
     */
    lobbyReady(args: LobbyReadyCommandInput, options?: __HttpHandlerOptions): Promise<LobbyReadyCommandOutput>;
    lobbyReady(args: LobbyReadyCommandInput, cb: (err: any, data?: LobbyReadyCommandOutput) => void): void;
    lobbyReady(args: LobbyReadyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LobbyReadyCommandOutput) => void): void;
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
    playerConnected(args: PlayerConnectedCommandInput, options?: __HttpHandlerOptions): Promise<PlayerConnectedCommandOutput>;
    playerConnected(args: PlayerConnectedCommandInput, cb: (err: any, data?: PlayerConnectedCommandOutput) => void): void;
    playerConnected(args: PlayerConnectedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PlayerConnectedCommandOutput) => void): void;
    /**
     * Marks a player as disconnected.
     *
     * # Ghost Players
     *
     * If players are not marked as disconnected, lobbies will result with "ghost
     * players" that the matchmaker thinks exist but are no longer connected to the
     * lobby.
     */
    playerDisconnected(args: PlayerDisconnectedCommandInput, options?: __HttpHandlerOptions): Promise<PlayerDisconnectedCommandOutput>;
    playerDisconnected(args: PlayerDisconnectedCommandInput, cb: (err: any, data?: PlayerDisconnectedCommandOutput) => void): void;
    playerDisconnected(args: PlayerDisconnectedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PlayerDisconnectedCommandOutput) => void): void;
    /**
     * If `is_closed` is `true`, players will be prevented from joining the lobby.
     *
     * Does not shutdown the lobby.
     */
    setLobbyClosed(args: SetLobbyClosedCommandInput, options?: __HttpHandlerOptions): Promise<SetLobbyClosedCommandOutput>;
    setLobbyClosed(args: SetLobbyClosedCommandInput, cb: (err: any, data?: SetLobbyClosedCommandOutput) => void): void;
    setLobbyClosed(args: SetLobbyClosedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetLobbyClosedCommandOutput) => void): void;
}
