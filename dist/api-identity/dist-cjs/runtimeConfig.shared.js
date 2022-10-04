"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const url_parser_1 = require("@aws-sdk/url-parser");
const getRuntimeConfig = (config) => {
    var _a, _b, _c;
    return ({
        apiVersion: "2022-5-28",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        urlParser: (_c = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _c !== void 0 ? _c : url_parser_1.parseUrl,
    });
};
exports.getRuntimeConfig = getRuntimeConfig;
