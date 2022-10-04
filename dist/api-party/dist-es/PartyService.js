import { __extends } from "tslib";
import { PartyServiceClient } from "./PartyServiceClient";
import { CreatePartyCommand, } from "./commands/CreatePartyCommand";
import { CreatePartyInviteCommand, } from "./commands/CreatePartyInviteCommand";
import { FindMatchmakerLobbyForPartyCommand, } from "./commands/FindMatchmakerLobbyForPartyCommand";
import { GetPartyFromInviteCommand, } from "./commands/GetPartyFromInviteCommand";
import { GetPartyProfileCommand, } from "./commands/GetPartyProfileCommand";
import { GetPartySelfProfileCommand, } from "./commands/GetPartySelfProfileCommand";
import { GetPartySelfSummaryCommand, } from "./commands/GetPartySelfSummaryCommand";
import { GetPartySummaryCommand, } from "./commands/GetPartySummaryCommand";
import { JoinMatchmakerLobbyForPartyCommand, } from "./commands/JoinMatchmakerLobbyForPartyCommand";
import { JoinPartyCommand, } from "./commands/JoinPartyCommand";
import { KickMemberCommand, } from "./commands/KickMemberCommand";
import { LeavePartyCommand, } from "./commands/LeavePartyCommand";
import { RequestMatchmakerPlayerCommand, } from "./commands/RequestMatchmakerPlayerCommand";
import { RevokePartyInviteCommand, } from "./commands/RevokePartyInviteCommand";
import { SendJoinRequestCommand, } from "./commands/SendJoinRequestCommand";
import { SetPartyPublicityCommand, } from "./commands/SetPartyPublicityCommand";
import { SetPartyToIdleCommand, } from "./commands/SetPartyToIdleCommand";
import { TransferPartyOwnershipCommand, } from "./commands/TransferPartyOwnershipCommand";
var PartyService = (function (_super) {
    __extends(PartyService, _super);
    function PartyService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartyService.prototype.createParty = function (args, optionsOrCb, cb) {
        var command = new CreatePartyCommand(args);
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
    PartyService.prototype.createPartyInvite = function (args, optionsOrCb, cb) {
        var command = new CreatePartyInviteCommand(args);
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
    PartyService.prototype.getPartyFromInvite = function (args, optionsOrCb, cb) {
        var command = new GetPartyFromInviteCommand(args);
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
    PartyService.prototype.getPartyProfile = function (args, optionsOrCb, cb) {
        var command = new GetPartyProfileCommand(args);
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
    PartyService.prototype.getPartySelfProfile = function (args, optionsOrCb, cb) {
        var command = new GetPartySelfProfileCommand(args);
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
    PartyService.prototype.getPartySelfSummary = function (args, optionsOrCb, cb) {
        var command = new GetPartySelfSummaryCommand(args);
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
    PartyService.prototype.getPartySummary = function (args, optionsOrCb, cb) {
        var command = new GetPartySummaryCommand(args);
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
    PartyService.prototype.joinParty = function (args, optionsOrCb, cb) {
        var command = new JoinPartyCommand(args);
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
    PartyService.prototype.kickMember = function (args, optionsOrCb, cb) {
        var command = new KickMemberCommand(args);
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
    PartyService.prototype.leaveParty = function (args, optionsOrCb, cb) {
        var command = new LeavePartyCommand(args);
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
    PartyService.prototype.revokePartyInvite = function (args, optionsOrCb, cb) {
        var command = new RevokePartyInviteCommand(args);
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
    PartyService.prototype.sendJoinRequest = function (args, optionsOrCb, cb) {
        var command = new SendJoinRequestCommand(args);
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
    PartyService.prototype.setPartyPublicity = function (args, optionsOrCb, cb) {
        var command = new SetPartyPublicityCommand(args);
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
    PartyService.prototype.transferPartyOwnership = function (args, optionsOrCb, cb) {
        var command = new TransferPartyOwnershipCommand(args);
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
    PartyService.prototype.findMatchmakerLobbyForParty = function (args, optionsOrCb, cb) {
        var command = new FindMatchmakerLobbyForPartyCommand(args);
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
    PartyService.prototype.joinMatchmakerLobbyForParty = function (args, optionsOrCb, cb) {
        var command = new JoinMatchmakerLobbyForPartyCommand(args);
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
    PartyService.prototype.requestMatchmakerPlayer = function (args, optionsOrCb, cb) {
        var command = new RequestMatchmakerPlayerCommand(args);
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
    PartyService.prototype.setPartyToIdle = function (args, optionsOrCb, cb) {
        var command = new SetPartyToIdleCommand(args);
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
    return PartyService;
}(PartyServiceClient));
export { PartyService };
