import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiChatMessageSchema, type AiChatMessage } from "./ai-chat-message.js";

export type AiChatBody = {
  messages: AiChatMessage[];
  stream?: boolean;
};

export const aiChatBodySchema: Schema<AiChatBody> = s.object<AiChatBody>({
  messages: s.array(s.lazy(() => aiChatMessageSchema)),
  stream: s.optional(s.boolean()),
});
