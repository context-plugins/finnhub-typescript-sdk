
# Dps Estimates

*This model accepts additional fields of type unknown.*

## Structure

`DpsEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`DpsEstimatesInfo[] \| undefined`](../../doc/models/dps-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DpsEstimates } from 'finnhub-apilib';

const dpsEstimates: DpsEstimates = {
  data: [
    {
      dpsAvg: 62.58,
      dpsHigh: 37.28,
      dpsLow: 228.44,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      dpsAvg: 62.58,
      dpsHigh: 37.28,
      dpsLow: 228.44,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq4',
  symbol: 'symbol8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

