import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtfAllocationData = {
  /** Percentage of stocks classified as Large Blend. */
  largeBlend?: number;
  /** Percentage of stocks classified as Large Growth. */
  largeGrowth?: number;
  /** Percentage of stocks classified as Large Value. */
  largeValue?: number;
  /** Percentage of stocks classified as Mid-cap Blend. */
  midBlend?: number;
  /** Percentage of stocks classified as Mid-cap Growth. */
  midGrowth?: number;
  /** Percentage of stocks classified as Mid-cap Value. */
  midValue?: number;
  /** Percentage of stocks classified as Small-cap Blend. */
  smallBlend?: number;
  /** Percentage of stocks classified as Small-cap Growth. */
  smallGrowth?: number;
  /** Percentage of stocks classified as Small-cap Value. */
  smallValue?: number;
};

export const etfAllocationDataSchema: Schema<EtfAllocationData> = s.object<EtfAllocationData>({
  largeBlend: s.optional(s.float64()),
  largeGrowth: s.optional(s.float64()),
  largeValue: s.optional(s.float64()),
  midBlend: s.optional(s.float64()),
  midGrowth: s.optional(s.float64()),
  midValue: s.optional(s.float64()),
  smallBlend: s.optional(s.float64()),
  smallGrowth: s.optional(s.float64()),
  smallValue: s.optional(s.float64()),
});
