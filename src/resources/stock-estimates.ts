import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

export class StockEstimates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  companyCapexEstimates(
    request: StockEstimates.CompanyCapexEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<CapexEstimates, ResponseError> {
    return this.#rawClient.execute<CapexEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/capex-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capexEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyDpsEstimates(
    request: StockEstimates.CompanyDpsEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<DpsEstimates, ResponseError> {
    return this.#rawClient.execute<DpsEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/dps-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dpsEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyEarnings(
    request: StockEstimates.CompanyEarningsRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningResult[], ResponseError> {
    return this.#rawClient.execute<EarningResult[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/earnings"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => earningResultSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyEarningsQualityScore(
    request: StockEstimates.CompanyEarningsQualityScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyEarningsQualityScore, ResponseError> {
    return this.#rawClient.execute<CompanyEarningsQualityScore, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/earnings-quality-score"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyEarningsQualityScoreSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyEbitEstimates(
    request: StockEstimates.CompanyEbitEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<EbitEstimates, ResponseError> {
    return this.#rawClient.execute<EbitEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/ebit-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ebitEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyEbitdaEstimates(
    request: StockEstimates.CompanyEbitdaEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<EbitdaEstimates, ResponseError> {
    return this.#rawClient.execute<EbitdaEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/ebitda-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ebitdaEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyEpsEstimates(
    request: StockEstimates.CompanyEpsEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsEstimates, ResponseError> {
    return this.#rawClient.execute<EarningsEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/eps-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyFcfEstimates(
    request: StockEstimates.CompanyFcfEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<FcfEstimates, ResponseError> {
    return this.#rawClient.execute<FcfEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/fcf-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fcfEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyGrossIncomeEstimates(
    request: StockEstimates.CompanyGrossIncomeEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<GrossIncomeEstimates, ResponseError> {
    return this.#rawClient.execute<GrossIncomeEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/gross-income-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grossIncomeEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyNetIncomeEstimates(
    request: StockEstimates.CompanyNetIncomeEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<NetIncomeEstimates, ResponseError> {
    return this.#rawClient.execute<NetIncomeEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/net-income-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: netIncomeEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyOcfEstimates(
    request: StockEstimates.CompanyOcfEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<OcfEstimates, ResponseError> {
    return this.#rawClient.execute<OcfEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/ocf-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ocfEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyPretaxIncomeEstimates(
    request: StockEstimates.CompanyPretaxIncomeEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<PretaxIncomeEstimates, ResponseError> {
    return this.#rawClient.execute<PretaxIncomeEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/pretax-income-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pretaxIncomeEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyRevenueEstimates(
    request: StockEstimates.CompanyRevenueEstimatesRequest,
    options?: RequestOptions,
  ): ApiPromise<RevenueEstimates, ResponseError> {
    return this.#rawClient.execute<RevenueEstimates, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/revenue-estimate"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revenueEstimatesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  priceTarget(
    request: StockEstimates.PriceTargetRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceTarget, ResponseError> {
    return this.#rawClient.execute<PriceTarget, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/price-target"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceTargetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  recommendationTrends(
    request: StockEstimates.RecommendationTrendsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecommendationTrend[], ResponseError> {
    return this.#rawClient.execute<RecommendationTrend[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/recommendation"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => recommendationTrendSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  revenueBreakdown(
    request: StockEstimates.RevenueBreakdownRequest,
    options?: RequestOptions,
  ): ApiPromise<RevenueBreakdown, ResponseError> {
    return this.#rawClient.execute<RevenueBreakdown, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/revenue-breakdown"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revenueBreakdownSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  revenueBreakdown2(
    request: StockEstimates.RevenueBreakdown2Request,
    options?: RequestOptions,
  ): ApiPromise<RevenueBreakdown2, ResponseError> {
    return this.#rawClient.execute<RevenueBreakdown2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/revenue-breakdown2"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revenueBreakdown2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upgradeDowngrade(
    request: StockEstimates.UpgradeDowngradeRequest,
    options?: RequestOptions,
  ): ApiPromise<UpgradeDowngrade[], ResponseError> {
    return this.#rawClient.execute<UpgradeDowngrade[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/upgrade-downgrade"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => upgradeDowngradeSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StockEstimates {
  export type CompanyCapexEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyDpsEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyEarningsRequest = {
    symbol: string;
    limit?: number;
  };

  export type CompanyEarningsQualityScoreRequest = {
    symbol: string;
    freq: string;
  };

  export type CompanyEbitEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyEbitdaEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyEpsEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyFcfEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyGrossIncomeEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyNetIncomeEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyOcfEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyPretaxIncomeEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type CompanyRevenueEstimatesRequest = {
    symbol: string;
    freq?: string;
  };

  export type PriceTargetRequest = {
    symbol: string;
  };

  export type RecommendationTrendsRequest = {
    symbol: string;
  };

  export type RevenueBreakdownRequest = {
    symbol?: string;
    cik?: string;
  };

  export type RevenueBreakdown2Request = {
    symbol: string;
  };

  export type UpgradeDowngradeRequest = {
    symbol?: string;
    from?: string;
    to?: string;
  };
}
