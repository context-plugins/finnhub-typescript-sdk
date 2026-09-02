import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { inFilingResponseSchema, type InFilingResponse } from "../models/in-filing-response.js";
import { inFilingSearchBodySchema, type InFilingSearchBody } from "../models/in-filing-search-body.js";
import { searchBodySchema, type SearchBody } from "../models/search-body.js";
import { searchFilterSchema, type SearchFilter } from "../models/search-filter.js";
import { searchResponseSchema, type SearchResponse } from "../models/search-response.js";
import type { Servers } from "../servers.js";

export class GlobalFilings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  globalFilingsDownload(
    request: GlobalFilings.GlobalFilingsDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/global-filings/download"),
        auth: this.#auth.apiKey,
        query: [{ name: "documentId", value: request.documentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  globalFilingsSearch(
    request: GlobalFilings.GlobalFilingsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, ResponseError> {
    return this.#rawClient.execute<SearchResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/global-filings/search"),
        auth: this.#auth.apiKey,
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => searchBodySchema)) },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  globalFilingsSearchFilter(
    request: GlobalFilings.GlobalFilingsSearchFilterRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchFilter, ResponseError> {
    return this.#rawClient.execute<SearchFilter, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/global-filings/filter"),
        auth: this.#auth.apiKey,
        query: [
          { name: "field", value: request.field, schema: s.string() },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchFilterSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchInFiling(
    request: GlobalFilings.SearchInFilingRequest,
    options?: RequestOptions,
  ): ApiPromise<InFilingResponse, ResponseError> {
    return this.#rawClient.execute<InFilingResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/global-filings/search-in-filing"),
        auth: this.#auth.apiKey,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => inFilingSearchBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: inFilingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace GlobalFilings {
  export type GlobalFilingsDownloadRequest = {
    documentId: string;
  };

  export type GlobalFilingsSearchRequest = {
    body?: SearchBody;
  };

  export type GlobalFilingsSearchFilterRequest = {
    field: string;
    source?: string;
  };

  export type SearchInFilingRequest = {
    body?: InFilingSearchBody;
  };
}
