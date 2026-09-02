import { s, type Schema } from "../core/index.js";

export type Forexrates = {
  base?: string;
  quote?: Record<string, unknown>;
};

export const forexratesSchema: Schema<Forexrates> = s.object<Forexrates>({
  base: s.optional(s.string()),
  quote: s.optional(s.record(s.string(), s.unknown())),
});
