
# Ocf Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`OcfEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ocfAvg` | `number \| undefined` | Optional | Average OCF estimates including Finnhub's proprietary estimates. |
| `ocfHigh` | `number \| undefined` | Optional | Highest estimate. |
| `ocfLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OcfEstimatesInfo } from 'finnhub-apilib';

const ocfEstimatesInfo: OcfEstimatesInfo = {
  ocfAvg: 119.98,
  ocfHigh: 204.06,
  ocfLow: 50.56,
  numberAnalysts: BigInt(134),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

