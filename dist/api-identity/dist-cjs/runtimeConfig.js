"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = require("tslib");
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const config_resolver_1 = require("@aws-sdk/config-resolver");
const hash_node_1 = require("@aws-sdk/hash-node");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const node_config_provider_1 = require("@aws-sdk/node-config-provider");
const node_http_handler_1 = require("@aws-sdk/node-http-handler");
const util_base64_node_1 = require("@aws-sdk/util-base64-node");
const util_body_length_node_1 = require("@aws-sdk/util-body-length-node");
const util_user_agent_node_1 = require("@aws-sdk/util-user-agent-node");
const util_utf8_node_1 = require("@aws-sdk/util-utf8-node");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const util_defaults_mode_node_1 = require("@aws-sdk/util-defaults-mode-node");
const smithy_client_2 = require("@aws-sdk/smithy-client");
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : util_base64_node_1.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : util_base64_node_1.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: (_d = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _d !== void 0 ? _d : (0, util_user_agent_node_1.defaultUserAgent)({ clientVersion: package_json_1.default.version }),
        maxAttempts: (_e = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _e !== void 0 ? _e : (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        requestHandler: (_f = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _f !== void 0 ? _f : new node_http_handler_1.NodeHttpHandler(defaultConfigProvider),
        retryMode: (_g = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _g !== void 0 ? _g : (0, node_config_provider_1.loadConfig)({ ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS, default: async () => (await defaultConfigProvider()).retryMode || middleware_retry_1.DEFAULT_RETRY_MODE, }),
        sha256: (_h = config === null || config === void 0 ? void 0 : config.sha256) !== null && _h !== void 0 ? _h : hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: (_j = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _j !== void 0 ? _j : node_http_handler_1.streamCollector,
        useDualstackEndpoint: (_k = config === null || config === void 0 ? void 0 : config.useDualstackEndpoint) !== null && _k !== void 0 ? _k : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (_l = config === null || config === void 0 ? void 0 : config.useFipsEndpoint) !== null && _l !== void 0 ? _l : (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
        utf8Decoder: (_m = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _m !== void 0 ? _m : util_utf8_node_1.fromUtf8,
        utf8Encoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _o !== void 0 ? _o : util_utf8_node_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
