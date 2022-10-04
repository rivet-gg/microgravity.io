import { Logger as __Logger } from "@aws-sdk/types";
import { PartyServiceClientConfig } from "./PartyServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: PartyServiceClientConfig) => {
    apiVersion: string;
    disableHostPrefix: boolean;
    logger: __Logger;
    urlParser: import("@aws-sdk/types").UrlParser;
};
