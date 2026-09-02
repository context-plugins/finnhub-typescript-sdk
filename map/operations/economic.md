<!-- Generated file — do not edit; regenerated with the SDK. -->

# Economic — operations

Accessor: `client.economic` · Source: `src/resources/economic.ts` · 2 operations · Request types: namespace `Economic`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### economicCode

- **Signature**: `economicCode(options?: RequestOptions): ApiPromise<EconomicCode[], ResponseError>`
- **Wire**: `GET /economic/code`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EconomicCode[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `EconomicCode` | `economicCodeSchema` | `src/models/economic-code.ts` |

### economicData

- **Signature**: `economicData(request: Economic.EconomicDataRequest, options?: RequestOptions): ApiPromise<EconomicData, ResponseError>`
- **Wire**: `GET /economic`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EconomicData`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Economic.EconomicDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EconomicData` | `economicDataSchema` | `src/models/economic-data.ts` |

