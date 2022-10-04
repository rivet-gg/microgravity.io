import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { ListFriendsInput, ListFriendsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFriendsCommandInput extends ListFriendsInput {
}
export interface ListFriendsCommandOutput extends ListFriendsOutput, __MetadataBearer {
}
export declare class ListFriendsCommand extends $Command<ListFriendsCommandInput, ListFriendsCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: ListFriendsCommandInput;
    constructor(input: ListFriendsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFriendsCommandInput, ListFriendsCommandOutput>;
    private serialize;
    private deserialize;
}
