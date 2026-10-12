import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { economicCodeSchema, type EconomicCode } from "../models/economic-code.js";
import { economicDataSchema, type EconomicData } from "../models/economic-data.js";
import type { Servers } from "../servers.js";

/**
 * Economic codes and data
 */
export class Economic {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List codes of supported economic data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  economicCode(options?: RequestOptions): ApiPromise<EconomicCode[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/economic/code"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => economicCodeSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get economic data.
   *
   * @returns successful operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FinnhubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  economicData(
    request: Economic.EconomicDataRequest,
    options?: RequestOptions,
  ): ApiPromise<EconomicData, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/economic"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "code", value: request.code, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: economicDataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Economic {
  export type EconomicDataRequest = {
    /** Economic code. */
    code: string;
  };
}
