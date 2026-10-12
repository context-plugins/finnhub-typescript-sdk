import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SimilarityIndexInfo = {
  /** CIK. */
  cik?: string;
  /** Cosine similarity of Item 1 (Business). This number is only available for Annual reports. */
  item1?: number;
  /**
   * Cosine similarity of Item 1A (Risk Factors). This number is available for both Annual and
   * Quarterly reports.
   */
  item1A?: number;
  /**
   * Cosine similarity of Item 2 (Management’s Discussion and Analysis of Financial Condition and
   * Results of Operations). This number is only available for Quarterly reports.
   */
  item2?: number;
  /**
   * Cosine similarity of Item 7 (Management’s Discussion and Analysis of Financial Condition and
   * Results of Operations). This number is only available for Annual reports.
   */
  item7?: number;
  /**
   * Cosine similarity of Item 7A (Quantitative and Qualitative Disclosures About Market Risk). This
   * number is only available for Annual reports.
   */
  item7A?: number;
  /** Access number. */
  accessNumber?: string;
  /** Form type. */
  form?: string;
  /** Filed date <code>%Y-%m-%d %H:%M:%S</code>. */
  filedDate?: string;
  /** Accepted date <code>%Y-%m-%d %H:%M:%S</code>. */
  acceptedDate?: string;
  /** Report's URL. */
  reportUrl?: string;
  /** Filing's URL. */
  filingUrl?: string;
};

export const similarityIndexInfoSchema: Schema<SimilarityIndexInfo> = s.object<SimilarityIndexInfo>({
  cik: s.optional(s.string()),
  item1: s.optional(s.float64()),
  item1A: s.optional(s.float64()),
  item2: s.optional(s.float64()),
  item7: s.optional(s.float64()),
  item7A: s.optional(s.float64()),
  accessNumber: s.optional(s.string()),
  form: s.optional(s.string()),
  filedDate: s.optional(s.string()),
  acceptedDate: s.optional(s.string()),
  reportUrl: s.optional(s.string()),
  filingUrl: s.optional(s.string()),
  _keysMap: {
    item1A: "item1a",
    item7A: "item7a",
  },
});
