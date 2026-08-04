
# Gross Income Estimates

*This model accepts additional fields of type unknown.*

## Structure

`GrossIncomeEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`GrossIncomeEstimatesInfo[] \| undefined`](../../doc/models/gross-income-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrossIncomeEstimates } from 'finnhub-apilib';

const grossIncomeEstimates: GrossIncomeEstimates = {
  data: [
    {
      grossIncomeAvg: 6.3,
      grossIncomeHigh: 24.86,
      grossIncomeLow: 139.54,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      grossIncomeAvg: 6.3,
      grossIncomeHigh: 24.86,
      grossIncomeLow: 139.54,
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

