import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { developmentSchema, type Development } from "./development.js";

export type PressRelease = {
  /** Company symbol. */
  symbol?: string;
  /** Array of major developments. */
  majorDevelopment?: Development[];
};

export const pressReleaseSchema: Schema<PressRelease> = s.object<PressRelease>({
  symbol: s.optional(s.string()),
  majorDevelopment: s.optional(s.array(s.lazy(() => developmentSchema))),
});
