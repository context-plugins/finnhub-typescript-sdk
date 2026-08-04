
# Ocf Estimates

*This model accepts additional fields of type unknown.*

## Structure

`OcfEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`OcfEstimatesInfo[] \| undefined`](../../doc/models/ocf-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OcfEstimates } from 'finnhub-apilib';

const ocfEstimates: OcfEstimates = {
  data: [
    {
      ocfAvg: 154.7,
      ocfHigh: 86.66,
      ocfLow: 85.28,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq0',
  symbol: 'symbol4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

