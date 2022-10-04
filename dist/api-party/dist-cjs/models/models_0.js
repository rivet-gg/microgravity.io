"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeavePartyInput = exports.KickMemberOutput = exports.KickMemberInput = exports.JoinPartyOutput = exports.JoinPartyInput = exports.JoinPartyInvite = exports.GetPartySummaryOutput = exports.GetPartySummaryInput = exports.GetPartySelfSummaryOutput = exports.GetPartySelfSummaryInput = exports.GetPartySelfProfileOutput = exports.GetPartySelfProfileInput = exports.GetPartyProfileOutput = exports.WatchResponse = exports.PartyProfile = exports.PartyInvite = exports.PartyInviteExternalLinks = exports.PartyInviteAlias = exports.GetPartyProfileInput = exports.GetPartyFromInviteOutput = exports.PartySummary = exports.PartyPublicity = exports.PartyMemberSummary = exports.PartyMemberState = exports.PartyMemberStateMatchmakerPending = exports.PartyMemberStateMatchmakerLobby = exports.PartyMemberStateMatchmakerFindingLobby = exports.PartyMemberStateIdle = exports.IdentityHandle = exports.IdentityPresence = exports.IdentityStatus = exports.IdentityGameActivity = exports.PartyHandle = exports.IdentityExternalLinks = exports.PartyExternalLinks = exports.PartyActivity = exports.PartyActivityMatchmakerLobby = exports.PartyMatchmakerLobby = exports.PartyActivityMatchmakerFindingLobby = exports.GameHandle = exports.PartyActivityIdle = exports.GetPartyFromInviteInput = exports.CreatePartyInviteOutput = exports.CreatePartyInviteInput = exports.CreatePartyOutput = exports.CreatedInvite = exports.CreatePartyInput = exports.CreatePartyPublicityConfig = exports.PartyPublicityLevel = exports.CreatePartyInviteConfig = void 0;
exports.UnauthorizedError = exports.RateLimitError = exports.NotFoundError = exports.InternalError = exports.ForbiddenError = exports.BadRequestError = exports.RequestMatchmakerPlayerOutput = exports.RequestMatchmakerPlayerInput = exports.JoinMatchmakerLobbyForPartyOutput = exports.JoinMatchmakerLobbyForPartyInput = exports.FindMatchmakerLobbyForPartyOutput = exports.FindMatchmakerLobbyForPartyInput = exports.SetPartyToIdleOutput = exports.SetPartyToIdleInput = exports.TransferPartyOwnershipOutput = exports.TransferPartyOwnershipInput = exports.SetPartyPublicityOutput = exports.SetPartyPublicityInput = exports.SendJoinRequestOutput = exports.SendJoinRequestInput = exports.RevokePartyInviteOutput = exports.RevokePartyInviteInput = exports.LeavePartyOutput = void 0;
const PartyServiceServiceException_1 = require("./PartyServiceServiceException");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CreatePartyInviteConfig;
(function (CreatePartyInviteConfig) {
    CreatePartyInviteConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartyInviteConfig = exports.CreatePartyInviteConfig || (exports.CreatePartyInviteConfig = {}));
var PartyPublicityLevel;
(function (PartyPublicityLevel) {
    PartyPublicityLevel["JOIN"] = "join";
    PartyPublicityLevel["NONE"] = "none";
    PartyPublicityLevel["VIEW"] = "view";
})(PartyPublicityLevel = exports.PartyPublicityLevel || (exports.PartyPublicityLevel = {}));
var CreatePartyPublicityConfig;
(function (CreatePartyPublicityConfig) {
    CreatePartyPublicityConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartyPublicityConfig = exports.CreatePartyPublicityConfig || (exports.CreatePartyPublicityConfig = {}));
var CreatePartyInput;
(function (CreatePartyInput) {
    CreatePartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.matchmakerCurrentPlayerToken && { matchmakerCurrentPlayerToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(CreatePartyInput = exports.CreatePartyInput || (exports.CreatePartyInput = {}));
var CreatedInvite;
(function (CreatedInvite) {
    CreatedInvite.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.token && { token: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(CreatedInvite = exports.CreatedInvite || (exports.CreatedInvite = {}));
var CreatePartyOutput;
(function (CreatePartyOutput) {
    CreatePartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.invites && { invites: obj.invites.map(item => CreatedInvite.filterSensitiveLog(item))
        }),
    });
})(CreatePartyOutput = exports.CreatePartyOutput || (exports.CreatePartyOutput = {}));
var CreatePartyInviteInput;
(function (CreatePartyInviteInput) {
    CreatePartyInviteInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartyInviteInput = exports.CreatePartyInviteInput || (exports.CreatePartyInviteInput = {}));
var CreatePartyInviteOutput;
(function (CreatePartyInviteOutput) {
    CreatePartyInviteOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.invite && { invite: CreatedInvite.filterSensitiveLog(obj.invite)
        }),
    });
})(CreatePartyInviteOutput = exports.CreatePartyInviteOutput || (exports.CreatePartyInviteOutput = {}));
var GetPartyFromInviteInput;
(function (GetPartyFromInviteInput) {
    GetPartyFromInviteInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.token && { token: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(GetPartyFromInviteInput = exports.GetPartyFromInviteInput || (exports.GetPartyFromInviteInput = {}));
var PartyActivityIdle;
(function (PartyActivityIdle) {
    PartyActivityIdle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyActivityIdle = exports.PartyActivityIdle || (exports.PartyActivityIdle = {}));
var GameHandle;
(function (GameHandle) {
    GameHandle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameHandle = exports.GameHandle || (exports.GameHandle = {}));
var PartyActivityMatchmakerFindingLobby;
(function (PartyActivityMatchmakerFindingLobby) {
    PartyActivityMatchmakerFindingLobby.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyActivityMatchmakerFindingLobby = exports.PartyActivityMatchmakerFindingLobby || (exports.PartyActivityMatchmakerFindingLobby = {}));
var PartyMatchmakerLobby;
(function (PartyMatchmakerLobby) {
    PartyMatchmakerLobby.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyMatchmakerLobby = exports.PartyMatchmakerLobby || (exports.PartyMatchmakerLobby = {}));
var PartyActivityMatchmakerLobby;
(function (PartyActivityMatchmakerLobby) {
    PartyActivityMatchmakerLobby.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyActivityMatchmakerLobby = exports.PartyActivityMatchmakerLobby || (exports.PartyActivityMatchmakerLobby = {}));
var PartyActivity;
(function (PartyActivity) {
    PartyActivity.visit = (value, visitor) => {
        if (value.idle !== undefined)
            return visitor.idle(value.idle);
        if (value.matchmakerFindingLobby !== undefined)
            return visitor.matchmakerFindingLobby(value.matchmakerFindingLobby);
        if (value.matchmakerLobby !== undefined)
            return visitor.matchmakerLobby(value.matchmakerLobby);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    PartyActivity.filterSensitiveLog = (obj) => {
        if (obj.idle !== undefined)
            return { idle: PartyActivityIdle.filterSensitiveLog(obj.idle)
            };
        if (obj.matchmakerFindingLobby !== undefined)
            return { matchmakerFindingLobby: PartyActivityMatchmakerFindingLobby.filterSensitiveLog(obj.matchmakerFindingLobby)
            };
        if (obj.matchmakerLobby !== undefined)
            return { matchmakerLobby: PartyActivityMatchmakerLobby.filterSensitiveLog(obj.matchmakerLobby)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(PartyActivity = exports.PartyActivity || (exports.PartyActivity = {}));
var PartyExternalLinks;
(function (PartyExternalLinks) {
    PartyExternalLinks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyExternalLinks = exports.PartyExternalLinks || (exports.PartyExternalLinks = {}));
var IdentityExternalLinks;
(function (IdentityExternalLinks) {
    IdentityExternalLinks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityExternalLinks = exports.IdentityExternalLinks || (exports.IdentityExternalLinks = {}));
var PartyHandle;
(function (PartyHandle) {
    PartyHandle.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.activity && { activity: PartyActivity.filterSensitiveLog(obj.activity)
        }),
    });
})(PartyHandle = exports.PartyHandle || (exports.PartyHandle = {}));
var IdentityGameActivity;
(function (IdentityGameActivity) {
    IdentityGameActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityGameActivity = exports.IdentityGameActivity || (exports.IdentityGameActivity = {}));
var IdentityStatus;
(function (IdentityStatus) {
    IdentityStatus["AWAY"] = "away";
    IdentityStatus["OFFLINE"] = "offline";
    IdentityStatus["ONLINE"] = "online";
})(IdentityStatus = exports.IdentityStatus || (exports.IdentityStatus = {}));
var IdentityPresence;
(function (IdentityPresence) {
    IdentityPresence.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityPresence = exports.IdentityPresence || (exports.IdentityPresence = {}));
var IdentityHandle;
(function (IdentityHandle) {
    IdentityHandle.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartyHandle.filterSensitiveLog(obj.party)
        }),
    });
})(IdentityHandle = exports.IdentityHandle || (exports.IdentityHandle = {}));
var PartyMemberStateIdle;
(function (PartyMemberStateIdle) {
    PartyMemberStateIdle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyMemberStateIdle = exports.PartyMemberStateIdle || (exports.PartyMemberStateIdle = {}));
var PartyMemberStateMatchmakerFindingLobby;
(function (PartyMemberStateMatchmakerFindingLobby) {
    PartyMemberStateMatchmakerFindingLobby.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyMemberStateMatchmakerFindingLobby = exports.PartyMemberStateMatchmakerFindingLobby || (exports.PartyMemberStateMatchmakerFindingLobby = {}));
var PartyMemberStateMatchmakerLobby;
(function (PartyMemberStateMatchmakerLobby) {
    PartyMemberStateMatchmakerLobby.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyMemberStateMatchmakerLobby = exports.PartyMemberStateMatchmakerLobby || (exports.PartyMemberStateMatchmakerLobby = {}));
var PartyMemberStateMatchmakerPending;
(function (PartyMemberStateMatchmakerPending) {
    PartyMemberStateMatchmakerPending.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyMemberStateMatchmakerPending = exports.PartyMemberStateMatchmakerPending || (exports.PartyMemberStateMatchmakerPending = {}));
var PartyMemberState;
(function (PartyMemberState) {
    PartyMemberState.visit = (value, visitor) => {
        if (value.idle !== undefined)
            return visitor.idle(value.idle);
        if (value.matchmakerPending !== undefined)
            return visitor.matchmakerPending(value.matchmakerPending);
        if (value.matchmakerFindingLobby !== undefined)
            return visitor.matchmakerFindingLobby(value.matchmakerFindingLobby);
        if (value.matchmakerLobby !== undefined)
            return visitor.matchmakerLobby(value.matchmakerLobby);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    PartyMemberState.filterSensitiveLog = (obj) => {
        if (obj.idle !== undefined)
            return { idle: PartyMemberStateIdle.filterSensitiveLog(obj.idle)
            };
        if (obj.matchmakerPending !== undefined)
            return { matchmakerPending: PartyMemberStateMatchmakerPending.filterSensitiveLog(obj.matchmakerPending)
            };
        if (obj.matchmakerFindingLobby !== undefined)
            return { matchmakerFindingLobby: PartyMemberStateMatchmakerFindingLobby.filterSensitiveLog(obj.matchmakerFindingLobby)
            };
        if (obj.matchmakerLobby !== undefined)
            return { matchmakerLobby: PartyMemberStateMatchmakerLobby.filterSensitiveLog(obj.matchmakerLobby)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(PartyMemberState = exports.PartyMemberState || (exports.PartyMemberState = {}));
var PartyMemberSummary;
(function (PartyMemberSummary) {
    PartyMemberSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
        }),
        ...(obj.state && { state: PartyMemberState.filterSensitiveLog(obj.state)
        }),
    });
})(PartyMemberSummary = exports.PartyMemberSummary || (exports.PartyMemberSummary = {}));
var PartyPublicity;
(function (PartyPublicity) {
    PartyPublicity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyPublicity = exports.PartyPublicity || (exports.PartyPublicity = {}));
var PartySummary;
(function (PartySummary) {
    PartySummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.activity && { activity: PartyActivity.filterSensitiveLog(obj.activity)
        }),
        ...(obj.members && { members: obj.members.map(item => PartyMemberSummary.filterSensitiveLog(item))
        }),
    });
})(PartySummary = exports.PartySummary || (exports.PartySummary = {}));
var GetPartyFromInviteOutput;
(function (GetPartyFromInviteOutput) {
    GetPartyFromInviteOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
        }),
    });
})(GetPartyFromInviteOutput = exports.GetPartyFromInviteOutput || (exports.GetPartyFromInviteOutput = {}));
var GetPartyProfileInput;
(function (GetPartyProfileInput) {
    GetPartyProfileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartyProfileInput = exports.GetPartyProfileInput || (exports.GetPartyProfileInput = {}));
var PartyInviteAlias;
(function (PartyInviteAlias) {
    PartyInviteAlias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyInviteAlias = exports.PartyInviteAlias || (exports.PartyInviteAlias = {}));
var PartyInviteExternalLinks;
(function (PartyInviteExternalLinks) {
    PartyInviteExternalLinks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyInviteExternalLinks = exports.PartyInviteExternalLinks || (exports.PartyInviteExternalLinks = {}));
var PartyInvite;
(function (PartyInvite) {
    PartyInvite.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.token && { token: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(PartyInvite = exports.PartyInvite || (exports.PartyInvite = {}));
var PartyProfile;
(function (PartyProfile) {
    PartyProfile.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.activity && { activity: PartyActivity.filterSensitiveLog(obj.activity)
        }),
        ...(obj.members && { members: obj.members.map(item => PartyMemberSummary.filterSensitiveLog(item))
        }),
        ...(obj.invites && { invites: obj.invites.map(item => PartyInvite.filterSensitiveLog(item))
        }),
    });
})(PartyProfile = exports.PartyProfile || (exports.PartyProfile = {}));
var WatchResponse;
(function (WatchResponse) {
    WatchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WatchResponse = exports.WatchResponse || (exports.WatchResponse = {}));
var GetPartyProfileOutput;
(function (GetPartyProfileOutput) {
    GetPartyProfileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartyProfile.filterSensitiveLog(obj.party)
        }),
    });
})(GetPartyProfileOutput = exports.GetPartyProfileOutput || (exports.GetPartyProfileOutput = {}));
var GetPartySelfProfileInput;
(function (GetPartySelfProfileInput) {
    GetPartySelfProfileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartySelfProfileInput = exports.GetPartySelfProfileInput || (exports.GetPartySelfProfileInput = {}));
var GetPartySelfProfileOutput;
(function (GetPartySelfProfileOutput) {
    GetPartySelfProfileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartyProfile.filterSensitiveLog(obj.party)
        }),
    });
})(GetPartySelfProfileOutput = exports.GetPartySelfProfileOutput || (exports.GetPartySelfProfileOutput = {}));
var GetPartySelfSummaryInput;
(function (GetPartySelfSummaryInput) {
    GetPartySelfSummaryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartySelfSummaryInput = exports.GetPartySelfSummaryInput || (exports.GetPartySelfSummaryInput = {}));
var GetPartySelfSummaryOutput;
(function (GetPartySelfSummaryOutput) {
    GetPartySelfSummaryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
        }),
    });
})(GetPartySelfSummaryOutput = exports.GetPartySelfSummaryOutput || (exports.GetPartySelfSummaryOutput = {}));
var GetPartySummaryInput;
(function (GetPartySummaryInput) {
    GetPartySummaryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartySummaryInput = exports.GetPartySummaryInput || (exports.GetPartySummaryInput = {}));
var GetPartySummaryOutput;
(function (GetPartySummaryOutput) {
    GetPartySummaryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
        }),
    });
})(GetPartySummaryOutput = exports.GetPartySummaryOutput || (exports.GetPartySummaryOutput = {}));
var JoinPartyInvite;
(function (JoinPartyInvite) {
    JoinPartyInvite.visit = (value, visitor) => {
        if (value.partyId !== undefined)
            return visitor.partyId(value.partyId);
        if (value.token !== undefined)
            return visitor.token(value.token);
        if (value.alias !== undefined)
            return visitor.alias(value.alias);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    JoinPartyInvite.filterSensitiveLog = (obj) => {
        if (obj.partyId !== undefined)
            return { partyId: obj.partyId
            };
        if (obj.token !== undefined)
            return { token: smithy_client_1.SENSITIVE_STRING
            };
        if (obj.alias !== undefined)
            return { alias: obj.alias
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(JoinPartyInvite = exports.JoinPartyInvite || (exports.JoinPartyInvite = {}));
var JoinPartyInput;
(function (JoinPartyInput) {
    JoinPartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.invite && { invite: JoinPartyInvite.filterSensitiveLog(obj.invite)
        }),
    });
})(JoinPartyInput = exports.JoinPartyInput || (exports.JoinPartyInput = {}));
var JoinPartyOutput;
(function (JoinPartyOutput) {
    JoinPartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JoinPartyOutput = exports.JoinPartyOutput || (exports.JoinPartyOutput = {}));
var KickMemberInput;
(function (KickMemberInput) {
    KickMemberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KickMemberInput = exports.KickMemberInput || (exports.KickMemberInput = {}));
var KickMemberOutput;
(function (KickMemberOutput) {
    KickMemberOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KickMemberOutput = exports.KickMemberOutput || (exports.KickMemberOutput = {}));
var LeavePartyInput;
(function (LeavePartyInput) {
    LeavePartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LeavePartyInput = exports.LeavePartyInput || (exports.LeavePartyInput = {}));
var LeavePartyOutput;
(function (LeavePartyOutput) {
    LeavePartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LeavePartyOutput = exports.LeavePartyOutput || (exports.LeavePartyOutput = {}));
var RevokePartyInviteInput;
(function (RevokePartyInviteInput) {
    RevokePartyInviteInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokePartyInviteInput = exports.RevokePartyInviteInput || (exports.RevokePartyInviteInput = {}));
var RevokePartyInviteOutput;
(function (RevokePartyInviteOutput) {
    RevokePartyInviteOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokePartyInviteOutput = exports.RevokePartyInviteOutput || (exports.RevokePartyInviteOutput = {}));
var SendJoinRequestInput;
(function (SendJoinRequestInput) {
    SendJoinRequestInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendJoinRequestInput = exports.SendJoinRequestInput || (exports.SendJoinRequestInput = {}));
var SendJoinRequestOutput;
(function (SendJoinRequestOutput) {
    SendJoinRequestOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendJoinRequestOutput = exports.SendJoinRequestOutput || (exports.SendJoinRequestOutput = {}));
var SetPartyPublicityInput;
(function (SetPartyPublicityInput) {
    SetPartyPublicityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPartyPublicityInput = exports.SetPartyPublicityInput || (exports.SetPartyPublicityInput = {}));
var SetPartyPublicityOutput;
(function (SetPartyPublicityOutput) {
    SetPartyPublicityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPartyPublicityOutput = exports.SetPartyPublicityOutput || (exports.SetPartyPublicityOutput = {}));
var TransferPartyOwnershipInput;
(function (TransferPartyOwnershipInput) {
    TransferPartyOwnershipInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferPartyOwnershipInput = exports.TransferPartyOwnershipInput || (exports.TransferPartyOwnershipInput = {}));
var TransferPartyOwnershipOutput;
(function (TransferPartyOwnershipOutput) {
    TransferPartyOwnershipOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferPartyOwnershipOutput = exports.TransferPartyOwnershipOutput || (exports.TransferPartyOwnershipOutput = {}));
var SetPartyToIdleInput;
(function (SetPartyToIdleInput) {
    SetPartyToIdleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPartyToIdleInput = exports.SetPartyToIdleInput || (exports.SetPartyToIdleInput = {}));
var SetPartyToIdleOutput;
(function (SetPartyToIdleOutput) {
    SetPartyToIdleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPartyToIdleOutput = exports.SetPartyToIdleOutput || (exports.SetPartyToIdleOutput = {}));
var FindMatchmakerLobbyForPartyInput;
(function (FindMatchmakerLobbyForPartyInput) {
    FindMatchmakerLobbyForPartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindMatchmakerLobbyForPartyInput = exports.FindMatchmakerLobbyForPartyInput || (exports.FindMatchmakerLobbyForPartyInput = {}));
var FindMatchmakerLobbyForPartyOutput;
(function (FindMatchmakerLobbyForPartyOutput) {
    FindMatchmakerLobbyForPartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindMatchmakerLobbyForPartyOutput = exports.FindMatchmakerLobbyForPartyOutput || (exports.FindMatchmakerLobbyForPartyOutput = {}));
var JoinMatchmakerLobbyForPartyInput;
(function (JoinMatchmakerLobbyForPartyInput) {
    JoinMatchmakerLobbyForPartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JoinMatchmakerLobbyForPartyInput = exports.JoinMatchmakerLobbyForPartyInput || (exports.JoinMatchmakerLobbyForPartyInput = {}));
var JoinMatchmakerLobbyForPartyOutput;
(function (JoinMatchmakerLobbyForPartyOutput) {
    JoinMatchmakerLobbyForPartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JoinMatchmakerLobbyForPartyOutput = exports.JoinMatchmakerLobbyForPartyOutput || (exports.JoinMatchmakerLobbyForPartyOutput = {}));
var RequestMatchmakerPlayerInput;
(function (RequestMatchmakerPlayerInput) {
    RequestMatchmakerPlayerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestMatchmakerPlayerInput = exports.RequestMatchmakerPlayerInput || (exports.RequestMatchmakerPlayerInput = {}));
var RequestMatchmakerPlayerOutput;
(function (RequestMatchmakerPlayerOutput) {
    RequestMatchmakerPlayerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestMatchmakerPlayerOutput = exports.RequestMatchmakerPlayerOutput || (exports.RequestMatchmakerPlayerOutput = {}));
class BadRequestError extends PartyServiceServiceException_1.PartyServiceServiceException {
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
class ForbiddenError extends PartyServiceServiceException_1.PartyServiceServiceException {
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
class InternalError extends PartyServiceServiceException_1.PartyServiceServiceException {
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
class NotFoundError extends PartyServiceServiceException_1.PartyServiceServiceException {
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
class RateLimitError extends PartyServiceServiceException_1.PartyServiceServiceException {
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
class UnauthorizedError extends PartyServiceServiceException_1.PartyServiceServiceException {
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
