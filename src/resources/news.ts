import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { companyNewsSchema, type CompanyNews } from "../models/company-news.js";
import { marketNewsSchema, type MarketNews } from "../models/market-news.js";
import { newsSentimentSchema, type NewsSentiment } from "../models/news-sentiment.js";
import { pressReleaseSchema, type PressRelease } from "../models/press-release.js";
import type { Servers } from "../servers.js";

/**
 * Market and company news, press releases, news sentiment
 */
export class News {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List latest company news by symbol. This endpoint is only available for North American
   * companies.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyNews(
    request: News.CompanyNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyNews[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/company-news"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companyNewsSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get latest market news.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  marketNews(request: News.MarketNewsRequest, options?: RequestOptions): ApiPromise<MarketNews[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/news"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.string() },
          { name: "minId", value: request.minId, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => marketNewsSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's news sentiment and statistics. This endpoint is only available for US companies.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newsSentiment(
    request: News.NewsSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<NewsSentiment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/news-sentiment"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsSentimentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get latest major press releases of a company. This data can be used to highlight the most
   * significant events comprised of mostly press releases sourced from the exchanges, BusinessWire,
   * AccessWire, GlobeNewswire, Newsfile, and PRNewswire.</p><p>Full-text press releases data is
   * available for Enterprise clients. <a href="mailto:support@finnhub.io">Contact Us</a> to learn
   * more.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pressReleases(
    request: News.PressReleasesRequest,
    options?: RequestOptions,
  ): ApiPromise<PressRelease, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/press-releases"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pressReleaseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace News {
  export type CompanyNewsRequest = {
    /** Company symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type MarketNewsRequest = {
    /**
     * This parameter can be 1 of the following values <code>general, forex, crypto, merger</code>.
     */
    category: string;
    /** Use this field to get only news after this ID. Default to 0 */
    minId?: number;
  };

  export type NewsSentimentRequest = {
    /** Company symbol. */
    symbol: string;
  };

  export type PressReleasesRequest = {
    /** Company symbol. */
    symbol: string;
    /** From time: 2020-01-01. */
    from?: string;
    /** To time: 2020-01-05. */
    to?: string;
  };
}
