// smithy-typescript generated code
import {
  FindLobbyCommandInput,
  FindLobbyCommandOutput,
} from "./commands/FindLobbyCommand";
import {
  JoinLobbyCommandInput,
  JoinLobbyCommandOutput,
} from "./commands/JoinLobbyCommand";
import {
  ListLobbiesCommandInput,
  ListLobbiesCommandOutput,
} from "./commands/ListLobbiesCommand";
import {
  ListRegionsCommandInput,
  ListRegionsCommandOutput,
} from "./commands/ListRegionsCommand";
import {
  LobbyReadyCommandInput,
  LobbyReadyCommandOutput,
} from "./commands/LobbyReadyCommand";
import {
  PlayerConnectedCommandInput,
  PlayerConnectedCommandOutput,
} from "./commands/PlayerConnectedCommand";
import {
  PlayerDisconnectedCommandInput,
  PlayerDisconnectedCommandOutput,
} from "./commands/PlayerDisconnectedCommand";
import {
  SetLobbyClosedCommandInput,
  SetLobbyClosedCommandOutput,
} from "./commands/SetLobbyClosedCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  CustomEndpointsInputConfig,
  CustomEndpointsResolvedConfig,
  resolveCustomEndpointsConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  DefaultsMode,
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  BodyLengthCalculator as __BodyLengthCalculator,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Endpoint as __Endpoint,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { middleware as __middleware } from "@rivet-gg/common";

export type ServiceInputTypes =
  | FindLobbyCommandInput
  | JoinLobbyCommandInput
  | ListLobbiesCommandInput
  | ListRegionsCommandInput
  | LobbyReadyCommandInput
  | PlayerConnectedCommandInput
  | PlayerDisconnectedCommandInput
  | SetLobbyClosedCommandInput;

export type ServiceOutputTypes =
  | FindLobbyCommandOutput
  | JoinLobbyCommandOutput
  | ListLobbiesCommandOutput
  | ListRegionsCommandOutput
  | LobbyReadyCommandOutput
  | PlayerConnectedCommandOutput
  | PlayerDisconnectedCommandOutput
  | SetLobbyClosedCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Bearer token for auth.
   */
  token?: string;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
type MatchmakerServiceClientConfigType = PartialBy<Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & CustomEndpointsInputConfig
  & RetryInputConfig
  & HostHeaderInputConfig
  & UserAgentInputConfig
, "endpoint">
/**
 * The configuration interface of MatchmakerServiceClient class constructor that set the region, credentials and other options.
 */
export interface MatchmakerServiceClientConfig extends MatchmakerServiceClientConfigType {}

type MatchmakerServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & CustomEndpointsResolvedConfig
  & RetryResolvedConfig
  & HostHeaderResolvedConfig
  & UserAgentResolvedConfig
/**
 * The resolved configuration interface of MatchmakerServiceClient class. This is resolved and normalized from the {@link MatchmakerServiceClientConfig | constructor configuration interface}.
 */
export interface MatchmakerServiceClientResolvedConfig extends MatchmakerServiceClientResolvedConfigType {}

export class MatchmakerServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MatchmakerServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of MatchmakerServiceClient class. This is resolved and normalized from the {@link MatchmakerServiceClientConfig | constructor configuration interface}.
   */
  readonly config: MatchmakerServiceClientResolvedConfig;

  constructor(configuration: MatchmakerServiceClientConfig) {
    /**
     * Endpoint and token parser
     */
    function rivetConfig<T>(input: T & ClientDefaults): T & {
    endpoint: string | __Endpoint | __Provider<__Endpoint>, token: string
    } {
      let endpoint = configuration.endpoint ?? null;
      if (endpoint === null) {
        try {
          endpoint = process.env.RIVET_MATCHMAKER_API_URL ?? null;
        }
        catch {
        }
        if (endpoint === null) {
          endpoint = "https://matchmaker.api.rivet.gg/v1";
        }
      }
      let token = input.token ?? null;
      if (token === null) {
        try {
          token = process.env.RIVET_MATCHMAKER_TOKEN ?? process.env.RIVET_TOKEN ?? null;
        }
        catch {
        }
      }
      return Object.assign(Object.assign({}, input), {
        // @ts-ignore
        endpoint,
        token,
      });
    }

    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = rivetConfig(_config_0);
    /**
     * Default request handler value
     */
    if(!configuration.hasOwnProperty("requestHandler")) {
      // @ts-ignore
      _config_1.requestHandler = __middleware.requestHandlerMiddleware(_config_1.token);
    }

    let _config_2 = resolveCustomEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    super(_config_5);
    this.config = _config_5;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
