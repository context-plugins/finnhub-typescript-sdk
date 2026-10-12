<!-- Generated file — do not edit; regenerated with the SDK. -->

# Institutional — operations

Accessor: `client.institutional` · Source: `src/resources/institutional.ts` · 3 operations · Request types: namespace `Institutional`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### institutionalOwnership

- **Signature**: `institutionalOwnership(request: Institutional.InstitutionalOwnershipRequest, options?: RequestOptions): ApiPromise<InstitutionalOwnership, ApiError>`
- **Wire**: `GET /institutional/ownership`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InstitutionalOwnership`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Institutional.InstitutionalOwnershipRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `cusip` | `query` | `string` | yes |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstitutionalOwnership` | `institutionalOwnershipSchema` | `src/models/institutional-ownership.ts` |

### institutionalPortfolio

- **Signature**: `institutionalPortfolio(request: Institutional.InstitutionalPortfolioRequest, options?: RequestOptions): ApiPromise<InstitutionalPortfolio, ApiError>`
- **Wire**: `GET /institutional/portfolio`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InstitutionalPortfolio`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Institutional.InstitutionalPortfolioRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cik` | `query` | `string` | yes |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstitutionalPortfolio` | `institutionalPortfolioSchema` | `src/models/institutional-portfolio.ts` |

### institutionalProfile

- **Signature**: `institutionalProfile(request: Institutional.InstitutionalProfileRequest, options?: RequestOptions): ApiPromise<InstitutionalProfile, ApiError>`
- **Wire**: `GET /institutional/profile`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InstitutionalProfile`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Institutional.InstitutionalProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cik` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstitutionalProfile` | `institutionalProfileSchema` | `src/models/institutional-profile.ts` |

