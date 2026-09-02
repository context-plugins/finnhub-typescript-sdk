import { s, type Schema } from "../core/index.js";

export type PatternRecognition = {
  points?: Record<string, unknown>[];
};

export const patternRecognitionSchema: Schema<PatternRecognition> = s.object<PatternRecognition>({
  points: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
