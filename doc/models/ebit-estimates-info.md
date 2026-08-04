
# Ebit Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`EbitEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ebitAvg` | `number \| undefined` | Optional | Average EBIT estimates including Finnhub's proprietary estimates. |
| `ebitHigh` | `number \| undefined` | Optional | Highest estimate. |
| `ebitLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EbitEstimatesInfo } from 'finnhub-apilib';

const ebitEstimatesInfo: EbitEstimatesInfo = {
  ebitAvg: 161.64,
  ebitHigh: 193.26,
  ebitLow: 75.36,
  numberAnalysts: BigInt(228),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

