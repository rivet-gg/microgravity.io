// smithy-typescript generated code
import {
  FindLobbyCommandInput,
  FindLobbyCommandOutput,
} from "../commands/FindLobbyCommand";
import {
  JoinLobbyCommandInput,
  JoinLobbyCommandOutput,
} from "../commands/JoinLobbyCommand";
import {
  ListLobbiesCommandInput,
  ListLobbiesCommandOutput,
} from "../commands/ListLobbiesCommand";
import {
  ListRegionsCommandInput,
  ListRegionsCommandOutput,
} from "../commands/ListRegionsCommand";
import {
  LobbyReadyCommandInput,
  LobbyReadyCommandOutput,
} from "../commands/LobbyReadyCommand";
import {
  PlayerConnectedCommandInput,
  PlayerConnectedCommandOutput,
} from "../commands/PlayerConnectedCommand";
import {
  PlayerDisconnectedCommandInput,
  PlayerDisconnectedCommandOutput,
} from "../commands/PlayerDisconnectedCommand";
import {
  SetLobbyClosedCommandInput,
  SetLobbyClosedCommandOutput,
} from "../commands/SetLobbyClosedCommand";
import { MatchmakerServiceServiceException as __BaseException } from "../models/MatchmakerServiceServiceException";
import {
  BadRequestError,
  CaptchaConfig,
  CaptchaConfigHcaptcha,
  CaptchaConfigTurnstile,
  Coord,
  Distance,
  ForbiddenError,
  GameModeInfo,
  InternalError,
  LobbyInfo,
  MatchmakerLobbyJoinInfo,
  MatchmakerLobbyJoinInfoPlayer,
  MatchmakerLobbyJoinInfoPort,
  MatchmakerLobbyJoinInfoPortRange,
  MatchmakerLobbyJoinInfoRegion,
  NotFoundError,
  RateLimitError,
  RegionInfo,
  UnauthorizedError,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1FindLobbyCommand = async(
  input: FindLobbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
    ...isSerializableHeaderValue(input.origin) && { "origin": input.origin! },
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/find";
  let body: any;
  body = JSON.stringify({
    ...(input.captcha !== undefined && input.captcha !== null &&{ "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) }),
    ...(input.gameModes !== undefined && input.gameModes !== null &&{ "game_modes": serializeAws_restJson1FindGameModes(input.gameModes, context) }),
    ...(input.preventAutoCreateLobby !== undefined && input.preventAutoCreateLobby !== null &&{ "prevent_auto_create_lobby": input.preventAutoCreateLobby }),
    ...(input.regions !== undefined && input.regions !== null &&{ "regions": serializeAws_restJson1FindRegions(input.regions, context) }),
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

export const serializeAws_restJson1JoinLobbyCommand = async(
  input: JoinLobbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/join";
  let body: any;
  body = JSON.stringify({
    ...(input.captcha !== undefined && input.captcha !== null &&{ "captcha": serializeAws_restJson1CaptchaConfig(input.captcha, context) }),
    ...(input.lobbyId !== undefined && input.lobbyId !== null &&{ "lobby_id": input.lobbyId }),
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

export const serializeAws_restJson1ListLobbiesCommand = async(
  input: ListLobbiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/list";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1ListRegionsCommand = async(
  input: ListRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/regions";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
}

export const serializeAws_restJson1LobbyReadyCommand = async(
  input: LobbyReadyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/ready";
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

export const serializeAws_restJson1PlayerConnectedCommand = async(
  input: PlayerConnectedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/players/connected";
  let body: any;
  body = JSON.stringify({
    ...(input.playerToken !== undefined && input.playerToken !== null &&{ "player_token": input.playerToken }),
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

export const serializeAws_restJson1PlayerDisconnectedCommand = async(
  input: PlayerDisconnectedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/players/disconnected";
  let body: any;
  body = JSON.stringify({
    ...(input.playerToken !== undefined && input.playerToken !== null &&{ "player_token": input.playerToken }),
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

export const serializeAws_restJson1SetLobbyClosedCommand = async(
  input: SetLobbyClosedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const {hostname, protocol = "https", port, path: basePath} = await context.endpoint();
  const headers: any = {
    'content-type': "application/json",
  };
  let resolvedPath = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : (basePath || '')}` + "/lobbies/closed";
  let body: any;
  body = JSON.stringify({
    ...(input.isClosed !== undefined && input.isClosed !== null &&{ "is_closed": input.isClosed }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
}

export const deserializeAws_restJson1FindLobbyCommand = async(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FindLobbyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1FindLobbyCommandError(output, context);
  }
  const contents: FindLobbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    lobby: undefined,
  };
  const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
  if (data.lobby !== undefined && data.lobby !== null) {
    contents.lobby = deserializeAws_restJson1MatchmakerLobbyJoinInfo(data.lobby, context);
  }
  return Promise.resolve(contents);
}

const deserializeAws_restJson1FindLobbyCommandError = async(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<FindLobbyCommandOutput> => {
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

  export const deserializeAws_restJson1JoinLobbyCommand = async(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<JoinLobbyCommandOutput> => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
      return deserializeAws_restJson1JoinLobbyCommandError(output, context);
    }
    const contents: JoinLobbyCommandOutput = {
      $metadata: deserializeMetadata(output),
      lobby: undefined,
    };
    const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
    if (data.lobby !== undefined && data.lobby !== null) {
      contents.lobby = deserializeAws_restJson1MatchmakerLobbyJoinInfo(data.lobby, context);
    }
    return Promise.resolve(contents);
  }

  const deserializeAws_restJson1JoinLobbyCommandError = async(
    output: __HttpResponse,
    context: __SerdeContext,
  ): Promise<JoinLobbyCommandOutput> => {
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

    export const deserializeAws_restJson1ListLobbiesCommand = async(
      output: __HttpResponse,
      context: __SerdeContext
    ): Promise<ListLobbiesCommandOutput> => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLobbiesCommandError(output, context);
      }
      const contents: ListLobbiesCommandOutput = {
        $metadata: deserializeMetadata(output),
        gameModes: undefined,
        lobbies: undefined,
        regions: undefined,
      };
      const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
      if (data.game_modes !== undefined && data.game_modes !== null) {
        contents.gameModes = deserializeAws_restJson1GameModeInfos(data.game_modes, context);
      }
      if (data.lobbies !== undefined && data.lobbies !== null) {
        contents.lobbies = deserializeAws_restJson1LobbyInfos(data.lobbies, context);
      }
      if (data.regions !== undefined && data.regions !== null) {
        contents.regions = deserializeAws_restJson1RegionInfos(data.regions, context);
      }
      return Promise.resolve(contents);
    }

    const deserializeAws_restJson1ListLobbiesCommandError = async(
      output: __HttpResponse,
      context: __SerdeContext,
    ): Promise<ListLobbiesCommandOutput> => {
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

      export const deserializeAws_restJson1ListRegionsCommand = async(
        output: __HttpResponse,
        context: __SerdeContext
      ): Promise<ListRegionsCommandOutput> => {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
          return deserializeAws_restJson1ListRegionsCommandError(output, context);
        }
        const contents: ListRegionsCommandOutput = {
          $metadata: deserializeMetadata(output),
          regions: undefined,
        };
        const data: { [key: string] : any } = __expectNonNull((__expectObject(await parseBody(output.body, context))), "body");
        if (data.regions !== undefined && data.regions !== null) {
          contents.regions = deserializeAws_restJson1RegionInfos(data.regions, context);
        }
        return Promise.resolve(contents);
      }

      const deserializeAws_restJson1ListRegionsCommandError = async(
        output: __HttpResponse,
        context: __SerdeContext,
      ): Promise<ListRegionsCommandOutput> => {
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

        export const deserializeAws_restJson1LobbyReadyCommand = async(
          output: __HttpResponse,
          context: __SerdeContext
        ): Promise<LobbyReadyCommandOutput> => {
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return deserializeAws_restJson1LobbyReadyCommandError(output, context);
          }
          const contents: LobbyReadyCommandOutput = {
            $metadata: deserializeMetadata(output),
          };
          await collectBody(output.body, context);
          return Promise.resolve(contents);
        }

        const deserializeAws_restJson1LobbyReadyCommandError = async(
          output: __HttpResponse,
          context: __SerdeContext,
        ): Promise<LobbyReadyCommandOutput> => {
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

          export const deserializeAws_restJson1PlayerConnectedCommand = async(
            output: __HttpResponse,
            context: __SerdeContext
          ): Promise<PlayerConnectedCommandOutput> => {
            if (output.statusCode !== 200 && output.statusCode >= 300) {
              return deserializeAws_restJson1PlayerConnectedCommandError(output, context);
            }
            const contents: PlayerConnectedCommandOutput = {
              $metadata: deserializeMetadata(output),
            };
            await collectBody(output.body, context);
            return Promise.resolve(contents);
          }

          const deserializeAws_restJson1PlayerConnectedCommandError = async(
            output: __HttpResponse,
            context: __SerdeContext,
          ): Promise<PlayerConnectedCommandOutput> => {
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

            export const deserializeAws_restJson1PlayerDisconnectedCommand = async(
              output: __HttpResponse,
              context: __SerdeContext
            ): Promise<PlayerDisconnectedCommandOutput> => {
              if (output.statusCode !== 200 && output.statusCode >= 300) {
                return deserializeAws_restJson1PlayerDisconnectedCommandError(output, context);
              }
              const contents: PlayerDisconnectedCommandOutput = {
                $metadata: deserializeMetadata(output),
              };
              await collectBody(output.body, context);
              return Promise.resolve(contents);
            }

            const deserializeAws_restJson1PlayerDisconnectedCommandError = async(
              output: __HttpResponse,
              context: __SerdeContext,
            ): Promise<PlayerDisconnectedCommandOutput> => {
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

              export const deserializeAws_restJson1SetLobbyClosedCommand = async(
                output: __HttpResponse,
                context: __SerdeContext
              ): Promise<SetLobbyClosedCommandOutput> => {
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                  return deserializeAws_restJson1SetLobbyClosedCommandError(output, context);
                }
                const contents: SetLobbyClosedCommandOutput = {
                  $metadata: deserializeMetadata(output),
                };
                await collectBody(output.body, context);
                return Promise.resolve(contents);
              }

              const deserializeAws_restJson1SetLobbyClosedCommandError = async(
                output: __HttpResponse,
                context: __SerdeContext,
              ): Promise<SetLobbyClosedCommandOutput> => {
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

                const serializeAws_restJson1CaptchaConfig = (
                  input: CaptchaConfig,
                  context: __SerdeContext
                ): any => {
                  return CaptchaConfig.visit(input, {
                    hcaptcha: value => ({ "hcaptcha": serializeAws_restJson1CaptchaConfigHcaptcha(value, context) }),
                    turnstile: value => ({ "turnstile": serializeAws_restJson1CaptchaConfigTurnstile(value, context) }),
                    _: (name, value) => ({ name: value } as any)
                  });
                }

                const serializeAws_restJson1CaptchaConfigHcaptcha = (
                  input: CaptchaConfigHcaptcha,
                  context: __SerdeContext
                ): any => {
                  return {
                    ...(input.clientResponse !== undefined && input.clientResponse !== null && { "client_response": input.clientResponse }),
                  };
                }

                const serializeAws_restJson1CaptchaConfigTurnstile = (
                  input: CaptchaConfigTurnstile,
                  context: __SerdeContext
                ): any => {
                  return {
                    ...(input.clientResponse !== undefined && input.clientResponse !== null && { "client_response": input.clientResponse }),
                  };
                }

                const serializeAws_restJson1FindGameModes = (
                  input: (string)[],
                  context: __SerdeContext
                ): any => {
                  return input.filter((e: any) => e != null).map(entry => {
                    if (entry === null) { return null as any; }
                    return entry;
                  });
                }

                const serializeAws_restJson1FindRegions = (
                  input: (string)[],
                  context: __SerdeContext
                ): any => {
                  return input.filter((e: any) => e != null).map(entry => {
                    if (entry === null) { return null as any; }
                    return entry;
                  });
                }

                const deserializeAws_restJson1GameModeInfo = (
                  output: any,
                  context: __SerdeContext
                ): GameModeInfo => {
                  return {
                    gameModeId: __expectString(output.game_mode_id),
                  } as any;
                }

                const deserializeAws_restJson1GameModeInfos = (
                  output: any,
                  context: __SerdeContext
                ): (GameModeInfo)[] => {
                  const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                    if (entry === null) {
                      return null as any;
                    }
                    return deserializeAws_restJson1GameModeInfo(entry, context);
                  });
                  return retVal;
                }

                const deserializeAws_restJson1LobbyInfo = (
                  output: any,
                  context: __SerdeContext
                ): LobbyInfo => {
                  return {
                    gameModeId: __expectString(output.game_mode_id),
                    lobbyId: __expectString(output.lobby_id),
                    maxPlayersDirect: __expectInt32(output.max_players_direct),
                    maxPlayersNormal: __expectInt32(output.max_players_normal),
                    maxPlayersParty: __expectInt32(output.max_players_party),
                    regionId: __expectString(output.region_id),
                    totalPlayerCount: __expectInt32(output.total_player_count),
                  } as any;
                }

                const deserializeAws_restJson1LobbyInfos = (
                  output: any,
                  context: __SerdeContext
                ): (LobbyInfo)[] => {
                  const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                    if (entry === null) {
                      return null as any;
                    }
                    return deserializeAws_restJson1LobbyInfo(entry, context);
                  });
                  return retVal;
                }

                const deserializeAws_restJson1RegionInfo = (
                  output: any,
                  context: __SerdeContext
                ): RegionInfo => {
                  return {
                    datacenterCoord: (output.datacenter_coord !== undefined && output.datacenter_coord !== null) ? deserializeAws_restJson1Coord(output.datacenter_coord, context): undefined,
                    datacenterDistanceFromClient: (output.datacenter_distance_from_client !== undefined && output.datacenter_distance_from_client !== null) ? deserializeAws_restJson1Distance(output.datacenter_distance_from_client, context): undefined,
                    providerDisplayName: __expectString(output.provider_display_name),
                    regionDisplayName: __expectString(output.region_display_name),
                    regionId: __expectString(output.region_id),
                  } as any;
                }

                const deserializeAws_restJson1RegionInfos = (
                  output: any,
                  context: __SerdeContext
                ): (RegionInfo)[] => {
                  const retVal = (output || []).filter((e: any) => e != null).map((entry: any) => {
                    if (entry === null) {
                      return null as any;
                    }
                    return deserializeAws_restJson1RegionInfo(entry, context);
                  });
                  return retVal;
                }

                const deserializeAws_restJson1ErrorMetadata = (
                  output: any,
                  context: __SerdeContext
                ): __DocumentType => {
                  return output;
                }

                const deserializeAws_restJson1Coord = (
                  output: any,
                  context: __SerdeContext
                ): Coord => {
                  return {
                    latitude: __limitedParseDouble(output.latitude),
                    longitude: __limitedParseDouble(output.longitude),
                  } as any;
                }

                const deserializeAws_restJson1Distance = (
                  output: any,
                  context: __SerdeContext
                ): Distance => {
                  return {
                    kilometers: __limitedParseDouble(output.kilometers),
                    miles: __limitedParseDouble(output.miles),
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
