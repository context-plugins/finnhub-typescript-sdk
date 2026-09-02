import { s, type Schema } from "../core/index.js";

export type PresentationData = {
  quarter?: number;
  year?: number;
  url?: string;
  title?: string;
  atTime?: string;
};

export const presentationDataSchema: Schema<PresentationData> = s.object<PresentationData>({
  quarter: s.optional(s.number()),
  year: s.optional(s.number()),
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  atTime: s.optional(s.string()),
});
