import { PartyServiceClientConfig } from "./PartyServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: PartyServiceClientConfig) => {
    runtime: string;
    sha256: import("@aws-sdk/types").HashConstructor;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | import("@aws-sdk/fetch-http-handler").FetchHttpHandler;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    bodyLengthChecker: import("@aws-sdk/types").BodyLengthCalculator;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    token?: string | undefined;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    logger: import("@aws-sdk/types").Logger;
    useDualstackEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    defaultsMode: import("@aws-sdk/smithy-client").DefaultsMode | import("@aws-sdk/types").Provider<import("@aws-sdk/smithy-client").DefaultsMode>;
    tls?: boolean | undefined;
    retryStrategy?: import("@aws-sdk/types").RetryStrategy | undefined;
    customUserAgent?: string | import("@aws-sdk/types").UserAgent | undefined;
    endpoint?: string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | undefined;
};
