
# Capex Estimates Info

*This model accepts additional fields of type unknown.*

## Structure

`CapexEstimatesInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capexAvg` | `number \| undefined` | Optional | Average capex estimates including Finnhub's proprietary estimates. |
| `capexHigh` | `number \| undefined` | Optional | Highest estimate. |
| `capexLow` | `number \| undefined` | Optional | Lowest estimate. |
| `numberAnalysts` | `bigint \| undefined` | Optional | Number of Analysts. |
| `period` | `string \| undefined` | Optional | Period. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapexEstimatesInfo } from 'finnhub-apilib';

const capexEstimatesInfo: CapexEstimatesInfo = {
  capexAvg: 6.38,
  capexHigh: 97.52,
  capexLow: 6.38,
  numberAnalysts: BigInt(44),
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

