import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EarningsCallLiveResult = {
  symbol?: string;
  event?: string;
  time?: string;
  year?: number;
  quarter?: number;
  liveAudio?: string;
  recording?: string;
};

export const earningsCallLiveResultSchema: Schema<EarningsCallLiveResult> = s.object<EarningsCallLiveResult>({
  symbol: s.optional(s.string()),
  event: s.optional(s.string()),
  time: s.optional(s.string()),
  year: s.optional(s.number()),
  quarter: s.optional(s.number()),
  liveAudio: s.optional(s.string()),
  recording: s.optional(s.string()),
});
