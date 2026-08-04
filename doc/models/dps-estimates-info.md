
# Dps Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`DpsEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dpsAvg` | `number \| undefined` | Optional | Average DPS estimates including Finnhub's proprietary estimates. |
| `dpsHigh` | `number \| undefined` | Optional | Highest estimate. |
| `dpsLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DpsEstimatesInfo } from 'finnhub-apilib';

const dpsEstimatesInfo: DpsEstimatesInfo = {
  dpsAvg: 82.44,
  dpsHigh: 182.3,
  dpsLow: 83.42,
  numberAnalysts: BigInt(112),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

