import { IdentityServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentityServiceClient";
import { ListFollowingInput, ListFollowingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFollowingCommandInput extends ListFollowingInput {
}
export interface ListFollowingCommandOutput extends ListFollowingOutput, __MetadataBearer {
}
export declare class ListFollowingCommand extends $Command<ListFollowingCommandInput, ListFollowingCommandOutput, IdentityServiceClientResolvedConfig> {
    readonly input: ListFollowingCommandInput;
    constructor(input: ListFollowingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentityServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFollowingCommandInput, ListFollowingCommandOutput>;
    private serialize;
    private deserialize;
}
