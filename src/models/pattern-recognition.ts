import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatternRecognition = {
  /** Array of patterns. */
  points?: Record<string, unknown>[];
};

export const patternRecognitionSchema: Schema<PatternRecognition> = s.object<PatternRecognition>({
  points: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
