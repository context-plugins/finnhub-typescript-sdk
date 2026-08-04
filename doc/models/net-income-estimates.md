
# Net Income Estimates

*This model accepts additional fields of type unknown.*

## Structure

`NetIncomeEstimates`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`NetIncomeEstimatesInfo[] \| undefined`](../../doc/models/net-income-estimates-info.md) | Optional | List of estimates |
| `freq` | `string \| undefined` | Optional | Frequency: annual or quarterly. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NetIncomeEstimates } from 'finnhub-apilib';

const netIncomeEstimates: NetIncomeEstimates = {
  data: [
    {
      netIncomeAvg: 82.54,
      netIncomeHigh: 137.54,
      netIncomeLow: 197.46,
      numberAnalysts: BigInt(22),
      period: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      netIncomeAvg: 82.54,
      netIncomeHigh: 137.54,
      netIncomeLow: 197.46,
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

