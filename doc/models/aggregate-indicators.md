
# Aggregate Indicators

*This model accepts additional fields of type unknown.*

## Structure

`AggregateIndicators`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `technicalAnalysis` | [`TechnicalAnalysis \| undefined`](../../doc/models/technical-analysis.md) | Optional | - |
| `trend` | [`Trend \| undefined`](../../doc/models/trend.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AggregateIndicators } from 'finnhub-apilib';

const aggregateIndicators: AggregateIndicators = {
  technicalAnalysis: {
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
  },
  trend: {
    adx: 120.96,
    trending: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

