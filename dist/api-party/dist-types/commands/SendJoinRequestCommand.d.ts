import { PartyServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PartyServiceClient";
import { SendJoinRequestInput, SendJoinRequestOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendJoinRequestCommandInput extends SendJoinRequestInput {
}
export interface SendJoinRequestCommandOutput extends SendJoinRequestOutput, __MetadataBearer {
}
export declare class SendJoinRequestCommand extends $Command<SendJoinRequestCommandInput, SendJoinRequestCommandOutput, PartyServiceClientResolvedConfig> {
    readonly input: SendJoinRequestCommandInput;
    constructor(input: SendJoinRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PartyServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendJoinRequestCommandInput, SendJoinRequestCommandOutput>;
    private serialize;
    private deserialize;
}
