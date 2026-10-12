import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { aggregateIndicatorsSchema, type AggregateIndicators } from "../models/aggregate-indicators.js";
import { patternRecognitionSchema, type PatternRecognition } from "../models/pattern-recognition.js";
import { supportResistanceSchema, type SupportResistance } from "../models/support-resistance.js";
import type { Servers } from "../servers.js";

/**
 * Technical analysis scanner
 */
export class Scan {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get aggregate signal of multiple technical indicators such as MACD, RSI, Moving Average v.v. A
   * full list of indicators can be found <a
   * href="https://docs.google.com/spreadsheets/d/1MWuy0WuT2yVlxr1KbPdggVygMZtJfunDnhe-C0GEXYM/edit?usp=sharing"
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
  aggregateIndicator(
    request: Scan.AggregateIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregateIndicators, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scan/technical-indicator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aggregateIndicatorsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Run pattern recognition algorithm on a symbol. Support double top/bottom, triple top/bottom,
   * head and shoulders, triangle, wedge, channel, flag, and candlestick patterns.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patternRecognition(
    request: Scan.PatternRecognitionRequest,
    options?: RequestOptions,
  ): ApiPromise<PatternRecognition, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scan/pattern"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: patternRecognitionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get support and resistance levels for a symbol.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  supportResistance(
    request: Scan.SupportResistanceRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportResistance, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/scan/support-resistance"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportResistanceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Scan {
  export type AggregateIndicatorRequest = {
    /** symbol */
    symbol: string;
    /**
     * Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might
     * not be available depending on the exchange.
     */
    resolution: string;
  };

  export type PatternRecognitionRequest = {
    /** Symbol */
    symbol: string;
    /**
     * Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might
     * not be available depending on the exchange.
     */
    resolution: string;
  };

  export type SupportResistanceRequest = {
    /** Symbol */
    symbol: string;
    /**
     * Supported resolution includes <code>1, 5, 15, 30, 60, D, W, M </code>.Some timeframes might
     * not be available depending on the exchange.
     */
    resolution: string;
  };
}
