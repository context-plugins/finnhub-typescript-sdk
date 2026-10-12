import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HistoricalNbbo = {
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
  /** List of Ask volume data. */
  av?: number[];
  /** List of Ask price data. */
  a?: number[];
  /**
   * List of venues/exchanges - Ask price. A list of exchange codes can be found <a target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing",>here</a>
   */
  ax?: string[];
  /** List of Bid volume data. */
  bv?: number[];
  /** List of Bid price data. */
  b?: number[];
  /**
   * List of venues/exchanges - Bid price. A list of exchange codes can be found <a target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing",>here</a>
   */
  bx?: string[];
  /** List of timestamp in UNIX ms. */
  t?: number[];
  /**
   * List of quote conditions. A comprehensive list of quote conditions code can be found <a
   * target="_blank"
   * href="https://docs.google.com/spreadsheets/d/1iiA6e7Osdtai0oPMOUzgAIKXCsay89dFDmsegz6OpEg/edit?usp=sharing">here</a>
   */
  c?: string[][];
};

export const historicalNbboSchema: Schema<HistoricalNbbo> = s.object<HistoricalNbbo>({
  s: s.optional(s.string()),
  skip: s.optional(s.int()),
  count: s.optional(s.int()),
  total: s.optional(s.int()),
  av: s.optional(s.array(s.float64())),
  a: s.optional(s.array(s.float64())),
  ax: s.optional(s.array(s.string())),
  bv: s.optional(s.array(s.float64())),
  b: s.optional(s.array(s.float64())),
  bx: s.optional(s.array(s.string())),
  t: s.optional(s.array(s.int())),
  c: s.optional(s.array(s.array(s.string()))),
});
