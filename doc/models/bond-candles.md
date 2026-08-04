
# Bond Candles

*This model accepts additional fields of type unknown.*

## Structure

`BondCandles`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `c` | `number[] \| undefined` | Optional | List of close prices for returned candles. |
| `t` | `bigint[] \| undefined` | Optional | List of timestamp for returned candles. |
| `s` | `string \| undefined` | Optional | Status of the response. This field can either be ok or no_data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BondCandles } from 'finnhub-apilib';

const bondCandles: BondCandles = {
  c: [
    181.74,
    181.73,
    181.72
  ],
  t: [
    BigInt(93),
    BigInt(94),
    BigInt(95)
  ],
  s: 's0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

