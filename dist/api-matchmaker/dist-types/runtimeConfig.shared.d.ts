import { Logger as __Logger } from "@aws-sdk/types";
import { MatchmakerServiceClientConfig } from "./MatchmakerServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: MatchmakerServiceClientConfig) => {
    apiVersion: string;
    disableHostPrefix: boolean;
    logger: __Logger;
    urlParser: import("@aws-sdk/types").UrlParser;
};
