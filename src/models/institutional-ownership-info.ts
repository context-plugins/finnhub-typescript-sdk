import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstitutionalOwnershipInfo = {
  /** Investor's company CIK. */
  cik?: string;
  /** Firm's name. */
  name?: string;
  /** <code>put</code> or <code>call</code> for options. */
  putCall?: string;
  /** Number of shares change. */
  change?: number;
  /** Number of shares with no voting rights. */
  noVoting?: number;
  /** Percentage of portfolio. */
  percentage?: number;
  /** News score. */
  share?: number;
  /** Number of shares with shared voting rights. */
  sharedVoting?: number;
  /** Number of shares with sole voting rights. */
  soleVoting?: number;
  /** Position value. */
  value?: number;
};

export const institutionalOwnershipInfoSchema: Schema<InstitutionalOwnershipInfo> =
  s.object<InstitutionalOwnershipInfo>({
    cik: s.optional(s.string()),
    name: s.optional(s.string()),
    putCall: s.optional(s.string()),
    change: s.optional(s.float64()),
    noVoting: s.optional(s.float64()),
    percentage: s.optional(s.float64()),
    share: s.optional(s.float64()),
    sharedVoting: s.optional(s.float64()),
    soleVoting: s.optional(s.float64()),
    value: s.optional(s.float64()),
  });
