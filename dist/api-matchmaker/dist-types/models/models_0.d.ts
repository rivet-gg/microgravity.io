import { MatchmakerServiceServiceException as __BaseException } from "./MatchmakerServiceServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";
/**
 * hCaptcha configuration.
 */
export interface CaptchaConfigHcaptcha {
    clientResponse: string | undefined;
}
export declare namespace CaptchaConfigHcaptcha {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CaptchaConfigHcaptcha) => any;
}
/**
 * Methods to verify a captcha.
 */
export declare type CaptchaConfig = CaptchaConfig.HcaptchaMember | CaptchaConfig.$UnknownMember;
export declare namespace CaptchaConfig {
    /**
     * hCaptcha configuration.
     */
    interface HcaptchaMember {
        hcaptcha: CaptchaConfigHcaptcha;
        $unknown?: never;
    }
    interface $UnknownMember {
        hcaptcha?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        hcaptcha: (value: CaptchaConfigHcaptcha) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: CaptchaConfig, visitor: Visitor<T>) => T;
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CaptchaConfig) => any;
}
export interface FindLobbyInput {
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
     * lobby is found, a `MATCHMAKER_LOBBY_NOT_FOUND` error will be thrown.
     */
    preventAutoCreateLobby?: boolean;
    /**
     * Methods to verify a captcha.
     */
    captcha?: CaptchaConfig;
    origin?: string;
}
export declare namespace FindLobbyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FindLobbyInput) => any;
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
export interface FindLobbyOutput {
    /**
     * A matchmaker lobby.
     */
    lobby: MatchmakerLobbyJoinInfo | undefined;
}
export declare namespace FindLobbyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FindLobbyOutput) => any;
}
export interface JoinLobbyInput {
    /**
     * A universally unique identifier.
     */
    lobbyId: string | undefined;
    /**
     * Methods to verify a captcha.
     */
    captcha?: CaptchaConfig;
}
export declare namespace JoinLobbyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JoinLobbyInput) => any;
}
export interface JoinLobbyOutput {
    /**
     * A matchmaker lobby.
     */
    lobby: MatchmakerLobbyJoinInfo | undefined;
}
export declare namespace JoinLobbyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JoinLobbyOutput) => any;
}
export interface ListLobbiesInput {
}
export declare namespace ListLobbiesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLobbiesInput) => any;
}
/**
 * A game mode that the player can join.
 */
export interface GameModeInfo {
    /**
     * A human readable short identifier used to references resources.
     *
     * Different than a `rivet.common#Uuid` because this is intended to be human readable.
     *
     * Different than `rivet.common#DisplayName` because this should not include special
     * characters and be short.
     */
    gameModeId: string | undefined;
}
export declare namespace GameModeInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GameModeInfo) => any;
}
/**
 * A public lobby in the lobby list.
 */
export interface LobbyInfo {
    regionId: string | undefined;
    gameModeId: string | undefined;
    /**
     * A universally unique identifier.
     */
    lobbyId: string | undefined;
    /**
     * Unsigned 32 bit integer.
     */
    maxPlayersNormal: number | undefined;
    /**
     * Unsigned 32 bit integer.
     */
    maxPlayersDirect: number | undefined;
    /**
     * Unsigned 32 bit integer.
     */
    maxPlayersParty: number | undefined;
    /**
     * Unsigned 32 bit integer.
     */
    totalPlayerCount: number | undefined;
}
export declare namespace LobbyInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LobbyInfo) => any;
}
/**
 * Geographical coordinates for a location on Planet Earth.
 */
export interface Coord {
    latitude: number | undefined;
    longitude: number | undefined;
}
export declare namespace Coord {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Coord) => any;
}
/**
 * Distance available in multiple units.
 */
export interface Distance {
    kilometers: number | undefined;
    miles: number | undefined;
}
export declare namespace Distance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Distance) => any;
}
/**
 * A region that the player can connect to.
 */
export interface RegionInfo {
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
     * A universally unique identifier.
     */
    providerDisplayName: string | undefined;
    /**
     * A universally unique identifier.
     */
    regionDisplayName: string | undefined;
    /**
     * Geographical coordinates for a location on Planet Earth.
     */
    datacenterCoord: Coord | undefined;
    /**
     * Distance available in multiple units.
     */
    datacenterDistanceFromClient: Distance | undefined;
}
export declare namespace RegionInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegionInfo) => any;
}
export interface ListLobbiesOutput {
    gameModes: (GameModeInfo)[] | undefined;
    regions: (RegionInfo)[] | undefined;
    lobbies: (LobbyInfo)[] | undefined;
}
export declare namespace ListLobbiesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLobbiesOutput) => any;
}
export interface ListRegionsInput {
}
export declare namespace ListRegionsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRegionsInput) => any;
}
export interface ListRegionsOutput {
    regions: (RegionInfo)[] | undefined;
}
export declare namespace ListRegionsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRegionsOutput) => any;
}
export interface LobbyReadyInput {
}
export declare namespace LobbyReadyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LobbyReadyInput) => any;
}
export interface LobbyReadyOutput {
}
export declare namespace LobbyReadyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LobbyReadyOutput) => any;
}
export interface SetLobbyClosedInput {
    isClosed: boolean | undefined;
}
export declare namespace SetLobbyClosedInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLobbyClosedInput) => any;
}
export interface SetLobbyClosedOutput {
}
export declare namespace SetLobbyClosedOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLobbyClosedOutput) => any;
}
export interface PlayerConnectedInput {
    /**
     * A JSON Web Token.
     *
     * Slightly modified to include a description prefix and use Protobufs of
     * JSON.
     */
    playerToken: string | undefined;
}
export declare namespace PlayerConnectedInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlayerConnectedInput) => any;
}
export interface PlayerConnectedOutput {
}
export declare namespace PlayerConnectedOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlayerConnectedOutput) => any;
}
export interface PlayerDisconnectedInput {
    /**
     * A JSON Web Token.
     *
     * Slightly modified to include a description prefix and use Protobufs of
     * JSON.
     */
    playerToken: string | undefined;
}
export declare namespace PlayerDisconnectedInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlayerDisconnectedInput) => any;
}
export interface PlayerDisconnectedOutput {
}
export declare namespace PlayerDisconnectedOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlayerDisconnectedOutput) => any;
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
