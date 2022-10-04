import { __extends } from "tslib";
import { MatchmakerServiceClient } from "./MatchmakerServiceClient";
import { FindLobbyCommand, } from "./commands/FindLobbyCommand";
import { JoinLobbyCommand, } from "./commands/JoinLobbyCommand";
import { ListLobbiesCommand, } from "./commands/ListLobbiesCommand";
import { ListRegionsCommand, } from "./commands/ListRegionsCommand";
import { LobbyReadyCommand, } from "./commands/LobbyReadyCommand";
import { PlayerConnectedCommand, } from "./commands/PlayerConnectedCommand";
import { PlayerDisconnectedCommand, } from "./commands/PlayerDisconnectedCommand";
import { SetLobbyClosedCommand, } from "./commands/SetLobbyClosedCommand";
var MatchmakerService = (function (_super) {
    __extends(MatchmakerService, _super);
    function MatchmakerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchmakerService.prototype.findLobby = function (args, optionsOrCb, cb) {
        var command = new FindLobbyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.joinLobby = function (args, optionsOrCb, cb) {
        var command = new JoinLobbyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.listLobbies = function (args, optionsOrCb, cb) {
        var command = new ListLobbiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.listRegions = function (args, optionsOrCb, cb) {
        var command = new ListRegionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.lobbyReady = function (args, optionsOrCb, cb) {
        var command = new LobbyReadyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.playerConnected = function (args, optionsOrCb, cb) {
        var command = new PlayerConnectedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.playerDisconnected = function (args, optionsOrCb, cb) {
        var command = new PlayerDisconnectedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MatchmakerService.prototype.setLobbyClosed = function (args, optionsOrCb, cb) {
        var command = new SetLobbyClosedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get ".concat(typeof optionsOrCb));
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return MatchmakerService;
}(MatchmakerServiceClient));
export { MatchmakerService };
