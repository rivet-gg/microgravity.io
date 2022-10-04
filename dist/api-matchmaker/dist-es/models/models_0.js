import { __assign, __extends } from "tslib";
import { MatchmakerServiceServiceException as __BaseException } from "./MatchmakerServiceServiceException";
import { SENSITIVE_STRING, } from "@aws-sdk/smithy-client";
export var CaptchaConfigHcaptcha;
(function (CaptchaConfigHcaptcha) {
    CaptchaConfigHcaptcha.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CaptchaConfigHcaptcha || (CaptchaConfigHcaptcha = {}));
export var CaptchaConfig;
(function (CaptchaConfig) {
    CaptchaConfig.visit = function (value, visitor) {
        if (value.hcaptcha !== undefined)
            return visitor.hcaptcha(value.hcaptcha);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    CaptchaConfig.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.hcaptcha !== undefined)
            return { hcaptcha: CaptchaConfigHcaptcha.filterSensitiveLog(obj.hcaptcha)
            };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(CaptchaConfig || (CaptchaConfig = {}));
export var FindLobbyInput;
(function (FindLobbyInput) {
    FindLobbyInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.captcha && { captcha: CaptchaConfig.filterSensitiveLog(obj.captcha)
    }))); };
})(FindLobbyInput || (FindLobbyInput = {}));
export var MatchmakerLobbyJoinInfoPlayer;
(function (MatchmakerLobbyJoinInfoPlayer) {
    MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.token && { token: SENSITIVE_STRING
    }))); };
})(MatchmakerLobbyJoinInfoPlayer || (MatchmakerLobbyJoinInfoPlayer = {}));
export var MatchmakerLobbyJoinInfoPortRange;
(function (MatchmakerLobbyJoinInfoPortRange) {
    MatchmakerLobbyJoinInfoPortRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakerLobbyJoinInfoPortRange || (MatchmakerLobbyJoinInfoPortRange = {}));
export var MatchmakerLobbyJoinInfoPort;
(function (MatchmakerLobbyJoinInfoPort) {
    MatchmakerLobbyJoinInfoPort.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakerLobbyJoinInfoPort || (MatchmakerLobbyJoinInfoPort = {}));
export var MatchmakerLobbyJoinInfoRegion;
(function (MatchmakerLobbyJoinInfoRegion) {
    MatchmakerLobbyJoinInfoRegion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakerLobbyJoinInfoRegion || (MatchmakerLobbyJoinInfoRegion = {}));
export var MatchmakerLobbyJoinInfo;
(function (MatchmakerLobbyJoinInfo) {
    MatchmakerLobbyJoinInfo.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.player && { player: MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog(obj.player)
    }))); };
})(MatchmakerLobbyJoinInfo || (MatchmakerLobbyJoinInfo = {}));
export var FindLobbyOutput;
(function (FindLobbyOutput) {
    FindLobbyOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.lobby && { lobby: MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
    }))); };
})(FindLobbyOutput || (FindLobbyOutput = {}));
export var JoinLobbyInput;
(function (JoinLobbyInput) {
    JoinLobbyInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.captcha && { captcha: CaptchaConfig.filterSensitiveLog(obj.captcha)
    }))); };
})(JoinLobbyInput || (JoinLobbyInput = {}));
export var JoinLobbyOutput;
(function (JoinLobbyOutput) {
    JoinLobbyOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.lobby && { lobby: MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
    }))); };
})(JoinLobbyOutput || (JoinLobbyOutput = {}));
export var ListLobbiesInput;
(function (ListLobbiesInput) {
    ListLobbiesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLobbiesInput || (ListLobbiesInput = {}));
export var GameModeInfo;
(function (GameModeInfo) {
    GameModeInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameModeInfo || (GameModeInfo = {}));
export var LobbyInfo;
(function (LobbyInfo) {
    LobbyInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LobbyInfo || (LobbyInfo = {}));
export var Coord;
(function (Coord) {
    Coord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Coord || (Coord = {}));
export var Distance;
(function (Distance) {
    Distance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Distance || (Distance = {}));
export var RegionInfo;
(function (RegionInfo) {
    RegionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionInfo || (RegionInfo = {}));
export var ListLobbiesOutput;
(function (ListLobbiesOutput) {
    ListLobbiesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLobbiesOutput || (ListLobbiesOutput = {}));
export var ListRegionsInput;
(function (ListRegionsInput) {
    ListRegionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegionsInput || (ListRegionsInput = {}));
export var ListRegionsOutput;
(function (ListRegionsOutput) {
    ListRegionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegionsOutput || (ListRegionsOutput = {}));
export var LobbyReadyInput;
(function (LobbyReadyInput) {
    LobbyReadyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LobbyReadyInput || (LobbyReadyInput = {}));
export var LobbyReadyOutput;
(function (LobbyReadyOutput) {
    LobbyReadyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LobbyReadyOutput || (LobbyReadyOutput = {}));
export var SetLobbyClosedInput;
(function (SetLobbyClosedInput) {
    SetLobbyClosedInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetLobbyClosedInput || (SetLobbyClosedInput = {}));
export var SetLobbyClosedOutput;
(function (SetLobbyClosedOutput) {
    SetLobbyClosedOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetLobbyClosedOutput || (SetLobbyClosedOutput = {}));
export var PlayerConnectedInput;
(function (PlayerConnectedInput) {
    PlayerConnectedInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.playerToken && { playerToken: SENSITIVE_STRING
    }))); };
})(PlayerConnectedInput || (PlayerConnectedInput = {}));
export var PlayerConnectedOutput;
(function (PlayerConnectedOutput) {
    PlayerConnectedOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlayerConnectedOutput || (PlayerConnectedOutput = {}));
export var PlayerDisconnectedInput;
(function (PlayerDisconnectedInput) {
    PlayerDisconnectedInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.playerToken && { playerToken: SENSITIVE_STRING
    }))); };
})(PlayerDisconnectedInput || (PlayerDisconnectedInput = {}));
export var PlayerDisconnectedOutput;
(function (PlayerDisconnectedOutput) {
    PlayerDisconnectedOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlayerDisconnectedOutput || (PlayerDisconnectedOutput = {}));
var BadRequestError = (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(opts) {
        var _this = _super.call(this, __assign({ name: "BadRequestError", $fault: "client" }, opts)) || this;
        _this.name = "BadRequestError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, BadRequestError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return BadRequestError;
}(__BaseException));
export { BadRequestError };
var ForbiddenError = (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(opts) {
        var _this = _super.call(this, __assign({ name: "ForbiddenError", $fault: "client" }, opts)) || this;
        _this.name = "ForbiddenError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ForbiddenError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return ForbiddenError;
}(__BaseException));
export { ForbiddenError };
var InternalError = (function (_super) {
    __extends(InternalError, _super);
    function InternalError(opts) {
        var _this = _super.call(this, __assign({ name: "InternalError", $fault: "server" }, opts)) || this;
        _this.name = "InternalError";
        _this.$fault = "server";
        _this.$retryable = {};
        Object.setPrototypeOf(_this, InternalError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return InternalError;
}(__BaseException));
export { InternalError };
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(opts) {
        var _this = _super.call(this, __assign({ name: "NotFoundError", $fault: "client" }, opts)) || this;
        _this.name = "NotFoundError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, NotFoundError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return NotFoundError;
}(__BaseException));
export { NotFoundError };
var RateLimitError = (function (_super) {
    __extends(RateLimitError, _super);
    function RateLimitError(opts) {
        var _this = _super.call(this, __assign({ name: "RateLimitError", $fault: "client" }, opts)) || this;
        _this.name = "RateLimitError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, RateLimitError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return RateLimitError;
}(__BaseException));
export { RateLimitError };
var UnauthorizedError = (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(opts) {
        var _this = _super.call(this, __assign({ name: "UnauthorizedError", $fault: "client" }, opts)) || this;
        _this.name = "UnauthorizedError";
        _this.$fault = "client";
        _this.$retryable = {};
        Object.setPrototypeOf(_this, UnauthorizedError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return UnauthorizedError;
}(__BaseException));
export { UnauthorizedError };
