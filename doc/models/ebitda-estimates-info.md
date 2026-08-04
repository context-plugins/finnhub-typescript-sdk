
# Ebitda Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`EbitdaEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ebitdaAvg` | `number \| undefined` | Optional | Average EBITDA estimates including Finnhub's proprietary estimates. |
| `ebitdaHigh` | `number \| undefined` | Optional | Highest estimate. |
| `ebitdaLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EbitdaEstimatesInfo } from 'finnhub-apilib';

const ebitdaEstimatesInfo: EbitdaEstimatesInfo = {
  ebitdaAvg: 240.34,
  ebitdaHigh: 120.06,
  ebitdaLow: 100.24,
  numberAnalysts: BigInt(76),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

