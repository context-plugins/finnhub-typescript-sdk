import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchBody = {
  /** Search query */
  query: string;
  /** List of isin to search, comma separated (Max: 50). */
  isins?: string;
  /** List of cusip to search, comma separated (Max: 50). */
  cusips?: string;
  /** List of SEC Center Index Key to search, comma separated (Max: 50). */
  ciks?: string;
  /** List of SEDAR issuer number to search, comma separated (Max: 50). */
  sedarIds?: string;
  /** List of Companies House number to search, comma separated (Max: 50). */
  chIds?: string;
  /** List of symbols to search, comma separated (Max: 50). */
  symbols?: string;
  /** List of sedols to search, comma separated (Max: 50). */
  sedols?: string;
  /**
   * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to
   * see all available values.
   */
  sources?: string;
  /**
   * List of forms to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to
   * see all available values.
   */
  forms?: string;
  /**
   * List of gics to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see
   * all available values.
   */
  gics?: string;
  /**
   * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to
   * see all available values.
   */
  naics?: string;
  /**
   * List of exhibits to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to
   * see all available values.
   */
  exhibits?: string;
  /**
   * List of exchanges to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint
   * to see all available values.
   */
  exchanges?: string;
  /**
   * List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to
   * see all available values.
   */
  countries?: string;
  /**
   * List of SEC's exchanges act to search, comma separated. Look at <code>/filter</code> endpoint
   * to see all available values.
   */
  acts?: string;
  /**
   * List of market capitalization to search, comma separated. Look at <code>/filter</code> endpoint
   * to see all available values.
   */
  caps?: string;
  /** Search from date in format: YYYY-MM-DD, default from the last 2 years */
  fromDate?: string;
  /** Search to date in format: YYYY-MM-DD, default to today */
  toDate?: string;
  /** Use for pagination, default to page 1 */
  page?: string;
  /**
   * Sort result by, default: sortMostRecent. Look at <code>/filter</code> endpoint to see all
   * available values.
   */
  sort?: string;
  /** Enable highlight in returned filings. If enabled, only return 10 results each time */
  highlighted?: boolean;
};

export const searchBodySchema: Schema<SearchBody> = s.object<SearchBody>({
  query: s.string(),
  isins: s.optional(s.string()),
  cusips: s.optional(s.string()),
  ciks: s.optional(s.string()),
  sedarIds: s.optional(s.string()),
  chIds: s.optional(s.string()),
  symbols: s.optional(s.string()),
  sedols: s.optional(s.string()),
  sources: s.optional(s.string()),
  forms: s.optional(s.string()),
  gics: s.optional(s.string()),
  naics: s.optional(s.string()),
  exhibits: s.optional(s.string()),
  exchanges: s.optional(s.string()),
  countries: s.optional(s.string()),
  acts: s.optional(s.string()),
  caps: s.optional(s.string()),
  fromDate: s.optional(s.string()),
  toDate: s.optional(s.string()),
  page: s.optional(s.string()),
  sort: s.optional(s.string()),
  highlighted: s.optional(s.boolean()),
});
