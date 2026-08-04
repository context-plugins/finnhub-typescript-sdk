
# Stock Candles

*This model accepts additional fields of type unknown.*

## Structure

`StockCandles`

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
import { StockCandles } from 'finnhub-apilib';

const stockCandles: StockCandles = {
  o: [
    69.69,
    69.7
  ],
  h: [
    38.69,
    38.7,
    38.71
  ],
  l: [
    117.23
  ],
  c: [
    125.36
  ],
  v: [
    78.16,
    78.17,
    78.18
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

