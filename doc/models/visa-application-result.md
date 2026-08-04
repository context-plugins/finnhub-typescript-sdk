
# Visa Application Result

*This model accepts additional fields of type unknown.*

## Structure

`VisaApplicationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `data` | [`VisaApplication[] \| undefined`](../../doc/models/visa-application.md) | Optional | Array of H1b and Permanent visa applications. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { VisaApplicationResult } from 'finnhub-apilib';

const visaApplicationResult: VisaApplicationResult = {
  symbol: 'symbol8',
  data: [
    {
      year: BigInt(34),
      quarter: BigInt(114),
      symbol: 'symbol2',
      caseNumber: 'caseNumber6',
      caseStatus: 'caseStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      year: BigInt(34),
      quarter: BigInt(114),
      symbol: 'symbol2',
      caseNumber: 'caseNumber6',
      caseStatus: 'caseStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      year: BigInt(34),
      quarter: BigInt(114),
      symbol: 'symbol2',
      caseNumber: 'caseNumber6',
      caseStatus: 'caseStatus6',
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

