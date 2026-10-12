<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `src/resources/news.ts` · 4 operations · Request types: namespace `News`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### companyNews

- **Signature**: `companyNews(request: News.CompanyNewsRequest, options?: RequestOptions): ApiPromise<CompanyNews[], ApiError>`
- **Wire**: `GET /company-news`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyNews[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `News.CompanyNewsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | yes |
| `to` | `query` | `string` (date) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyNews` | `companyNewsSchema` | `src/models/company-news.ts` |

### marketNews

- **Signature**: `marketNews(request: News.MarketNewsRequest, options?: RequestOptions): ApiPromise<MarketNews[], ApiError>`
- **Wire**: `GET /news`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MarketNews[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `News.MarketNewsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | yes |
| `minId` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MarketNews` | `marketNewsSchema` | `src/models/market-news.ts` |

### newsSentiment

- **Signature**: `newsSentiment(request: News.NewsSentimentRequest, options?: RequestOptions): ApiPromise<NewsSentiment, ApiError>`
- **Wire**: `GET /news-sentiment`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsSentiment`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `News.NewsSentimentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewsSentiment` | `newsSentimentSchema` | `src/models/news-sentiment.ts` |

### pressReleases

- **Signature**: `pressReleases(request: News.PressReleasesRequest, options?: RequestOptions): ApiPromise<PressRelease, ApiError>`
- **Wire**: `GET /press-releases`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PressRelease`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `News.PressReleasesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `from` | `query` | `string` (date) | no |
| `to` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PressRelease` | `pressReleaseSchema` | `src/models/press-release.ts` |

