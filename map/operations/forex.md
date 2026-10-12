<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forex — operations

Accessor: `client.forex` · Source: `src/resources/forex.ts` · 4 operations · Request types: namespace `Forex`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### forexCandles

- **Signature**: `forexCandles(request: Forex.ForexCandlesRequest, options?: RequestOptions): ApiPromise<ForexCandles, ApiError>`
- **Wire**: `GET /forex/candle`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ForexCandles`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Forex.ForexCandlesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ForexCandles` | `forexCandlesSchema` | `src/models/forex-candles.ts` |

### forexExchanges

- **Signature**: `forexExchanges(options?: RequestOptions): ApiPromise<string[], ApiError>`
- **Wire**: `GET /forex/exchange`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### forexRates

- **Signature**: `forexRates(request: Forex.ForexRatesRequest, options?: RequestOptions): ApiPromise<Forexrates, ApiError>`
- **Wire**: `GET /forex/rates`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Forexrates`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Forex.ForexRatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `base` | `query` | `string` | no |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Forexrates` | `forexratesSchema` | `src/models/forexrates.ts` |

### forexSymbols

- **Signature**: `forexSymbols(request: Forex.ForexSymbolsRequest, options?: RequestOptions): ApiPromise<ForexSymbol[], ApiError>`
- **Wire**: `GET /forex/symbol`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ForexSymbol[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Forex.ForexSymbolsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ForexSymbol` | `forexSymbolSchema` | `src/models/forex-symbol.ts` |

