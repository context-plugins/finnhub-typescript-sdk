
# Revenue Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`RevenueEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `revenueAvg` | `number \| undefined` | Optional | Average revenue estimates including Finnhub's proprietary estimates. |
| `revenueHigh` | `number \| undefined` | Optional | Highest estimate. |
| `revenueLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RevenueEstimatesInfo } from 'finnhub-apilib';

const revenueEstimatesInfo: RevenueEstimatesInfo = {
  revenueAvg: 120.82,
  revenueHigh: 144.76,
  revenueLow: 111.74,
  numberAnalysts: BigInt(18),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

