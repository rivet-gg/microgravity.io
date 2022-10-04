import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { ListFollowersInput, ListFollowersOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFollowersCommandInput extends ListFollowersInput {
}
export interface ListFollowersCommandOutput extends ListFollowersOutput, __MetadataBearer {
}
export declare class ListFollowersCommand extends $Command<ListFollowersCommandInput, ListFollowersCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: ListFollowersCommandInput;
    constructor(input: ListFollowersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFollowersCommandInput, ListFollowersCommandOutput>;
    private serialize;
    private deserialize;
}
