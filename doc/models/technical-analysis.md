
# Technical Analysis

*This model accepts additional fields of type unknown.*

## Structure

`TechnicalAnalysis`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | [`Indicator \| undefined`](../../doc/models/indicator.md) | Optional | - |
| `signal` | `string \| undefined` | Optional | Aggregate Signal |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TechnicalAnalysis } from 'finnhub-apilib';

const technicalAnalysis: TechnicalAnalysis = {
  count: {
    buy: BigInt(68),
    neutral: BigInt(246),
    sell: BigInt(66),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  signal: 'signal8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

