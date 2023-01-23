// smithy-typescript generated code
import {
  CancelGameLinkCommandInput,
  CancelGameLinkCommandOutput,
} from "./commands/CancelGameLinkCommand";
import {
  CompleteGameLinkCommandInput,
  CompleteGameLinkCommandOutput,
} from "./commands/CompleteGameLinkCommand";
import {
  CompleteIdentityAvatarUploadCommandInput,
  CompleteIdentityAvatarUploadCommandOutput,
} from "./commands/CompleteIdentityAvatarUploadCommand";
import {
  FollowIdentityCommandInput,
  FollowIdentityCommandOutput,
} from "./commands/FollowIdentityCommand";
import {
  GetGameLinkCommandInput,
  GetGameLinkCommandOutput,
} from "./commands/GetGameLinkCommand";
import {
  GetIdentityHandlesCommandInput,
  GetIdentityHandlesCommandOutput,
} from "./commands/GetIdentityHandlesCommand";
import {
  GetIdentityProfileCommandInput,
  GetIdentityProfileCommandOutput,
} from "./commands/GetIdentityProfileCommand";
import {
  GetIdentitySelfProfileCommandInput,
  GetIdentitySelfProfileCommandOutput,
} from "./commands/GetIdentitySelfProfileCommand";
import {
  GetIdentitySummariesCommandInput,
  GetIdentitySummariesCommandOutput,
} from "./commands/GetIdentitySummariesCommand";
import {
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "./commands/ListActivitiesCommand";
import {
  ListFollowersCommandInput,
  ListFollowersCommandOutput,
} from "./commands/ListFollowersCommand";
import {
  ListFollowingCommandInput,
  ListFollowingCommandOutput,
} from "./commands/ListFollowingCommand";
import {
  ListFriendsCommandInput,
  ListFriendsCommandOutput,
} from "./commands/ListFriendsCommand";
import {
  ListMutualFriendsCommandInput,
  ListMutualFriendsCommandOutput,
} from "./commands/ListMutualFriendsCommand";
import {
  ListRecentFollowersCommandInput,
  ListRecentFollowersCommandOutput,
} from "./commands/ListRecentFollowersCommand";
import {
  MarkDeletionCommandInput,
  MarkDeletionCommandOutput,
} from "./commands/MarkDeletionCommand";
import {
  PrepareGameLinkCommandInput,
  PrepareGameLinkCommandOutput,
} from "./commands/PrepareGameLinkCommand";
import {
  PrepareIdentityAvatarUploadCommandInput,
  PrepareIdentityAvatarUploadCommandOutput,
} from "./commands/PrepareIdentityAvatarUploadCommand";
import {
  RecentFollowerIgnoreCommandInput,
  RecentFollowerIgnoreCommandOutput,
} from "./commands/RecentFollowerIgnoreCommand";
import {
  RemoveIdentityGameActivityCommandInput,
  RemoveIdentityGameActivityCommandOutput,
} from "./commands/RemoveIdentityGameActivityCommand";
import {
  ReportIdentityCommandInput,
  ReportIdentityCommandOutput,
} from "./commands/ReportIdentityCommand";
import {
  SearchIdentitiesCommandInput,
  SearchIdentitiesCommandOutput,
} from "./commands/SearchIdentitiesCommand";
import {
  SetIdentityGameActivityCommandInput,
  SetIdentityGameActivityCommandOutput,
} from "./commands/SetIdentityGameActivityCommand";
import {
  SetupIdentityCommandInput,
  SetupIdentityCommandOutput,
} from "./commands/SetupIdentityCommand";
import {
  SignupForBetaCommandInput,
  SignupForBetaCommandOutput,
} from "./commands/SignupForBetaCommand";
import {
  UnfollowIdentityCommandInput,
  UnfollowIdentityCommandOutput,
} from "./commands/UnfollowIdentityCommand";
import {
  UnmarkDeletionCommandInput,
  UnmarkDeletionCommandOutput,
} from "./commands/UnmarkDeletionCommand";
import {
  UpdateIdentityProfileCommandInput,
  UpdateIdentityProfileCommandOutput,
} from "./commands/UpdateIdentityProfileCommand";
import {
  UpdateIdentityStatusCommandInput,
  UpdateIdentityStatusCommandOutput,
} from "./commands/UpdateIdentityStatusCommand";
import {
  ValidateIdentityProfileCommandInput,
  ValidateIdentityProfileCommandOutput,
} from "./commands/ValidateIdentityProfileCommand";
import {
  WatchEventsCommandInput,
  WatchEventsCommandOutput,
} from "./commands/WatchEventsCommand";
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
  | CancelGameLinkCommandInput
  | CompleteGameLinkCommandInput
  | CompleteIdentityAvatarUploadCommandInput
  | FollowIdentityCommandInput
  | GetGameLinkCommandInput
  | GetIdentityHandlesCommandInput
  | GetIdentityProfileCommandInput
  | GetIdentitySelfProfileCommandInput
  | GetIdentitySummariesCommandInput
  | ListActivitiesCommandInput
  | ListFollowersCommandInput
  | ListFollowingCommandInput
  | ListFriendsCommandInput
  | ListMutualFriendsCommandInput
  | ListRecentFollowersCommandInput
  | MarkDeletionCommandInput
  | PrepareGameLinkCommandInput
  | PrepareIdentityAvatarUploadCommandInput
  | RecentFollowerIgnoreCommandInput
  | RemoveIdentityGameActivityCommandInput
  | ReportIdentityCommandInput
  | SearchIdentitiesCommandInput
  | SetIdentityGameActivityCommandInput
  | SetupIdentityCommandInput
  | SignupForBetaCommandInput
  | UnfollowIdentityCommandInput
  | UnmarkDeletionCommandInput
  | UpdateIdentityProfileCommandInput
  | UpdateIdentityStatusCommandInput
  | ValidateIdentityProfileCommandInput
  | WatchEventsCommandInput;

export type ServiceOutputTypes =
  | CancelGameLinkCommandOutput
  | CompleteGameLinkCommandOutput
  | CompleteIdentityAvatarUploadCommandOutput
  | FollowIdentityCommandOutput
  | GetGameLinkCommandOutput
  | GetIdentityHandlesCommandOutput
  | GetIdentityProfileCommandOutput
  | GetIdentitySelfProfileCommandOutput
  | GetIdentitySummariesCommandOutput
  | ListActivitiesCommandOutput
  | ListFollowersCommandOutput
  | ListFollowingCommandOutput
  | ListFriendsCommandOutput
  | ListMutualFriendsCommandOutput
  | ListRecentFollowersCommandOutput
  | MarkDeletionCommandOutput
  | PrepareGameLinkCommandOutput
  | PrepareIdentityAvatarUploadCommandOutput
  | RecentFollowerIgnoreCommandOutput
  | RemoveIdentityGameActivityCommandOutput
  | ReportIdentityCommandOutput
  | SearchIdentitiesCommandOutput
  | SetIdentityGameActivityCommandOutput
  | SetupIdentityCommandOutput
  | SignupForBetaCommandOutput
  | UnfollowIdentityCommandOutput
  | UnmarkDeletionCommandOutput
  | UpdateIdentityProfileCommandOutput
  | UpdateIdentityStatusCommandOutput
  | ValidateIdentityProfileCommandOutput
  | WatchEventsCommandOutput;

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
type IdentityServiceClientConfigType = PartialBy<Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & CustomEndpointsInputConfig
  & RetryInputConfig
  & HostHeaderInputConfig
  & UserAgentInputConfig
, "endpoint">
/**
 * The configuration interface of IdentityServiceClient class constructor that set the region, credentials and other options.
 */
export interface IdentityServiceClientConfig extends IdentityServiceClientConfigType {}

type IdentityServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & CustomEndpointsResolvedConfig
  & RetryResolvedConfig
  & HostHeaderResolvedConfig
  & UserAgentResolvedConfig
/**
 * The resolved configuration interface of IdentityServiceClient class. This is resolved and normalized from the {@link IdentityServiceClientConfig | constructor configuration interface}.
 */
export interface IdentityServiceClientResolvedConfig extends IdentityServiceClientResolvedConfigType {}

export class IdentityServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IdentityServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of IdentityServiceClient class. This is resolved and normalized from the {@link IdentityServiceClientConfig | constructor configuration interface}.
   */
  readonly config: IdentityServiceClientResolvedConfig;

  constructor(configuration: IdentityServiceClientConfig) {
    /**
     * Endpoint and token parser
     */
    function rivetConfig<T>(input: T & ClientDefaults): T & {
    endpoint: string | __Endpoint | __Provider<__Endpoint>, token: string
    } {
      let endpoint = configuration.endpoint ?? null;
      if (endpoint === null) {
        try {
          endpoint = process.env.RIVET_IDENTITY_API_URL ?? null;
        }
        catch {
        }
        if (endpoint === null) {
          endpoint = "https://identity.api.rivet.gg/v1";
        }
      }
      let token = input.token ?? null;
      if (token === null) {
        try {
          token = process.env.RIVET_IDENTITY_TOKEN ?? process.env.RIVET_TOKEN ?? null;
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
