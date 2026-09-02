<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scan — operations

Accessor: `client.scan` · Source: `src/resources/scan.ts` · 3 operations · Request types: namespace `Scan`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `finnhub-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### aggregateIndicator

- **Signature**: `aggregateIndicator(request: Scan.AggregateIndicatorRequest, options?: RequestOptions): ApiPromise<AggregateIndicators, ResponseError>`
- **Wire**: `GET /scan/technical-indicator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregateIndicators`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Scan.AggregateIndicatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregateIndicators` | `aggregateIndicatorsSchema` | `src/models/aggregate-indicators.ts` |

### patternRecognition

- **Signature**: `patternRecognition(request: Scan.PatternRecognitionRequest, options?: RequestOptions): ApiPromise<PatternRecognition, ResponseError>`
- **Wire**: `GET /scan/pattern`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PatternRecognition`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Scan.PatternRecognitionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatternRecognition` | `patternRecognitionSchema` | `src/models/pattern-recognition.ts` |

### supportResistance

- **Signature**: `supportResistance(request: Scan.SupportResistanceRequest, options?: RequestOptions): ApiPromise<SupportResistance, ResponseError>`
- **Wire**: `GET /scan/support-resistance`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SupportResistance`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Scan.SupportResistanceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `query` | `string` | yes |
| `resolution` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupportResistance` | `supportResistanceSchema` | `src/models/support-resistance.ts` |

