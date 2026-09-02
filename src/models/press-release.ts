import { s, type Schema } from "../core/index.js";
import { developmentSchema, type Development } from "./development.js";

export type PressRelease = {
  symbol?: string;
  majorDevelopment?: Development[];
};

export const pressReleaseSchema: Schema<PressRelease> = s.object<PressRelease>({
  symbol: s.optional(s.string()),
  majorDevelopment: s.optional(s.array(s.lazy(() => developmentSchema))),
});
