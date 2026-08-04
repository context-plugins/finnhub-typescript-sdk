
# Earnings Call Live

*This model accepts additional fields of type unknown.*

## Structure

`EarningsCallLive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`EarningsCallLiveResult[] \| undefined`](../../doc/models/earnings-call-live-result.md) | Optional | Array of earnings call events that support live streaming. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsCallLive } from 'finnhub-apilib';

const earningsCallLive: EarningsCallLive = {
  event: [
    {
      symbol: 'symbol8',
      event: 'event0',
      time: 'time0',
      year: BigInt(118),
      quarter: BigInt(38),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol8',
      event: 'event0',
      time: 'time0',
      year: BigInt(118),
      quarter: BigInt(38),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

