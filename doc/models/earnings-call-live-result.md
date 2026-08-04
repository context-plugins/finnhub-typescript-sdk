
# Earnings Call Live Result

*This model accepts additional fields of type unknown.*

## Structure

`EarningsCallLiveResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `event` | `string \| undefined` | Optional | Event name. |
| `time` | `string \| undefined` | Optional | Date time in UTC. |
| `year` | `bigint \| undefined` | Optional | Earnings year. |
| `quarter` | `bigint \| undefined` | Optional | Earnings quarter. |
| `liveAudio` | `string \| undefined` | Optional | Live audio streaming file. |
| `recording` | `string \| undefined` | Optional | Recoding in mp3 format. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsCallLiveResult } from 'finnhub-apilib';

const earningsCallLiveResult: EarningsCallLiveResult = {
  symbol: 'symbol8',
  event: 'event0',
  time: 'time0',
  year: BigInt(36),
  quarter: BigInt(140),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

