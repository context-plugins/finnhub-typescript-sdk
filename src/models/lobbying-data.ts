import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LobbyingData = {
  /** Symbol. */
  symbol?: string;
  /** Company's name. */
  name?: string;
  /** Description. */
  description?: string;
  /** Country. */
  country?: string;
  /** Year. */
  year?: number;
  /** Period. */
  period?: string;
  /** Income reported by lobbying firms. */
  income?: number;
  /** Expenses reported by the company. */
  expenses?: number;
  /** Document's URL. */
  documentUrl?: string;
  /** Posted name. */
  postedName?: string;
  /** Date. */
  date?: string;
  /** Client ID. */
  clientId?: string;
  /** Registrant ID. */
  registrantId?: string;
  /** Senate ID. */
  senateId?: string;
  /** House registrant ID. */
  houseregistrantId?: string;
};

export const lobbyingDataSchema: Schema<LobbyingData> = s.object<LobbyingData>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  country: s.optional(s.string()),
  year: s.optional(s.int()),
  period: s.optional(s.string()),
  income: s.optional(s.float64()),
  expenses: s.optional(s.float64()),
  documentUrl: s.optional(s.string()),
  postedName: s.optional(s.string()),
  date: s.optional(s.string()),
  clientId: s.optional(s.string()),
  registrantId: s.optional(s.string()),
  senateId: s.optional(s.string()),
  houseregistrantId: s.optional(s.string()),
});
