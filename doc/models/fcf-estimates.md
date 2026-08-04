
# Fcf Estimates

*This model accepts additional fields of type unknown.*

## Structure

`FcfEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`FcfEstimatesInfo[] \| undefined`](../../doc/models/fcf-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FcfEstimates } from 'finnhub-apilib';

const fcfEstimates: FcfEstimates = {
  data: [
    {
      fcfAvg: 6.5,
      fcfHigh: 223.76,
      fcfLow: 187.24,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      fcfAvg: 6.5,
      fcfHigh: 223.76,
      fcfLow: 187.24,
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

