import { s, type Schema } from "../core/index.js";

export type LobbyingData = {
  symbol?: string;
  name?: string;
  description?: string;
  country?: string;
  year?: number;
  period?: string;
  income?: number;
  expenses?: number;
  documentUrl?: string;
  postedName?: string;
  date?: string;
  clientId?: string;
  registrantId?: string;
  senateId?: string;
  houseregistrantId?: string;
};

export const lobbyingDataSchema: Schema<LobbyingData> = s.object<LobbyingData>({
  symbol: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  country: s.optional(s.string()),
  year: s.optional(s.number()),
  period: s.optional(s.string()),
  income: s.optional(s.number()),
  expenses: s.optional(s.number()),
  documentUrl: s.optional(s.string()),
  postedName: s.optional(s.string()),
  date: s.optional(s.string()),
  clientId: s.optional(s.string()),
  registrantId: s.optional(s.string()),
  senateId: s.optional(s.string()),
  houseregistrantId: s.optional(s.string()),
});
