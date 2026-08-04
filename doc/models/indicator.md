
# Indicator

*This model accepts additional fields of type unknown.*

## Structure

`Indicator`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buy` | `bigint \| undefined` | Optional | Number of buy signals |
| `neutral` | `bigint \| undefined` | Optional | Number of neutral signals |
| `sell` | `bigint \| undefined` | Optional | Number of sell signals |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Indicator } from 'finnhub-apilib';

const indicator: Indicator = {
  buy: BigInt(28),
  neutral: BigInt(206),
  sell: BigInt(26),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

