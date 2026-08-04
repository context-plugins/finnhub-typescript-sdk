
# Earning Result

*This model accepts additional fields of type unknown.*

## Structure

`EarningResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actual` | `number \| undefined` | Optional | Actual earning result. |
| `estimate` | `number \| undefined` | Optional | Estimated earning. |
| `surprise` | `number \| undefined` | Optional | Surprise - The difference between actual and estimate. |
| `surprisePercent` | `number \| undefined` | Optional | Surprise percent. |
| `period` | `string \| undefined` | Optional | Reported period. |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `year` | `bigint \| undefined` | Optional | Fiscal year. |
| `quarter` | `bigint \| undefined` | Optional | Fiscal quarter. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningResult } from 'finnhub-apilib';

const earningResult: EarningResult = {
  actual: 124.72,
  estimate: 64.62,
  surprise: 208.62,
  surprisePercent: 222.66,
  period: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

