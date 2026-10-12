import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { bondCandlesSchema, type BondCandles } from "../models/bond-candles.js";
import { bondProfileSchema, type BondProfile } from "../models/bond-profile.js";
import { bondTickDataSchema, type BondTickData } from "../models/bond-tick-data.js";
import { bondYieldCurveSchema, type BondYieldCurve } from "../models/bond-yield-curve.js";
import type { Servers } from "../servers.js";

/**
 * Bond profiles, prices and yields
 */
export class Bond {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * <p>Get bond's price data. The following datasets are supported:</p><table class="table
   * table-hover"> <thead> <tr> <th>Exchange</th> <th>Segment</th> <th>Delay</th> </tr> </thead>
   * <tbody> <tr> <td class="text-blue">US Government Bonds</td> <td>Government Bonds</td>
   * <td>End-of-day</td> </tr> <tr> <td class="text-blue">FINRA Trace</td> <td>BTDS: US Corporate
   * Bonds</td> <td>Delayed 4h</td> </tr> <tr> <td class="text-blue">FINRA Trace</td> <td>144A
   * Bonds</td> <td>Delayed 4h</td> </tr> <tr> <td class="text-blue">International Bonds</td>
   * <td>International Bonds</td> <td>End-of-day</td> </tr> </tbody> </table>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bondPrice(request: Bond.BondPriceRequest, options?: RequestOptions): ApiPromise<BondCandles, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bond/price"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "isin", value: request.isin, schema: s.string() },
          { name: "from", value: request.from, schema: s.int() },
          { name: "to", value: request.to, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondCandlesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get general information of a bond. You can query by FIGI, ISIN or CUSIP. A list of supported
   * bonds can be found <a href="/api/v1/bond/list?type=csv&token=" target="_blank">here</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bondProfile(request: Bond.BondProfileRequest, options?: RequestOptions): ApiPromise<BondProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bond/profile"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "cusip", value: request.cusip, schema: s.optional(s.string()) },
          { name: "figi", value: request.figi, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get trade-level data for bonds. The following datasets are supported:</p><table class="table
   * table-hover"> <thead> <tr> <th>Exchange</th> <th>Segment</th> <th>Delay</th> </tr> </thead>
   * <tbody> <tr> <td class="text-blue">FINRA Trace</th> <td>BTDS: US Corporate Bonds</td>
   * <td>Delayed 4h</td> </tr> <tr> <td class="text-blue">FINRA Trace</th> <td>144A Bonds</td>
   * <td>Delayed 4h</td> </tr> </tbody> </table>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bondTick(request: Bond.BondTickRequest, options?: RequestOptions): ApiPromise<BondTickData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bond/tick"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "isin", value: request.isin, schema: s.string() },
          { name: "date", value: request.date, schema: s.dateOnly() },
          { name: "limit", value: request.limit, schema: s.int() },
          { name: "skip", value: request.skip, schema: s.int() },
          { name: "exchange", value: request.exchange, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondTickDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get yield curve data for Treasury bonds.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bondYieldCurve(
    request: Bond.BondYieldCurveRequest,
    options?: RequestOptions,
  ): ApiPromise<BondYieldCurve, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bond/yield-curve"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "code", value: request.code, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bondYieldCurveSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Bond {
  export type BondPriceRequest = {
    /** ISIN. */
    isin: string;
    /** UNIX timestamp. Interval initial value. */
    from: number;
    /** UNIX timestamp. Interval end value. */
    to: number;
  };

  export type BondProfileRequest = {
    /** ISIN */
    isin?: string;
    /** CUSIP */
    cusip?: string;
    /** FIGI */
    figi?: string;
  };

  export type BondTickRequest = {
    /** ISIN. */
    isin: string;
    /** Date: 2020-04-02. */
    date: string;
    /** Limit number of ticks returned. Maximum value: <code>25000</code> */
    limit: number;
    /** Number of ticks to skip. Use this parameter to loop through the entire data. */
    skip: number;
    /** Currently support the following values: <code>trace</code>. */
    exchange: string;
  };

  export type BondYieldCurveRequest = {
    /**
     * Bond's code. You can find the list of supported code <a
     * href="https://docs.google.com/spreadsheets/d/1iA-lM0Kht7lsQZ7Uu_s6r2i1BbQNUNO9eGkO5-zglHg/edit?usp=sharing"
     * target="_blank" rel="noopener">here</a>.
     */
    code: string;
  };
}
