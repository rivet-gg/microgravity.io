import { MatchmakerServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MatchmakerServiceClient";
import { PlayerDisconnectedInput, PlayerDisconnectedOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PlayerDisconnectedCommandInput extends PlayerDisconnectedInput {
}
export interface PlayerDisconnectedCommandOutput extends PlayerDisconnectedOutput, __MetadataBearer {
}
/**
 * Marks a player as disconnected.
 *
 * # Ghost Players
 *
 * If players are not marked as disconnected, lobbies will result with "ghost
 * players" that the matchmaker thinks exist but are no longer connected to the
 * lobby.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MatchmakerServiceClient, PlayerDisconnectedCommand } from "@rivet-gg/matchmaker"; // ES Modules import
 * // const { MatchmakerServiceClient, PlayerDisconnectedCommand } = require("@rivet-gg/matchmaker"); // CommonJS import
 * const client = new MatchmakerServiceClient(config);
 * const command = new PlayerDisconnectedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PlayerDisconnectedCommandInput} for command's `input` shape.
 * @see {@link PlayerDisconnectedCommandOutput} for command's `response` shape.
 * @see {@link MatchmakerServiceClientResolvedConfig | config} for MatchmakerServiceClient's `config` shape.
 *
 */
export declare class PlayerDisconnectedCommand extends $Command<PlayerDisconnectedCommandInput, PlayerDisconnectedCommandOutput, MatchmakerServiceClientResolvedConfig> {
    readonly input: PlayerDisconnectedCommandInput;
    constructor(input: PlayerDisconnectedCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MatchmakerServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PlayerDisconnectedCommandInput, PlayerDisconnectedCommandOutput>;
    private serialize;
    private deserialize;
}
