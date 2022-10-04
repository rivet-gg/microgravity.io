"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityService = void 0;
const IdentityServiceClient_1 = require("./IdentityServiceClient");
const CompleteGameLinkCommand_1 = require("./commands/CompleteGameLinkCommand");
const CompleteIdentityAvatarUploadCommand_1 = require("./commands/CompleteIdentityAvatarUploadCommand");
const FollowIdentityCommand_1 = require("./commands/FollowIdentityCommand");
const GetGameLinkCommand_1 = require("./commands/GetGameLinkCommand");
const GetIdentityProfileCommand_1 = require("./commands/GetIdentityProfileCommand");
const GetIdentitySelfProfileCommand_1 = require("./commands/GetIdentitySelfProfileCommand");
const ListActivitiesCommand_1 = require("./commands/ListActivitiesCommand");
const ListFollowersCommand_1 = require("./commands/ListFollowersCommand");
const ListFollowingCommand_1 = require("./commands/ListFollowingCommand");
const ListFriendsCommand_1 = require("./commands/ListFriendsCommand");
const PrepareGameLinkCommand_1 = require("./commands/PrepareGameLinkCommand");
const PrepareIdentityAvatarUploadCommand_1 = require("./commands/PrepareIdentityAvatarUploadCommand");
const RemoveIdentityGameActivityCommand_1 = require("./commands/RemoveIdentityGameActivityCommand");
const SearchIdentitiesCommand_1 = require("./commands/SearchIdentitiesCommand");
const SetIdentityGameActivityCommand_1 = require("./commands/SetIdentityGameActivityCommand");
const SetupIdentityCommand_1 = require("./commands/SetupIdentityCommand");
const SignupForBetaCommand_1 = require("./commands/SignupForBetaCommand");
const UnfollowIdentityCommand_1 = require("./commands/UnfollowIdentityCommand");
const UpdateIdentityProfileCommand_1 = require("./commands/UpdateIdentityProfileCommand");
const UpdateIdentityStatusCommand_1 = require("./commands/UpdateIdentityStatusCommand");
const ValidateIdentityProfileCommand_1 = require("./commands/ValidateIdentityProfileCommand");
const WatchEventsCommand_1 = require("./commands/WatchEventsCommand");
class IdentityService extends IdentityServiceClient_1.IdentityServiceClient {
    completeGameLink(args, optionsOrCb, cb) {
        const command = new CompleteGameLinkCommand_1.CompleteGameLinkCommand(args);
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
    completeIdentityAvatarUpload(args, optionsOrCb, cb) {
        const command = new CompleteIdentityAvatarUploadCommand_1.CompleteIdentityAvatarUploadCommand(args);
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
    followIdentity(args, optionsOrCb, cb) {
        const command = new FollowIdentityCommand_1.FollowIdentityCommand(args);
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
    getGameLink(args, optionsOrCb, cb) {
        const command = new GetGameLinkCommand_1.GetGameLinkCommand(args);
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
    getIdentityProfile(args, optionsOrCb, cb) {
        const command = new GetIdentityProfileCommand_1.GetIdentityProfileCommand(args);
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
    getIdentitySelfProfile(args, optionsOrCb, cb) {
        const command = new GetIdentitySelfProfileCommand_1.GetIdentitySelfProfileCommand(args);
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
    listActivities(args, optionsOrCb, cb) {
        const command = new ListActivitiesCommand_1.ListActivitiesCommand(args);
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
    listFollowers(args, optionsOrCb, cb) {
        const command = new ListFollowersCommand_1.ListFollowersCommand(args);
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
    listFollowing(args, optionsOrCb, cb) {
        const command = new ListFollowingCommand_1.ListFollowingCommand(args);
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
    listFriends(args, optionsOrCb, cb) {
        const command = new ListFriendsCommand_1.ListFriendsCommand(args);
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
    prepareGameLink(args, optionsOrCb, cb) {
        const command = new PrepareGameLinkCommand_1.PrepareGameLinkCommand(args);
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
    prepareIdentityAvatarUpload(args, optionsOrCb, cb) {
        const command = new PrepareIdentityAvatarUploadCommand_1.PrepareIdentityAvatarUploadCommand(args);
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
    removeIdentityGameActivity(args, optionsOrCb, cb) {
        const command = new RemoveIdentityGameActivityCommand_1.RemoveIdentityGameActivityCommand(args);
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
    searchIdentities(args, optionsOrCb, cb) {
        const command = new SearchIdentitiesCommand_1.SearchIdentitiesCommand(args);
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
    setIdentityGameActivity(args, optionsOrCb, cb) {
        const command = new SetIdentityGameActivityCommand_1.SetIdentityGameActivityCommand(args);
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
    setupIdentity(args, optionsOrCb, cb) {
        const command = new SetupIdentityCommand_1.SetupIdentityCommand(args);
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
    signupForBeta(args, optionsOrCb, cb) {
        const command = new SignupForBetaCommand_1.SignupForBetaCommand(args);
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
    unfollowIdentity(args, optionsOrCb, cb) {
        const command = new UnfollowIdentityCommand_1.UnfollowIdentityCommand(args);
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
    updateIdentityProfile(args, optionsOrCb, cb) {
        const command = new UpdateIdentityProfileCommand_1.UpdateIdentityProfileCommand(args);
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
    updateIdentityStatus(args, optionsOrCb, cb) {
        const command = new UpdateIdentityStatusCommand_1.UpdateIdentityStatusCommand(args);
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
    validateIdentityProfile(args, optionsOrCb, cb) {
        const command = new ValidateIdentityProfileCommand_1.ValidateIdentityProfileCommand(args);
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
    watchEvents(args, optionsOrCb, cb) {
        const command = new WatchEventsCommand_1.WatchEventsCommand(args);
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
exports.IdentityService = IdentityService;
