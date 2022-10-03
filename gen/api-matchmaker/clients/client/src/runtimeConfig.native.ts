// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";
import { MatchmakerServiceClientConfig } from "./MatchmakerServiceClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MatchmakerServiceClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
