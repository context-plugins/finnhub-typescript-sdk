<!-- Generated file — do not edit; regenerated with the SDK. -->

# CorporateActions — operations

Accessor: `client.corporateActions` · Source: `src/resources/corporate-actions.ts` · 2 operations · Request types: namespace `CorporateActions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### isinChange

- **Signature**: `isinChange(request: CorporateActions.IsinChangeRequest, options?: RequestOptions): ApiPromise<IsinChange, ApiError>`
- **Wire**: `GET /ca/isin-change`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IsinChange`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CorporateActions.IsinChangeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsinChange` | `isinChangeSchema` | `src/models/isin-change.ts` |

### symbolChange

- **Signature**: `symbolChange(request: CorporateActions.SymbolChangeRequest, options?: RequestOptions): ApiPromise<SymbolChange, ApiError>`
- **Wire**: `GET /ca/symbol-change`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SymbolChange`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CorporateActions.SymbolChangeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SymbolChange` | `symbolChangeSchema` | `src/models/symbol-change.ts` |

