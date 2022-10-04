"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = exports.RateLimitError = exports.NotFoundError = exports.InternalError = exports.ForbiddenError = exports.BadRequestError = exports.PlayerDisconnectedOutput = exports.PlayerDisconnectedInput = exports.PlayerConnectedOutput = exports.PlayerConnectedInput = exports.SetLobbyClosedOutput = exports.SetLobbyClosedInput = exports.LobbyReadyOutput = exports.LobbyReadyInput = exports.ListRegionsOutput = exports.ListRegionsInput = exports.ListLobbiesOutput = exports.RegionInfo = exports.Distance = exports.Coord = exports.LobbyInfo = exports.GameModeInfo = exports.ListLobbiesInput = exports.JoinLobbyOutput = exports.JoinLobbyInput = exports.FindLobbyOutput = exports.MatchmakerLobbyJoinInfo = exports.MatchmakerLobbyJoinInfoRegion = exports.MatchmakerLobbyJoinInfoPort = exports.MatchmakerLobbyJoinInfoPortRange = exports.MatchmakerLobbyJoinInfoPlayer = exports.FindLobbyInput = exports.CaptchaConfig = exports.CaptchaConfigHcaptcha = void 0;
const MatchmakerServiceServiceException_1 = require("./MatchmakerServiceServiceException");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CaptchaConfigHcaptcha;
(function (CaptchaConfigHcaptcha) {
    CaptchaConfigHcaptcha.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptchaConfigHcaptcha = exports.CaptchaConfigHcaptcha || (exports.CaptchaConfigHcaptcha = {}));
var CaptchaConfig;
(function (CaptchaConfig) {
    CaptchaConfig.visit = (value, visitor) => {
        if (value.hcaptcha !== undefined)
            return visitor.hcaptcha(value.hcaptcha);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    CaptchaConfig.filterSensitiveLog = (obj) => {
        if (obj.hcaptcha !== undefined)
            return { hcaptcha: CaptchaConfigHcaptcha.filterSensitiveLog(obj.hcaptcha)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(CaptchaConfig = exports.CaptchaConfig || (exports.CaptchaConfig = {}));
var FindLobbyInput;
(function (FindLobbyInput) {
    FindLobbyInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.captcha && { captcha: CaptchaConfig.filterSensitiveLog(obj.captcha)
        }),
    });
})(FindLobbyInput = exports.FindLobbyInput || (exports.FindLobbyInput = {}));
var MatchmakerLobbyJoinInfoPlayer;
(function (MatchmakerLobbyJoinInfoPlayer) {
    MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.token && { token: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(MatchmakerLobbyJoinInfoPlayer = exports.MatchmakerLobbyJoinInfoPlayer || (exports.MatchmakerLobbyJoinInfoPlayer = {}));
var MatchmakerLobbyJoinInfoPortRange;
(function (MatchmakerLobbyJoinInfoPortRange) {
    MatchmakerLobbyJoinInfoPortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchmakerLobbyJoinInfoPortRange = exports.MatchmakerLobbyJoinInfoPortRange || (exports.MatchmakerLobbyJoinInfoPortRange = {}));
var MatchmakerLobbyJoinInfoPort;
(function (MatchmakerLobbyJoinInfoPort) {
    MatchmakerLobbyJoinInfoPort.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchmakerLobbyJoinInfoPort = exports.MatchmakerLobbyJoinInfoPort || (exports.MatchmakerLobbyJoinInfoPort = {}));
var MatchmakerLobbyJoinInfoRegion;
(function (MatchmakerLobbyJoinInfoRegion) {
    MatchmakerLobbyJoinInfoRegion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchmakerLobbyJoinInfoRegion = exports.MatchmakerLobbyJoinInfoRegion || (exports.MatchmakerLobbyJoinInfoRegion = {}));
var MatchmakerLobbyJoinInfo;
(function (MatchmakerLobbyJoinInfo) {
    MatchmakerLobbyJoinInfo.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.player && { player: MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog(obj.player)
        }),
    });
})(MatchmakerLobbyJoinInfo = exports.MatchmakerLobbyJoinInfo || (exports.MatchmakerLobbyJoinInfo = {}));
var FindLobbyOutput;
(function (FindLobbyOutput) {
    FindLobbyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.lobby && { lobby: MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
        }),
    });
})(FindLobbyOutput = exports.FindLobbyOutput || (exports.FindLobbyOutput = {}));
var JoinLobbyInput;
(function (JoinLobbyInput) {
    JoinLobbyInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.captcha && { captcha: CaptchaConfig.filterSensitiveLog(obj.captcha)
        }),
    });
})(JoinLobbyInput = exports.JoinLobbyInput || (exports.JoinLobbyInput = {}));
var JoinLobbyOutput;
(function (JoinLobbyOutput) {
    JoinLobbyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.lobby && { lobby: MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
        }),
    });
})(JoinLobbyOutput = exports.JoinLobbyOutput || (exports.JoinLobbyOutput = {}));
var ListLobbiesInput;
(function (ListLobbiesInput) {
    ListLobbiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLobbiesInput = exports.ListLobbiesInput || (exports.ListLobbiesInput = {}));
var GameModeInfo;
(function (GameModeInfo) {
    GameModeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameModeInfo = exports.GameModeInfo || (exports.GameModeInfo = {}));
var LobbyInfo;
(function (LobbyInfo) {
    LobbyInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LobbyInfo = exports.LobbyInfo || (exports.LobbyInfo = {}));
var Coord;
(function (Coord) {
    Coord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Coord = exports.Coord || (exports.Coord = {}));
var Distance;
(function (Distance) {
    Distance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Distance = exports.Distance || (exports.Distance = {}));
var RegionInfo;
(function (RegionInfo) {
    RegionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionInfo = exports.RegionInfo || (exports.RegionInfo = {}));
var ListLobbiesOutput;
(function (ListLobbiesOutput) {
    ListLobbiesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLobbiesOutput = exports.ListLobbiesOutput || (exports.ListLobbiesOutput = {}));
var ListRegionsInput;
(function (ListRegionsInput) {
    ListRegionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegionsInput = exports.ListRegionsInput || (exports.ListRegionsInput = {}));
var ListRegionsOutput;
(function (ListRegionsOutput) {
    ListRegionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegionsOutput = exports.ListRegionsOutput || (exports.ListRegionsOutput = {}));
var LobbyReadyInput;
(function (LobbyReadyInput) {
    LobbyReadyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LobbyReadyInput = exports.LobbyReadyInput || (exports.LobbyReadyInput = {}));
var LobbyReadyOutput;
(function (LobbyReadyOutput) {
    LobbyReadyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LobbyReadyOutput = exports.LobbyReadyOutput || (exports.LobbyReadyOutput = {}));
var SetLobbyClosedInput;
(function (SetLobbyClosedInput) {
    SetLobbyClosedInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetLobbyClosedInput = exports.SetLobbyClosedInput || (exports.SetLobbyClosedInput = {}));
var SetLobbyClosedOutput;
(function (SetLobbyClosedOutput) {
    SetLobbyClosedOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetLobbyClosedOutput = exports.SetLobbyClosedOutput || (exports.SetLobbyClosedOutput = {}));
var PlayerConnectedInput;
(function (PlayerConnectedInput) {
    PlayerConnectedInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.playerToken && { playerToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(PlayerConnectedInput = exports.PlayerConnectedInput || (exports.PlayerConnectedInput = {}));
var PlayerConnectedOutput;
(function (PlayerConnectedOutput) {
    PlayerConnectedOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlayerConnectedOutput = exports.PlayerConnectedOutput || (exports.PlayerConnectedOutput = {}));
var PlayerDisconnectedInput;
(function (PlayerDisconnectedInput) {
    PlayerDisconnectedInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.playerToken && { playerToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(PlayerDisconnectedInput = exports.PlayerDisconnectedInput || (exports.PlayerDisconnectedInput = {}));
var PlayerDisconnectedOutput;
(function (PlayerDisconnectedOutput) {
    PlayerDisconnectedOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlayerDisconnectedOutput = exports.PlayerDisconnectedOutput || (exports.PlayerDisconnectedOutput = {}));
class BadRequestError extends MatchmakerServiceServiceException_1.MatchmakerServiceServiceException {
    constructor(opts) {
        super({
            name: "BadRequestError",
            $fault: "client",
            ...opts
        });
        this.name = "BadRequestError";
        this.$fault = "client";
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.code = opts.code;
        this.metadata = opts.metadata;
    }
}
exports.BadRequestError = BadRequestError;
class ForbiddenError extends MatchmakerServiceServiceException_1.MatchmakerServiceServiceException {
    constructor(opts) {
        super({
            name: "ForbiddenError",
            $fault: "client",
            ...opts
        });
        this.name = "ForbiddenError";
        this.$fault = "client";
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.code = opts.code;
        this.metadata = opts.metadata;
    }
}
exports.ForbiddenError = ForbiddenError;
class InternalError extends MatchmakerServiceServiceException_1.MatchmakerServiceServiceException {
    constructor(opts) {
        super({
            name: "InternalError",
            $fault: "server",
            ...opts
        });
        this.name = "InternalError";
        this.$fault = "server";
        this.$retryable = {};
        Object.setPrototypeOf(this, InternalError.prototype);
        this.code = opts.code;
        this.metadata = opts.metadata;
    }
}
exports.InternalError = InternalError;
class NotFoundError extends MatchmakerServiceServiceException_1.MatchmakerServiceServiceException {
    constructor(opts) {
        super({
            name: "NotFoundError",
            $fault: "client",
            ...opts
        });
        this.name = "NotFoundError";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotFoundError.prototype);
        this.code = opts.code;
        this.metadata = opts.metadata;
    }
}
exports.NotFoundError = NotFoundError;
class RateLimitError extends MatchmakerServiceServiceException_1.MatchmakerServiceServiceException {
    constructor(opts) {
        super({
            name: "RateLimitError",
            $fault: "client",
            ...opts
        });
        this.name = "RateLimitError";
        this.$fault = "client";
        Object.setPrototypeOf(this, RateLimitError.prototype);
        this.code = opts.code;
        this.metadata = opts.metadata;
    }
}
exports.RateLimitError = RateLimitError;
class UnauthorizedError extends MatchmakerServiceServiceException_1.MatchmakerServiceServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedError",
            $fault: "client",
            ...opts
        });
        this.name = "UnauthorizedError";
        this.$fault = "client";
        this.$retryable = {};
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
        this.code = opts.code;
        this.metadata = opts.metadata;
    }
}
exports.UnauthorizedError = UnauthorizedError;
