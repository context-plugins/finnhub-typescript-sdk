import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { forexCandlesSchema, type ForexCandles } from "../models/forex-candles.js";
import { forexSymbolSchema, type ForexSymbol } from "../models/forex-symbol.js";
import { forexratesSchema, type Forexrates } from "../models/forexrates.js";
import type { Servers } from "../servers.js";

/**
 * Forex exchanges, symbols and candles
 */
export class Forex {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get candlestick data for forex symbols.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forexCandles(
    request: Forex.ForexCandlesRequest,
    options?: RequestOptions,
  ): ApiPromise<ForexCandles, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/forex/candle"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
          { name: "from", value: request.from, schema: s.int() },
          { name: "to", value: request.to, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: forexCandlesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List supported forex exchanges
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forexExchanges(options?: RequestOptions): ApiPromise<string[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/forex/exchange"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get rates for all forex pairs. Ideal for currency conversion
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forexRates(request: Forex.ForexRatesRequest, options?: RequestOptions): ApiPromise<Forexrates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/forex/rates"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "base", value: request.base, schema: s.optional(s.string()) },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: forexratesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List supported forex symbols.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forexSymbols(
    request: Forex.ForexSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<ForexSymbol[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/forex/symbol"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => forexSymbolSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Forex {
  export type ForexCandlesRequest = {
    /** Use symbol returned in <code>/forex/symbol</code> endpoint for this field. */
    symbol: string;
    /**
     * Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might
     * not be available depending on the exchange.
     */
    resolution: string;
    /** UNIX timestamp. Interval initial value. */
    from: number;
    /** UNIX timestamp. Interval end value. */
    to: number;
  };

  export type ForexRatesRequest = {
    /** Base currency. Default to EUR. */
    base?: string;
    /** Date. Leave blank to get the latest data. */
    date?: string;
  };

  export type ForexSymbolsRequest = {
    /** Exchange you want to get the list of symbols from. */
    exchange: string;
  };
}
