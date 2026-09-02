<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalFilings — operations

Accessor: `client.globalFilings` · Source: `src/resources/global-filings.ts` · 4 operations · Request types: namespace `GlobalFilings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### globalFilingsDownload

- **Signature**: `globalFilingsDownload(request: GlobalFilings.GlobalFilingsDownloadRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /global-filings/download`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GlobalFilings.GlobalFilingsDownloadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `query` | `string` | yes |

### globalFilingsSearch

- **Signature**: `globalFilingsSearch(request: GlobalFilings.GlobalFilingsSearchRequest, options?: RequestOptions): ApiPromise<SearchResponse, ResponseError>`
- **Wire**: `POST /global-filings/search`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GlobalFilings.GlobalFilingsSearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchBody` | `searchBodySchema` | `src/models/search-body.ts` |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |

### globalFilingsSearchFilter

- **Signature**: `globalFilingsSearchFilter(request: GlobalFilings.GlobalFilingsSearchFilterRequest, options?: RequestOptions): ApiPromise<SearchFilter, ResponseError>`
- **Wire**: `GET /global-filings/filter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchFilter`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GlobalFilings.GlobalFilingsSearchFilterRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `field` | `query` | `string` | yes |
| `source` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchFilter` | `searchFilterSchema` | `src/models/search-filter.ts` |

### searchInFiling

- **Signature**: `searchInFiling(request: GlobalFilings.SearchInFilingRequest, options?: RequestOptions): ApiPromise<InFilingResponse, ResponseError>`
- **Wire**: `POST /global-filings/search-in-filing`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **Returns**: `InFilingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GlobalFilings.SearchInFilingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InFilingSearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InFilingSearchBody` | `inFilingSearchBodySchema` | `src/models/in-filing-search-body.ts` |
| `InFilingResponse` | `inFilingResponseSchema` | `src/models/in-filing-response.ts` |

