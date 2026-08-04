
# Ebit Estimates

*This model accepts additional fields of type unknown.*

## Structure

`EbitEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`EbitEstimatesInfo[] \| undefined`](../../doc/models/ebit-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EbitEstimates } from 'finnhub-apilib';

const ebitEstimates: EbitEstimates = {
  data: [
    {
      ebitAvg: 238.94,
      ebitHigh: 14.56,
      ebitLow: 152.66,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      ebitAvg: 238.94,
      ebitHigh: 14.56,
      ebitLow: 152.66,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      ebitAvg: 238.94,
      ebitHigh: 14.56,
      ebitLow: 152.66,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq8',
  symbol: 'symbol2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

