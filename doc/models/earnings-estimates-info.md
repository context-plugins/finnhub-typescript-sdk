
# Earnings Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`EarningsEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `epsAvg` | `number \| undefined` | Optional | Average EPS estimates including Finnhub's proprietary estimates. |
| `epsHigh` | `number \| undefined` | Optional | Highest estimate. |
| `epsLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsEstimatesInfo } from 'finnhub-apilib';

const earningsEstimatesInfo: EarningsEstimatesInfo = {
  epsAvg: 32.46,
  epsHigh: 18.86,
  epsLow: 8.94,
  numberAnalysts: BigInt(68),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

