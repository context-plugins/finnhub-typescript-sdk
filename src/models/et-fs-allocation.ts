import { s, type Schema } from "../core/index.js";
import { etfAllocationDataSchema, type EtfAllocationData } from "./etf-allocation-data.js";

export type EtFsAllocation = {
  symbol?: string;
  data?: EtfAllocationData;
};

export const etFsAllocationSchema: Schema<EtFsAllocation> = s.object<EtFsAllocation>({
  symbol: s.optional(s.string()),
  data: s.optional(s.lazy(() => etfAllocationDataSchema)),
});
