import { __assign, __awaiter, __generator } from "tslib";
import packageInfo from "../package.json";
import { NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, } from "@aws-sdk/config-resolver";
import { Hash } from "@aws-sdk/hash-node";
import { DEFAULT_RETRY_MODE, NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS, } from "@aws-sdk/middleware-retry";
import { loadConfig as loadNodeConfig } from "@aws-sdk/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector, } from "@aws-sdk/node-http-handler";
import { fromBase64, toBase64, } from "@aws-sdk/util-base64-node";
import { calculateBodyLength } from "@aws-sdk/util-body-length-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { fromUtf8, toUtf8, } from "@aws-sdk/util-utf8-node";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@aws-sdk/smithy-client";
export var getRuntimeConfig = function (config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    emitWarningIfUnsupportedVersion(process.version);
    var defaultsMode = resolveDefaultsModeConfig(config);
    var defaultConfigProvider = function () { return defaultsMode().then(loadConfigsForDefaultMode); };
    var clientSharedValues = getSharedRuntimeConfig(config);
    return __assign(__assign(__assign({}, clientSharedValues), config), { runtime: "node", defaultsMode: defaultsMode, base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : fromBase64, base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : toBase64, bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : calculateBodyLength, defaultUserAgentProvider: (_d = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _d !== void 0 ? _d : defaultUserAgent({ clientVersion: packageInfo.version }), maxAttempts: (_e = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _e !== void 0 ? _e : loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS), requestHandler: (_f = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _f !== void 0 ? _f : new RequestHandler(defaultConfigProvider), retryMode: (_g = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _g !== void 0 ? _g : loadNodeConfig(__assign(__assign({}, NODE_RETRY_MODE_CONFIG_OPTIONS), { default: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, defaultConfigProvider()];
                    case 1: return [2, (_a.sent()).retryMode || DEFAULT_RETRY_MODE];
                }
            }); }); } })), sha256: (_h = config === null || config === void 0 ? void 0 : config.sha256) !== null && _h !== void 0 ? _h : Hash.bind(null, "sha256"), streamCollector: (_j = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _j !== void 0 ? _j : streamCollector, useDualstackEndpoint: (_k = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _k !== void 0 ? _k : loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS), useFipsEndpoint: (_l = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _l !== void 0 ? _l : loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS), utf8Decoder: (_m = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _m !== void 0 ? _m : fromUtf8, utf8Encoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _o !== void 0 ? _o : toUtf8 });
};
