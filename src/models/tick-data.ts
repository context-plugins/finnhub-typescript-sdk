import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TickData = {
  /** Symbol. */
  s?: string;
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
  /** List of timestamp in UNIX ms. */
  t?: number[];
  /**
   * List of venues/exchanges. A list of exchange codes can be found <a target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing",>here</a>
   */
  x?: string[];
  /**
   * List of trade conditions. A comprehensive list of trade conditions code can be found <a
   * target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1PUxiSWPHSODbaTaoL2Vef6DgU-yFtlRGZf19oBb9Hp0/edit?usp=sharing">here</a>
   */
  c?: string[][];
};

export const tickDataSchema: Schema<TickData> = s.object<TickData>({
  s: s.optional(s.string()),
  skip: s.optional(s.int()),
  count: s.optional(s.int()),
  total: s.optional(s.int()),
  v: s.optional(s.array(s.float64())),
  p: s.optional(s.array(s.float64())),
  t: s.optional(s.array(s.int())),
  x: s.optional(s.array(s.string())),
  c: s.optional(s.array(s.array(s.string()))),
});
