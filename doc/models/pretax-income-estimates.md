
# Pretax Income Estimates

*This model accepts additional fields of type unknown.*

## Structure

`PretaxIncomeEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`PretaxIncomeEstimatesInfo[] \| undefined`](../../doc/models/pretax-income-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PretaxIncomeEstimates } from 'finnhub-apilib';

const pretaxIncomeEstimates: PretaxIncomeEstimates = {
  data: [
    {
      pretaxIncomeAvg: 24.96,
      pretaxIncomeHigh: 32.4,
      pretaxIncomeLow: 219.9,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      pretaxIncomeAvg: 24.96,
      pretaxIncomeHigh: 32.4,
      pretaxIncomeLow: 219.9,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      pretaxIncomeAvg: 24.96,
      pretaxIncomeHigh: 32.4,
      pretaxIncomeLow: 219.9,
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

