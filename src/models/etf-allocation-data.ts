import { s, type Schema } from "../core/index.js";

export type EtfAllocationData = {
  largeBlend?: number;
  largeGrowth?: number;
  largeValue?: number;
  midBlend?: number;
  midGrowth?: number;
  midValue?: number;
  smallBlend?: number;
  smallGrowth?: number;
  smallValue?: number;
};

export const etfAllocationDataSchema: Schema<EtfAllocationData> = s.object<EtfAllocationData>({
  largeBlend: s.optional(s.number()),
  largeGrowth: s.optional(s.number()),
  largeValue: s.optional(s.number()),
  midBlend: s.optional(s.number()),
  midGrowth: s.optional(s.number()),
  midValue: s.optional(s.number()),
  smallBlend: s.optional(s.number()),
  smallGrowth: s.optional(s.number()),
  smallValue: s.optional(s.number()),
});
