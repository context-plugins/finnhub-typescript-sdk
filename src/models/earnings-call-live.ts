import { s, type Schema } from "../core/index.js";
import { earningsCallLiveResultSchema, type EarningsCallLiveResult } from "./earnings-call-live-result.js";

export type EarningsCallLive = {
  event?: EarningsCallLiveResult[];
};

export const earningsCallLiveSchema: Schema<EarningsCallLive> = s.object<EarningsCallLive>({
  event: s.optional(s.array(s.lazy(() => earningsCallLiveResultSchema))),
});
