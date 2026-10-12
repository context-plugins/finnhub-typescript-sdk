import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { aiChatBodySchema, type AiChatBody } from "../models/ai-chat-body.js";
import { aiChatResponseSchema, type AiChatResponse } from "../models/ai-chat-response.js";
import {
  airlinePriceIndexDataSchema,
  type AirlinePriceIndexData,
} from "../models/airline-price-index-data.js";
import { bankBranchResSchema, type BankBranchRes } from "../models/bank-branch-res.js";
import { countryMetadataSchema, type CountryMetadata } from "../models/country-metadata.js";
import { covidInfoSchema, type CovidInfo } from "../models/covid-info.js";
import { fdaComitteeMeetingSchema, type FdaComitteeMeeting } from "../models/fda-comittee-meeting.js";
import { quoteSchema, type Quote } from "../models/quote.js";
import { sectorMetricSchema, type SectorMetric } from "../models/sector-metric.js";
import { symbolLookupSchema, type SymbolLookup } from "../models/symbol-lookup.js";
import type { Servers } from "../servers.js";

/**
 * Search, quote, sector metrics, technical indicators and other utilities
 */
export class Misc {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * <p>Chat with our AI copilot trained on the extensive Finnhub's global data. You can ask it any
   * finance-related questions just like with other LLM models and receive results in texts and
   * widgets.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  aiChat(request: Misc.AiChatRequest, options?: RequestOptions): ApiPromise<AiChatResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ai-chat"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => aiChatBodySchema)) },
      },
      {
        success: { kind: "json", schema: aiChatResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>The Flight Ticket Price Index API provides comprehensive data on airline ticket prices,
   * including the average daily ticket price and its percentage change (price index). This data,
   * collected weekly and projected two weeks ahead, aggregates daily prices and indexes from the 50
   * busiest and largest airports across the USA. The dataset includes detailed information on
   * airlines, dates, and average ticket prices, offering valuable insights for market analysis and
   * pricing strategies.</p><p>The price index is calculated as percentage change of average daily
   * ticket price from the previous weekly reading. Raw ticket prices data is available for
   * Enterprise users. <a href="mailto:support@finnhub.io">Contact us</a> to inquire about the raw
   * price data.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airlinePriceIndex(
    request: Misc.AirlinePriceIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<AirlinePriceIndexData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/airline/price-index"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "airline", value: request.airline, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: airlinePriceIndexDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve list of US bank branches information for a given symbol.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bankBranch(request: Misc.BankBranchRequest, options?: RequestOptions): ApiPromise<BankBranchRes, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bank-branch"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.record(s.string(), s.unknown()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bankBranchResSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all countries and metadata.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  country(options?: RequestOptions): ApiPromise<CountryMetadata[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/country"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => countryMetadataSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get real-time updates on the number of COVID-19 (Corona virus) cases in the US with a
   * state-by-state breakdown. Data is sourced from CDC and reputable sources. You can also access
   * this API <a href="https://rapidapi.com/Finnhub/api/finnhub-real-time-covid-19" target="_blank"
   * rel="nofollow">here</a>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  covid19(options?: RequestOptions): ApiPromise<CovidInfo[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/covid19/us"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => covidInfoSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * FDA's advisory committees are established to provide functions which support the agency's
   * mission of protecting and promoting the public health, while meeting the requirements set forth
   * in the Federal Advisory Committee Act. Committees are either mandated by statute or established
   * at the discretion of the Department of Health and Human Services. Each committee is subject to
   * renewal at two-year intervals unless the committee charter states otherwise.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fdaCommitteeMeetingCalendar(options?: RequestOptions): ApiPromise<FdaComitteeMeeting[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fda-advisory-committee-calendar"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fdaComitteeMeetingSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get real-time quote data for US stocks. Constant polling is not recommended. Use websocket
   * if you need real-time updates.</p><p>Real-time stock prices for international markets are
   * supported for Enterprise clients via our partner's feed. <a
   * href="mailto:support@finnhub.io">Contact Us</a> to learn more.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quote(request: Misc.QuoteRequest, options?: RequestOptions): ApiPromise<Quote, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/quote"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: quoteSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get ratios for different sectors and regions/indices.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sectorMetric(
    request: Misc.SectorMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<SectorMetric, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sector/metrics"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "region", value: request.region, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectorMetricSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search for best-matching symbols based on your query. You can input anything from symbol,
   * security's name to ISIN and Cusip.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  symbolSearch(
    request: Misc.SymbolSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SymbolLookup, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "exchange", value: request.exchange, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolLookupSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Return technical indicator with price data. List of supported indicators can be found <a
   * href="https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing"
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
  technicalIndicator(
    request: Misc.TechnicalIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/indicator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "resolution", value: request.resolution, schema: s.string() },
          { name: "from", value: request.from, schema: s.int() },
          { name: "to", value: request.to, schema: s.int() },
          { name: "indicator", value: request.indicator, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Misc {
  export type AiChatRequest = {
    /** Search body */
    body?: AiChatBody;
  };

  export type AirlinePriceIndexRequest = {
    /**
     * Filter data by airline. Accepted values:
     * <code>united</code>,<code>delta</code>,<code>american_airlines</code>,<code>southwest</code>,<code>southern_airways_express</code>,<code>alaska_airlines</code>,<code>frontier_airlines</code>,<code>jetblue_airways</code>,<code>spirit_airlines</code>,<code>sun_country_airlines</code>,<code>breeze_airways</code>,<code>hawaiian_airlines</code>
     */
    airline: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type BankBranchRequest = {
    /** Symbol. */
    symbol: Record<string, unknown>;
  };

  export type QuoteRequest = {
    /** Symbol */
    symbol: string;
  };

  export type SectorMetricRequest = {
    /**
     * Region. A list of supported values for this field can be found <a
     * href="https://docs.google.com/spreadsheets/d/1afedyv7yWJ-z7pMjaAZK-f6ENY3mI3EBCk95QffpoHw/edit?usp=sharing"
     * target="_blank">here</a>.
     */
    region: string;
  };

  export type SymbolSearchRequest = {
    /** Query text can be symbol, name, isin, or cusip. */
    q: string;
    /** Exchange limit. */
    exchange?: string;
  };

  export type TechnicalIndicatorRequest = {
    /** symbol */
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
    /**
     * Indicator name. Full list can be found <a
     * href="https://docs.google.com/spreadsheets/d/1ylUvKHVYN2E87WdwIza8ROaCpd48ggEl1k5i5SgA29k/edit?usp=sharing"
     * target="_blank">here</a>.
     */
    indicator: string;
  };
}
