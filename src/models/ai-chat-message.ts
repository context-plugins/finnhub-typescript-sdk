import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiChatMessage = {
  role?: string;
  content?: string;
};

export const aiChatMessageSchema: Schema<AiChatMessage> = s.object<AiChatMessage>({
  role: s.optional(s.string()),
  content: s.optional(s.string()),
});
