import { s, type Schema } from "../core/index.js";
import { keyCustomersSuppliersSchema, type KeyCustomersSuppliers } from "./key-customers-suppliers.js";

export type SupplyChainRelationships = {
  symbol?: string;
  data?: KeyCustomersSuppliers[];
};

export const supplyChainRelationshipsSchema: Schema<SupplyChainRelationships> =
  s.object<SupplyChainRelationships>({
    symbol: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => keyCustomersSuppliersSchema))),
  });
