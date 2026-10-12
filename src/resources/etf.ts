import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { etFsAllocationSchema, type EtFsAllocation } from "../models/et-fs-allocation.js";
import { etFsCountryExposureSchema, type EtFsCountryExposure } from "../models/et-fs-country-exposure.js";
import { etFsHoldingsSchema, type EtFsHoldings } from "../models/et-fs-holdings.js";
import { etFsProfileSchema, type EtFsProfile } from "../models/et-fs-profile.js";
import { etFsSectorExposureSchema, type EtFsSectorExposure } from "../models/et-fs-sector-exposure.js";
import type { Servers } from "../servers.js";

/**
 * ETF profiles, holdings and data
 */
export class Etf {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get ETF equity allocation based on the characteristics of the holdings.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  etfsAllocation(
    request: Etf.EtfsAllocationRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsAllocation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/etf/allocation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsAllocationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get ETF country exposure data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  etfsCountryExposure(
    request: Etf.EtfsCountryExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsCountryExposure, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/etf/country"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsCountryExposureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get full ETF holdings/constituents. This endpoint has global coverage. Widget only shows top 10
   * holdings. A list of supported ETFs can be found <a href="/api/v1/etf/list?token="
   * target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  etfsHoldings(
    request: Etf.EtfsHoldingsRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsHoldings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/etf/holdings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsHoldingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get ETF profile information. This endpoint has global coverage. A list of supported ETFs can be
   * found <a href="/api/v1/etf/list?type=csv&token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  etfsProfile(request: Etf.EtfsProfileRequest, options?: RequestOptions): ApiPromise<EtFsProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/etf/profile"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get ETF sector exposure data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  etfsSectorExposure(
    request: Etf.EtfsSectorExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<EtFsSectorExposure, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/etf/sector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: etFsSectorExposureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Etf {
  export type EtfsAllocationRequest = {
    /** ETF symbol. */
    symbol?: string;
    /** ETF isin. */
    isin?: string;
  };

  export type EtfsCountryExposureRequest = {
    /** ETF symbol. */
    symbol?: string;
    /** ETF isin. */
    isin?: string;
  };

  export type EtfsHoldingsRequest = {
    /** ETF symbol. */
    symbol?: string;
    /** ETF isin. */
    isin?: string;
    /**
     * Skip the first n results. You can use this parameter to query historical constituents data.
     * The latest result is returned if skip=0 or not set.
     */
    skip?: number;
    /**
     * Query holdings by date. You can use either this param or <code>skip</code> param, not both.
     */
    date?: string;
  };

  export type EtfsProfileRequest = {
    /** ETF symbol. */
    symbol?: string;
    /** ETF isin. */
    isin?: string;
  };

  export type EtfsSectorExposureRequest = {
    /** ETF symbol. */
    symbol?: string;
    /** ETF isin. */
    isin?: string;
  };
}
