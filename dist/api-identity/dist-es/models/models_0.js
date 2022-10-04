import { __assign, __extends } from "tslib";
import { IdentityServiceServiceException as __BaseException } from "./IdentityServiceServiceException";
import { SENSITIVE_STRING, } from "@aws-sdk/smithy-client";
export var ListActivitiesInput;
(function (ListActivitiesInput) {
    ListActivitiesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActivitiesInput || (ListActivitiesInput = {}));
export var GameHandle;
(function (GameHandle) {
    GameHandle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameHandle || (GameHandle = {}));
export var IdentityExternalLinks;
(function (IdentityExternalLinks) {
    IdentityExternalLinks.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityExternalLinks || (IdentityExternalLinks = {}));
export var PartyActivityIdle;
(function (PartyActivityIdle) {
    PartyActivityIdle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyActivityIdle || (PartyActivityIdle = {}));
export var PartyActivityMatchmakerFindingLobby;
(function (PartyActivityMatchmakerFindingLobby) {
    PartyActivityMatchmakerFindingLobby.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyActivityMatchmakerFindingLobby || (PartyActivityMatchmakerFindingLobby = {}));
export var PartyMatchmakerLobby;
(function (PartyMatchmakerLobby) {
    PartyMatchmakerLobby.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyMatchmakerLobby || (PartyMatchmakerLobby = {}));
export var PartyActivityMatchmakerLobby;
(function (PartyActivityMatchmakerLobby) {
    PartyActivityMatchmakerLobby.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyActivityMatchmakerLobby || (PartyActivityMatchmakerLobby = {}));
export var PartyActivity;
(function (PartyActivity) {
    PartyActivity.visit = function (value, visitor) {
        if (value.idle !== undefined)
            return visitor.idle(value.idle);
        if (value.matchmakerFindingLobby !== undefined)
            return visitor.matchmakerFindingLobby(value.matchmakerFindingLobby);
        if (value.matchmakerLobby !== undefined)
            return visitor.matchmakerLobby(value.matchmakerLobby);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    PartyActivity.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(PartyActivity || (PartyActivity = {}));
export var PartyExternalLinks;
(function (PartyExternalLinks) {
    PartyExternalLinks.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyExternalLinks || (PartyExternalLinks = {}));
export var PartyHandle;
(function (PartyHandle) {
    PartyHandle.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.activity && { activity: PartyActivity.filterSensitiveLog(obj.activity)
    }))); };
})(PartyHandle || (PartyHandle = {}));
export var IdentityGameActivity;
(function (IdentityGameActivity) {
    IdentityGameActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityGameActivity || (IdentityGameActivity = {}));
export var IdentityStatus;
(function (IdentityStatus) {
    IdentityStatus["AWAY"] = "away";
    IdentityStatus["OFFLINE"] = "offline";
    IdentityStatus["ONLINE"] = "online";
})(IdentityStatus || (IdentityStatus = {}));
export var IdentityPresence;
(function (IdentityPresence) {
    IdentityPresence.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityPresence || (IdentityPresence = {}));
export var IdentityHandle;
(function (IdentityHandle) {
    IdentityHandle.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.party && { party: PartyHandle.filterSensitiveLog(obj.party)
    }))); };
})(IdentityHandle || (IdentityHandle = {}));
export var PartyMemberStateIdle;
(function (PartyMemberStateIdle) {
    PartyMemberStateIdle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyMemberStateIdle || (PartyMemberStateIdle = {}));
export var PartyMemberStateMatchmakerFindingLobby;
(function (PartyMemberStateMatchmakerFindingLobby) {
    PartyMemberStateMatchmakerFindingLobby.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyMemberStateMatchmakerFindingLobby || (PartyMemberStateMatchmakerFindingLobby = {}));
export var PartyMemberStateMatchmakerLobby;
(function (PartyMemberStateMatchmakerLobby) {
    PartyMemberStateMatchmakerLobby.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyMemberStateMatchmakerLobby || (PartyMemberStateMatchmakerLobby = {}));
export var PartyMemberStateMatchmakerPending;
(function (PartyMemberStateMatchmakerPending) {
    PartyMemberStateMatchmakerPending.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyMemberStateMatchmakerPending || (PartyMemberStateMatchmakerPending = {}));
export var PartyMemberState;
(function (PartyMemberState) {
    PartyMemberState.visit = function (value, visitor) {
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
    PartyMemberState.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(PartyMemberState || (PartyMemberState = {}));
export var PartyMemberSummary;
(function (PartyMemberSummary) {
    PartyMemberSummary.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
    })), (obj.state && { state: PartyMemberState.filterSensitiveLog(obj.state)
    }))); };
})(PartyMemberSummary || (PartyMemberSummary = {}));
export var PartyPublicityLevel;
(function (PartyPublicityLevel) {
    PartyPublicityLevel["JOIN"] = "join";
    PartyPublicityLevel["NONE"] = "none";
    PartyPublicityLevel["VIEW"] = "view";
})(PartyPublicityLevel || (PartyPublicityLevel = {}));
export var PartyPublicity;
(function (PartyPublicity) {
    PartyPublicity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartyPublicity || (PartyPublicity = {}));
export var PartySummary;
(function (PartySummary) {
    PartySummary.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.activity && { activity: PartyActivity.filterSensitiveLog(obj.activity)
    })), (obj.members && { members: obj.members.map(function (item) {
            return PartyMemberSummary.filterSensitiveLog(item);
        })
    }))); };
})(PartySummary || (PartySummary = {}));
export var GroupExternalLinks;
(function (GroupExternalLinks) {
    GroupExternalLinks.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupExternalLinks || (GroupExternalLinks = {}));
export var GroupPublicity;
(function (GroupPublicity) {
    GroupPublicity["CLOSED"] = "closed";
    GroupPublicity["OPEN"] = "open";
})(GroupPublicity || (GroupPublicity = {}));
export var GroupSummary;
(function (GroupSummary) {
    GroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupSummary || (GroupSummary = {}));
export var WatchResponse;
(function (WatchResponse) {
    WatchResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WatchResponse || (WatchResponse = {}));
export var ListActivitiesOutput;
(function (ListActivitiesOutput) {
    ListActivitiesOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.identities && { identities: obj.identities.map(function (item) {
            return IdentityHandle.filterSensitiveLog(item);
        })
    })), (obj.parties && { parties: obj.parties.map(function (item) {
            return PartySummary.filterSensitiveLog(item);
        })
    })), (obj.suggestedPlayers && { suggestedPlayers: obj.suggestedPlayers.map(function (item) {
            return IdentityHandle.filterSensitiveLog(item);
        })
    }))); };
})(ListActivitiesOutput || (ListActivitiesOutput = {}));
export var CompleteGameLinkInput;
(function (CompleteGameLinkInput) {
    CompleteGameLinkInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identityLinkToken && { identityLinkToken: SENSITIVE_STRING
    }))); };
})(CompleteGameLinkInput || (CompleteGameLinkInput = {}));
export var CompleteGameLinkOutput;
(function (CompleteGameLinkOutput) {
    CompleteGameLinkOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteGameLinkOutput || (CompleteGameLinkOutput = {}));
export var CompleteIdentityAvatarUploadInput;
(function (CompleteIdentityAvatarUploadInput) {
    CompleteIdentityAvatarUploadInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteIdentityAvatarUploadInput || (CompleteIdentityAvatarUploadInput = {}));
export var CompleteIdentityAvatarUploadOutput;
(function (CompleteIdentityAvatarUploadOutput) {
    CompleteIdentityAvatarUploadOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteIdentityAvatarUploadOutput || (CompleteIdentityAvatarUploadOutput = {}));
export var WatchEventsInput;
(function (WatchEventsInput) {
    WatchEventsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WatchEventsInput || (WatchEventsInput = {}));
export var ChatThreadExternalLinks;
(function (ChatThreadExternalLinks) {
    ChatThreadExternalLinks.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChatThreadExternalLinks || (ChatThreadExternalLinks = {}));
export var ChatMessageBodyChatCreate;
(function (ChatMessageBodyChatCreate) {
    ChatMessageBodyChatCreate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChatMessageBodyChatCreate || (ChatMessageBodyChatCreate = {}));
export var ChatMessageBodyGroupJoin;
(function (ChatMessageBodyGroupJoin) {
    ChatMessageBodyGroupJoin.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
    }))); };
})(ChatMessageBodyGroupJoin || (ChatMessageBodyGroupJoin = {}));
export var ChatMessageBodyGroupLeave;
(function (ChatMessageBodyGroupLeave) {
    ChatMessageBodyGroupLeave.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
    }))); };
})(ChatMessageBodyGroupLeave || (ChatMessageBodyGroupLeave = {}));
export var ChatMessageBodyIdentityFollow;
(function (ChatMessageBodyIdentityFollow) {
    ChatMessageBodyIdentityFollow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChatMessageBodyIdentityFollow || (ChatMessageBodyIdentityFollow = {}));
export var ChatMessageBodyPartyActivityChange;
(function (ChatMessageBodyPartyActivityChange) {
    ChatMessageBodyPartyActivityChange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChatMessageBodyPartyActivityChange || (ChatMessageBodyPartyActivityChange = {}));
export var ChatMessageBodyPartyInvite;
(function (ChatMessageBodyPartyInvite) {
    ChatMessageBodyPartyInvite.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.sender && { sender: IdentityHandle.filterSensitiveLog(obj.sender)
    })), (obj.party && { party: PartyHandle.filterSensitiveLog(obj.party)
    })), (obj.inviteToken && { inviteToken: SENSITIVE_STRING
    }))); };
})(ChatMessageBodyPartyInvite || (ChatMessageBodyPartyInvite = {}));
export var ChatMessageBodyPartyJoin;
(function (ChatMessageBodyPartyJoin) {
    ChatMessageBodyPartyJoin.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
    }))); };
})(ChatMessageBodyPartyJoin || (ChatMessageBodyPartyJoin = {}));
export var ChatMessageBodyPartyJoinRequest;
(function (ChatMessageBodyPartyJoinRequest) {
    ChatMessageBodyPartyJoinRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.sender && { sender: IdentityHandle.filterSensitiveLog(obj.sender)
    }))); };
})(ChatMessageBodyPartyJoinRequest || (ChatMessageBodyPartyJoinRequest = {}));
export var ChatMessageBodyPartyLeave;
(function (ChatMessageBodyPartyLeave) {
    ChatMessageBodyPartyLeave.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityHandle.filterSensitiveLog(obj.identity)
    }))); };
})(ChatMessageBodyPartyLeave || (ChatMessageBodyPartyLeave = {}));
export var ChatMessageBodyText;
(function (ChatMessageBodyText) {
    ChatMessageBodyText.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.sender && { sender: IdentityHandle.filterSensitiveLog(obj.sender)
    }))); };
})(ChatMessageBodyText || (ChatMessageBodyText = {}));
export var ChatMessageBody;
(function (ChatMessageBody) {
    ChatMessageBody.visit = function (value, visitor) {
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
    ChatMessageBody.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(ChatMessageBody || (ChatMessageBody = {}));
export var ChatMessage;
(function (ChatMessage) {
    ChatMessage.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.body && { body: ChatMessageBody.filterSensitiveLog(obj.body)
    }))); };
})(ChatMessage || (ChatMessage = {}));
export var ChatTopicDirect;
(function (ChatTopicDirect) {
    ChatTopicDirect.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.identityA && { identityA: IdentityHandle.filterSensitiveLog(obj.identityA)
    })), (obj.identityB && { identityB: IdentityHandle.filterSensitiveLog(obj.identityB)
    }))); };
})(ChatTopicDirect || (ChatTopicDirect = {}));
export var GroupHandle;
(function (GroupHandle) {
    GroupHandle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupHandle || (GroupHandle = {}));
export var ChatTopicGroup;
(function (ChatTopicGroup) {
    ChatTopicGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChatTopicGroup || (ChatTopicGroup = {}));
export var ChatTopicParty;
(function (ChatTopicParty) {
    ChatTopicParty.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.party && { party: PartyHandle.filterSensitiveLog(obj.party)
    }))); };
})(ChatTopicParty || (ChatTopicParty = {}));
export var ChatTopic;
(function (ChatTopic) {
    ChatTopic.visit = function (value, visitor) {
        if (value.group !== undefined)
            return visitor.group(value.group);
        if (value.party !== undefined)
            return visitor.party(value.party);
        if (value.direct !== undefined)
            return visitor.direct(value.direct);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    ChatTopic.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(ChatTopic || (ChatTopic = {}));
export var ChatThread;
(function (ChatThread) {
    ChatThread.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.topic && { topic: ChatTopic.filterSensitiveLog(obj.topic)
    })), (obj.tailMessage && { tailMessage: ChatMessage.filterSensitiveLog(obj.tailMessage)
    }))); };
})(ChatThread || (ChatThread = {}));
export var GlobalEventChatMessage;
(function (GlobalEventChatMessage) {
    GlobalEventChatMessage.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.thread && { thread: ChatThread.filterSensitiveLog(obj.thread)
    }))); };
})(GlobalEventChatMessage || (GlobalEventChatMessage = {}));
export var GlobalEventChatRead;
(function (GlobalEventChatRead) {
    GlobalEventChatRead.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GlobalEventChatRead || (GlobalEventChatRead = {}));
export var IdentityDevState;
(function (IdentityDevState) {
    IdentityDevState["ACCEPTED"] = "accepted";
    IdentityDevState["INACTIVE"] = "inactive";
    IdentityDevState["PENDING"] = "pending";
})(IdentityDevState || (IdentityDevState = {}));
export var GameStatAggregationMethod;
(function (GameStatAggregationMethod) {
    GameStatAggregationMethod["AVERAGE"] = "average";
    GameStatAggregationMethod["MAX"] = "max";
    GameStatAggregationMethod["MIN"] = "min";
    GameStatAggregationMethod["SUM"] = "sum";
})(GameStatAggregationMethod || (GameStatAggregationMethod = {}));
export var GameStatFormatMethod;
(function (GameStatFormatMethod) {
    GameStatFormatMethod["DURACTION_SECOND"] = "duration_second";
    GameStatFormatMethod["DURATION_HUNDREDTH_SECOND"] = "duration_hundredth_second";
    GameStatFormatMethod["DURATION_MINUTE"] = "duration_minute";
    GameStatFormatMethod["FLOAT_1"] = "float_1";
    GameStatFormatMethod["FLOAT_2"] = "float_2";
    GameStatFormatMethod["FLOAT_3"] = "float_3";
    GameStatFormatMethod["INTEGER"] = "integer";
})(GameStatFormatMethod || (GameStatFormatMethod = {}));
export var GameStatSortingMethod;
(function (GameStatSortingMethod) {
    GameStatSortingMethod["ASC"] = "asc";
    GameStatSortingMethod["DESC"] = "desc";
})(GameStatSortingMethod || (GameStatSortingMethod = {}));
export var GameStatConfig;
(function (GameStatConfig) {
    GameStatConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameStatConfig || (GameStatConfig = {}));
export var GameStat;
(function (GameStat) {
    GameStat.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameStat || (GameStat = {}));
export var GameStatSummary;
(function (GameStatSummary) {
    GameStatSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameStatSummary || (GameStatSummary = {}));
export var IdentityGroup;
(function (IdentityGroup) {
    IdentityGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityGroup || (IdentityGroup = {}));
export var IdentityEmailLinkedAccount;
(function (IdentityEmailLinkedAccount) {
    IdentityEmailLinkedAccount.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.email && { email: SENSITIVE_STRING
    }))); };
})(IdentityEmailLinkedAccount || (IdentityEmailLinkedAccount = {}));
export var IdentityLinkedAccount;
(function (IdentityLinkedAccount) {
    IdentityLinkedAccount.visit = function (value, visitor) {
        if (value.email !== undefined)
            return visitor.email(value.email);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    IdentityLinkedAccount.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.email !== undefined)
            return { email: IdentityEmailLinkedAccount.filterSensitiveLog(obj.email)
            };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(IdentityLinkedAccount || (IdentityLinkedAccount = {}));
export var IdentityProfile;
(function (IdentityProfile) {
    IdentityProfile.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
    })), (obj.linkedAccounts && { linkedAccounts: SENSITIVE_STRING
    }))); };
})(IdentityProfile || (IdentityProfile = {}));
export var GlobalEventIdentityUpdate;
(function (GlobalEventIdentityUpdate) {
    GlobalEventIdentityUpdate.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
    }))); };
})(GlobalEventIdentityUpdate || (GlobalEventIdentityUpdate = {}));
export var MatchmakerLobbyJoinInfoPlayer;
(function (MatchmakerLobbyJoinInfoPlayer) {
    MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.token && { token: SENSITIVE_STRING
    }))); };
})(MatchmakerLobbyJoinInfoPlayer || (MatchmakerLobbyJoinInfoPlayer = {}));
export var MatchmakerLobbyJoinInfoPortRange;
(function (MatchmakerLobbyJoinInfoPortRange) {
    MatchmakerLobbyJoinInfoPortRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakerLobbyJoinInfoPortRange || (MatchmakerLobbyJoinInfoPortRange = {}));
export var MatchmakerLobbyJoinInfoPort;
(function (MatchmakerLobbyJoinInfoPort) {
    MatchmakerLobbyJoinInfoPort.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakerLobbyJoinInfoPort || (MatchmakerLobbyJoinInfoPort = {}));
export var MatchmakerLobbyJoinInfoRegion;
(function (MatchmakerLobbyJoinInfoRegion) {
    MatchmakerLobbyJoinInfoRegion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakerLobbyJoinInfoRegion || (MatchmakerLobbyJoinInfoRegion = {}));
export var MatchmakerLobbyJoinInfo;
(function (MatchmakerLobbyJoinInfo) {
    MatchmakerLobbyJoinInfo.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.player && { player: MatchmakerLobbyJoinInfoPlayer.filterSensitiveLog(obj.player)
    }))); };
})(MatchmakerLobbyJoinInfo || (MatchmakerLobbyJoinInfo = {}));
export var GlobalEventMatchmakerLobbyJoin;
(function (GlobalEventMatchmakerLobbyJoin) {
    GlobalEventMatchmakerLobbyJoin.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.lobby && { lobby: MatchmakerLobbyJoinInfo.filterSensitiveLog(obj.lobby)
    }))); };
})(GlobalEventMatchmakerLobbyJoin || (GlobalEventMatchmakerLobbyJoin = {}));
export var GlobalEventPartyUpdate;
(function (GlobalEventPartyUpdate) {
    GlobalEventPartyUpdate.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.party && { party: PartySummary.filterSensitiveLog(obj.party)
    }))); };
})(GlobalEventPartyUpdate || (GlobalEventPartyUpdate = {}));
export var GlobalEventKind;
(function (GlobalEventKind) {
    GlobalEventKind.visit = function (value, visitor) {
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
    GlobalEventKind.filterSensitiveLog = function (obj) {
        var _a;
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
            return _a = {}, _a[obj.$unknown[0]] = 'UNKNOWN', _a;
    };
})(GlobalEventKind || (GlobalEventKind = {}));
export var GlobalEventNotification;
(function (GlobalEventNotification) {
    GlobalEventNotification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GlobalEventNotification || (GlobalEventNotification = {}));
export var GlobalEvent;
(function (GlobalEvent) {
    GlobalEvent.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.kind && { kind: GlobalEventKind.filterSensitiveLog(obj.kind)
    }))); };
})(GlobalEvent || (GlobalEvent = {}));
export var WatchEventsOutput;
(function (WatchEventsOutput) {
    WatchEventsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.events && { events: obj.events.map(function (item) {
            return GlobalEvent.filterSensitiveLog(item);
        })
    }))); };
})(WatchEventsOutput || (WatchEventsOutput = {}));
export var FollowIdentityInput;
(function (FollowIdentityInput) {
    FollowIdentityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FollowIdentityInput || (FollowIdentityInput = {}));
export var FollowIdentityOutput;
(function (FollowIdentityOutput) {
    FollowIdentityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FollowIdentityOutput || (FollowIdentityOutput = {}));
export var GetGameLinkInput;
(function (GetGameLinkInput) {
    GetGameLinkInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identityLinkToken && { identityLinkToken: SENSITIVE_STRING
    }))); };
})(GetGameLinkInput || (GetGameLinkInput = {}));
export var GetGameLinkNewIdentity;
(function (GetGameLinkNewIdentity) {
    GetGameLinkNewIdentity.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.identityToken && { identityToken: SENSITIVE_STRING
    })), (obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
    }))); };
})(GetGameLinkNewIdentity || (GetGameLinkNewIdentity = {}));
export var GameLinkStatus;
(function (GameLinkStatus) {
    GameLinkStatus["COMPLETE"] = "complete";
    GameLinkStatus["INCOMPLETE"] = "incomplete";
    GameLinkStatus["REVOKED"] = "revoked";
})(GameLinkStatus || (GameLinkStatus = {}));
export var GetGameLinkOutput;
(function (GetGameLinkOutput) {
    GetGameLinkOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.newIdentity && { newIdentity: GetGameLinkNewIdentity.filterSensitiveLog(obj.newIdentity)
    }))); };
})(GetGameLinkOutput || (GetGameLinkOutput = {}));
export var GetIdentityProfileInput;
(function (GetIdentityProfileInput) {
    GetIdentityProfileInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIdentityProfileInput || (GetIdentityProfileInput = {}));
export var GetIdentityProfileOutput;
(function (GetIdentityProfileOutput) {
    GetIdentityProfileOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
    }))); };
})(GetIdentityProfileOutput || (GetIdentityProfileOutput = {}));
export var GetIdentitySelfProfileInput;
(function (GetIdentitySelfProfileInput) {
    GetIdentitySelfProfileInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIdentitySelfProfileInput || (GetIdentitySelfProfileInput = {}));
export var GetIdentitySelfProfileOutput;
(function (GetIdentitySelfProfileOutput) {
    GetIdentitySelfProfileOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
    }))); };
})(GetIdentitySelfProfileOutput || (GetIdentitySelfProfileOutput = {}));
export var ListFollowersInput;
(function (ListFollowersInput) {
    ListFollowersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFollowersInput || (ListFollowersInput = {}));
export var ListFollowersOutput;
(function (ListFollowersOutput) {
    ListFollowersOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identities && { identities: obj.identities.map(function (item) {
            return IdentityHandle.filterSensitiveLog(item);
        })
    }))); };
})(ListFollowersOutput || (ListFollowersOutput = {}));
export var ListFollowingInput;
(function (ListFollowingInput) {
    ListFollowingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFollowingInput || (ListFollowingInput = {}));
export var ListFollowingOutput;
(function (ListFollowingOutput) {
    ListFollowingOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identities && { identities: obj.identities.map(function (item) {
            return IdentityHandle.filterSensitiveLog(item);
        })
    }))); };
})(ListFollowingOutput || (ListFollowingOutput = {}));
export var ListFriendsInput;
(function (ListFriendsInput) {
    ListFriendsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFriendsInput || (ListFriendsInput = {}));
export var ListFriendsOutput;
(function (ListFriendsOutput) {
    ListFriendsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identities && { identities: obj.identities.map(function (item) {
            return IdentityHandle.filterSensitiveLog(item);
        })
    }))); };
})(ListFriendsOutput || (ListFriendsOutput = {}));
export var PrepareIdentityAvatarUploadInput;
(function (PrepareIdentityAvatarUploadInput) {
    PrepareIdentityAvatarUploadInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrepareIdentityAvatarUploadInput || (PrepareIdentityAvatarUploadInput = {}));
export var UploadPresignedRequest;
(function (UploadPresignedRequest) {
    UploadPresignedRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadPresignedRequest || (UploadPresignedRequest = {}));
export var PrepareIdentityAvatarUploadOutput;
(function (PrepareIdentityAvatarUploadOutput) {
    PrepareIdentityAvatarUploadOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrepareIdentityAvatarUploadOutput || (PrepareIdentityAvatarUploadOutput = {}));
export var RemoveIdentityGameActivityInput;
(function (RemoveIdentityGameActivityInput) {
    RemoveIdentityGameActivityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveIdentityGameActivityInput || (RemoveIdentityGameActivityInput = {}));
export var RemoveIdentityGameActivityOutput;
(function (RemoveIdentityGameActivityOutput) {
    RemoveIdentityGameActivityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveIdentityGameActivityOutput || (RemoveIdentityGameActivityOutput = {}));
export var SearchIdentitiesInput;
(function (SearchIdentitiesInput) {
    SearchIdentitiesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchIdentitiesInput || (SearchIdentitiesInput = {}));
export var SearchIdentitiesOutput;
(function (SearchIdentitiesOutput) {
    SearchIdentitiesOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identities && { identities: obj.identities.map(function (item) {
            return IdentityHandle.filterSensitiveLog(item);
        })
    }))); };
})(SearchIdentitiesOutput || (SearchIdentitiesOutput = {}));
export var UpdateIdentityGameActivity;
(function (UpdateIdentityGameActivity) {
    UpdateIdentityGameActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityGameActivity || (UpdateIdentityGameActivity = {}));
export var SetIdentityGameActivityInput;
(function (SetIdentityGameActivityInput) {
    SetIdentityGameActivityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetIdentityGameActivityInput || (SetIdentityGameActivityInput = {}));
export var SetIdentityGameActivityOutput;
(function (SetIdentityGameActivityOutput) {
    SetIdentityGameActivityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetIdentityGameActivityOutput || (SetIdentityGameActivityOutput = {}));
export var SetupIdentityInput;
(function (SetupIdentityInput) {
    SetupIdentityInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.existingIdentityToken && { existingIdentityToken: SENSITIVE_STRING
    }))); };
})(SetupIdentityInput || (SetupIdentityInput = {}));
export var SetupIdentityOutput;
(function (SetupIdentityOutput) {
    SetupIdentityOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.identityToken && { identityToken: SENSITIVE_STRING
    })), (obj.identity && { identity: IdentityProfile.filterSensitiveLog(obj.identity)
    }))); };
})(SetupIdentityOutput || (SetupIdentityOutput = {}));
export var SignupForBetaInput;
(function (SignupForBetaInput) {
    SignupForBetaInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SignupForBetaInput || (SignupForBetaInput = {}));
export var SignupForBetaOutput;
(function (SignupForBetaOutput) {
    SignupForBetaOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SignupForBetaOutput || (SignupForBetaOutput = {}));
export var UnfollowIdentityInput;
(function (UnfollowIdentityInput) {
    UnfollowIdentityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnfollowIdentityInput || (UnfollowIdentityInput = {}));
export var UnfollowIdentityOutput;
(function (UnfollowIdentityOutput) {
    UnfollowIdentityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnfollowIdentityOutput || (UnfollowIdentityOutput = {}));
export var UpdateIdentityProfileInput;
(function (UpdateIdentityProfileInput) {
    UpdateIdentityProfileInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityProfileInput || (UpdateIdentityProfileInput = {}));
export var UpdateIdentityProfileOutput;
(function (UpdateIdentityProfileOutput) {
    UpdateIdentityProfileOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityProfileOutput || (UpdateIdentityProfileOutput = {}));
export var UpdateIdentityStatusInput;
(function (UpdateIdentityStatusInput) {
    UpdateIdentityStatusInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityStatusInput || (UpdateIdentityStatusInput = {}));
export var UpdateIdentityStatusOutput;
(function (UpdateIdentityStatusOutput) {
    UpdateIdentityStatusOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIdentityStatusOutput || (UpdateIdentityStatusOutput = {}));
export var ValidateIdentityProfileInput;
(function (ValidateIdentityProfileInput) {
    ValidateIdentityProfileInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidateIdentityProfileInput || (ValidateIdentityProfileInput = {}));
export var ValidationError;
(function (ValidationError) {
    ValidationError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationError || (ValidationError = {}));
export var ValidateIdentityProfileOutput;
(function (ValidateIdentityProfileOutput) {
    ValidateIdentityProfileOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidateIdentityProfileOutput || (ValidateIdentityProfileOutput = {}));
export var PrepareGameLinkInput;
(function (PrepareGameLinkInput) {
    PrepareGameLinkInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrepareGameLinkInput || (PrepareGameLinkInput = {}));
export var PrepareGameLinkOutput;
(function (PrepareGameLinkOutput) {
    PrepareGameLinkOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrepareGameLinkOutput || (PrepareGameLinkOutput = {}));
var BadRequestError = (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(opts) {
        var _this = _super.call(this, __assign({ name: "BadRequestError", $fault: "client" }, opts)) || this;
        _this.name = "BadRequestError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, BadRequestError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return BadRequestError;
}(__BaseException));
export { BadRequestError };
var ForbiddenError = (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(opts) {
        var _this = _super.call(this, __assign({ name: "ForbiddenError", $fault: "client" }, opts)) || this;
        _this.name = "ForbiddenError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, ForbiddenError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return ForbiddenError;
}(__BaseException));
export { ForbiddenError };
var InternalError = (function (_super) {
    __extends(InternalError, _super);
    function InternalError(opts) {
        var _this = _super.call(this, __assign({ name: "InternalError", $fault: "server" }, opts)) || this;
        _this.name = "InternalError";
        _this.$fault = "server";
        _this.$retryable = {};
        Object.setPrototypeOf(_this, InternalError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return InternalError;
}(__BaseException));
export { InternalError };
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(opts) {
        var _this = _super.call(this, __assign({ name: "NotFoundError", $fault: "client" }, opts)) || this;
        _this.name = "NotFoundError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, NotFoundError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return NotFoundError;
}(__BaseException));
export { NotFoundError };
var RateLimitError = (function (_super) {
    __extends(RateLimitError, _super);
    function RateLimitError(opts) {
        var _this = _super.call(this, __assign({ name: "RateLimitError", $fault: "client" }, opts)) || this;
        _this.name = "RateLimitError";
        _this.$fault = "client";
        Object.setPrototypeOf(_this, RateLimitError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return RateLimitError;
}(__BaseException));
export { RateLimitError };
var UnauthorizedError = (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(opts) {
        var _this = _super.call(this, __assign({ name: "UnauthorizedError", $fault: "client" }, opts)) || this;
        _this.name = "UnauthorizedError";
        _this.$fault = "client";
        _this.$retryable = {};
        Object.setPrototypeOf(_this, UnauthorizedError.prototype);
        _this.code = opts.code;
        _this.metadata = opts.metadata;
        return _this;
    }
    return UnauthorizedError;
}(__BaseException));
export { UnauthorizedError };
