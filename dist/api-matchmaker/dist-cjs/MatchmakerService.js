"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchmakerService = void 0;
const MatchmakerServiceClient_1 = require("./MatchmakerServiceClient");
const FindLobbyCommand_1 = require("./commands/FindLobbyCommand");
const JoinLobbyCommand_1 = require("./commands/JoinLobbyCommand");
const ListLobbiesCommand_1 = require("./commands/ListLobbiesCommand");
const ListRegionsCommand_1 = require("./commands/ListRegionsCommand");
const LobbyReadyCommand_1 = require("./commands/LobbyReadyCommand");
const PlayerConnectedCommand_1 = require("./commands/PlayerConnectedCommand");
const PlayerDisconnectedCommand_1 = require("./commands/PlayerDisconnectedCommand");
const SetLobbyClosedCommand_1 = require("./commands/SetLobbyClosedCommand");
class MatchmakerService extends MatchmakerServiceClient_1.MatchmakerServiceClient {
    findLobby(args, optionsOrCb, cb) {
        const command = new FindLobbyCommand_1.FindLobbyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    joinLobby(args, optionsOrCb, cb) {
        const command = new JoinLobbyCommand_1.JoinLobbyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLobbies(args, optionsOrCb, cb) {
        const command = new ListLobbiesCommand_1.ListLobbiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRegions(args, optionsOrCb, cb) {
        const command = new ListRegionsCommand_1.ListRegionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    lobbyReady(args, optionsOrCb, cb) {
        const command = new LobbyReadyCommand_1.LobbyReadyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    playerConnected(args, optionsOrCb, cb) {
        const command = new PlayerConnectedCommand_1.PlayerConnectedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    playerDisconnected(args, optionsOrCb, cb) {
        const command = new PlayerDisconnectedCommand_1.PlayerDisconnectedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setLobbyClosed(args, optionsOrCb, cb) {
        const command = new SetLobbyClosedCommand_1.SetLobbyClosedCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.MatchmakerService = MatchmakerService;
