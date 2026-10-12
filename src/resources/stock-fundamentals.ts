import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * Company profiles, financials, filings, ESG, transcripts and presentations
 */
export class StockFundamentals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get company basic financials such as margin, P/E ratio, 52-week high/low etc.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyBasicFinancials(
    request: StockFundamentals.CompanyBasicFinancialsRequest,
    options?: RequestOptions,
  ): ApiPromise<BasicFinancials, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/metric"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "metric", value: request.metric, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: basicFinancialsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>This endpoint provides the latest ESG scores and important indicators for 7000+ global
   * companies. The data is collected through company's public ESG disclosure and public
   * sources.</p><p>Our ESG scoring models takes into account more than 150 different inputs to
   * calculate the level of ESG risks and how well a company is managing them. A higher score means
   * lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key
   * indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is
   * the highest score.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyEsgScore(
    request: StockFundamentals.CompanyEsgScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyEsg, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/esg"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyEsgSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of company's executives and members of the Board.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyExecutive(
    request: StockFundamentals.CompanyExecutiveRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyExecutive, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/executive"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyExecutiveSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>This endpoint provides historical ESG scores and important indicators for 7000+ global
   * companies. The data is collected through company's public ESG disclosure and public
   * sources.</p><p>Our ESG scoring models takes into account more than 150 different inputs to
   * calculate the level of ESG risks and how well a company is managing them. A higher score means
   * lower ESG risk or better ESG management. ESG scores are in the the range of 0-100. Some key
   * indicators might contain letter-grade score from C- to A+ with C- is the lowest score and A+ is
   * the highest score.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyHistoricalEsgScore(
    request: StockFundamentals.CompanyHistoricalEsgScoreRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalCompanyEsg, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/historical-esg"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalCompanyEsgSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get general information of a company. You can query by symbol, ISIN or CUSIP
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyProfile(
    request: StockFundamentals.CompanyProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/profile"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "cusip", value: request.cusip, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get general information of a company. You can query by symbol, ISIN or CUSIP. This is the free
   * version of <a href="#company-profile">Company Profile</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companyProfile2(
    request: StockFundamentals.CompanyProfile2Request,
    options?: RequestOptions,
  ): ApiPromise<CompanyProfile2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/profile2"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "isin", value: request.isin, schema: s.optional(s.string()) },
          { name: "cusip", value: request.cusip, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyProfile2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Stream live earnings calls with data provided in the calendar. The data will be available in
   * m3u8 format. mp3 files will be available once the calls finish in the <code>recording</code>
   * field.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  earningsCallLive(
    request: StockFundamentals.EarningsCallLiveRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCallLive, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/earnings-call-live"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCallLiveSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List company's filing. Limit to 250 documents at a time. This data is available for bulk
   * download on <a href="https://www.kaggle.com/finnhub/sec-filings" target="_blank">Kaggle SEC
   * Filings database</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filings(
    request: StockFundamentals.FilingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Filing[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/filings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
          { name: "accessNumber", value: request.accessNumber, schema: s.optional(s.string()) },
          { name: "form", value: request.form, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => filingSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get sentiment analysis of 10-K and 10-Q filings from SEC. An abnormal increase in the number of
   * positive/negative words in filings can signal a significant change in the company's stock price
   * in the upcoming 4 quarters. We make use of <a href=
   * "https://sraf.nd.edu/textual-analysis/resources/" target="_blank">Loughran and McDonald
   * Sentiment Word Lists</a> to calculate the sentiment for each filing.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  filingsSentiment(
    request: StockFundamentals.FilingsSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<SecSentimentAnalysis, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/filings-sentiment"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "accessNumber", value: request.accessNumber, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: secSentimentAnalysisSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get standardized balance sheet, income statement and cash flow for global companies going
   * back 30+ years. Data is sourced from original filings most of which made available through <a
   * href="#filings">SEC Filings</a> and <a href="#international-filings">International Filings</a>
   * endpoints.</p><p>Set <code>preliminary</code> param to true for faster updates for US
   * companies.</p><p><i>Wondering why our standardized data is different from Bloomberg, Reuters,
   * Factset, S&P or Yahoo Finance ? Check out our <a href="/faq">FAQ page</a> to learn more</i></p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  financials(
    request: StockFundamentals.FinancialsRequest,
    options?: RequestOptions,
  ): ApiPromise<FinancialStatements, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/financials"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.string() },
          { name: "statement", value: request.statement, schema: s.string() },
          { name: "freq", value: request.freq, schema: s.string() },
          { name: "preliminary", value: request.preliminary, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: financialStatementsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get financials as reported. This data is available for bulk download on <a
   * href="https://www.kaggle.com/finnhub/reported-financials" target="_blank">Kaggle SEC Financials
   * database</a>.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  financialsReported(
    request: StockFundamentals.FinancialsReportedRequest,
    options?: RequestOptions,
  ): ApiPromise<FinancialsAsReported, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/financials-reported"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
          { name: "accessNumber", value: request.accessNumber, schema: s.optional(s.string()) },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: financialsAsReportedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get historical employee count for global companies.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  historicalEmployeeCount(
    request: StockFundamentals.HistoricalEmployeeCountRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalEmployeeCount, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/historical-employee-count"),
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
        success: { kind: "json", schema: historicalEmployeeCountSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List filings for international companies. Limit to 500 documents at a time. These are the
   * documents we use to source our fundamental data. Enterprise clients who need access to the full
   * filings for global markets should contact us for the access.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  internationalFilings(
    request: StockFundamentals.InternationalFilingsRequest,
    options?: RequestOptions,
  ): ApiPromise<InternationalFiling[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/international-filings"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => internationalFilingSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get latest articles posted directly on the companies' newsroom and investor relations page.
   * Newsroom API along with the Press Releases API provide a comprehensive text-based dataset
   * directly from the company. We currently cover 1,250 US Companies with this dataset.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newsroom(
    request: StockFundamentals.NewsroomRequest,
    options?: RequestOptions,
  ): ApiPromise<Newsroom, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/newsroom"),
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
        success: { kind: "json", schema: newsroomSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Calculate the textual difference between a company's 10-K / 10-Q reports and the same type
   * of report in the previous year using Cosine Similarity. For example, this endpoint compares
   * 2019's 10-K with 2018's 10-K. Companies breaking from its routines in disclosure of financial
   * condition and risk analysis section can signal a significant change in the company's stock
   * price in the upcoming 4 quarters.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  similarityIndex(
    request: StockFundamentals.SimilarityIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<SimilarityIndex, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/similarity-index"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "cik", value: request.cik, schema: s.optional(s.string()) },
          { name: "freq", value: request.freq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: similarityIndexSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get presentations/slides data in PDF format that are usually used during earnings calls. You
   * can get a list of supported symbols <a target="_blank"
   * href="/api/v1/stock/presentation/symbol?token=">here</a></p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stockPresentation(
    request: StockFundamentals.StockPresentationRequest,
    options?: RequestOptions,
  ): ApiPromise<StockPresentation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/presentation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stockPresentationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get earnings call transcripts, audio and participants' list. Data is available for US, UK,
   * European, Australian and Canadian companies.<p>15+ years of data is available with 220,000+
   * audio which add up to 7TB in size.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transcripts(
    request: StockFundamentals.TranscriptsRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCallTranscripts, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/transcripts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCallTranscriptsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List earnings call transcripts' metadata. This endpoint is available for Global companies. You
   * can get a list of supported symbols <a target="_blank"
   * href="/api/v1/stock/transcripts/symbol?token=">here</a>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transcriptsList(
    request: StockFundamentals.TranscriptsListRequest,
    options?: RequestOptions,
  ): ApiPromise<EarningsCallTranscriptsList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stock/transcripts/list"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "symbol", value: request.symbol, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: earningsCallTranscriptsListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StockFundamentals {
  export type CompanyBasicFinancialsRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /** Metric type. Can be 1 of the following values <code>all</code> */
    metric: string;
  };

  export type CompanyEsgScoreRequest = {
    /** Symbol. */
    symbol: string;
  };

  export type CompanyExecutiveRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
  };

  export type CompanyHistoricalEsgScoreRequest = {
    /** Symbol. */
    symbol: string;
  };

  export type CompanyProfileRequest = {
    /** Symbol of the company: AAPL e.g. */
    symbol?: string;
    /** ISIN */
    isin?: string;
    /** CUSIP */
    cusip?: string;
  };

  export type CompanyProfile2Request = {
    /** Symbol of the company: AAPL e.g. */
    symbol?: string;
    /** ISIN */
    isin?: string;
    /** CUSIP */
    cusip?: string;
  };

  export type EarningsCallLiveRequest = {
    /** From date <code>YYYY-MM-DD</code>. */
    from?: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to?: string;
    /** Filter by symbol: AAPL. */
    symbol?: string;
  };

  export type FilingsRequest = {
    /**
     * Symbol. Leave <code>symbol</code>,<code>cik</code> and <code>accessNumber</code> empty to
     * list latest filings.
     */
    symbol?: string;
    /** CIK. */
    cik?: string;
    /** Access number of a specific report you want to retrieve data from. */
    accessNumber?: string;
    /**
     * Filter by form. You can use this value <code>NT 10-K</code> to find non-timely filings for a
     * company.
     */
    form?: string;
    /** From date: 2023-03-15. */
    from?: string;
    /** To date: 2023-03-16. */
    to?: string;
  };

  export type FilingsSentimentRequest = {
    /** Access number of a specific report you want to retrieve data from. */
    accessNumber: string;
  };

  export type FinancialsRequest = {
    /** Symbol of the company: AAPL. */
    symbol: string;
    /**
     * Statement can take 1 of these values <code>bs, ic, cf</code> for Balance Sheet, Income
     * Statement, Cash Flow respectively.
     */
    statement: string;
    /**
     * Frequency can take 1 of these values <code>annual, quarterly, ttm, ytd</code>. TTM (Trailing
     * Twelve Months) option is available for Income Statement and Cash Flow. YTD (Year To Date)
     * option is only available for Cash Flow.
     */
    freq: string;
    /**
     * If set to <code>true</code>, it will return Preliminary financial statements for the latest
     * period which are usually available within an hour of the earnings announcement if finalized
     * data is not available yet. This preliminary data is currently available for US companies. You
     * will see <code>"preliminary": true</code> in the data if that period is using preliminary
     * data.
     */
    preliminary?: string;
  };

  export type FinancialsReportedRequest = {
    /** Symbol. */
    symbol?: string;
    /** CIK. */
    cik?: string;
    /** Access number of a specific report you want to retrieve financials from. */
    accessNumber?: string;
    /**
     * Frequency. Can be either <code>annual</code> or <code>quarterly</code>. Default to
     * <code>annual</code>.
     */
    freq?: string;
    /** From date <code>YYYY-MM-DD</code>. Filter for endDate. */
    from?: string;
    /** To date <code>YYYY-MM-DD</code>. Filter for endDate. */
    to?: string;
  };

  export type HistoricalEmployeeCountRequest = {
    /** Company symbol. */
    symbol: string;
    /** From date <code>YYYY-MM-DD</code>. */
    from: string;
    /** To date <code>YYYY-MM-DD</code>. */
    to: string;
  };

  export type InternationalFilingsRequest = {
    /** Symbol. Leave empty to list latest filings. */
    symbol?: string;
    /** Filter by country using country's 2-letter code. */
    country?: string;
    /** From date: 2023-01-15. */
    from?: string;
    /** To date: 2023-12-16. */
    to?: string;
  };

  export type NewsroomRequest = {
    /** Company symbol. */
    symbol: string;
    /** From time: 2025-01-01. */
    from?: string;
    /** To time: 2026-01-05. */
    to?: string;
  };

  export type SimilarityIndexRequest = {
    /** Symbol. Required if cik is empty */
    symbol?: string;
    /** CIK. Required if symbol is empty */
    cik?: string;
    /** <code>annual</code> or <code>quarterly</code>. Default to <code>annual</code> */
    freq?: string;
  };

  export type StockPresentationRequest = {
    /** Company symbol. */
    symbol: string;
  };

  export type TranscriptsRequest = {
    /** Transcript's id obtained with <a href="#transcripts-list">Transcripts List endpoint</a>. */
    id: string;
  };

  export type TranscriptsListRequest = {
    /** Company symbol: AAPL. Leave empty to list the latest transcripts */
    symbol: string;
  };
}
