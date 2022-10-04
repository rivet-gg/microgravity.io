"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatTopicParty = exports.ChatTopicGroup = exports.GroupHandle = exports.ChatTopicDirect = exports.ChatMessage = exports.ChatMessageBody = exports.ChatMessageBodyText = exports.ChatMessageBodyPartyLeave = exports.ChatMessageBodyPartyJoinRequest = exports.ChatMessageBodyPartyJoin = exports.ChatMessageBodyPartyInvite = exports.ChatMessageBodyPartyActivityChange = exports.ChatMessageBodyIdentityFollow = exports.ChatMessageBodyGroupLeave = exports.ChatMessageBodyGroupJoin = exports.ChatMessageBodyChatCreate = exports.ChatThreadExternalLinks = exports.WatchEventsInput = exports.CompleteIdentityAvatarUploadOutput = exports.CompleteIdentityAvatarUploadInput = exports.CompleteGameLinkOutput = exports.CompleteGameLinkInput = exports.ListActivitiesOutput = exports.WatchResponse = exports.GroupSummary = exports.GroupPublicity = exports.GroupExternalLinks = exports.PartySummary = exports.PartyPublicity = exports.PartyPublicityLevel = exports.PartyMemberSummary = exports.PartyMemberState = exports.PartyMemberStateMatchmakerPending = exports.PartyMemberStateMatchmakerLobby = exports.PartyMemberStateMatchmakerFindingLobby = exports.PartyMemberStateIdle = exports.IdentityHandle = exports.IdentityPresence = exports.IdentityStatus = exports.IdentityGameActivity = exports.PartyHandle = exports.PartyExternalLinks = exports.PartyActivity = exports.PartyActivityMatchmakerLobby = exports.PartyMatchmakerLobby = exports.PartyActivityMatchmakerFindingLobby = exports.PartyActivityIdle = exports.IdentityExternalLinks = exports.GameHandle = exports.ListActivitiesInput = void 0;
exports.SearchIdentitiesOutput = exports.SearchIdentitiesInput = exports.RemoveIdentityGameActivityOutput = exports.RemoveIdentityGameActivityInput = exports.PrepareIdentityAvatarUploadOutput = exports.UploadPresignedRequest = exports.PrepareIdentityAvatarUploadInput = exports.ListFriendsOutput = exports.ListFriendsInput = exports.ListFollowingOutput = exports.ListFollowingInput = exports.ListFollowersOutput = exports.ListFollowersInput = exports.GetIdentitySelfProfileOutput = exports.GetIdentitySelfProfileInput = exports.GetIdentityProfileOutput = exports.GetIdentityProfileInput = exports.GetGameLinkOutput = exports.GameLinkStatus = exports.GetGameLinkNewIdentity = exports.GetGameLinkInput = exports.FollowIdentityOutput = exports.FollowIdentityInput = exports.WatchEventsOutput = exports.GlobalEvent = exports.GlobalEventNotification = exports.GlobalEventKind = exports.GlobalEventPartyUpdate = exports.GlobalEventMatchmakerLobbyJoin = exports.MatchmakerLobbyJoinInfo = exports.MatchmakerLobbyJoinInfoRegion = exports.MatchmakerLobbyJoinInfoPort = exports.MatchmakerLobbyJoinInfoPortRange = exports.MatchmakerLobbyJoinInfoPlayer = exports.GlobalEventIdentityUpdate = exports.IdentityProfile = exports.IdentityLinkedAccount = exports.IdentityEmailLinkedAccount = exports.IdentityGroup = exports.GameStatSummary = exports.GameStat = exports.GameStatConfig = exports.GameStatSortingMethod = exports.GameStatFormatMethod = exports.GameStatAggregationMethod = exports.IdentityDevState = exports.GlobalEventChatRead = exports.GlobalEventChatMessage = exports.ChatThread = exports.ChatTopic = void 0;
exports.UnauthorizedError = exports.RateLimitError = exports.NotFoundError = exports.InternalError = exports.ForbiddenError = exports.BadRequestError = exports.PrepareGameLinkOutput = exports.PrepareGameLinkInput = exports.ValidateIdentityProfileOutput = exports.ValidationError = exports.ValidateIdentityProfileInput = exports.UpdateIdentityStatusOutput = exports.UpdateIdentityStatusInput = exports.UpdateIdentityProfileOutput = exports.UpdateIdentityProfileInput = exports.UnfollowIdentityOutput = exports.UnfollowIdentityInput = exports.SignupForBetaOutput = exports.SignupForBetaInput = exports.SetupIdentityOutput = exports.SetupIdentityInput = exports.SetIdentityGameActivityOutput = exports.SetIdentityGameActivityInput = exports.UpdateIdentityGameActivity = void 0;
const IdentityServiceServiceException_1 = require("./IdentityServiceServiceException");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ListActivitiesInput;
(function (ListActivitiesInput) {
    ListActivitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActivitiesInput = exports.ListActivitiesInput || (exports.ListActivitiesInput = {}));
var GameHandle;
(function (GameHandle) {
    GameHandle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameHandle = exports.GameHandle || (exports.GameHandle = {}));
var IdentityExternalLinks;
(function (IdentityExternalLinks) {
    IdentityExternalLinks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityExternalLinks = exports.IdentityExternalLinks || (exports.IdentityExternalLinks = {}));
var PartyActivityIdle;
(function (PartyActivityIdle) {
    PartyActivityIdle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartyActivityIdle = exports.PartyActivityIdle || (exports.PartyActivityIdle = {}));
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
var PartyPublicityLevel;
(function (PartyPublicityLevel) {
    PartyPublicityLevel["JOIN"] = "join";
    PartyPublicityLevel["NONE"] = "none";
    PartyPublicityLevel["VIEW"] = "view";
})(PartyPublicityLevel = exports.PartyPublicityLevel || (exports.PartyPublicityLevel = {}));
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
var GroupExternalLinks;
(function (GroupExternalLinks) {
    GroupExternalLinks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupExternalLinks = exports.GroupExternalLinks || (exports.GroupExternalLinks = {}));
var GroupPublicity;
(function (GroupPublicity) {
    GroupPublicity["CLOSED"] = "closed";
    GroupPublicity["OPEN"] = "open";
})(GroupPublicity = exports.GroupPublicity || (exports.GroupPublicity = {}));
var GroupSummary;
(function (GroupSummary) {
    GroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupSummary = exports.GroupSummary || (exports.GroupSummary = {}));
var WatchResponse;
(function (WatchResponse) {
    WatchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WatchResponse = exports.WatchResponse || (exports.WatchResponse = {}));
var ListActivitiesOutput;
(function (ListActivitiesOutput) {
    ListActivitiesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identities && { identities: obj.identities.map(item => IdentityHandle.filterSensitiveLog(item))
        }),
        ...(obj.parties && { parties: obj.parties.map(item => PartySummary.filterSensitiveLog(item))
        }),
        ...(obj.suggestedPlayers && { suggestedPlayers: obj.suggestedPlayers.map(item => IdentityHandle.filterSensitiveLog(item))
        }),
    });
})(ListActivitiesOutput = exports.ListActivitiesOutput || (exports.ListActivitiesOutput = {}));
var CompleteGameLinkInput;
(function (CompleteGameLinkInput) {
    CompleteGameLinkInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identityLinkToken && { identityLinkToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(CompleteGameLinkInput = exports.CompleteGameLinkInput || (exports.CompleteGameLinkInput = {}));
var CompleteGameLinkOutput;
(function (CompleteGameLinkOutput) {
    CompleteGameLinkOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteGameLinkOutput = exports.CompleteGameLinkOutput || (exports.CompleteGameLinkOutput = {}));
var CompleteIdentityAvatarUploadInput;
(function (CompleteIdentityAvatarUploadInput) {
    CompleteIdentityAvatarUploadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteIdentityAvatarUploadInput = exports.CompleteIdentityAvatarUploadInput || (exports.CompleteIdentityAvatarUploadInput = {}));
var CompleteIdentityAvatarUploadOutput;
(function (CompleteIdentityAvatarUploadOutput) {
    CompleteIdentityAvatarUploadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteIdentityAvatarUploadOutput = exports.CompleteIdentityAvatarUploadOutput || (exports.CompleteIdentityAvatarUploadOutput = {}));
var WatchEventsInput;
(function (WatchEventsInput) {
    WatchEventsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WatchEventsInput = exports.WatchEventsInput || (exports.WatchEventsInput = {}));
var ChatThreadExternalLinks;
(function (ChatThreadExternalLinks) {
    ChatThreadExternalLinks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChatThreadExternalLinks = exports.ChatThreadExternalLinks || (exports.ChatThreadExternalLinks = {}));
var ChatMessageBodyChatCreate;
(function (ChatMessageBodyChatCreate) {
    ChatMessageBodyChatCreate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChatMessageBodyChatCreate = exports.ChatMessageBodyChatCreate || (exports.ChatMessageBodyChatCreate = {}));
var ChatMessageBodyGroupJoin;
(function (ChatMessageBodyGroupJoin) {
    ChatMessageBodyGroupJoin.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
        }),
    });
})(ChatMessageBodyGroupJoin = exports.ChatMessageBodyGroupJoin || (exports.ChatMessageBodyGroupJoin = {}));
var ChatMessageBodyGroupLeave;
(function (ChatMessageBodyGroupLeave) {
    ChatMessageBodyGroupLeave.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
        }),
    });
})(ChatMessageBodyGroupLeave = exports.ChatMessageBodyGroupLeave || (exports.ChatMessageBodyGroupLeave = {}));
var ChatMessageBodyIdentityFollow;
(function (ChatMessageBodyIdentityFollow) {
    ChatMessageBodyIdentityFollow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChatMessageBodyIdentityFollow = exports.ChatMessageBodyIdentityFollow || (exports.ChatMessageBodyIdentityFollow = {}));
var ChatMessageBodyPartyActivityChange;
(function (ChatMessageBodyPartyActivityChange) {
    ChatMessageBodyPartyActivityChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChatMessageBodyPartyActivityChange = exports.ChatMessageBodyPartyActivityChange || (exports.ChatMessageBodyPartyActivityChange = {}));
var ChatMessageBodyPartyInvite;
(function (ChatMessageBodyPartyInvite) {
    ChatMessageBodyPartyInvite.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sender && { sender: IdentityHandle.filterSensitiveLog(obj.sender)
        }),
        ...(obj.party && { party: PartyHandle.filterSensitiveLog(obj.party)
        }),
        ...(obj.inviteToken && { inviteToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(ChatMessageBodyPartyInvite = exports.ChatMessageBodyPartyInvite || (exports.ChatMessageBodyPartyInvite = {}));
var ChatMessageBodyPartyJoin;
(function (ChatMessageBodyPartyJoin) {
    ChatMessageBodyPartyJoin.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
        }),
    });
})(ChatMessageBodyPartyJoin = exports.ChatMessageBodyPartyJoin || (exports.ChatMessageBodyPartyJoin = {}));
var ChatMessageBodyPartyJoinRequest;
(function (ChatMessageBodyPartyJoinRequest) {
    ChatMessageBodyPartyJoinRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sender && { sender: IdentityHandle.filterSensitiveLog(obj.sender)
        }),
    });
})(ChatMessageBodyPartyJoinRequest = exports.ChatMessageBodyPartyJoinRequest || (exports.ChatMessageBodyPartyJoinRequest = {}));
var ChatMessageBodyPartyLeave;
(function (ChatMessageBodyPartyLeave) {
    ChatMessageBodyPartyLeave.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
        }),
    });
})(ChatMessageBodyPartyLeave = exports.ChatMessageBodyPartyLeave || (exports.ChatMessageBodyPartyLeave = {}));
var ChatMessageBodyText;
(function (ChatMessageBodyText) {
    ChatMessageBodyText.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.sender && { sender: IdentityHandle.filterSensitiveLog(obj.sender)
        }),
    });
})(ChatMessageBodyText = exports.ChatMessageBodyText || (exports.ChatMessageBodyText = {}));
var ChatMessageBody;
(function (ChatMessageBody) {
    ChatMessageBody.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.chatCreate !== undefined)
            return visitor.chatCreate(value.chatCreate);
        if (value.identityFollow !== undefined)
            return visitor.identityFollow(value.identityFollow);
        if (value.groupJoin !== undefined)
            return visitor.groupJoin(value.groupJoin);
        if (value.groupLeave !== undefined)
            return visitor.groupLeave(value.groupLeave);
        if (value.partyInvite !== undefined)
            return visitor.partyInvite(value.partyInvite);
        if (value.partyJoinRequest !== undefined)
            return visitor.partyJoinRequest(value.partyJoinRequest);
        if (value.partyJoin !== undefined)
            return visitor.partyJoin(value.partyJoin);
        if (value.partyLeave !== undefined)
            return visitor.partyLeave(value.partyLeave);
        if (value.partyActivityChange !== undefined)
            return visitor.partyActivityChange(value.partyActivityChange);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    ChatMessageBody.filterSensitiveLog = (obj) => {
        if (obj.text !== undefined)
            return { text: ChatMessageBodyText.filterSensitiveLog(obj.text)
            };
        if (obj.chatCreate !== undefined)
            return { chatCreate: ChatMessageBodyChatCreate.filterSensitiveLog(obj.chatCreate)
            };
        if (obj.identityFollow !== undefined)
            return { identityFollow: ChatMessageBodyIdentityFollow.filterSensitiveLog(obj.identityFollow)
            };
        if (obj.groupJoin !== undefined)
            return { groupJoin: ChatMessageBodyGroupJoin.filterSensitiveLog(obj.groupJoin)
            };
        if (obj.groupLeave !== undefined)
            return { groupLeave: ChatMessageBodyGroupLeave.filterSensitiveLog(obj.groupLeave)
            };
        if (obj.partyInvite !== undefined)
            return { partyInvite: ChatMessageBodyPartyInvite.filterSensitiveLog(obj.partyInvite)
            };
        if (obj.partyJoinRequest !== undefined)
            return { partyJoinRequest: ChatMessageBodyPartyJoinRequest.filterSensitiveLog(obj.partyJoinRequest)
            };
        if (obj.partyJoin !== undefined)
            return { partyJoin: ChatMessageBodyPartyJoin.filterSensitiveLog(obj.partyJoin)
            };
        if (obj.partyLeave !== undefined)
            return { partyLeave: ChatMessageBodyPartyLeave.filterSensitiveLog(obj.partyLeave)
            };
        if (obj.partyActivityChange !== undefined)
            return { partyActivityChange: ChatMessageBodyPartyActivityChange.filterSensitiveLog(obj.partyActivityChange)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(ChatMessageBody = exports.ChatMessageBody || (exports.ChatMessageBody = {}));
var ChatMessage;
(function (ChatMessage) {
    ChatMessage.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.body && { body: ChatMessageBody.filterSensitiveLog(obj.body)
        }),
    });
})(ChatMessage = exports.ChatMessage || (exports.ChatMessage = {}));
var ChatTopicDirect;
(function (ChatTopicDirect) {
    ChatTopicDirect.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identityA && { identityA: IdentityHandle.filterSensitiveLog(obj.identityA)
        }),
        ...(obj.identityB && { identityB: IdentityHandle.filterSensitiveLog(obj.identityB)
        }),
    });
})(ChatTopicDirect = exports.ChatTopicDirect || (exports.ChatTopicDirect = {}));
var GroupHandle;
(function (GroupHandle) {
    GroupHandle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupHandle = exports.GroupHandle || (exports.GroupHandle = {}));
var ChatTopicGroup;
(function (ChatTopicGroup) {
    ChatTopicGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChatTopicGroup = exports.ChatTopicGroup || (exports.ChatTopicGroup = {}));
var ChatTopicParty;
(function (ChatTopicParty) {
    ChatTopicParty.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartyHandle.filterSensitiveLog(obj.party)
        }),
    });
})(ChatTopicParty = exports.ChatTopicParty || (exports.ChatTopicParty = {}));
var ChatTopic;
(function (ChatTopic) {
    ChatTopic.visit = (value, visitor) => {
        if (value.group !== undefined)
            return visitor.group(value.group);
        if (value.party !== undefined)
            return visitor.party(value.party);
        if (value.direct !== undefined)
            return visitor.direct(value.direct);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    ChatTopic.filterSensitiveLog = (obj) => {
        if (obj.group !== undefined)
            return { group: ChatTopicGroup.filterSensitiveLog(obj.group)
            };
        if (obj.party !== undefined)
            return { party: ChatTopicParty.filterSensitiveLog(obj.party)
            };
        if (obj.direct !== undefined)
            return { direct: ChatTopicDirect.filterSensitiveLog(obj.direct)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(ChatTopic = exports.ChatTopic || (exports.ChatTopic = {}));
var ChatThread;
(function (ChatThread) {
    ChatThread.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.topic && { topic: ChatTopic.filterSensitiveLog(obj.topic)
        }),
        ...(obj.tailMessage && { tailMessage: ChatMessage.filterSensitiveLog(obj.tailMessage)
        }),
    });
})(ChatThread = exports.ChatThread || (exports.ChatThread = {}));
var GlobalEventChatMessage;
(function (GlobalEventChatMessage) {
    GlobalEventChatMessage.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.thread && { thread: ChatThread.filterSensitiveLog(obj.thread)
        }),
    });
})(GlobalEventChatMessage = exports.GlobalEventChatMessage || (exports.GlobalEventChatMessage = {}));
var GlobalEventChatRead;
(function (GlobalEventChatRead) {
    GlobalEventChatRead.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalEventChatRead = exports.GlobalEventChatRead || (exports.GlobalEventChatRead = {}));
var IdentityDevState;
(function (IdentityDevState) {
    IdentityDevState["ACCEPTED"] = "accepted";
    IdentityDevState["INACTIVE"] = "inactive";
    IdentityDevState["PENDING"] = "pending";
})(IdentityDevState = exports.IdentityDevState || (exports.IdentityDevState = {}));
var GameStatAggregationMethod;
(function (GameStatAggregationMethod) {
    GameStatAggregationMethod["AVERAGE"] = "average";
    GameStatAggregationMethod["MAX"] = "max";
    GameStatAggregationMethod["MIN"] = "min";
    GameStatAggregationMethod["SUM"] = "sum";
})(GameStatAggregationMethod = exports.GameStatAggregationMethod || (exports.GameStatAggregationMethod = {}));
var GameStatFormatMethod;
(function (GameStatFormatMethod) {
    GameStatFormatMethod["DURACTION_SECOND"] = "duration_second";
    GameStatFormatMethod["DURATION_HUNDREDTH_SECOND"] = "duration_hundredth_second";
    GameStatFormatMethod["DURATION_MINUTE"] = "duration_minute";
    GameStatFormatMethod["FLOAT_1"] = "float_1";
    GameStatFormatMethod["FLOAT_2"] = "float_2";
    GameStatFormatMethod["FLOAT_3"] = "float_3";
    GameStatFormatMethod["INTEGER"] = "integer";
})(GameStatFormatMethod = exports.GameStatFormatMethod || (exports.GameStatFormatMethod = {}));
var GameStatSortingMethod;
(function (GameStatSortingMethod) {
    GameStatSortingMethod["ASC"] = "asc";
    GameStatSortingMethod["DESC"] = "desc";
})(GameStatSortingMethod = exports.GameStatSortingMethod || (exports.GameStatSortingMethod = {}));
var GameStatConfig;
(function (GameStatConfig) {
    GameStatConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameStatConfig = exports.GameStatConfig || (exports.GameStatConfig = {}));
var GameStat;
(function (GameStat) {
    GameStat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameStat = exports.GameStat || (exports.GameStat = {}));
var GameStatSummary;
(function (GameStatSummary) {
    GameStatSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameStatSummary = exports.GameStatSummary || (exports.GameStatSummary = {}));
var IdentityGroup;
(function (IdentityGroup) {
    IdentityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityGroup = exports.IdentityGroup || (exports.IdentityGroup = {}));
var IdentityEmailLinkedAccount;
(function (IdentityEmailLinkedAccount) {
    IdentityEmailLinkedAccount.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.email && { email: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(IdentityEmailLinkedAccount = exports.IdentityEmailLinkedAccount || (exports.IdentityEmailLinkedAccount = {}));
var IdentityLinkedAccount;
(function (IdentityLinkedAccount) {
    IdentityLinkedAccount.visit = (value, visitor) => {
        if (value.email !== undefined)
            return visitor.email(value.email);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    IdentityLinkedAccount.filterSensitiveLog = (obj) => {
        if (obj.email !== undefined)
            return { email: IdentityEmailLinkedAccount.filterSensitiveLog(obj.email)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(IdentityLinkedAccount = exports.IdentityLinkedAccount || (exports.IdentityLinkedAccount = {}));
var IdentityProfile;
(function (IdentityProfile) {
    IdentityProfile.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
        }),
        ...(obj.linkedAccounts && { linkedAccounts: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(IdentityProfile = exports.IdentityProfile || (exports.IdentityProfile = {}));
var GlobalEventIdentityUpdate;
(function (GlobalEventIdentityUpdate) {
    GlobalEventIdentityUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
        }),
    });
})(GlobalEventIdentityUpdate = exports.GlobalEventIdentityUpdate || (exports.GlobalEventIdentityUpdate = {}));
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
var GlobalEventMatchmakerLobbyJoin;
(function (GlobalEventMatchmakerLobbyJoin) {
    GlobalEventMatchmakerLobbyJoin.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.lobby && { lobby: MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
        }),
    });
})(GlobalEventMatchmakerLobbyJoin = exports.GlobalEventMatchmakerLobbyJoin || (exports.GlobalEventMatchmakerLobbyJoin = {}));
var GlobalEventPartyUpdate;
(function (GlobalEventPartyUpdate) {
    GlobalEventPartyUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
        }),
    });
})(GlobalEventPartyUpdate = exports.GlobalEventPartyUpdate || (exports.GlobalEventPartyUpdate = {}));
var GlobalEventKind;
(function (GlobalEventKind) {
    GlobalEventKind.visit = (value, visitor) => {
        if (value.chatMessage !== undefined)
            return visitor.chatMessage(value.chatMessage);
        if (value.chatRead !== undefined)
            return visitor.chatRead(value.chatRead);
        if (value.partyUpdate !== undefined)
            return visitor.partyUpdate(value.partyUpdate);
        if (value.identityUpdate !== undefined)
            return visitor.identityUpdate(value.identityUpdate);
        if (value.matchmakerLobbyJoin !== undefined)
            return visitor.matchmakerLobbyJoin(value.matchmakerLobbyJoin);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    GlobalEventKind.filterSensitiveLog = (obj) => {
        if (obj.chatMessage !== undefined)
            return { chatMessage: GlobalEventChatMessage.filterSensitiveLog(obj.chatMessage)
            };
        if (obj.chatRead !== undefined)
            return { chatRead: GlobalEventChatRead.filterSensitiveLog(obj.chatRead)
            };
        if (obj.partyUpdate !== undefined)
            return { partyUpdate: GlobalEventPartyUpdate.filterSensitiveLog(obj.partyUpdate)
            };
        if (obj.identityUpdate !== undefined)
            return { identityUpdate: GlobalEventIdentityUpdate.filterSensitiveLog(obj.identityUpdate)
            };
        if (obj.matchmakerLobbyJoin !== undefined)
            return { matchmakerLobbyJoin: GlobalEventMatchmakerLobbyJoin.filterSensitiveLog(obj.matchmakerLobbyJoin)
            };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: 'UNKNOWN' };
    };
})(GlobalEventKind = exports.GlobalEventKind || (exports.GlobalEventKind = {}));
var GlobalEventNotification;
(function (GlobalEventNotification) {
    GlobalEventNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalEventNotification = exports.GlobalEventNotification || (exports.GlobalEventNotification = {}));
var GlobalEvent;
(function (GlobalEvent) {
    GlobalEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.kind && { kind: GlobalEventKind.filterSensitiveLog(obj.kind)
        }),
    });
})(GlobalEvent = exports.GlobalEvent || (exports.GlobalEvent = {}));
var WatchEventsOutput;
(function (WatchEventsOutput) {
    WatchEventsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.events && { events: obj.events.map(item => GlobalEvent.filterSensitiveLog(item))
        }),
    });
})(WatchEventsOutput = exports.WatchEventsOutput || (exports.WatchEventsOutput = {}));
var FollowIdentityInput;
(function (FollowIdentityInput) {
    FollowIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FollowIdentityInput = exports.FollowIdentityInput || (exports.FollowIdentityInput = {}));
var FollowIdentityOutput;
(function (FollowIdentityOutput) {
    FollowIdentityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FollowIdentityOutput = exports.FollowIdentityOutput || (exports.FollowIdentityOutput = {}));
var GetGameLinkInput;
(function (GetGameLinkInput) {
    GetGameLinkInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identityLinkToken && { identityLinkToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(GetGameLinkInput = exports.GetGameLinkInput || (exports.GetGameLinkInput = {}));
var GetGameLinkNewIdentity;
(function (GetGameLinkNewIdentity) {
    GetGameLinkNewIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identityToken && { identityToken: smithy_client_1.SENSITIVE_STRING
        }),
        ...(obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
        }),
    });
})(GetGameLinkNewIdentity = exports.GetGameLinkNewIdentity || (exports.GetGameLinkNewIdentity = {}));
var GameLinkStatus;
(function (GameLinkStatus) {
    GameLinkStatus["COMPLETE"] = "complete";
    GameLinkStatus["INCOMPLETE"] = "incomplete";
    GameLinkStatus["REVOKED"] = "revoked";
})(GameLinkStatus = exports.GameLinkStatus || (exports.GameLinkStatus = {}));
var GetGameLinkOutput;
(function (GetGameLinkOutput) {
    GetGameLinkOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.newIdentity && { newIdentity: GetGameLinkNewIdentity.filterSensitiveLog(obj.newIdentity)
        }),
    });
})(GetGameLinkOutput = exports.GetGameLinkOutput || (exports.GetGameLinkOutput = {}));
var GetIdentityProfileInput;
(function (GetIdentityProfileInput) {
    GetIdentityProfileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityProfileInput = exports.GetIdentityProfileInput || (exports.GetIdentityProfileInput = {}));
var GetIdentityProfileOutput;
(function (GetIdentityProfileOutput) {
    GetIdentityProfileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
        }),
    });
})(GetIdentityProfileOutput = exports.GetIdentityProfileOutput || (exports.GetIdentityProfileOutput = {}));
var GetIdentitySelfProfileInput;
(function (GetIdentitySelfProfileInput) {
    GetIdentitySelfProfileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentitySelfProfileInput = exports.GetIdentitySelfProfileInput || (exports.GetIdentitySelfProfileInput = {}));
var GetIdentitySelfProfileOutput;
(function (GetIdentitySelfProfileOutput) {
    GetIdentitySelfProfileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
        }),
    });
})(GetIdentitySelfProfileOutput = exports.GetIdentitySelfProfileOutput || (exports.GetIdentitySelfProfileOutput = {}));
var ListFollowersInput;
(function (ListFollowersInput) {
    ListFollowersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFollowersInput = exports.ListFollowersInput || (exports.ListFollowersInput = {}));
var ListFollowersOutput;
(function (ListFollowersOutput) {
    ListFollowersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identities && { identities: obj.identities.map(item => IdentityHandle.filterSensitiveLog(item))
        }),
    });
})(ListFollowersOutput = exports.ListFollowersOutput || (exports.ListFollowersOutput = {}));
var ListFollowingInput;
(function (ListFollowingInput) {
    ListFollowingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFollowingInput = exports.ListFollowingInput || (exports.ListFollowingInput = {}));
var ListFollowingOutput;
(function (ListFollowingOutput) {
    ListFollowingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identities && { identities: obj.identities.map(item => IdentityHandle.filterSensitiveLog(item))
        }),
    });
})(ListFollowingOutput = exports.ListFollowingOutput || (exports.ListFollowingOutput = {}));
var ListFriendsInput;
(function (ListFriendsInput) {
    ListFriendsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFriendsInput = exports.ListFriendsInput || (exports.ListFriendsInput = {}));
var ListFriendsOutput;
(function (ListFriendsOutput) {
    ListFriendsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identities && { identities: obj.identities.map(item => IdentityHandle.filterSensitiveLog(item))
        }),
    });
})(ListFriendsOutput = exports.ListFriendsOutput || (exports.ListFriendsOutput = {}));
var PrepareIdentityAvatarUploadInput;
(function (PrepareIdentityAvatarUploadInput) {
    PrepareIdentityAvatarUploadInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrepareIdentityAvatarUploadInput = exports.PrepareIdentityAvatarUploadInput || (exports.PrepareIdentityAvatarUploadInput = {}));
var UploadPresignedRequest;
(function (UploadPresignedRequest) {
    UploadPresignedRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadPresignedRequest = exports.UploadPresignedRequest || (exports.UploadPresignedRequest = {}));
var PrepareIdentityAvatarUploadOutput;
(function (PrepareIdentityAvatarUploadOutput) {
    PrepareIdentityAvatarUploadOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrepareIdentityAvatarUploadOutput = exports.PrepareIdentityAvatarUploadOutput || (exports.PrepareIdentityAvatarUploadOutput = {}));
var RemoveIdentityGameActivityInput;
(function (RemoveIdentityGameActivityInput) {
    RemoveIdentityGameActivityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveIdentityGameActivityInput = exports.RemoveIdentityGameActivityInput || (exports.RemoveIdentityGameActivityInput = {}));
var RemoveIdentityGameActivityOutput;
(function (RemoveIdentityGameActivityOutput) {
    RemoveIdentityGameActivityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveIdentityGameActivityOutput = exports.RemoveIdentityGameActivityOutput || (exports.RemoveIdentityGameActivityOutput = {}));
var SearchIdentitiesInput;
(function (SearchIdentitiesInput) {
    SearchIdentitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchIdentitiesInput = exports.SearchIdentitiesInput || (exports.SearchIdentitiesInput = {}));
var SearchIdentitiesOutput;
(function (SearchIdentitiesOutput) {
    SearchIdentitiesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identities && { identities: obj.identities.map(item => IdentityHandle.filterSensitiveLog(item))
        }),
    });
})(SearchIdentitiesOutput = exports.SearchIdentitiesOutput || (exports.SearchIdentitiesOutput = {}));
var UpdateIdentityGameActivity;
(function (UpdateIdentityGameActivity) {
    UpdateIdentityGameActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityGameActivity = exports.UpdateIdentityGameActivity || (exports.UpdateIdentityGameActivity = {}));
var SetIdentityGameActivityInput;
(function (SetIdentityGameActivityInput) {
    SetIdentityGameActivityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIdentityGameActivityInput = exports.SetIdentityGameActivityInput || (exports.SetIdentityGameActivityInput = {}));
var SetIdentityGameActivityOutput;
(function (SetIdentityGameActivityOutput) {
    SetIdentityGameActivityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIdentityGameActivityOutput = exports.SetIdentityGameActivityOutput || (exports.SetIdentityGameActivityOutput = {}));
var SetupIdentityInput;
(function (SetupIdentityInput) {
    SetupIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.existingIdentityToken && { existingIdentityToken: smithy_client_1.SENSITIVE_STRING
        }),
    });
})(SetupIdentityInput = exports.SetupIdentityInput || (exports.SetupIdentityInput = {}));
var SetupIdentityOutput;
(function (SetupIdentityOutput) {
    SetupIdentityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identityToken && { identityToken: smithy_client_1.SENSITIVE_STRING
        }),
        ...(obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
        }),
    });
})(SetupIdentityOutput = exports.SetupIdentityOutput || (exports.SetupIdentityOutput = {}));
var SignupForBetaInput;
(function (SignupForBetaInput) {
    SignupForBetaInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignupForBetaInput = exports.SignupForBetaInput || (exports.SignupForBetaInput = {}));
var SignupForBetaOutput;
(function (SignupForBetaOutput) {
    SignupForBetaOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignupForBetaOutput = exports.SignupForBetaOutput || (exports.SignupForBetaOutput = {}));
var UnfollowIdentityInput;
(function (UnfollowIdentityInput) {
    UnfollowIdentityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnfollowIdentityInput = exports.UnfollowIdentityInput || (exports.UnfollowIdentityInput = {}));
var UnfollowIdentityOutput;
(function (UnfollowIdentityOutput) {
    UnfollowIdentityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnfollowIdentityOutput = exports.UnfollowIdentityOutput || (exports.UnfollowIdentityOutput = {}));
var UpdateIdentityProfileInput;
(function (UpdateIdentityProfileInput) {
    UpdateIdentityProfileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityProfileInput = exports.UpdateIdentityProfileInput || (exports.UpdateIdentityProfileInput = {}));
var UpdateIdentityProfileOutput;
(function (UpdateIdentityProfileOutput) {
    UpdateIdentityProfileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityProfileOutput = exports.UpdateIdentityProfileOutput || (exports.UpdateIdentityProfileOutput = {}));
var UpdateIdentityStatusInput;
(function (UpdateIdentityStatusInput) {
    UpdateIdentityStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityStatusInput = exports.UpdateIdentityStatusInput || (exports.UpdateIdentityStatusInput = {}));
var UpdateIdentityStatusOutput;
(function (UpdateIdentityStatusOutput) {
    UpdateIdentityStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIdentityStatusOutput = exports.UpdateIdentityStatusOutput || (exports.UpdateIdentityStatusOutput = {}));
var ValidateIdentityProfileInput;
(function (ValidateIdentityProfileInput) {
    ValidateIdentityProfileInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateIdentityProfileInput = exports.ValidateIdentityProfileInput || (exports.ValidateIdentityProfileInput = {}));
var ValidationError;
(function (ValidationError) {
    ValidationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var ValidateIdentityProfileOutput;
(function (ValidateIdentityProfileOutput) {
    ValidateIdentityProfileOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateIdentityProfileOutput = exports.ValidateIdentityProfileOutput || (exports.ValidateIdentityProfileOutput = {}));
var PrepareGameLinkInput;
(function (PrepareGameLinkInput) {
    PrepareGameLinkInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrepareGameLinkInput = exports.PrepareGameLinkInput || (exports.PrepareGameLinkInput = {}));
var PrepareGameLinkOutput;
(function (PrepareGameLinkOutput) {
    PrepareGameLinkOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrepareGameLinkOutput = exports.PrepareGameLinkOutput || (exports.PrepareGameLinkOutput = {}));
class BadRequestError extends IdentityServiceServiceException_1.IdentityServiceServiceException {
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
class ForbiddenError extends IdentityServiceServiceException_1.IdentityServiceServiceException {
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
class InternalError extends IdentityServiceServiceException_1.IdentityServiceServiceException {
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
class NotFoundError extends IdentityServiceServiceException_1.IdentityServiceServiceException {
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
class RateLimitError extends IdentityServiceServiceException_1.IdentityServiceServiceException {
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
class UnauthorizedError extends IdentityServiceServiceException_1.IdentityServiceServiceException {
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
