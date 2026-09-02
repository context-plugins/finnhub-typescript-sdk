import { s, type Schema } from "../core/index.js";

export type Indicator = {
  buy?: number;
  neutral?: number;
  sell?: number;
};

export const indicatorSchema: Schema<Indicator> = s.object<Indicator>({
  buy: s.optional(s.number()),
  neutral: s.optional(s.number()),
  sell: s.optional(s.number()),
});
