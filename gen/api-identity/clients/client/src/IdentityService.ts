// smithy-typescript generated code
import { IdentityServiceClient } from "./IdentityServiceClient";
import {
  CancelGameLinkCommand,
  CancelGameLinkCommandInput,
  CancelGameLinkCommandOutput,
} from "./commands/CancelGameLinkCommand";
import {
  CompleteGameLinkCommand,
  CompleteGameLinkCommandInput,
  CompleteGameLinkCommandOutput,
} from "./commands/CompleteGameLinkCommand";
import {
  CompleteIdentityAvatarUploadCommand,
  CompleteIdentityAvatarUploadCommandInput,
  CompleteIdentityAvatarUploadCommandOutput,
} from "./commands/CompleteIdentityAvatarUploadCommand";
import {
  FollowIdentityCommand,
  FollowIdentityCommandInput,
  FollowIdentityCommandOutput,
} from "./commands/FollowIdentityCommand";
import {
  GetGameLinkCommand,
  GetGameLinkCommandInput,
  GetGameLinkCommandOutput,
} from "./commands/GetGameLinkCommand";
import {
  GetIdentityHandlesCommand,
  GetIdentityHandlesCommandInput,
  GetIdentityHandlesCommandOutput,
} from "./commands/GetIdentityHandlesCommand";
import {
  GetIdentityProfileCommand,
  GetIdentityProfileCommandInput,
  GetIdentityProfileCommandOutput,
} from "./commands/GetIdentityProfileCommand";
import {
  GetIdentitySelfProfileCommand,
  GetIdentitySelfProfileCommandInput,
  GetIdentitySelfProfileCommandOutput,
} from "./commands/GetIdentitySelfProfileCommand";
import {
  GetIdentitySummariesCommand,
  GetIdentitySummariesCommandInput,
  GetIdentitySummariesCommandOutput,
} from "./commands/GetIdentitySummariesCommand";
import {
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "./commands/ListActivitiesCommand";
import {
  ListFollowersCommand,
  ListFollowersCommandInput,
  ListFollowersCommandOutput,
} from "./commands/ListFollowersCommand";
import {
  ListFollowingCommand,
  ListFollowingCommandInput,
  ListFollowingCommandOutput,
} from "./commands/ListFollowingCommand";
import {
  ListFriendsCommand,
  ListFriendsCommandInput,
  ListFriendsCommandOutput,
} from "./commands/ListFriendsCommand";
import {
  ListMutualFriendsCommand,
  ListMutualFriendsCommandInput,
  ListMutualFriendsCommandOutput,
} from "./commands/ListMutualFriendsCommand";
import {
  ListRecentFollowersCommand,
  ListRecentFollowersCommandInput,
  ListRecentFollowersCommandOutput,
} from "./commands/ListRecentFollowersCommand";
import {
  MarkDeletionCommand,
  MarkDeletionCommandInput,
  MarkDeletionCommandOutput,
} from "./commands/MarkDeletionCommand";
import {
  PrepareGameLinkCommand,
  PrepareGameLinkCommandInput,
  PrepareGameLinkCommandOutput,
} from "./commands/PrepareGameLinkCommand";
import {
  PrepareIdentityAvatarUploadCommand,
  PrepareIdentityAvatarUploadCommandInput,
  PrepareIdentityAvatarUploadCommandOutput,
} from "./commands/PrepareIdentityAvatarUploadCommand";
import {
  RecentFollowerIgnoreCommand,
  RecentFollowerIgnoreCommandInput,
  RecentFollowerIgnoreCommandOutput,
} from "./commands/RecentFollowerIgnoreCommand";
import {
  RemoveIdentityGameActivityCommand,
  RemoveIdentityGameActivityCommandInput,
  RemoveIdentityGameActivityCommandOutput,
} from "./commands/RemoveIdentityGameActivityCommand";
import {
  ReportIdentityCommand,
  ReportIdentityCommandInput,
  ReportIdentityCommandOutput,
} from "./commands/ReportIdentityCommand";
import {
  SearchIdentitiesCommand,
  SearchIdentitiesCommandInput,
  SearchIdentitiesCommandOutput,
} from "./commands/SearchIdentitiesCommand";
import {
  SetIdentityGameActivityCommand,
  SetIdentityGameActivityCommandInput,
  SetIdentityGameActivityCommandOutput,
} from "./commands/SetIdentityGameActivityCommand";
import {
  SetupIdentityCommand,
  SetupIdentityCommandInput,
  SetupIdentityCommandOutput,
} from "./commands/SetupIdentityCommand";
import {
  SignupForBetaCommand,
  SignupForBetaCommandInput,
  SignupForBetaCommandOutput,
} from "./commands/SignupForBetaCommand";
import {
  UnfollowIdentityCommand,
  UnfollowIdentityCommandInput,
  UnfollowIdentityCommandOutput,
} from "./commands/UnfollowIdentityCommand";
import {
  UnmarkDeletionCommand,
  UnmarkDeletionCommandInput,
  UnmarkDeletionCommandOutput,
} from "./commands/UnmarkDeletionCommand";
import {
  UpdateIdentityProfileCommand,
  UpdateIdentityProfileCommandInput,
  UpdateIdentityProfileCommandOutput,
} from "./commands/UpdateIdentityProfileCommand";
import {
  UpdateIdentityStatusCommand,
  UpdateIdentityStatusCommandInput,
  UpdateIdentityStatusCommandOutput,
} from "./commands/UpdateIdentityStatusCommand";
import {
  ValidateIdentityProfileCommand,
  ValidateIdentityProfileCommandInput,
  ValidateIdentityProfileCommandOutput,
} from "./commands/ValidateIdentityProfileCommand";
import {
  WatchEventsCommand,
  WatchEventsCommandInput,
  WatchEventsCommandOutput,
} from "./commands/WatchEventsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class IdentityService extends IdentityServiceClient {
  /**
   * Cancels a game link. It can no longer be used to link after cancellation.
   */
  public cancelGameLink(
    args: CancelGameLinkCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CancelGameLinkCommandOutput>;
  public cancelGameLink(
    args: CancelGameLinkCommandInput,
    cb: (err: any, data?: CancelGameLinkCommandOutput) => void
  ): void;
  public cancelGameLink(
    args: CancelGameLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelGameLinkCommandOutput) => void
  ): void;
  public cancelGameLink(
    args: CancelGameLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelGameLinkCommandOutput) => void),
    cb?: (err: any, data?: CancelGameLinkCommandOutput) => void
  ): Promise<CancelGameLinkCommandOutput> | void {
    const command = new CancelGameLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Completes a game link process and returns whether or not the link is valid.
   */
  public completeGameLink(
    args: CompleteGameLinkCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CompleteGameLinkCommandOutput>;
  public completeGameLink(
    args: CompleteGameLinkCommandInput,
    cb: (err: any, data?: CompleteGameLinkCommandOutput) => void
  ): void;
  public completeGameLink(
    args: CompleteGameLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteGameLinkCommandOutput) => void
  ): void;
  public completeGameLink(
    args: CompleteGameLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteGameLinkCommandOutput) => void),
    cb?: (err: any, data?: CompleteGameLinkCommandOutput) => void
  ): Promise<CompleteGameLinkCommandOutput> | void {
    const command = new CompleteGameLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Completes an avatar image upload. Must be called after the file upload process completes.
   */
  public completeIdentityAvatarUpload(
    args: CompleteIdentityAvatarUploadCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CompleteIdentityAvatarUploadCommandOutput>;
  public completeIdentityAvatarUpload(
    args: CompleteIdentityAvatarUploadCommandInput,
    cb: (err: any, data?: CompleteIdentityAvatarUploadCommandOutput) => void
  ): void;
  public completeIdentityAvatarUpload(
    args: CompleteIdentityAvatarUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteIdentityAvatarUploadCommandOutput) => void
  ): void;
  public completeIdentityAvatarUpload(
    args: CompleteIdentityAvatarUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteIdentityAvatarUploadCommandOutput) => void),
    cb?: (err: any, data?: CompleteIdentityAvatarUploadCommandOutput) => void
  ): Promise<CompleteIdentityAvatarUploadCommandOutput> | void {
    const command = new CompleteIdentityAvatarUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Follows the given identity.
   *
   * In order for identities to be "friends", the other identity has to also follow
   * this identity.
   */
  public followIdentity(
    args: FollowIdentityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<FollowIdentityCommandOutput>;
  public followIdentity(
    args: FollowIdentityCommandInput,
    cb: (err: any, data?: FollowIdentityCommandOutput) => void
  ): void;
  public followIdentity(
    args: FollowIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FollowIdentityCommandOutput) => void
  ): void;
  public followIdentity(
    args: FollowIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FollowIdentityCommandOutput) => void),
    cb?: (err: any, data?: FollowIdentityCommandOutput) => void
  ): Promise<FollowIdentityCommandOutput> | void {
    const command = new FollowIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns the current status of a linking process.
   *
   * Once `status` is `complete`, the identity's profile should be fetched again
   * since they may have switched accounts.
   */
  public getGameLink(
    args: GetGameLinkCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetGameLinkCommandOutput>;
  public getGameLink(
    args: GetGameLinkCommandInput,
    cb: (err: any, data?: GetGameLinkCommandOutput) => void
  ): void;
  public getGameLink(
    args: GetGameLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameLinkCommandOutput) => void
  ): void;
  public getGameLink(
    args: GetGameLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGameLinkCommandOutput) => void),
    cb?: (err: any, data?: GetGameLinkCommandOutput) => void
  ): Promise<GetGameLinkCommandOutput> | void {
    const command = new GetGameLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Fetches a list of identity handles.
   */
  public getIdentityHandles(
    args: GetIdentityHandlesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetIdentityHandlesCommandOutput>;
  public getIdentityHandles(
    args: GetIdentityHandlesCommandInput,
    cb: (err: any, data?: GetIdentityHandlesCommandOutput) => void
  ): void;
  public getIdentityHandles(
    args: GetIdentityHandlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityHandlesCommandOutput) => void
  ): void;
  public getIdentityHandles(
    args: GetIdentityHandlesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityHandlesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityHandlesCommandOutput) => void
  ): Promise<GetIdentityHandlesCommandOutput> | void {
    const command = new GetIdentityHandlesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Fetches an identity profile.
   */
  public getIdentityProfile(
    args: GetIdentityProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetIdentityProfileCommandOutput>;
  public getIdentityProfile(
    args: GetIdentityProfileCommandInput,
    cb: (err: any, data?: GetIdentityProfileCommandOutput) => void
  ): void;
  public getIdentityProfile(
    args: GetIdentityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityProfileCommandOutput) => void
  ): void;
  public getIdentityProfile(
    args: GetIdentityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityProfileCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityProfileCommandOutput) => void
  ): Promise<GetIdentityProfileCommandOutput> | void {
    const command = new GetIdentityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Fetches the current identity's profile.
   */
  public getIdentitySelfProfile(
    args: GetIdentitySelfProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetIdentitySelfProfileCommandOutput>;
  public getIdentitySelfProfile(
    args: GetIdentitySelfProfileCommandInput,
    cb: (err: any, data?: GetIdentitySelfProfileCommandOutput) => void
  ): void;
  public getIdentitySelfProfile(
    args: GetIdentitySelfProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentitySelfProfileCommandOutput) => void
  ): void;
  public getIdentitySelfProfile(
    args: GetIdentitySelfProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentitySelfProfileCommandOutput) => void),
    cb?: (err: any, data?: GetIdentitySelfProfileCommandOutput) => void
  ): Promise<GetIdentitySelfProfileCommandOutput> | void {
    const command = new GetIdentitySelfProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Fetches a list of identity summaries.
   */
  public getIdentitySummaries(
    args: GetIdentitySummariesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetIdentitySummariesCommandOutput>;
  public getIdentitySummaries(
    args: GetIdentitySummariesCommandInput,
    cb: (err: any, data?: GetIdentitySummariesCommandOutput) => void
  ): void;
  public getIdentitySummaries(
    args: GetIdentitySummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentitySummariesCommandOutput) => void
  ): void;
  public getIdentitySummaries(
    args: GetIdentitySummariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentitySummariesCommandOutput) => void),
    cb?: (err: any, data?: GetIdentitySummariesCommandOutput) => void
  ): Promise<GetIdentitySummariesCommandOutput> | void {
    const command = new GetIdentitySummariesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns an overview of all players currently online or in game.
   */
  public listActivities(
    args: ListActivitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListActivitiesCommandOutput>;
  public listActivities(
    args: ListActivitiesCommandInput,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;
  public listActivities(
    args: ListActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivitiesCommandOutput) => void
  ): void;
  public listActivities(
    args: ListActivitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActivitiesCommandOutput) => void),
    cb?: (err: any, data?: ListActivitiesCommandOutput) => void
  ): Promise<ListActivitiesCommandOutput> | void {
    const command = new ListActivitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public listFollowers(
    args: ListFollowersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListFollowersCommandOutput>;
  public listFollowers(
    args: ListFollowersCommandInput,
    cb: (err: any, data?: ListFollowersCommandOutput) => void
  ): void;
  public listFollowers(
    args: ListFollowersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFollowersCommandOutput) => void
  ): void;
  public listFollowers(
    args: ListFollowersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFollowersCommandOutput) => void),
    cb?: (err: any, data?: ListFollowersCommandOutput) => void
  ): Promise<ListFollowersCommandOutput> | void {
    const command = new ListFollowersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public listFollowing(
    args: ListFollowingCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListFollowingCommandOutput>;
  public listFollowing(
    args: ListFollowingCommandInput,
    cb: (err: any, data?: ListFollowingCommandOutput) => void
  ): void;
  public listFollowing(
    args: ListFollowingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFollowingCommandOutput) => void
  ): void;
  public listFollowing(
    args: ListFollowingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFollowingCommandOutput) => void),
    cb?: (err: any, data?: ListFollowingCommandOutput) => void
  ): Promise<ListFollowingCommandOutput> | void {
    const command = new ListFollowingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public listFriends(
    args: ListFriendsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListFriendsCommandOutput>;
  public listFriends(
    args: ListFriendsCommandInput,
    cb: (err: any, data?: ListFriendsCommandOutput) => void
  ): void;
  public listFriends(
    args: ListFriendsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFriendsCommandOutput) => void
  ): void;
  public listFriends(
    args: ListFriendsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFriendsCommandOutput) => void),
    cb?: (err: any, data?: ListFriendsCommandOutput) => void
  ): Promise<ListFriendsCommandOutput> | void {
    const command = new ListFriendsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public listMutualFriends(
    args: ListMutualFriendsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListMutualFriendsCommandOutput>;
  public listMutualFriends(
    args: ListMutualFriendsCommandInput,
    cb: (err: any, data?: ListMutualFriendsCommandOutput) => void
  ): void;
  public listMutualFriends(
    args: ListMutualFriendsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMutualFriendsCommandOutput) => void
  ): void;
  public listMutualFriends(
    args: ListMutualFriendsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMutualFriendsCommandOutput) => void),
    cb?: (err: any, data?: ListMutualFriendsCommandOutput) => void
  ): Promise<ListMutualFriendsCommandOutput> | void {
    const command = new ListMutualFriendsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public listRecentFollowers(
    args: ListRecentFollowersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListRecentFollowersCommandOutput>;
  public listRecentFollowers(
    args: ListRecentFollowersCommandInput,
    cb: (err: any, data?: ListRecentFollowersCommandOutput) => void
  ): void;
  public listRecentFollowers(
    args: ListRecentFollowersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecentFollowersCommandOutput) => void
  ): void;
  public listRecentFollowers(
    args: ListRecentFollowersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecentFollowersCommandOutput) => void),
    cb?: (err: any, data?: ListRecentFollowersCommandOutput) => void
  ): Promise<ListRecentFollowersCommandOutput> | void {
    const command = new ListRecentFollowersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Marks this identity for deletion.
   *
   * After 30 days the identity and all of it's content will be deleted, including chat messages and
   */
  public markDeletion(
    args: MarkDeletionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<MarkDeletionCommandOutput>;
  public markDeletion(
    args: MarkDeletionCommandInput,
    cb: (err: any, data?: MarkDeletionCommandOutput) => void
  ): void;
  public markDeletion(
    args: MarkDeletionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MarkDeletionCommandOutput) => void
  ): void;
  public markDeletion(
    args: MarkDeletionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: MarkDeletionCommandOutput) => void),
    cb?: (err: any, data?: MarkDeletionCommandOutput) => void
  ): Promise<MarkDeletionCommandOutput> | void {
    const command = new MarkDeletionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Begins the process for linking an identity with the Rivet Hub.
   *
   * # Importance of Linking Identities
   *
   * When an identity is created via `rivet.api.identity#SetupIdentity`, the identity is temporary
   * and is not shared with other games the user plays.
   *
   * In order to make the identity permanent and synchronize the identity with
   * other games, the identity must be linked with the hub.
   *
   * # Linking Process
   *
   * The linking process works by opening `identity_link_url` in a browser then polling
   * `rivet.api.identity#GetGameLink` to wait for it to complete.
   *
   * This is designed to be as flexible as possible so `identity_link_url` can be opened
   * on any device. For example, when playing a console game, the user can scan a
   * QR code for `identity_link_url` to authenticate on their phone.
   */
  public prepareGameLink(
    args: PrepareGameLinkCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PrepareGameLinkCommandOutput>;
  public prepareGameLink(
    args: PrepareGameLinkCommandInput,
    cb: (err: any, data?: PrepareGameLinkCommandOutput) => void
  ): void;
  public prepareGameLink(
    args: PrepareGameLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareGameLinkCommandOutput) => void
  ): void;
  public prepareGameLink(
    args: PrepareGameLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PrepareGameLinkCommandOutput) => void),
    cb?: (err: any, data?: PrepareGameLinkCommandOutput) => void
  ): Promise<PrepareGameLinkCommandOutput> | void {
    const command = new PrepareGameLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Prepares an avatar image upload.
   *
   * Complete upload with `rivet.api.identity#CompleteIdentityAvatarUpload`.
   */
  public prepareIdentityAvatarUpload(
    args: PrepareIdentityAvatarUploadCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PrepareIdentityAvatarUploadCommandOutput>;
  public prepareIdentityAvatarUpload(
    args: PrepareIdentityAvatarUploadCommandInput,
    cb: (err: any, data?: PrepareIdentityAvatarUploadCommandOutput) => void
  ): void;
  public prepareIdentityAvatarUpload(
    args: PrepareIdentityAvatarUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareIdentityAvatarUploadCommandOutput) => void
  ): void;
  public prepareIdentityAvatarUpload(
    args: PrepareIdentityAvatarUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PrepareIdentityAvatarUploadCommandOutput) => void),
    cb?: (err: any, data?: PrepareIdentityAvatarUploadCommandOutput) => void
  ): Promise<PrepareIdentityAvatarUploadCommandOutput> | void {
    const command = new PrepareIdentityAvatarUploadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Ignores a recent follower, removing them from your recent followers list.
   */
  public recentFollowerIgnore(
    args: RecentFollowerIgnoreCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RecentFollowerIgnoreCommandOutput>;
  public recentFollowerIgnore(
    args: RecentFollowerIgnoreCommandInput,
    cb: (err: any, data?: RecentFollowerIgnoreCommandOutput) => void
  ): void;
  public recentFollowerIgnore(
    args: RecentFollowerIgnoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecentFollowerIgnoreCommandOutput) => void
  ): void;
  public recentFollowerIgnore(
    args: RecentFollowerIgnoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecentFollowerIgnoreCommandOutput) => void),
    cb?: (err: any, data?: RecentFollowerIgnoreCommandOutput) => void
  ): Promise<RecentFollowerIgnoreCommandOutput> | void {
    const command = new RecentFollowerIgnoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Removes the current identity's game activity.
   */
  public removeIdentityGameActivity(
    args: RemoveIdentityGameActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RemoveIdentityGameActivityCommandOutput>;
  public removeIdentityGameActivity(
    args: RemoveIdentityGameActivityCommandInput,
    cb: (err: any, data?: RemoveIdentityGameActivityCommandOutput) => void
  ): void;
  public removeIdentityGameActivity(
    args: RemoveIdentityGameActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveIdentityGameActivityCommandOutput) => void
  ): void;
  public removeIdentityGameActivity(
    args: RemoveIdentityGameActivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveIdentityGameActivityCommandOutput) => void),
    cb?: (err: any, data?: RemoveIdentityGameActivityCommandOutput) => void
  ): Promise<RemoveIdentityGameActivityCommandOutput> | void {
    const command = new RemoveIdentityGameActivityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates an abuse report for an identity.
   */
  public reportIdentity(
    args: ReportIdentityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ReportIdentityCommandOutput>;
  public reportIdentity(
    args: ReportIdentityCommandInput,
    cb: (err: any, data?: ReportIdentityCommandOutput) => void
  ): void;
  public reportIdentity(
    args: ReportIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReportIdentityCommandOutput) => void
  ): void;
  public reportIdentity(
    args: ReportIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReportIdentityCommandOutput) => void),
    cb?: (err: any, data?: ReportIdentityCommandOutput) => void
  ): Promise<ReportIdentityCommandOutput> | void {
    const command = new ReportIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Fuzzy search for identities.
   */
  public searchIdentities(
    args: SearchIdentitiesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SearchIdentitiesCommandOutput>;
  public searchIdentities(
    args: SearchIdentitiesCommandInput,
    cb: (err: any, data?: SearchIdentitiesCommandOutput) => void
  ): void;
  public searchIdentities(
    args: SearchIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchIdentitiesCommandOutput) => void
  ): void;
  public searchIdentities(
    args: SearchIdentitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchIdentitiesCommandOutput) => void),
    cb?: (err: any, data?: SearchIdentitiesCommandOutput) => void
  ): Promise<SearchIdentitiesCommandOutput> | void {
    const command = new SearchIdentitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Sets the current identity's game activity.
   *
   * This activity will automatically be removed when the identity goes offline.
   */
  public setIdentityGameActivity(
    args: SetIdentityGameActivityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetIdentityGameActivityCommandOutput>;
  public setIdentityGameActivity(
    args: SetIdentityGameActivityCommandInput,
    cb: (err: any, data?: SetIdentityGameActivityCommandOutput) => void
  ): void;
  public setIdentityGameActivity(
    args: SetIdentityGameActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIdentityGameActivityCommandOutput) => void
  ): void;
  public setIdentityGameActivity(
    args: SetIdentityGameActivityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIdentityGameActivityCommandOutput) => void),
    cb?: (err: any, data?: SetIdentityGameActivityCommandOutput) => void
  ): Promise<SetIdentityGameActivityCommandOutput> | void {
    const command = new SetIdentityGameActivityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Gets or creates an identity.
   *
   * Passing an existing identity token in the body refreshes the token.
   *
   * # Temporary Accounts
   *
   * Until the identity is linked with the Rivet Hub (see
   * `rivet.api.identity#PrepareGameLink`), this identity will be temporary but
   * still behave like all other identities.
   *
   * This is intended to allow users to play the game without signing up while
   * still having the benefits of having an account. When they are ready to save
   * their account, they should be instructed to link their account (see
   * `rivet.api.identity#PrepareGameLink`).
   *
   * # Storing Token
   *
   * `identity_token` should be stored in some form of persistent storage. The
   * token should be read from storage and passed to
   * `rivet.api.identity#SetupIdentity` every time the client starts.
   */
  public setupIdentity(
    args: SetupIdentityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SetupIdentityCommandOutput>;
  public setupIdentity(
    args: SetupIdentityCommandInput,
    cb: (err: any, data?: SetupIdentityCommandOutput) => void
  ): void;
  public setupIdentity(
    args: SetupIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetupIdentityCommandOutput) => void
  ): void;
  public setupIdentity(
    args: SetupIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetupIdentityCommandOutput) => void),
    cb?: (err: any, data?: SetupIdentityCommandOutput) => void
  ): Promise<SetupIdentityCommandOutput> | void {
    const command = new SetupIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Submits a beta signup form.
   */
  public signupForBeta(
    args: SignupForBetaCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SignupForBetaCommandOutput>;
  public signupForBeta(
    args: SignupForBetaCommandInput,
    cb: (err: any, data?: SignupForBetaCommandOutput) => void
  ): void;
  public signupForBeta(
    args: SignupForBetaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignupForBetaCommandOutput) => void
  ): void;
  public signupForBeta(
    args: SignupForBetaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SignupForBetaCommandOutput) => void),
    cb?: (err: any, data?: SignupForBetaCommandOutput) => void
  ): Promise<SignupForBetaCommandOutput> | void {
    const command = new SignupForBetaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Unfollows the given identity.
   */
  public unfollowIdentity(
    args: UnfollowIdentityCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UnfollowIdentityCommandOutput>;
  public unfollowIdentity(
    args: UnfollowIdentityCommandInput,
    cb: (err: any, data?: UnfollowIdentityCommandOutput) => void
  ): void;
  public unfollowIdentity(
    args: UnfollowIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnfollowIdentityCommandOutput) => void
  ): void;
  public unfollowIdentity(
    args: UnfollowIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnfollowIdentityCommandOutput) => void),
    cb?: (err: any, data?: UnfollowIdentityCommandOutput) => void
  ): Promise<UnfollowIdentityCommandOutput> | void {
    const command = new UnfollowIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Unmarks this identity from deletion.
   */
  public unmarkDeletion(
    args: UnmarkDeletionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UnmarkDeletionCommandOutput>;
  public unmarkDeletion(
    args: UnmarkDeletionCommandInput,
    cb: (err: any, data?: UnmarkDeletionCommandOutput) => void
  ): void;
  public unmarkDeletion(
    args: UnmarkDeletionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnmarkDeletionCommandOutput) => void
  ): void;
  public unmarkDeletion(
    args: UnmarkDeletionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnmarkDeletionCommandOutput) => void),
    cb?: (err: any, data?: UnmarkDeletionCommandOutput) => void
  ): Promise<UnmarkDeletionCommandOutput> | void {
    const command = new UnmarkDeletionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates profile of the current identity.
   */
  public updateIdentityProfile(
    args: UpdateIdentityProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateIdentityProfileCommandOutput>;
  public updateIdentityProfile(
    args: UpdateIdentityProfileCommandInput,
    cb: (err: any, data?: UpdateIdentityProfileCommandOutput) => void
  ): void;
  public updateIdentityProfile(
    args: UpdateIdentityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProfileCommandOutput) => void
  ): void;
  public updateIdentityProfile(
    args: UpdateIdentityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIdentityProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateIdentityProfileCommandOutput) => void
  ): Promise<UpdateIdentityProfileCommandOutput> | void {
    const command = new UpdateIdentityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates the current identity's status.
   */
  public updateIdentityStatus(
    args: UpdateIdentityStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateIdentityStatusCommandOutput>;
  public updateIdentityStatus(
    args: UpdateIdentityStatusCommandInput,
    cb: (err: any, data?: UpdateIdentityStatusCommandOutput) => void
  ): void;
  public updateIdentityStatus(
    args: UpdateIdentityStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityStatusCommandOutput) => void
  ): void;
  public updateIdentityStatus(
    args: UpdateIdentityStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIdentityStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateIdentityStatusCommandOutput) => void
  ): Promise<UpdateIdentityStatusCommandOutput> | void {
    const command = new UpdateIdentityStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Validate contents of identity profile.
   *
   * Use to provide immediate feedback on profile changes before committing them.
   */
  public validateIdentityProfile(
    args: ValidateIdentityProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ValidateIdentityProfileCommandOutput>;
  public validateIdentityProfile(
    args: ValidateIdentityProfileCommandInput,
    cb: (err: any, data?: ValidateIdentityProfileCommandOutput) => void
  ): void;
  public validateIdentityProfile(
    args: ValidateIdentityProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateIdentityProfileCommandOutput) => void
  ): void;
  public validateIdentityProfile(
    args: ValidateIdentityProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateIdentityProfileCommandOutput) => void),
    cb?: (err: any, data?: ValidateIdentityProfileCommandOutput) => void
  ): Promise<ValidateIdentityProfileCommandOutput> | void {
    const command = new ValidateIdentityProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Returns all events relative to the current identity.
   */
  public watchEvents(
    args: WatchEventsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<WatchEventsCommandOutput>;
  public watchEvents(
    args: WatchEventsCommandInput,
    cb: (err: any, data?: WatchEventsCommandOutput) => void
  ): void;
  public watchEvents(
    args: WatchEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WatchEventsCommandOutput) => void
  ): void;
  public watchEvents(
    args: WatchEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: WatchEventsCommandOutput) => void),
    cb?: (err: any, data?: WatchEventsCommandOutput) => void
  ): Promise<WatchEventsCommandOutput> | void {
    const command = new WatchEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
