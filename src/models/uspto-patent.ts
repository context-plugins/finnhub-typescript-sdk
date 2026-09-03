import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsptoPatent = {
  applicationNumber?: string;
  companyFilingName?: string[];
  filingDate?: string;
  description?: string;
  filingStatus?: string;
  patentNumber?: string;
  publicationDate?: string;
  patentType?: string;
  url?: string;
};

export const usptoPatentSchema: Schema<UsptoPatent> = s.object<UsptoPatent>({
  applicationNumber: s.optional(s.string()),
  companyFilingName: s.optional(s.array(s.string())),
  filingDate: s.optional(s.string()),
  description: s.optional(s.string()),
  filingStatus: s.optional(s.string()),
  patentNumber: s.optional(s.string()),
  publicationDate: s.optional(s.string()),
  patentType: s.optional(s.string()),
  url: s.optional(s.string()),
});
