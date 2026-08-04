
# Crypto Candles

*This model accepts additional fields of type unknown.*

## Structure

`CryptoCandles`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `o` | `number[] \| undefined` | Optional | List of open prices for returned candles. |
| `h` | `number[] \| undefined` | Optional | List of high prices for returned candles. |
| `l` | `number[] \| undefined` | Optional | List of low prices for returned candles. |
| `c` | `number[] \| undefined` | Optional | List of close prices for returned candles. |
| `v` | `number[] \| undefined` | Optional | List of volume data for returned candles. |
| `t` | `bigint[] \| undefined` | Optional | List of timestamp for returned candles. |
| `s` | `string \| undefined` | Optional | Status of the response. This field can either be ok or no_data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CryptoCandles } from 'finnhub-apilib';

const cryptoCandles: CryptoCandles = {
  o: [
    228.03,
    228.04
  ],
  h: [
    197.03,
    197.04,
    197.05
  ],
  l: [
    41.11
  ],
  c: [
    27.7
  ],
  v: [
    236.5,
    236.51,
    236.52
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

