import { NodeHttpHandler as RequestHandler } from "@aws-sdk/node-http-handler";
import { PartyServiceClientConfig } from "./PartyServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: PartyServiceClientConfig) => {
    runtime: string;
    defaultsMode: import("@aws-sdk/types").Provider<import("@aws-sdk/smithy-client").ResolvedDefaultsMode>;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    bodyLengthChecker: import("@aws-sdk/types").BodyLengthCalculator;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | RequestHandler;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    sha256: import("@aws-sdk/types").HashConstructor;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    useDualstackEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    useFipsEndpoint: boolean | import("@aws-sdk/types").Provider<boolean>;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    disableHostPrefix: boolean;
    token?: string | undefined;
    logger: import("@aws-sdk/types").Logger;
    tls?: boolean | undefined;
    retryStrategy?: import("@aws-sdk/types").RetryStrategy | undefined;
    customUserAgent?: string | import("@aws-sdk/types").UserAgent | undefined;
    endpoint?: string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | undefined;
};
