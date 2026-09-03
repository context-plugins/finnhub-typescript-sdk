import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lobbyingDataSchema, type LobbyingData } from "./lobbying-data.js";

export type LobbyingResult = {
  symbol?: string;
  data?: LobbyingData[];
};

export const lobbyingResultSchema: Schema<LobbyingResult> = s.object<LobbyingResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => lobbyingDataSchema))),
});
