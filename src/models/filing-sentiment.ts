import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilingSentiment = {
  /** % of negative words in the filing. */
  negative?: number;
  /** % of positive words in the filing. */
  positive?: number;
  /** % of polarity words in the filing. */
  polarity?: number;
  /** % of litigious words in the filing. */
  litigious?: number;
  /** % of uncertainty words in the filing. */
  uncertainty?: number;
  /** % of constraining words in the filing. */
  constraining?: number;
  /** % of modal-weak words in the filing. */
  modalWeak?: number;
  /** % of modal-strong words in the filing. */
  modalStrong?: number;
  /** % of modal-moderate words in the filing. */
  modalModerate?: number;
};

export const filingSentimentSchema: Schema<FilingSentiment> = s.object<FilingSentiment>({
  negative: s.optional(s.float64()),
  positive: s.optional(s.float64()),
  polarity: s.optional(s.float64()),
  litigious: s.optional(s.float64()),
  uncertainty: s.optional(s.float64()),
  constraining: s.optional(s.float64()),
  modalWeak: s.optional(s.float64()),
  modalStrong: s.optional(s.float64()),
  modalModerate: s.optional(s.float64()),
  _keysMap: {
    modalWeak: "modal-weak",
    modalStrong: "modal-strong",
    modalModerate: "modal-moderate",
  },
});
