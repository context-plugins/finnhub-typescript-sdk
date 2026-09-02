import { s, type Schema } from "../core/index.js";

export type AiChatMessage = {
  role?: string;
  content?: string;
};

export const aiChatMessageSchema: Schema<AiChatMessage> = s.object<AiChatMessage>({
  role: s.optional(s.string()),
  content: s.optional(s.string()),
});
