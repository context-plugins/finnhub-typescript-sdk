import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { inFilingResponseSchema, type InFilingResponse } from "../models/in-filing-response.js";
import { inFilingSearchBodySchema, type InFilingSearchBody } from "../models/in-filing-search-body.js";
import { searchBodySchema, type SearchBody } from "../models/search-body.js";
import { searchFilterSchema, type SearchFilter } from "../models/search-filter.js";
import { searchResponseSchema, type SearchResponse } from "../models/search-response.js";
import type { Servers } from "../servers.js";

/**
 * Global filings search and download
 */
export class GlobalFilings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * <p>Download filings using document ids.</p>
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalFilingsDownload(
    request: GlobalFilings.GlobalFilingsDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/global-filings/download"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "documentId", value: request.documentId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Search for best-matched filings across global companies' filings, transcripts and press
   * releases. You can filter by anything from symbol, ISIN to form type, and document
   * sources.</p><p>This endpoint will return a list of documents that match your search criteria.
   * If you would like to get the excerpts as well, please set <code>highlighted</code> to
   * <code>true</code>. Once you have the list of documents, you can get a list of excerpts and
   * positions to highlight the document using the <code>/search-in-filing</code> endpoint</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalFilingsSearch(
    request: GlobalFilings.GlobalFilingsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/global-filings/search"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => searchBodySchema)) },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get available values for each filter in search body.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalFilingsSearchFilter(
    request: GlobalFilings.GlobalFilingsSearchFilterRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchFilter, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/global-filings/filter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "field", value: request.field, schema: s.string() },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchFilterSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * <p>Get a list of excerpts and highlight positions within a document using your query.</p>
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchInFiling(
    request: GlobalFilings.SearchInFilingRequest,
    options?: RequestOptions,
  ): ApiPromise<InFilingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/global-filings/search-in-filing"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => inFilingSearchBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: inFilingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace GlobalFilings {
  export type GlobalFilingsDownloadRequest = {
    /**
     * Document's id. Note that this is different from filingId as 1 filing can contain multiple
     * documents.
     */
    documentId: string;
  };

  export type GlobalFilingsSearchRequest = {
    /** Search body */
    body?: SearchBody;
  };

  export type GlobalFilingsSearchFilterRequest = {
    /**
     * Field to get available filters. Available filters are "countries", "exchanges", "exhibits",
     * "forms", "gics", "naics", "caps", "acts", and "sort".
     */
    field: string;
    /** Get available forms for each source. */
    source?: string;
  };

  export type SearchInFilingRequest = {
    /** Search body */
    body?: InFilingSearchBody;
  };
}
