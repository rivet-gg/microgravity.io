// smithy-typescript generated code
import { MatchmakerServiceServiceException as __BaseException } from "./MatchmakerServiceServiceException";
import {
  SENSITIVE_STRING,
  ExceptionOptionType as __ExceptionOptionType,
} from "@aws-sdk/smithy-client";
import { DocumentType as __DocumentType } from "@aws-sdk/types";

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

export namespace FindLobbyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindLobbyInput): any => ({
    ...obj,
    ...(obj.captcha && { captcha:
      CaptchaConfig.filterSensitiveLog(obj.captcha)
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

export interface FindLobbyOutput {
  /**
   * A matchmaker lobby.
   */
  lobby: MatchmakerLobbyJoinInfo | undefined;
}

export namespace FindLobbyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindLobbyOutput): any => ({
    ...obj,
    ...(obj.lobby && { lobby:
      MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
    }),
  })
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

export namespace JoinLobbyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinLobbyInput): any => ({
    ...obj,
    ...(obj.captcha && { captcha:
      CaptchaConfig.filterSensitiveLog(obj.captcha)
    }),
  })
}

export interface JoinLobbyOutput {
  /**
   * A matchmaker lobby.
   */
  lobby: MatchmakerLobbyJoinInfo | undefined;
}

export namespace JoinLobbyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JoinLobbyOutput): any => ({
    ...obj,
    ...(obj.lobby && { lobby:
      MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
    }),
  })
}

export interface ListLobbiesInput {
}

export namespace ListLobbiesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLobbiesInput): any => ({
    ...obj,
  })
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

export namespace GameModeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GameModeInfo): any => ({
    ...obj,
  })
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

export namespace LobbyInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LobbyInfo): any => ({
    ...obj,
  })
}

/**
 * Geographical coordinates for a location on Planet Earth.
 */
export interface Coord {
  latitude: number | undefined;
  longitude: number | undefined;
}

export namespace Coord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Coord): any => ({
    ...obj,
  })
}

/**
 * Distance available in multiple units.
 */
export interface Distance {
  kilometers: number | undefined;
  miles: number | undefined;
}

export namespace Distance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Distance): any => ({
    ...obj,
  })
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

export namespace RegionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegionInfo): any => ({
    ...obj,
  })
}

export interface ListLobbiesOutput {
  gameModes: (GameModeInfo)[] | undefined;
  regions: (RegionInfo)[] | undefined;
  lobbies: (LobbyInfo)[] | undefined;
}

export namespace ListLobbiesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLobbiesOutput): any => ({
    ...obj,
  })
}

export interface ListRegionsInput {
}

export namespace ListRegionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegionsInput): any => ({
    ...obj,
  })
}

export interface ListRegionsOutput {
  regions: (RegionInfo)[] | undefined;
}

export namespace ListRegionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegionsOutput): any => ({
    ...obj,
  })
}

export interface LobbyReadyInput {
}

export namespace LobbyReadyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LobbyReadyInput): any => ({
    ...obj,
  })
}

export interface LobbyReadyOutput {
}

export namespace LobbyReadyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LobbyReadyOutput): any => ({
    ...obj,
  })
}

export interface SetLobbyClosedInput {
  isClosed: boolean | undefined;
}

export namespace SetLobbyClosedInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetLobbyClosedInput): any => ({
    ...obj,
  })
}

export interface SetLobbyClosedOutput {
}

export namespace SetLobbyClosedOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetLobbyClosedOutput): any => ({
    ...obj,
  })
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

export namespace PlayerConnectedInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlayerConnectedInput): any => ({
    ...obj,
    ...(obj.playerToken && { playerToken:
      SENSITIVE_STRING
    }),
  })
}

export interface PlayerConnectedOutput {
}

export namespace PlayerConnectedOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlayerConnectedOutput): any => ({
    ...obj,
  })
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

export namespace PlayerDisconnectedInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlayerDisconnectedInput): any => ({
    ...obj,
    ...(obj.playerToken && { playerToken:
      SENSITIVE_STRING
    }),
  })
}

export interface PlayerDisconnectedOutput {
}

export namespace PlayerDisconnectedOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlayerDisconnectedOutput): any => ({
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
