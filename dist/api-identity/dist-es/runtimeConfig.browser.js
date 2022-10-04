import { __assign, __awaiter, __generator } from "tslib";
import packageInfo from "../package.json";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { DEFAULT_USE_DUALSTACK_ENDPOINT, DEFAULT_USE_FIPS_ENDPOINT, } from "@aws-sdk/config-resolver";
import { FetchHttpHandler as RequestHandler, streamCollector, } from "@aws-sdk/fetch-http-handler";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE, } from "@aws-sdk/middleware-retry";
import { fromBase64, toBase64, } from "@aws-sdk/util-base64-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { fromUtf8, toUtf8, } from "@aws-sdk/util-utf8-browser";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@aws-sdk/smithy-client";
import { resolveDefaultsModeConfig } from "@aws-sdk/util-defaults-mode-browser";
export var getRuntimeConfig = function (config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var defaultsMode = resolveDefaultsModeConfig(config);
    var defaultConfigProvider = function () { return defaultsMode().then(loadConfigsForDefaultMode); };
    var clientSharedValues = getSharedRuntimeConfig(config);
    return __assign(__assign(__assign({}, clientSharedValues), config), { runtime: "browser", defaultsMode: defaultsMode, base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : fromBase64, base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : toBase64, bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : calculateBodyLength, defaultUserAgentProvider: (_d = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _d !== void 0 ? _d : defaultUserAgent({ clientVersion: packageInfo.version }), maxAttempts: (_e = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _e !== void 0 ? _e : DEFAULT_MAX_ATTEMPTS, requestHandler: (_f = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _f !== void 0 ? _f : new RequestHandler(defaultConfigProvider), retryMode: (_g = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _g !== void 0 ? _g : (function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, defaultConfigProvider()];
                case 1: return [2, (_a.sent()).retryMode || DEFAULT_RETRY_MODE];
            }
        }); }); }), sha256: (_h = config === null || config === void 0 ? void 0 : config.sha256) !== null && _h !== void 0 ? _h : Sha256, streamCollector: (_j = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _j !== void 0 ? _j : streamCollector, useDualstackEndpoint: (_k = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _k !== void 0 ? _k : (function () { return Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT); }), useFipsEndpoint: (_l = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _l !== void 0 ? _l : (function () { return Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT); }), utf8Decoder: (_m = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _m !== void 0 ? _m : fromUtf8, utf8Encoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _o !== void 0 ? _o : toUtf8 });
};
