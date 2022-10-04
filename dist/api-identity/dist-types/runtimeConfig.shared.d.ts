import { Logger as __Logger } from "@aws-sdk/types";
import { IdentityServiceClientConfig } from "./IdentityServiceClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: IdentityServiceClientConfig) => {
    apiVersion: string;
    disableHostPrefix: boolean;
    logger: __Logger;
    urlParser: import("@aws-sdk/types").UrlParser;
};
