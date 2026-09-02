import { s, type Schema } from "../core/index.js";

export type MarketStatus = {
  exchange?: string;
  timezone?: string;
  session?: string;
  holiday?: string;
  isOpen?: boolean;
  t?: number;
};

export const marketStatusSchema: Schema<MarketStatus> = s.object<MarketStatus>({
  exchange: s.optional(s.string()),
  timezone: s.optional(s.string()),
  session: s.optional(s.string()),
  holiday: s.optional(s.string()),
  isOpen: s.optional(s.boolean()),
  t: s.optional(s.number()),
});
