// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MatchmakerServiceClientConfig } from "./MatchmakerServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MatchmakerServiceClientConfig) => ({
  apiVersion: "2022-6-2",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? {} as __Logger,
  urlParser: config?.urlParser ?? parseUrl,
});
