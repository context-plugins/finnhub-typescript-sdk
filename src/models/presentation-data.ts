import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PresentationData = {
  /** Quarter */
  quarter?: number;
  /** Year */
  year?: number;
  /** Presentation url */
  url?: string;
  /** Title */
  title?: string;
  /** At Time. */
  atTime?: string;
};

export const presentationDataSchema: Schema<PresentationData> = s.object<PresentationData>({
  quarter: s.optional(s.int()),
  year: s.optional(s.int()),
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  atTime: s.optional(s.string()),
});
