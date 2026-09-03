import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilingSentiment = {
  negative?: number;
  positive?: number;
  polarity?: number;
  litigious?: number;
  uncertainty?: number;
  constraining?: number;
  modalWeak?: number;
  modalStrong?: number;
  modalModerate?: number;
};

export const filingSentimentSchema: Schema<FilingSentiment> = s.object<FilingSentiment>({
  negative: s.optional(s.number()),
  positive: s.optional(s.number()),
  polarity: s.optional(s.number()),
  litigious: s.optional(s.number()),
  uncertainty: s.optional(s.number()),
  constraining: s.optional(s.number()),
  modalWeak: s.optional(s.number()),
  modalStrong: s.optional(s.number()),
  modalModerate: s.optional(s.number()),
  _keysMap: {
    modalWeak: "modal-weak",
    modalStrong: "modal-strong",
    modalModerate: "modal-moderate",
  },
});
