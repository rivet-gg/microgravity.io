"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyService = void 0;
const PartyServiceClient_1 = require("./PartyServiceClient");
const CreatePartyCommand_1 = require("./commands/CreatePartyCommand");
const CreatePartyInviteCommand_1 = require("./commands/CreatePartyInviteCommand");
const FindMatchmakerLobbyForPartyCommand_1 = require("./commands/FindMatchmakerLobbyForPartyCommand");
const GetPartyFromInviteCommand_1 = require("./commands/GetPartyFromInviteCommand");
const GetPartyProfileCommand_1 = require("./commands/GetPartyProfileCommand");
const GetPartySelfProfileCommand_1 = require("./commands/GetPartySelfProfileCommand");
const GetPartySelfSummaryCommand_1 = require("./commands/GetPartySelfSummaryCommand");
const GetPartySummaryCommand_1 = require("./commands/GetPartySummaryCommand");
const JoinMatchmakerLobbyForPartyCommand_1 = require("./commands/JoinMatchmakerLobbyForPartyCommand");
const JoinPartyCommand_1 = require("./commands/JoinPartyCommand");
const KickMemberCommand_1 = require("./commands/KickMemberCommand");
const LeavePartyCommand_1 = require("./commands/LeavePartyCommand");
const RequestMatchmakerPlayerCommand_1 = require("./commands/RequestMatchmakerPlayerCommand");
const RevokePartyInviteCommand_1 = require("./commands/RevokePartyInviteCommand");
const SendJoinRequestCommand_1 = require("./commands/SendJoinRequestCommand");
const SetPartyPublicityCommand_1 = require("./commands/SetPartyPublicityCommand");
const SetPartyToIdleCommand_1 = require("./commands/SetPartyToIdleCommand");
const TransferPartyOwnershipCommand_1 = require("./commands/TransferPartyOwnershipCommand");
class PartyService extends PartyServiceClient_1.PartyServiceClient {
    createParty(args, optionsOrCb, cb) {
        const command = new CreatePartyCommand_1.CreatePartyCommand(args);
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
    createPartyInvite(args, optionsOrCb, cb) {
        const command = new CreatePartyInviteCommand_1.CreatePartyInviteCommand(args);
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
    getPartyFromInvite(args, optionsOrCb, cb) {
        const command = new GetPartyFromInviteCommand_1.GetPartyFromInviteCommand(args);
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
    getPartyProfile(args, optionsOrCb, cb) {
        const command = new GetPartyProfileCommand_1.GetPartyProfileCommand(args);
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
    getPartySelfProfile(args, optionsOrCb, cb) {
        const command = new GetPartySelfProfileCommand_1.GetPartySelfProfileCommand(args);
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
    getPartySelfSummary(args, optionsOrCb, cb) {
        const command = new GetPartySelfSummaryCommand_1.GetPartySelfSummaryCommand(args);
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
    getPartySummary(args, optionsOrCb, cb) {
        const command = new GetPartySummaryCommand_1.GetPartySummaryCommand(args);
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
    joinParty(args, optionsOrCb, cb) {
        const command = new JoinPartyCommand_1.JoinPartyCommand(args);
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
    kickMember(args, optionsOrCb, cb) {
        const command = new KickMemberCommand_1.KickMemberCommand(args);
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
    leaveParty(args, optionsOrCb, cb) {
        const command = new LeavePartyCommand_1.LeavePartyCommand(args);
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
    revokePartyInvite(args, optionsOrCb, cb) {
        const command = new RevokePartyInviteCommand_1.RevokePartyInviteCommand(args);
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
    sendJoinRequest(args, optionsOrCb, cb) {
        const command = new SendJoinRequestCommand_1.SendJoinRequestCommand(args);
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
    setPartyPublicity(args, optionsOrCb, cb) {
        const command = new SetPartyPublicityCommand_1.SetPartyPublicityCommand(args);
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
    transferPartyOwnership(args, optionsOrCb, cb) {
        const command = new TransferPartyOwnershipCommand_1.TransferPartyOwnershipCommand(args);
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
    findMatchmakerLobbyForParty(args, optionsOrCb, cb) {
        const command = new FindMatchmakerLobbyForPartyCommand_1.FindMatchmakerLobbyForPartyCommand(args);
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
    joinMatchmakerLobbyForParty(args, optionsOrCb, cb) {
        const command = new JoinMatchmakerLobbyForPartyCommand_1.JoinMatchmakerLobbyForPartyCommand(args);
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
    requestMatchmakerPlayer(args, optionsOrCb, cb) {
        const command = new RequestMatchmakerPlayerCommand_1.RequestMatchmakerPlayerCommand(args);
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
    setPartyToIdle(args, optionsOrCb, cb) {
        const command = new SetPartyToIdleCommand_1.SetPartyToIdleCommand(args);
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
exports.PartyService = PartyService;
