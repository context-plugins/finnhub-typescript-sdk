
# Net Income Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`NetIncomeEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `netIncomeAvg` | `number \| undefined` | Optional | Average net income estimates including Finnhub's proprietary estimates. |
| `netIncomeHigh` | `number \| undefined` | Optional | Highest estimate. |
| `netIncomeLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NetIncomeEstimatesInfo } from 'finnhub-apilib';

const netIncomeEstimatesInfo: NetIncomeEstimatesInfo = {
  netIncomeAvg: 187.22,
  netIncomeHigh: 242.22,
  netIncomeLow: 46.14,
  numberAnalysts: BigInt(250),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

