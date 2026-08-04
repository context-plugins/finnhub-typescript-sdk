
# Pretax Income Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`PretaxIncomeEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pretaxIncomeAvg` | `number \| undefined` | Optional | Average pretax income estimates including Finnhub's proprietary estimates. |
| `pretaxIncomeHigh` | `number \| undefined` | Optional | Highest estimate. |
| `pretaxIncomeLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PretaxIncomeEstimatesInfo } from 'finnhub-apilib';

const pretaxIncomeEstimatesInfo: PretaxIncomeEstimatesInfo = {
  pretaxIncomeAvg: 102.8,
  pretaxIncomeHigh: 210.56,
  pretaxIncomeLow: 142.06,
  numberAnalysts: BigInt(174),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

