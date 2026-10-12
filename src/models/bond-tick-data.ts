import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BondTickData = {
  /** Number of ticks skipped. */
  skip?: number;
  /**
   * Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date
   * has been returned.
   */
  count?: number;
  /** Total number of ticks for that date. */
  total?: number;
  /** List of volume data. */
  v?: number[];
  /** List of price data. */
  p?: number[];
  /** List of yield data. */
  y?: number[];
  /** List of timestamp in UNIX ms. */
  t?: number[];
  /**
   * List of values showing the side (Buy/sell) of each trade. List of supported values: <a
   * target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing",>here</a>
   */
  si?: string[];
  /**
   * List of values showing the counterparty of each trade. List of supported values: <a
   * target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing",>here</a>
   */
  cp?: string[];
  /**
   * List of values showing the reporting party of each trade. List of supported values: <a
   * target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing",>here</a>
   */
  rp?: string[];
  /** ATS flag. Y or empty */
  ats?: string[];
  /**
   * List of trade conditions. A comprehensive list of trade conditions code can be found <a
   * target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1O3aueXSPOqo7Iuyz4PqDG6yZunHsX8BTefZ2kFk5pz4/edit?usp=sharing">here</a>
   */
  c?: string[][];
};

export const bondTickDataSchema: Schema<BondTickData> = s.object<BondTickData>({
  skip: s.optional(s.int()),
  count: s.optional(s.int()),
  total: s.optional(s.int()),
  v: s.optional(s.array(s.float64())),
  p: s.optional(s.array(s.float64())),
  y: s.optional(s.array(s.float64())),
  t: s.optional(s.array(s.int())),
  si: s.optional(s.array(s.string())),
  cp: s.optional(s.array(s.string())),
  rp: s.optional(s.array(s.string())),
  ats: s.optional(s.array(s.string())),
  c: s.optional(s.array(s.array(s.string()))),
});
