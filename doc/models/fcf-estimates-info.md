
# Fcf Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`FcfEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fcfAvg` | `number \| undefined` | Optional | Average FCF estimates including Finnhub's proprietary estimates. |
| `fcfHigh` | `number \| undefined` | Optional | Highest estimate. |
| `fcfLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FcfEstimatesInfo } from 'finnhub-apilib';

const fcfEstimatesInfo: FcfEstimatesInfo = {
  fcfAvg: 195.38,
  fcfHigh: 99.36,
  fcfLow: 135.88,
  numberAnalysts: BigInt(222),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

