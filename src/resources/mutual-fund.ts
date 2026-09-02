import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  mutualFundCountryExposureSchema,
  type MutualFundCountryExposure,
} from "../models/mutual-fund-country-exposure.js";
import { mutualFundEetPaiSchema, type MutualFundEetPai } from "../models/mutual-fund-eet-pai.js";
import { mutualFundEetSchema, type MutualFundEet } from "../models/mutual-fund-eet.js";
import { mutualFundHoldingsSchema, type MutualFundHoldings } from "../models/mutual-fund-holdings.js";
import { mutualFundProfileSchema, type MutualFundProfile } from "../models/mutual-fund-profile.js";
import {
  mutualFundSectorExposureSchema,
  type MutualFundSectorExposure,
} from "../models/mutual-fund-sector-exposure.js";
import type { Servers } from "../servers.js";

export class MutualFund {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mutualFundCountryExposure(
    request: MutualFund.MutualFundCountryExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundCountryExposure, ResponseError> {
    return this.#rawClient.execute<MutualFundCountryExposure, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/mutual-fund/country"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundCountryExposureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  mutualFundEet(
    request: MutualFund.MutualFundEetRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundEet, ResponseError> {
    return this.#rawClient.execute<MutualFundEet, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/mutual-fund/eet"),
        auth: this.#auth.apiKey,
        query: [{ name: "isin", value: request.isin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundEetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  mutualFundEetPai(
    request: MutualFund.MutualFundEetPaiRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundEetPai, ResponseError> {
    return this.#rawClient.execute<MutualFundEetPai, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/mutual-fund/eet-pai"),
        auth: this.#auth.apiKey,
        query: [{ name: "isin", value: request.isin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundEetPaiSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  mutualFundHoldings(
    request: MutualFund.MutualFundHoldingsRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundHoldings, ResponseError> {
    return this.#rawClient.execute<MutualFundHoldings, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/mutual-fund/holdings"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "skip", value: request.skip, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundHoldingsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  mutualFundProfile(
    request: MutualFund.MutualFundProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundProfile, ResponseError> {
    return this.#rawClient.execute<MutualFundProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/mutual-fund/profile"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  mutualFundSectorExposure(
    request: MutualFund.MutualFundSectorExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundSectorExposure, ResponseError> {
    return this.#rawClient.execute<MutualFundSectorExposure, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/mutual-fund/sector"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundSectorExposureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MutualFund {
  export type MutualFundCountryExposureRequest = {
    symbol?: string;
    isin?: string;
  };

  export type MutualFundEetRequest = {
    isin: string;
  };

  export type MutualFundEetPaiRequest = {
    isin: string;
  };

  export type MutualFundHoldingsRequest = {
    symbol?: string;
    isin?: string;
    skip?: number;
  };

  export type MutualFundProfileRequest = {
    symbol?: string;
    isin?: string;
  };

  export type MutualFundSectorExposureRequest = {
    symbol?: string;
    isin?: string;
  };
}
