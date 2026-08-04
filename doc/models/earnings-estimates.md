
# Earnings Estimates

*This model accepts additional fields of type unknown.*

## Structure

`EarningsEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`EarningsEstimatesInfo[] \| undefined`](../../doc/models/earnings-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsEstimates } from 'finnhub-apilib';

const earningsEstimates: EarningsEstimates = {
  data: [
    {
      epsAvg: 224,
      epsHigh: 210.4,
      epsLow: 200.48,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      epsAvg: 224,
      epsHigh: 210.4,
      epsLow: 200.48,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      epsAvg: 224,
      epsHigh: 210.4,
      epsLow: 200.48,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq6',
  symbol: 'symbol0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

