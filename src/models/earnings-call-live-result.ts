import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EarningsCallLiveResult = {
  /** Symbol. */
  symbol?: string;
  /** Event name. */
  event?: string;
  /** Date time in UTC. */
  time?: string;
  /** Earnings year. */
  year?: number;
  /** Earnings quarter. */
  quarter?: number;
  /** Live audio streaming file. */
  liveAudio?: string;
  /** Recoding in mp3 format. */
  recording?: string;
};

export const earningsCallLiveResultSchema: Schema<EarningsCallLiveResult> = s.object<EarningsCallLiveResult>({
  symbol: s.optional(s.string()),
  event: s.optional(s.string()),
  time: s.optional(s.string()),
  year: s.optional(s.int()),
  quarter: s.optional(s.int()),
  liveAudio: s.optional(s.string()),
  recording: s.optional(s.string()),
});
