
# Capex Estimates

*This model accepts additional fields of type unknown.*

## Structure

`CapexEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`CapexEstimatesInfo[] \| undefined`](../../doc/models/capex-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapexEstimates } from 'finnhub-apilib';

const capexEstimates: CapexEstimates = {
  data: [
    {
      capexAvg: 172.56,
      capexHigh: 68.66,
      capexLow: 172.56,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      capexAvg: 172.56,
      capexHigh: 68.66,
      capexLow: 172.56,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      capexAvg: 172.56,
      capexHigh: 68.66,
      capexLow: 172.56,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  freq: 'freq2',
  symbol: 'symbol4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

