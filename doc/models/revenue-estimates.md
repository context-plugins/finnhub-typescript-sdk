
# Revenue Estimates

*This model accepts additional fields of type unknown.*

## Structure

`RevenueEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`RevenueEstimatesInfo[] \| undefined`](../../doc/models/revenue-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RevenueEstimates } from 'finnhub-apilib';

const revenueEstimates: RevenueEstimates = {
  data: [
    {
      revenueAvg: 146.46,
      revenueHigh: 170.4,
      revenueLow: 169.9,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      revenueAvg: 146.46,
      revenueHigh: 170.4,
      revenueLow: 169.9,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq8',
  symbol: 'symbol8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

