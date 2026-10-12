import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MarketStatus = {
  /** Exchange. */
  exchange?: string;
  /** Timezone. */
  timezone?: string;
  /**
   * Market session. Can be 1 of the following values:
   * <code>pre-market</code>,<code>regular</code>,<code>post-market</code> or <code>null</code> if
   * the market is closed.
   */
  session?: string;
  /** Holiday event. */
  holiday?: string;
  /** Whether the market is open at the moment. */
  isOpen?: boolean;
  /** Current timestamp. */
  t?: number;
};

export const marketStatusSchema: Schema<MarketStatus> = s.object<MarketStatus>({
  exchange: s.optional(s.string()),
  timezone: s.optional(s.string()),
  session: s.optional(s.string()),
  holiday: s.optional(s.string()),
  isOpen: s.optional(s.boolean()),
  t: s.optional(s.int()),
});
