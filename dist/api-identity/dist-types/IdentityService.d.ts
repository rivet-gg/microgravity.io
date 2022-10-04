import { IdentityServiceClient } from "./IdentityServiceClient";
import { CompleteGameLinkCommandInput, CompleteGameLinkCommandOutput } from "./commands/CompleteGameLinkCommand";
import { CompleteIdentityAvatarUploadCommandInput, CompleteIdentityAvatarUploadCommandOutput } from "./commands/CompleteIdentityAvatarUploadCommand";
import { FollowIdentityCommandInput, FollowIdentityCommandOutput } from "./commands/FollowIdentityCommand";
import { GetGameLinkCommandInput, GetGameLinkCommandOutput } from "./commands/GetGameLinkCommand";
import { GetIdentityProfileCommandInput, GetIdentityProfileCommandOutput } from "./commands/GetIdentityProfileCommand";
import { GetIdentitySelfProfileCommandInput, GetIdentitySelfProfileCommandOutput } from "./commands/GetIdentitySelfProfileCommand";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "./commands/ListActivitiesCommand";
import { ListFollowersCommandInput, ListFollowersCommandOutput } from "./commands/ListFollowersCommand";
import { ListFollowingCommandInput, ListFollowingCommandOutput } from "./commands/ListFollowingCommand";
import { ListFriendsCommandInput, ListFriendsCommandOutput } from "./commands/ListFriendsCommand";
import { PrepareGameLinkCommandInput, PrepareGameLinkCommandOutput } from "./commands/PrepareGameLinkCommand";
import { PrepareIdentityAvatarUploadCommandInput, PrepareIdentityAvatarUploadCommandOutput } from "./commands/PrepareIdentityAvatarUploadCommand";
import { RemoveIdentityGameActivityCommandInput, RemoveIdentityGameActivityCommandOutput } from "./commands/RemoveIdentityGameActivityCommand";
import { SearchIdentitiesCommandInput, SearchIdentitiesCommandOutput } from "./commands/SearchIdentitiesCommand";
import { SetIdentityGameActivityCommandInput, SetIdentityGameActivityCommandOutput } from "./commands/SetIdentityGameActivityCommand";
import { SetupIdentityCommandInput, SetupIdentityCommandOutput } from "./commands/SetupIdentityCommand";
import { SignupForBetaCommandInput, SignupForBetaCommandOutput } from "./commands/SignupForBetaCommand";
import { UnfollowIdentityCommandInput, UnfollowIdentityCommandOutput } from "./commands/UnfollowIdentityCommand";
import { UpdateIdentityProfileCommandInput, UpdateIdentityProfileCommandOutput } from "./commands/UpdateIdentityProfileCommand";
import { UpdateIdentityStatusCommandInput, UpdateIdentityStatusCommandOutput } from "./commands/UpdateIdentityStatusCommand";
import { ValidateIdentityProfileCommandInput, ValidateIdentityProfileCommandOutput } from "./commands/ValidateIdentityProfileCommand";
import { WatchEventsCommandInput, WatchEventsCommandOutput } from "./commands/WatchEventsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
export declare class IdentityService extends IdentityServiceClient {
    /**
     * Completes a game link process and returns whether or not the link is valid.
     */
    completeGameLink(args: CompleteGameLinkCommandInput, options?: __HttpHandlerOptions): Promise<CompleteGameLinkCommandOutput>;
    completeGameLink(args: CompleteGameLinkCommandInput, cb: (err: any, data?: CompleteGameLinkCommandOutput) => void): void;
    completeGameLink(args: CompleteGameLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteGameLinkCommandOutput) => void): void;
    /**
     * Completes an avatar image upload. Must be called after the file upload process completes.
     */
    completeIdentityAvatarUpload(args: CompleteIdentityAvatarUploadCommandInput, options?: __HttpHandlerOptions): Promise<CompleteIdentityAvatarUploadCommandOutput>;
    completeIdentityAvatarUpload(args: CompleteIdentityAvatarUploadCommandInput, cb: (err: any, data?: CompleteIdentityAvatarUploadCommandOutput) => void): void;
    completeIdentityAvatarUpload(args: CompleteIdentityAvatarUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CompleteIdentityAvatarUploadCommandOutput) => void): void;
    /**
     * Follows the given identity.
     *
     * In order for identities to be friends, the other identity has to also follow
     * this identity.
     */
    followIdentity(args: FollowIdentityCommandInput, options?: __HttpHandlerOptions): Promise<FollowIdentityCommandOutput>;
    followIdentity(args: FollowIdentityCommandInput, cb: (err: any, data?: FollowIdentityCommandOutput) => void): void;
    followIdentity(args: FollowIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: FollowIdentityCommandOutput) => void): void;
    /**
     * Returns the current status of a linking process.
     *
     * Once `status` is `complete`, the identity's profile should be fetched again
     * since they may have switched accounts.
     */
    getGameLink(args: GetGameLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetGameLinkCommandOutput>;
    getGameLink(args: GetGameLinkCommandInput, cb: (err: any, data?: GetGameLinkCommandOutput) => void): void;
    getGameLink(args: GetGameLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGameLinkCommandOutput) => void): void;
    /**
     * Fetches an identity profile.
     */
    getIdentityProfile(args: GetIdentityProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentityProfileCommandOutput>;
    getIdentityProfile(args: GetIdentityProfileCommandInput, cb: (err: any, data?: GetIdentityProfileCommandOutput) => void): void;
    getIdentityProfile(args: GetIdentityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentityProfileCommandOutput) => void): void;
    /**
     * Fetches the current identity's profile.
     */
    getIdentitySelfProfile(args: GetIdentitySelfProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetIdentitySelfProfileCommandOutput>;
    getIdentitySelfProfile(args: GetIdentitySelfProfileCommandInput, cb: (err: any, data?: GetIdentitySelfProfileCommandOutput) => void): void;
    getIdentitySelfProfile(args: GetIdentitySelfProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIdentitySelfProfileCommandOutput) => void): void;
    /**
     * Returns an overview of all players currently online or in game.
     */
    listActivities(args: ListActivitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListActivitiesCommandOutput>;
    listActivities(args: ListActivitiesCommandInput, cb: (err: any, data?: ListActivitiesCommandOutput) => void): void;
    listActivities(args: ListActivitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActivitiesCommandOutput) => void): void;
    listFollowers(args: ListFollowersCommandInput, options?: __HttpHandlerOptions): Promise<ListFollowersCommandOutput>;
    listFollowers(args: ListFollowersCommandInput, cb: (err: any, data?: ListFollowersCommandOutput) => void): void;
    listFollowers(args: ListFollowersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFollowersCommandOutput) => void): void;
    listFollowing(args: ListFollowingCommandInput, options?: __HttpHandlerOptions): Promise<ListFollowingCommandOutput>;
    listFollowing(args: ListFollowingCommandInput, cb: (err: any, data?: ListFollowingCommandOutput) => void): void;
    listFollowing(args: ListFollowingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFollowingCommandOutput) => void): void;
    listFriends(args: ListFriendsCommandInput, options?: __HttpHandlerOptions): Promise<ListFriendsCommandOutput>;
    listFriends(args: ListFriendsCommandInput, cb: (err: any, data?: ListFriendsCommandOutput) => void): void;
    listFriends(args: ListFriendsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFriendsCommandOutput) => void): void;
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
    prepareGameLink(args: PrepareGameLinkCommandInput, options?: __HttpHandlerOptions): Promise<PrepareGameLinkCommandOutput>;
    prepareGameLink(args: PrepareGameLinkCommandInput, cb: (err: any, data?: PrepareGameLinkCommandOutput) => void): void;
    prepareGameLink(args: PrepareGameLinkCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PrepareGameLinkCommandOutput) => void): void;
    /**
     * Prepares an avatar image upload.
     *
     * Complete upload with `rivet.api.identity#CompleteIdentityAvatarUpload`.
     */
    prepareIdentityAvatarUpload(args: PrepareIdentityAvatarUploadCommandInput, options?: __HttpHandlerOptions): Promise<PrepareIdentityAvatarUploadCommandOutput>;
    prepareIdentityAvatarUpload(args: PrepareIdentityAvatarUploadCommandInput, cb: (err: any, data?: PrepareIdentityAvatarUploadCommandOutput) => void): void;
    prepareIdentityAvatarUpload(args: PrepareIdentityAvatarUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PrepareIdentityAvatarUploadCommandOutput) => void): void;
    /**
     * Removes the current identity's game activity.
     */
    removeIdentityGameActivity(args: RemoveIdentityGameActivityCommandInput, options?: __HttpHandlerOptions): Promise<RemoveIdentityGameActivityCommandOutput>;
    removeIdentityGameActivity(args: RemoveIdentityGameActivityCommandInput, cb: (err: any, data?: RemoveIdentityGameActivityCommandOutput) => void): void;
    removeIdentityGameActivity(args: RemoveIdentityGameActivityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveIdentityGameActivityCommandOutput) => void): void;
    /**
     * Fuzzy search for identities.
     */
    searchIdentities(args: SearchIdentitiesCommandInput, options?: __HttpHandlerOptions): Promise<SearchIdentitiesCommandOutput>;
    searchIdentities(args: SearchIdentitiesCommandInput, cb: (err: any, data?: SearchIdentitiesCommandOutput) => void): void;
    searchIdentities(args: SearchIdentitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchIdentitiesCommandOutput) => void): void;
    /**
     * Sets the current identity's game activity.
     *
     * This activity will automatically be removed when the identity goes offline.
     */
    setIdentityGameActivity(args: SetIdentityGameActivityCommandInput, options?: __HttpHandlerOptions): Promise<SetIdentityGameActivityCommandOutput>;
    setIdentityGameActivity(args: SetIdentityGameActivityCommandInput, cb: (err: any, data?: SetIdentityGameActivityCommandOutput) => void): void;
    setIdentityGameActivity(args: SetIdentityGameActivityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetIdentityGameActivityCommandOutput) => void): void;
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
    setupIdentity(args: SetupIdentityCommandInput, options?: __HttpHandlerOptions): Promise<SetupIdentityCommandOutput>;
    setupIdentity(args: SetupIdentityCommandInput, cb: (err: any, data?: SetupIdentityCommandOutput) => void): void;
    setupIdentity(args: SetupIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetupIdentityCommandOutput) => void): void;
    /**
     * Submits a beta signup form.
     */
    signupForBeta(args: SignupForBetaCommandInput, options?: __HttpHandlerOptions): Promise<SignupForBetaCommandOutput>;
    signupForBeta(args: SignupForBetaCommandInput, cb: (err: any, data?: SignupForBetaCommandOutput) => void): void;
    signupForBeta(args: SignupForBetaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SignupForBetaCommandOutput) => void): void;
    /**
     * Unfollows the given identity.
     */
    unfollowIdentity(args: UnfollowIdentityCommandInput, options?: __HttpHandlerOptions): Promise<UnfollowIdentityCommandOutput>;
    unfollowIdentity(args: UnfollowIdentityCommandInput, cb: (err: any, data?: UnfollowIdentityCommandOutput) => void): void;
    unfollowIdentity(args: UnfollowIdentityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnfollowIdentityCommandOutput) => void): void;
    /**
     * Updates profile of the current identity.
     */
    updateIdentityProfile(args: UpdateIdentityProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIdentityProfileCommandOutput>;
    updateIdentityProfile(args: UpdateIdentityProfileCommandInput, cb: (err: any, data?: UpdateIdentityProfileCommandOutput) => void): void;
    updateIdentityProfile(args: UpdateIdentityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIdentityProfileCommandOutput) => void): void;
    /**
     * Updates the current identity's status.
     */
    updateIdentityStatus(args: UpdateIdentityStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIdentityStatusCommandOutput>;
    updateIdentityStatus(args: UpdateIdentityStatusCommandInput, cb: (err: any, data?: UpdateIdentityStatusCommandOutput) => void): void;
    updateIdentityStatus(args: UpdateIdentityStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIdentityStatusCommandOutput) => void): void;
    /**
     * Validate contents of identity profile.
     *
     * Use to provide immediate feedback on profile changes before committing them.
     */
    validateIdentityProfile(args: ValidateIdentityProfileCommandInput, options?: __HttpHandlerOptions): Promise<ValidateIdentityProfileCommandOutput>;
    validateIdentityProfile(args: ValidateIdentityProfileCommandInput, cb: (err: any, data?: ValidateIdentityProfileCommandOutput) => void): void;
    validateIdentityProfile(args: ValidateIdentityProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ValidateIdentityProfileCommandOutput) => void): void;
    /**
     * Returns all events relative to the current identity.
     */
    watchEvents(args: WatchEventsCommandInput, options?: __HttpHandlerOptions): Promise<WatchEventsCommandOutput>;
    watchEvents(args: WatchEventsCommandInput, cb: (err: any, data?: WatchEventsCommandOutput) => void): void;
    watchEvents(args: WatchEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: WatchEventsCommandOutput) => void): void;
}
