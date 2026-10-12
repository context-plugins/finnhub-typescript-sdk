import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { capexEstimatesSchema, type CapexEstimates } from "../models/capex-estimates.js";
import {
  companyEarningsQualityScoreSchema,
  type CompanyEarningsQualityScore,
} from "../models/company-earnings-quality-score.js";
import { dpsEstimatesSchema, type DpsEstimates } from "../models/dps-estimates.js";
import { earningResultSchema, type EarningResult } from "../models/earning-result.js";
import { earningsEstimatesSchema, type EarningsEstimates } from "../models/earnings-estimates.js";
import { ebitEstimatesSchema, type EbitEstimates } from "../models/ebit-estimates.js";
import { ebitdaEstimatesSchema, type EbitdaEstimates } from "../models/ebitda-estimates.js";
import { fcfEstimatesSchema, type FcfEstimates } from "../models/fcf-estimates.js";
import { grossIncomeEstimatesSchema, type GrossIncomeEstimates } from "../models/gross-income-estimates.js";
import { netIncomeEstimatesSchema, type NetIncomeEstimates } from "../models/net-income-estimates.js";
import { ocfEstimatesSchema, type OcfEstimates } from "../models/ocf-estimates.js";
import {
  pretaxIncomeEstimatesSchema,
  type PretaxIncomeEstimates,
} from "../models/pretax-income-estimates.js";
import { priceTargetSchema, type PriceTarget } from "../models/price-target.js";
import { recommendationTrendSchema, type RecommendationTrend } from "../models/recommendation-trend.js";
import { revenueBreakdownSchema, type RevenueBreakdown } from "../models/revenue-breakdown.js";
import { revenueBreakdown2Schema, type RevenueBreakdown2 } from "../models/revenue-breakdown2.js";
import { revenueEstimatesSchema, type RevenueEstimates } from "../models/revenue-estimates.js";
import { upgradeDowngradeSchema, type UpgradeDowngrade } from "../models/upgrade-downgrade.js";
import type { Servers } from "../servers.js";

/**
 * Analyst estimates, earnings, price targets, recommendations and revenue breakdowns
 */
export class StockEstimates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get company's capital expenditure estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyCapexEstimates(
    request: StockEstimates.CompanyCapexEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<CapexEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/capex-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capexEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's Dividend per Share estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyDpsEstimates(
    request: StockEstimates.CompanyDpsEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<DpsEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/dps-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dpsEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company historical quarterly earnings surprise going back to 2000.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyEarnings(
    request: StockEstimates.CompanyEarningsRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningResult[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/earnings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => earningResultSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>This endpoint provides Earnings Quality Score for global companies.</p><p> Earnings quality
   * refers to the extent to which current earnings predict future earnings. "High-quality" earnings
   * are expected to persist, while "low-quality" earnings do not. A higher score means a higher
   * earnings quality</p><p>Finnhub uses a proprietary model which takes into consideration 4
   * criteria:</p> <ul style="list-style-type: unset; margin-left:
   * 30px;"><li>Profitability</li><li>Growth</li><li>Cash Generation & Capital
   * Allocation</li><li>Leverage</li></ul><br/><p>We then compare the metrics of each company in
   * each category against its peers in the same industry to gauge how quality its earnings is.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyEarningsQualityScore(
    request: StockEstimates.CompanyEarningsQualityScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyEarningsQualityScore, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/earnings-quality-score"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyEarningsQualityScoreSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's ebit estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyEbitEstimates(
    request: StockEstimates.CompanyEbitEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<EbitEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/ebit-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ebitEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's ebitda estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyEbitdaEstimates(
    request: StockEstimates.CompanyEbitdaEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<EbitdaEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/ebitda-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ebitdaEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's EPS estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyEpsEstimates(
    request: StockEstimates.CompanyEpsEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/eps-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's free cash flow estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyFcfEstimates(
    request: StockEstimates.CompanyFcfEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<FcfEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/fcf-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fcfEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's gross income estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyGrossIncomeEstimates(
    request: StockEstimates.CompanyGrossIncomeEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<GrossIncomeEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/gross-income-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grossIncomeEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's net income estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyNetIncomeEstimates(
    request: StockEstimates.CompanyNetIncomeEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<NetIncomeEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/net-income-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: netIncomeEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's operating cash flow estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyOcfEstimates(
    request: StockEstimates.CompanyOcfEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<OcfEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/ocf-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ocfEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's pretax income estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyPretaxIncomeEstimates(
    request: StockEstimates.CompanyPretaxIncomeEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<PretaxIncomeEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/pretax-income-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pretaxIncomeEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get company's revenue estimates.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyRevenueEstimates(
    request: StockEstimates.CompanyRevenueEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<RevenueEstimates, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/revenue-estimate"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revenueEstimatesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get latest price target consensus.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  priceTarget(
    request: StockEstimates.PriceTargetRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceTarget, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/price-target"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceTargetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get latest analyst recommendation trends for a company.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recommendationTrends(
    request: StockEstimates.RecommendationTrendsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecommendationTrend[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/recommendation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => recommendationTrendSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get revenue breakdown as-reporetd by product and geography. Users on personal plans can
   * access data for US companies which disclose their revenue breakdown in the annual or quarterly
   * reports.</p><p>Global standardized revenue breakdown/segments data is available for Enterprise
   * users. <a href="mailto:support@finnhub.io">Contact us</a> to inquire about the access for
   * Global standardized data.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revenueBreakdown(
    request: StockEstimates.RevenueBreakdownRequest,
    options?: RequestOptions,
  ): ApiPromise<RevenueBreakdown, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/revenue-breakdown"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revenueBreakdownSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get standardized revenue breakdown and KPIs data for 30,000+ global companies.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revenueBreakdown2(
    request: StockEstimates.RevenueBreakdown2Request,
    options?: RequestOptions,
  ): ApiPromise<RevenueBreakdown2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/revenue-breakdown2"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revenueBreakdown2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get latest stock upgrade and downgrade.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upgradeDowngrade(
    request: StockEstimates.UpgradeDowngradeRequest,
    options?: RequestOptions,
  ): ApiPromise<UpgradeDowngrade[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/upgrade-downgrade"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => upgradeDowngradeSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StockEstimates {
  export type CompanyCapexEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyDpsEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyEarningsRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /** Limit number of period returned. Leave blank to get the full history. */
    limit?: number;
  };

  export type CompanyEarningsQualityScoreRequest = {
    /** Symbol. */
    symbol: string;
    /** Frequency. Currently support <code>annual</code> and <code>quarterly</code> */
    freq: string;
  };

  export type CompanyEbitEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyEbitdaEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyEpsEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyFcfEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyGrossIncomeEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyNetIncomeEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyOcfEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyPretaxIncomeEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type CompanyRevenueEstimatesRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Can take 1 of the following values: <code>annual, quarterly</code>. Default to
     * <code>quarterly</code>
     */
    freq?: string;
  };

  export type PriceTargetRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
  };

  export type RecommendationTrendsRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
  };

  export type RevenueBreakdownRequest = {
    /** Symbol. */
    symbol?: string;
    /** CIK. */
    cik?: string;
  };

  export type RevenueBreakdown2Request = {
    /** Symbol. */
    symbol: string;
  };

  export type UpgradeDowngradeRequest = {
    /**
     * Symbol of the company: AAPL. If left blank, the API will return latest stock
     * upgrades/downgrades.
     */
    symbol?: string;
    /** From date: 2000-03-15. */
    from?: string;
    /** To date: 2020-03-16. */
    to?: string;
  };
}
