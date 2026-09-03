import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { basicFinancialsSchema, type BasicFinancials } from "../models/basic-financials.js";
import { companyEsgSchema, type CompanyEsg } from "../models/company-esg.js";
import { companyExecutiveSchema, type CompanyExecutive } from "../models/company-executive.js";
import { companyProfileSchema, type CompanyProfile } from "../models/company-profile.js";
import { companyProfile2Schema, type CompanyProfile2 } from "../models/company-profile2.js";
import { earningsCallLiveSchema, type EarningsCallLive } from "../models/earnings-call-live.js";
import {
  earningsCallTranscriptsListSchema,
  type EarningsCallTranscriptsList,
} from "../models/earnings-call-transcripts-list.js";
import {
  earningsCallTranscriptsSchema,
  type EarningsCallTranscripts,
} from "../models/earnings-call-transcripts.js";
import { filingSchema, type Filing } from "../models/filing.js";
import { financialStatementsSchema, type FinancialStatements } from "../models/financial-statements.js";
import { financialsAsReportedSchema, type FinancialsAsReported } from "../models/financials-as-reported.js";
import { historicalCompanyEsgSchema, type HistoricalCompanyEsg } from "../models/historical-company-esg.js";
import {
  historicalEmployeeCountSchema,
  type HistoricalEmployeeCount,
} from "../models/historical-employee-count.js";
import { internationalFilingSchema, type InternationalFiling } from "../models/international-filing.js";
import { newsroomSchema, type Newsroom } from "../models/newsroom.js";
import { secSentimentAnalysisSchema, type SecSentimentAnalysis } from "../models/sec-sentiment-analysis.js";
import { similarityIndexSchema, type SimilarityIndex } from "../models/similarity-index.js";
import { stockPresentationSchema, type StockPresentation } from "../models/stock-presentation.js";
import type { Servers } from "../servers.js";

export class StockFundamentals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  companyBasicFinancials(
    request: StockFundamentals.CompanyBasicFinancialsRequest,
    options?: RequestOptions,
  ): ApiPromise<BasicFinancials, ResponseError> {
    return this.#rawClient.execute<BasicFinancials, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/metric"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "metric", value: request.metric, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: basicFinancialsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyEsgScore(
    request: StockFundamentals.CompanyEsgScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyEsg, ResponseError> {
    return this.#rawClient.execute<CompanyEsg, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/esg"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyEsgSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyExecutive(
    request: StockFundamentals.CompanyExecutiveRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyExecutive, ResponseError> {
    return this.#rawClient.execute<CompanyExecutive, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/executive"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyExecutiveSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyHistoricalEsgScore(
    request: StockFundamentals.CompanyHistoricalEsgScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalCompanyEsg, ResponseError> {
    return this.#rawClient.execute<HistoricalCompanyEsg, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/historical-esg"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalCompanyEsgSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyProfile(
    request: StockFundamentals.CompanyProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyProfile, ResponseError> {
    return this.#rawClient.execute<CompanyProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/profile"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "cusip", value: request.cusip, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  companyProfile2(
    request: StockFundamentals.CompanyProfile2Request,
    options?: RequestOptions,
  ): ApiPromise<CompanyProfile2, ResponseError> {
    return this.#rawClient.execute<CompanyProfile2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/profile2"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "cusip", value: request.cusip, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyProfile2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  earningsCallLive(
    request: StockFundamentals.EarningsCallLiveRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCallLive, ResponseError> {
    return this.#rawClient.execute<EarningsCallLive, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/earnings-call-live"),
        auth: this.#auth.apiKey,
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCallLiveSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  filings(
    request: StockFundamentals.FilingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Filing[], ResponseError> {
    return this.#rawClient.execute<Filing[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/filings"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
          { name: "accessNumber", value: request.accessNumber, schema: s.optional(s.string()) },
          { name: "form", value: request.form, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => filingSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  filingsSentiment(
    request: StockFundamentals.FilingsSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<SecSentimentAnalysis, ResponseError> {
    return this.#rawClient.execute<SecSentimentAnalysis, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/filings-sentiment"),
        auth: this.#auth.apiKey,
        query: [{ name: "accessNumber", value: request.accessNumber, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: secSentimentAnalysisSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  financials(
    request: StockFundamentals.FinancialsRequest,
    options?: RequestOptions,
  ): ApiPromise<FinancialStatements, ResponseError> {
    return this.#rawClient.execute<FinancialStatements, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/financials"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "statement", value: request.statement, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.string() },
          { name: "preliminary", value: request.preliminary, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: financialStatementsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  financialsReported(
    request: StockFundamentals.FinancialsReportedRequest,
    options?: RequestOptions,
  ): ApiPromise<FinancialsAsReported, ResponseError> {
    return this.#rawClient.execute<FinancialsAsReported, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/financials-reported"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
          { name: "accessNumber", value: request.accessNumber, schema: s.optional(s.string()) },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: financialsAsReportedSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  historicalEmployeeCount(
    request: StockFundamentals.HistoricalEmployeeCountRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalEmployeeCount, ResponseError> {
    return this.#rawClient.execute<HistoricalEmployeeCount, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/historical-employee-count"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.dateOnly() },
          { name: "to", value: request.to, schema: s.dateOnly() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalEmployeeCountSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  internationalFilings(
    request: StockFundamentals.InternationalFilingsRequest,
    options?: RequestOptions,
  ): ApiPromise<InternationalFiling[], ResponseError> {
    return this.#rawClient.execute<InternationalFiling[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/international-filings"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => internationalFilingSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  newsroom(
    request: StockFundamentals.NewsroomRequest,
    options?: RequestOptions,
  ): ApiPromise<Newsroom, ResponseError> {
    return this.#rawClient.execute<Newsroom, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/newsroom"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: newsroomSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  similarityIndex(
    request: StockFundamentals.SimilarityIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<SimilarityIndex, ResponseError> {
    return this.#rawClient.execute<SimilarityIndex, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/similarity-index"),
        auth: this.#auth.apiKey,
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: similarityIndexSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stockPresentation(
    request: StockFundamentals.StockPresentationRequest,
    options?: RequestOptions,
  ): ApiPromise<StockPresentation, ResponseError> {
    return this.#rawClient.execute<StockPresentation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/presentation"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stockPresentationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  transcripts(
    request: StockFundamentals.TranscriptsRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCallTranscripts, ResponseError> {
    return this.#rawClient.execute<EarningsCallTranscripts, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/transcripts"),
        auth: this.#auth.apiKey,
        query: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCallTranscriptsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  transcriptsList(
    request: StockFundamentals.TranscriptsListRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCallTranscriptsList, ResponseError> {
    return this.#rawClient.execute<EarningsCallTranscriptsList, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/stock/transcripts/list"),
        auth: this.#auth.apiKey,
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCallTranscriptsListSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StockFundamentals {
  export type CompanyBasicFinancialsRequest = {
    symbol: string;
    metric: string;
  };

  export type CompanyEsgScoreRequest = {
    symbol: string;
  };

  export type CompanyExecutiveRequest = {
    symbol: string;
  };

  export type CompanyHistoricalEsgScoreRequest = {
    symbol: string;
  };

  export type CompanyProfileRequest = {
    symbol?: string;
    isin?: string;
    cusip?: string;
  };

  export type CompanyProfile2Request = {
    symbol?: string;
    isin?: string;
    cusip?: string;
  };

  export type EarningsCallLiveRequest = {
    from?: string;
    to?: string;
    symbol?: string;
  };

  export type FilingsRequest = {
    symbol?: string;
    cik?: string;
    accessNumber?: string;
    form?: string;
    from?: string;
    to?: string;
  };

  export type FilingsSentimentRequest = {
    accessNumber: string;
  };

  export type FinancialsRequest = {
    symbol: string;
    statement: string;
    freq: string;
    preliminary?: string;
  };

  export type FinancialsReportedRequest = {
    symbol?: string;
    cik?: string;
    accessNumber?: string;
    freq?: string;
    from?: string;
    to?: string;
  };

  export type HistoricalEmployeeCountRequest = {
    symbol: string;
    from: string;
    to: string;
  };

  export type InternationalFilingsRequest = {
    symbol?: string;
    country?: string;
    from?: string;
    to?: string;
  };

  export type NewsroomRequest = {
    symbol: string;
    from?: string;
    to?: string;
  };

  export type SimilarityIndexRequest = {
    symbol?: string;
    cik?: string;
    freq?: string;
  };

  export type StockPresentationRequest = {
    symbol: string;
  };

  export type TranscriptsRequest = {
    id: string;
  };

  export type TranscriptsListRequest = {
    symbol: string;
  };
}
