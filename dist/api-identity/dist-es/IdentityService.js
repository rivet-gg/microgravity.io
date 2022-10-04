import { __extends } from "tslib";
import { IdentityServiceClient } from "./IdentityServiceClient";
import { CompleteGameLinkCommand, } from "./commands/CompleteGameLinkCommand";
import { CompleteIdentityAvatarUploadCommand, } from "./commands/CompleteIdentityAvatarUploadCommand";
import { FollowIdentityCommand, } from "./commands/FollowIdentityCommand";
import { GetGameLinkCommand, } from "./commands/GetGameLinkCommand";
import { GetIdentityProfileCommand, } from "./commands/GetIdentityProfileCommand";
import { GetIdentitySelfProfileCommand, } from "./commands/GetIdentitySelfProfileCommand";
import { ListActivitiesCommand, } from "./commands/ListActivitiesCommand";
import { ListFollowersCommand, } from "./commands/ListFollowersCommand";
import { ListFollowingCommand, } from "./commands/ListFollowingCommand";
import { ListFriendsCommand, } from "./commands/ListFriendsCommand";
import { PrepareGameLinkCommand, } from "./commands/PrepareGameLinkCommand";
import { PrepareIdentityAvatarUploadCommand, } from "./commands/PrepareIdentityAvatarUploadCommand";
import { RemoveIdentityGameActivityCommand, } from "./commands/RemoveIdentityGameActivityCommand";
import { SearchIdentitiesCommand, } from "./commands/SearchIdentitiesCommand";
import { SetIdentityGameActivityCommand, } from "./commands/SetIdentityGameActivityCommand";
import { SetupIdentityCommand, } from "./commands/SetupIdentityCommand";
import { SignupForBetaCommand, } from "./commands/SignupForBetaCommand";
import { UnfollowIdentityCommand, } from "./commands/UnfollowIdentityCommand";
import { UpdateIdentityProfileCommand, } from "./commands/UpdateIdentityProfileCommand";
import { UpdateIdentityStatusCommand, } from "./commands/UpdateIdentityStatusCommand";
import { ValidateIdentityProfileCommand, } from "./commands/ValidateIdentityProfileCommand";
import { WatchEventsCommand, } from "./commands/WatchEventsCommand";
var IdentityService = (function (_super) {
    __extends(IdentityService, _super);
    function IdentityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentityService.prototype.completeGameLink = function (args, optionsOrCb, cb) {
        var command = new CompleteGameLinkCommand(args);
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
    IdentityService.prototype.completeIdentityAvatarUpload = function (args, optionsOrCb, cb) {
        var command = new CompleteIdentityAvatarUploadCommand(args);
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
    IdentityService.prototype.followIdentity = function (args, optionsOrCb, cb) {
        var command = new FollowIdentityCommand(args);
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
    IdentityService.prototype.getGameLink = function (args, optionsOrCb, cb) {
        var command = new GetGameLinkCommand(args);
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
    IdentityService.prototype.getIdentityProfile = function (args, optionsOrCb, cb) {
        var command = new GetIdentityProfileCommand(args);
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
    IdentityService.prototype.getIdentitySelfProfile = function (args, optionsOrCb, cb) {
        var command = new GetIdentitySelfProfileCommand(args);
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
    IdentityService.prototype.listActivities = function (args, optionsOrCb, cb) {
        var command = new ListActivitiesCommand(args);
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
    IdentityService.prototype.listFollowers = function (args, optionsOrCb, cb) {
        var command = new ListFollowersCommand(args);
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
    IdentityService.prototype.listFollowing = function (args, optionsOrCb, cb) {
        var command = new ListFollowingCommand(args);
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
    IdentityService.prototype.listFriends = function (args, optionsOrCb, cb) {
        var command = new ListFriendsCommand(args);
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
    IdentityService.prototype.prepareGameLink = function (args, optionsOrCb, cb) {
        var command = new PrepareGameLinkCommand(args);
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
    IdentityService.prototype.prepareIdentityAvatarUpload = function (args, optionsOrCb, cb) {
        var command = new PrepareIdentityAvatarUploadCommand(args);
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
    IdentityService.prototype.removeIdentityGameActivity = function (args, optionsOrCb, cb) {
        var command = new RemoveIdentityGameActivityCommand(args);
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
    IdentityService.prototype.searchIdentities = function (args, optionsOrCb, cb) {
        var command = new SearchIdentitiesCommand(args);
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
    IdentityService.prototype.setIdentityGameActivity = function (args, optionsOrCb, cb) {
        var command = new SetIdentityGameActivityCommand(args);
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
    IdentityService.prototype.setupIdentity = function (args, optionsOrCb, cb) {
        var command = new SetupIdentityCommand(args);
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
    IdentityService.prototype.signupForBeta = function (args, optionsOrCb, cb) {
        var command = new SignupForBetaCommand(args);
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
    IdentityService.prototype.unfollowIdentity = function (args, optionsOrCb, cb) {
        var command = new UnfollowIdentityCommand(args);
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
    IdentityService.prototype.updateIdentityProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateIdentityProfileCommand(args);
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
    IdentityService.prototype.updateIdentityStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateIdentityStatusCommand(args);
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
    IdentityService.prototype.validateIdentityProfile = function (args, optionsOrCb, cb) {
        var command = new ValidateIdentityProfileCommand(args);
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
    IdentityService.prototype.watchEvents = function (args, optionsOrCb, cb) {
        var command = new WatchEventsCommand(args);
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
    return IdentityService;
}(IdentityServiceClient));
export { IdentityService };
