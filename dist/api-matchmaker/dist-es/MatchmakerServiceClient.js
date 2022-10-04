import { __extends } from "tslib";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveCustomEndpointsConfig, } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig, } from "@aws-sdk/middleware-retry";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { Client as __Client, } from "@aws-sdk/smithy-client";
import { middleware as __middleware } from "@rivet-gg/common";
var MatchmakerServiceClient = (function (_super) {
    __extends(MatchmakerServiceClient, _super);
    function MatchmakerServiceClient(configuration) {
        var _this = this;
        if (!configuration.hasOwnProperty("requestHandler")) {
            if (typeof window !== "undefined")
                configuration.requestHandler = __middleware.browser.requestHandlerMiddleware(configuration.token);
            else
                configuration.requestHandler = __middleware.nodejs.requestHandlerMiddleware(configuration.token);
        }
        function rivetConfig(input) {
            var _a, _b, _c;
            var endpoint = (_a = configuration.endpoint) !== null && _a !== void 0 ? _a : null;
            if (endpoint === null) {
                try {
                    endpoint = (_b = process.env.RIVET_MATCHMAKER_API_URL) !== null && _b !== void 0 ? _b : null;
                }
                catch (_e) {
                }
                if (endpoint === null) {
                    endpoint = "https://matchmaker.api.rivet.gg/v1";
                }
            }
            return Object.assign(Object.assign({}, input), {
                endpoint: endpoint,
                token: (_c = input.token) !== null && _c !== void 0 ? _c : null,
            });
        }
        var _config_0 = __getRuntimeConfig(configuration);
        var _config_1 = rivetConfig(_config_0);
        var _config_2 = resolveCustomEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveUserAgentConfig(_config_4);
        _this = _super.call(this, _config_5) || this;
        _this.config = _config_5;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    MatchmakerServiceClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return MatchmakerServiceClient;
}(__Client));
export { MatchmakerServiceClient };
