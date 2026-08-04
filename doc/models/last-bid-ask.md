
# Last Bid Ask

*This model accepts additional fields of type unknown.*

## Structure

`LastBidAsk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `b` | `number \| undefined` | Optional | Bid price. |
| `a` | `number \| undefined` | Optional | Ask price. |
| `bv` | `number \| undefined` | Optional | Bid volume. |
| `av` | `number \| undefined` | Optional | Ask volume. |
| `t` | `bigint \| undefined` | Optional | Reference UNIX timestamp in ms. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LastBidAsk } from 'finnhub-apilib';

const lastBidAsk: LastBidAsk = {
  b: 95.84,
  a: 121.88,
  bv: 77.92,
  av: 118.72,
  t: BigInt(18),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

