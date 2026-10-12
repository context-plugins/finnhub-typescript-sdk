import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

/**
 * Mutual fund profiles, holdings and data
 */
export class MutualFund {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Mutual Funds country exposure data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mutualFundCountryExposure(
    request: MutualFund.MutualFundCountryExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundCountryExposure, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mutual-fund/country"),
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
        success: { kind: "json", schema: mutualFundCountryExposureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get EET data for EU funds. For PAIs data, please see the EET PAI endpoint.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mutualFundEet(
    request: MutualFund.MutualFundEetRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundEet, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mutual-fund/eet"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "isin", value: request.isin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundEetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get EET PAI data for EU funds.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mutualFundEetPai(
    request: MutualFund.MutualFundEetPaiRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundEetPai, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mutual-fund/eet-pai"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "isin", value: request.isin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundEetPaiSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get full Mutual Funds holdings/constituents. This endpoint covers both US and global mutual
   * funds. For international funds, you must query the data using ISIN. A list of supported funds
   * can be found <a href="/api/v1/mutual-fund/list?token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mutualFundHoldings(
    request: MutualFund.MutualFundHoldingsRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundHoldings, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mutual-fund/holdings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mutualFundHoldingsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get mutual funds profile information. This endpoint covers both US and global mutual funds. For
   * international funds, you must query the data using ISIN. A list of supported funds can be found
   * <a href="/api/v1/mutual-fund/list?type=csv&token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mutualFundProfile(
    request: MutualFund.MutualFundProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mutual-fund/profile"),
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
        success: { kind: "json", schema: mutualFundProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Mutual Funds sector exposure data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mutualFundSectorExposure(
    request: MutualFund.MutualFundSectorExposureRequest,
    options?: RequestOptions,
  ): ApiPromise<MutualFundSectorExposure, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mutual-fund/sector"),
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
        success: { kind: "json", schema: mutualFundSectorExposureSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MutualFund {
  export type MutualFundCountryExposureRequest = {
    /** Symbol. */
    symbol?: string;
    /** Fund's isin. */
    isin?: string;
  };

  export type MutualFundEetRequest = {
    /** ISIN. */
    isin: string;
  };

  export type MutualFundEetPaiRequest = {
    /** ISIN. */
    isin: string;
  };

  export type MutualFundHoldingsRequest = {
    /** Fund's symbol. */
    symbol?: string;
    /** Fund's isin. */
    isin?: string;
    /**
     * Skip the first n results. You can use this parameter to query historical constituents data.
     * The latest result is returned if skip=0 or not set.
     */
    skip?: number;
  };

  export type MutualFundProfileRequest = {
    /** Fund's symbol. */
    symbol?: string;
    /** Fund's isin. */
    isin?: string;
  };

  export type MutualFundSectorExposureRequest = {
    /** Mutual Fund symbol. */
    symbol?: string;
    /** Fund's isin. */
    isin?: string;
  };
}
