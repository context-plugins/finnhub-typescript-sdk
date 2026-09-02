import { s, type Schema } from "../core/index.js";
import { lobbyingDataSchema, type LobbyingData } from "./lobbying-data.js";

export type LobbyingResult = {
  symbol?: string;
  data?: LobbyingData[];
};

export const lobbyingResultSchema: Schema<LobbyingResult> = s.object<LobbyingResult>({
  symbol: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => lobbyingDataSchema))),
});
