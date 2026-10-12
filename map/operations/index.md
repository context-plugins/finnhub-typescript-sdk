<!-- Generated file — do not edit; regenerated with the SDK. -->

# Index — operations

Accessor: `client.index` · Source: `src/resources/index.ts` · 2 operations · Request types: namespace `Index`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### indicesConstituents

- **Signature**: `indicesConstituents(request: Index.IndicesConstituentsRequest, options?: RequestOptions): ApiPromise<IndicesConstituents, ApiError>`
- **Wire**: `GET /index/constituents`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IndicesConstituents`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Index.IndicesConstituentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndicesConstituents` | `indicesConstituentsSchema` | `src/models/indices-constituents.ts` |

### indicesHistoricalConstituents

- **Signature**: `indicesHistoricalConstituents(request: Index.IndicesHistoricalConstituentsRequest, options?: RequestOptions): ApiPromise<IndicesHistoricalConstituents, ApiError>`
- **Wire**: `GET /index/historical-constituents`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IndicesHistoricalConstituents`
- **Error**: `FinnhubApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Index.IndicesHistoricalConstituentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndicesHistoricalConstituents` | `indicesHistoricalConstituentsSchema` | `src/models/indices-historical-constituents.ts` |

