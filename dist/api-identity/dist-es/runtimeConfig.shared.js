import { parseUrl } from "@aws-sdk/url-parser";
export var getRuntimeConfig = function (config) {
    var _a, _b, _c;
    return ({
        apiVersion: "2022-5-28",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        urlParser: (_c = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _c !== void 0 ? _c : parseUrl,
    });
};
