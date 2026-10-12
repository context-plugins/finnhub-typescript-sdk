<!-- Generated file — do not edit; regenerated with the SDK. -->

# Misc — operations

Accessor: `client.misc` · Source: `src/resources/misc.ts` · 10 operations · Request types: namespace `Misc`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### aiChat

- **Signature**: `aiChat(request: Misc.AiChatRequest, options?: RequestOptions): ApiPromise<AiChatResponse, ApiError>`
- **Wire**: `POST /ai-chat`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AiChatResponse`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.AiChatRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AiChatBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AiChatBody` | `aiChatBodySchema` | `src/models/ai-chat-body.ts` |
| `AiChatResponse` | `aiChatResponseSchema` | `src/models/ai-chat-response.ts` |

### airlinePriceIndex

- **Signature**: `airlinePriceIndex(request: Misc.AirlinePriceIndexRequest, options?: RequestOptions): ApiPromise<AirlinePriceIndexData, ApiError>`
- **Wire**: `GET /airline/price-index`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AirlinePriceIndexData`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.AirlinePriceIndexRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `airline` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AirlinePriceIndexData` | `airlinePriceIndexDataSchema` | `src/models/airline-price-index-data.ts` |

### bankBranch

- **Signature**: `bankBranch(request: Misc.BankBranchRequest, options?: RequestOptions): ApiPromise<BankBranchRes, ApiError>`
- **Wire**: `GET /bank-branch`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BankBranchRes`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.BankBranchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankBranchRes` | `bankBranchResSchema` | `src/models/bank-branch-res.ts` |

### country

- **Signature**: `country(options?: RequestOptions): ApiPromise<CountryMetadata[], ApiError>`
- **Wire**: `GET /country`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CountryMetadata[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CountryMetadata` | `countryMetadataSchema` | `src/models/country-metadata.ts` |

### covid19

- **Signature**: `covid19(options?: RequestOptions): ApiPromise<CovidInfo[], ApiError>`
- **Wire**: `GET /covid19/us`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CovidInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CovidInfo` | `covidInfoSchema` | `src/models/covid-info.ts` |

### fdaCommitteeMeetingCalendar

- **Signature**: `fdaCommitteeMeetingCalendar(options?: RequestOptions): ApiPromise<FdaComitteeMeeting[], ApiError>`
- **Wire**: `GET /fda-advisory-committee-calendar`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FdaComitteeMeeting[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `FdaComitteeMeeting` | `fdaComitteeMeetingSchema` | `src/models/fda-comittee-meeting.ts` |

### quote

- **Signature**: `quote(request: Misc.QuoteRequest, options?: RequestOptions): ApiPromise<Quote, ApiError>`
- **Wire**: `GET /quote`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Quote`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.QuoteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Quote` | `quoteSchema` | `src/models/quote.ts` |

### sectorMetric

- **Signature**: `sectorMetric(request: Misc.SectorMetricRequest, options?: RequestOptions): ApiPromise<SectorMetric, ApiError>`
- **Wire**: `GET /sector/metrics`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SectorMetric`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.SectorMetricRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `region` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectorMetric` | `sectorMetricSchema` | `src/models/sector-metric.ts` |

### symbolSearch

- **Signature**: `symbolSearch(request: Misc.SymbolSearchRequest, options?: RequestOptions): ApiPromise<SymbolLookup, ApiError>`
- **Wire**: `GET /search`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SymbolLookup`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.SymbolSearchRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | yes |
| `exchange` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SymbolLookup` | `symbolLookupSchema` | `src/models/symbol-lookup.ts` |

### technicalIndicator

- **Signature**: `technicalIndicator(request: Misc.TechnicalIndicatorRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /indicator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Misc.TechnicalIndicatorRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |
| `from` | `query` | `number` | yes |
| `to` | `query` | `number` | yes |
| `indicator` | `query` | `string` | yes |

