import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { cryptoCandlesSchema, type CryptoCandles } from "../models/crypto-candles.js";
import { cryptoProfileSchema, type CryptoProfile } from "../models/crypto-profile.js";
import { cryptoSymbolSchema, type CryptoSymbol } from "../models/crypto-symbol.js";
import type { Servers } from "../servers.js";

/**
 * Crypto exchanges, symbols and candles
 */
export class Crypto {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get candlestick data for crypto symbols.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoCandles(
    request: Crypto.CryptoCandlesRequest,
    options?: RequestOptions,
  ): ApiPromise<CryptoCandles, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/crypto/candle"),
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
        success: { kind: "json", schema: cryptoCandlesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List supported crypto exchanges
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoExchanges(options?: RequestOptions): ApiPromise<string[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/crypto/exchange"),
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
   * Get crypto's profile.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoProfile(
    request: Crypto.CryptoProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<CryptoProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/crypto/profile"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cryptoProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List supported crypto symbols by exchange
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptoSymbols(
    request: Crypto.CryptoSymbolsRequest,
    options?: RequestOptions,
  ): ApiPromise<CryptoSymbol[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/crypto/symbol"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => cryptoSymbolSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Crypto {
  export type CryptoCandlesRequest = {
    /** Use symbol returned in <code>/crypto/symbol</code> endpoint for this field. */
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

  export type CryptoProfileRequest = {
    /** Crypto symbol such as BTC or ETH. */
    symbol: string;
  };

  export type CryptoSymbolsRequest = {
    /** Exchange you want to get the list of symbols from. */
    exchange: string;
  };
}
