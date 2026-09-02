import { s, type Schema } from "../core/index.js";
import { aiChatMessageSchema, type AiChatMessage } from "./ai-chat-message.js";

export type AiChatBody = {
  messages: AiChatMessage[];
  stream?: boolean;
};

export const aiChatBodySchema: Schema<AiChatBody> = s.object<AiChatBody>({
  messages: s.array(s.lazy(() => aiChatMessageSchema)),
  stream: s.optional(s.boolean()),
});
