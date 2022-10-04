import { __awaiter, __generator, __values } from "tslib";
import { GameLinkStatus, } from "./models";
import { IdentityService } from "./IdentityService";
import { RepeatingRequest } from "@rivet-gg/common";
var IdentityManagerBuilder = (function () {
    function IdentityManagerBuilder() {
        this.config = {};
    }
    IdentityManagerBuilder.prototype.withToken = function (token) {
        this.config.token = token;
        return this;
    };
    IdentityManagerBuilder.prototype.withEndpoint = function (endpoint) {
        this.config.endpoint = endpoint;
        return this;
    };
    IdentityManagerBuilder.prototype.withService = function (service) {
        this.config.service = service;
        return this;
    };
    IdentityManagerBuilder.prototype.onIdentityUpdate = function (handler) {
        this.config.identityUpdateHandler = handler;
        return this;
    };
    IdentityManagerBuilder.prototype.onChatMessage = function (handler) {
        this.config.chatMessageHandler = handler;
        return this;
    };
    IdentityManagerBuilder.prototype.onPartyUpdate = function (handler) {
        this.config.partyUpdateHandler = handler;
        return this;
    };
    IdentityManagerBuilder.prototype.onMatchmakerLobbyJoin = function (handler) {
        this.config.matchmakerLobbyJoinHandler = handler;
        return this;
    };
    IdentityManagerBuilder.prototype.onNotification = function (handler) {
        this.config.notificationHandler = handler;
        return this;
    };
    IdentityManagerBuilder.prototype.onError = function (handler) {
        this.config.errorHandler = handler;
        return this;
    };
    IdentityManagerBuilder.prototype.build = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var initService, identityToken, manager;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.config.service === "undefined")) return [3, 2];
                        initService = new IdentityService({
                            endpoint: this.config.endpoint,
                            token: this.config.token,
                        });
                        return [4, initService.setupIdentity({
                                existingIdentityToken: (_a = this.config.token) !== null && _a !== void 0 ? _a : fetchToken(),
                            })];
                    case 1:
                        identityToken = (_b.sent()).identityToken;
                        saveToken(identityToken);
                        this.config.token = identityToken;
                        this.config.service = new IdentityService({
                            endpoint: this.config.endpoint,
                            token: identityToken,
                        });
                        _b.label = 2;
                    case 2:
                        manager = new IdentityManager(this.config);
                        manager.initiate();
                        return [2, manager];
                }
            });
        });
    };
    return IdentityManagerBuilder;
}());
export { IdentityManagerBuilder };
var IdentityManager = (function () {
    function IdentityManager(opts) {
        this.service = opts.service;
        this.token = opts.token;
        this.endpoint = opts.endpoint;
        this.identityUpdateHandler = opts.identityUpdateHandler;
        this.chatMessageHandler = opts.chatMessageHandler;
        this.partyUpdateHandler = opts.partyUpdateHandler;
        this.matchmakerLobbyJoinHandler = opts.matchmakerLobbyJoinHandler;
        this.errorHandler = opts.errorHandler;
    }
    IdentityManager.prototype.initiate = function () {
        var _this = this;
        if (this.identityUpdateHandler !== undefined) {
            this.service
                .getIdentitySelfProfile({})
                .then(function (res) {
                _this.identityUpdateHandler(res.identity);
            })
                .catch(this.handleError.bind(this));
        }
        if (this.chatMessageHandler !== undefined ||
            this.matchmakerLobbyJoinHandler !== undefined ||
            this.partyUpdateHandler !== undefined ||
            this.identityUpdateHandler !== undefined) {
            if (this.eventStream)
                this.eventStream.cancel();
            this.eventStream = new RepeatingRequest(function (abortSignal, watchIndex) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.service.watchEvents({ watchIndex: watchIndex }, { abortSignal: abortSignal })];
                        case 1: return [2, _a.sent()];
                    }
                });
            }); });
            this.eventStream.onMessage(function (res) {
                var e_1, _a;
                try {
                    for (var _b = __values(res.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var event_1 = _c.value;
                        if (event_1.notification &&
                            _this.notificationHandler !== undefined) {
                            _this.notificationHandler(event_1.notification, event_1.kind);
                        }
                        if (event_1.kind.chatMessage) {
                            if (_this.chatMessageHandler !== undefined) {
                                _this.chatMessageHandler(event_1.kind.chatMessage.thread);
                            }
                        }
                        else if (event_1.kind.matchmakerLobbyJoin) {
                            if (_this.matchmakerLobbyJoinHandler !== undefined) {
                                _this.matchmakerLobbyJoinHandler(event_1.kind.matchmakerLobbyJoin.lobby);
                            }
                        }
                        else if (event_1.kind.partyUpdate) {
                            if (_this.partyUpdateHandler !== undefined) {
                                _this.partyUpdateHandler(event_1.kind.partyUpdate.party);
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
            this.eventStream.onError(this.handleError.bind(this));
        }
    };
    IdentityManager.prototype.switchIdentity = function (newIdentityToken) {
        this.destroy();
        saveToken(newIdentityToken);
        this.token = newIdentityToken;
        this.service = new IdentityService({
            endpoint: this.endpoint,
            token: newIdentityToken,
        });
        this.initiate();
    };
    IdentityManager.prototype.startGameLink = function (completeCb) {
        return __awaiter(this, void 0, void 0, function () {
            var prepareRes, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.service.prepareGameLink({})];
                    case 1:
                        prepareRes = _a.sent();
                        return [3, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.handleError(e_2);
                        return [2];
                    case 3:
                        if (this.gameLinkStream)
                            this.gameLinkStream.cancel();
                        this.gameLinkStream = new RepeatingRequest(function (abortSignal, watchIndex) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.service.getGameLink({
                                            identityLinkToken: prepareRes.identityLinkToken,
                                            watchIndex: watchIndex,
                                        }, { abortSignal: abortSignal })];
                                    case 1: return [2, _a.sent()];
                                }
                            });
                        }); });
                        this.gameLinkStream.onMessage(function (res) {
                            if (res.status == GameLinkStatus.COMPLETE ||
                                res.status == GameLinkStatus.REVOKED) {
                                _this.gameLinkStream.cancel();
                                if (res.status == GameLinkStatus.COMPLETE) {
                                    _this.switchIdentity(res.newIdentity.identityToken);
                                }
                                completeCb(res);
                            }
                        });
                        this.gameLinkStream.onError(this.handleError.bind(this));
                        return [2, prepareRes];
                }
            });
        });
    };
    IdentityManager.prototype.destroy = function () {
        if (this.eventStream)
            this.eventStream.cancel();
        if (this.gameLinkStream)
            this.gameLinkStream.cancel();
    };
    IdentityManager.prototype.handleError = function (err) {
        if (this.errorHandler !== undefined)
            this.errorHandler(err);
        else
            console.error(err);
    };
    return IdentityManager;
}());
export { IdentityManager };
function fetchToken() {
    var _a;
    if (typeof window === "undefined")
        return undefined;
    return (_a = window.localStorage.getItem("rivet:token")) !== null && _a !== void 0 ? _a : undefined;
}
function saveToken(token) {
    if (typeof window === "undefined")
        return;
    window.localStorage.setItem("rivet:token", token);
}
