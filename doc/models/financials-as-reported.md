
# Financials as Reported

*This model accepts additional fields of type unknown.*

## Structure

`FinancialsAsReported`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `cik` | `string \| undefined` | Optional | CIK |
| `data` | [`Report[] \| undefined`](../../doc/models/report.md) | Optional | Array of filings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FinancialsAsReported } from 'finnhub-apilib';

const financialsAsReported: FinancialsAsReported = {
  symbol: 'symbol6',
  cik: 'cik6',
  data: [
    {
      accessNumber: 'accessNumber6',
      symbol: 'symbol2',
      cik: 'cik2',
      year: BigInt(34),
      quarter: BigInt(114),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      accessNumber: 'accessNumber6',
      symbol: 'symbol2',
      cik: 'cik2',
      year: BigInt(34),
      quarter: BigInt(114),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

