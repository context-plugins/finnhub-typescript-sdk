
# Ebitda Estimates

*This model accepts additional fields of type unknown.*

## Structure

`EbitdaEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`EbitdaEstimatesInfo[] \| undefined`](../../doc/models/ebitda-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EbitdaEstimates } from 'finnhub-apilib';

const ebitdaEstimates: EbitdaEstimates = {
  data: [
    {
      ebitdaAvg: 104.12,
      ebitdaHigh: 0.28,
      ebitdaLow: 220.02,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq4',
  symbol: 'symbol2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

