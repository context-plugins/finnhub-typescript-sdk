
# Gross Income Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`GrossIncomeEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grossIncomeAvg` | `number \| undefined` | Optional | Average gross income estimates including Finnhub's proprietary estimates. |
| `grossIncomeHigh` | `number \| undefined` | Optional | Highest estimate. |
| `grossIncomeLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GrossIncomeEstimatesInfo } from 'finnhub-apilib';

const grossIncomeEstimatesInfo: GrossIncomeEstimatesInfo = {
  grossIncomeAvg: 240.52,
  grossIncomeHigh: 3.08,
  grossIncomeLow: 117.76,
  numberAnalysts: BigInt(148),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

