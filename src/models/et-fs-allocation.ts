import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etfAllocationDataSchema, type EtfAllocationData } from "./etf-allocation-data.js";

export type EtFsAllocation = {
  symbol?: string;
  data?: EtfAllocationData;
};

export const etFsAllocationSchema: Schema<EtFsAllocation> = s.object<EtFsAllocation>({
  symbol: s.optional(s.string()),
  data: s.optional(s.lazy(() => etfAllocationDataSchema)),
});
