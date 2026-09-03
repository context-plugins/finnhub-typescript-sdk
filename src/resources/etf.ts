import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { etFsAllocationSchema, type EtFsAllocation } from "../models/et-fs-allocation.js";
import { etFsCountryExposureSchema, type EtFsCountryExposure } from "../models/et-fs-country-exposure.js";
import { etFsHoldingsSchema, type EtFsHoldings } from "../models/et-fs-holdings.js";
import { etFsProfileSchema, type EtFsProfile } from "../models/et-fs-profile.js";
import { etFsSectorExposureSchema, type EtFsSectorExposure } from "../models/et-fs-sector-exposure.js";
import type { Servers } from "../servers.js";

export class Etf {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  etfsAllocation(
    request: Etf.EtfsAllocationRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsAllocation, ResponseError> {
    return this.#rawClient.execute<EtFsAllocation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/etf/allocation"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsAllocationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  etfsCountryExposure(
    request: Etf.EtfsCountryExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsCountryExposure, ResponseError> {
    return this.#rawClient.execute<EtFsCountryExposure, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/etf/country"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsCountryExposureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  etfsHoldings(
    request: Etf.EtfsHoldingsRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsHoldings, ResponseError> {
    return this.#rawClient.execute<EtFsHoldings, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/etf/holdings"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "skip", value: request.skip, schema: s.optional(s.number()) },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsHoldingsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  etfsProfile(
    request: Etf.EtfsProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsProfile, ResponseError> {
    return this.#rawClient.execute<EtFsProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/etf/profile"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  etfsSectorExposure(
    request: Etf.EtfsSectorExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsSectorExposure, ResponseError> {
    return this.#rawClient.execute<EtFsSectorExposure, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/etf/sector"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsSectorExposureSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Etf {
  export type EtfsAllocationRequest = {
    symbol?: string;
    isin?: string;
  };

  export type EtfsCountryExposureRequest = {
    symbol?: string;
    isin?: string;
  };

  export type EtfsHoldingsRequest = {
    symbol?: string;
    isin?: string;
    skip?: number;
    date?: string;
  };

  export type EtfsProfileRequest = {
    symbol?: string;
    isin?: string;
  };

  export type EtfsSectorExposureRequest = {
    symbol?: string;
    isin?: string;
  };
}
