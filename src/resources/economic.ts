import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { economicCodeSchema, type EconomicCode } from "../models/economic-code.js";
import { economicDataSchema, type EconomicData } from "../models/economic-data.js";
import type { Servers } from "../servers.js";

export class Economic {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  economicCode(options?: RequestOptions): ApiPromise<EconomicCode[], ResponseError> {
    return this.#rawClient.execute<EconomicCode[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/economic/code"),
        auth: this.#auth.apiKey,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => economicCodeSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  economicData(
    request: Economic.EconomicDataRequest,
    options?: RequestOptions,
  ): ApiPromise<EconomicData, ResponseError> {
    return this.#rawClient.execute<EconomicData, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/economic"),
        auth: this.#auth.apiKey,
        query: [{ name: "code", value: request.code, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: economicDataSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Economic {
  export type EconomicDataRequest = {
    code: string;
  };
}
