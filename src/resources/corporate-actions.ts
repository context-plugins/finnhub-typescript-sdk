import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { isinChangeSchema, type IsinChange } from "../models/isin-change.js";
import { symbolChangeSchema, type SymbolChange } from "../models/symbol-change.js";
import type { Servers } from "../servers.js";

export class CorporateActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  isinChange(
    request: CorporateActions.IsinChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<IsinChange, ResponseError> {
    return this.#rawClient.execute<IsinChange, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ca/isin-change"),
        auth: this.#auth.apiKey,
        query: [
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: isinChangeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  symbolChange(
    request: CorporateActions.SymbolChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<SymbolChange, ResponseError> {
    return this.#rawClient.execute<SymbolChange, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/ca/symbol-change"),
        auth: this.#auth.apiKey,
        query: [
          { name: "from", value: request.from, schema: s.string() },
          { name: "to", value: request.to, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: symbolChangeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CorporateActions {
  export type IsinChangeRequest = {
    from: string;
    to: string;
  };

  export type SymbolChangeRequest = {
    from: string;
    to: string;
  };
}
