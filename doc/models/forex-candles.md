
# Forex Candles

*This model accepts additional fields of type unknown.*

## Structure

`ForexCandles`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `o` | `number[] \| undefined` | Optional | List of open prices for returned candles. |
| `h` | `number[] \| undefined` | Optional | List of high prices for returned candles. |
| `l` | `number[] \| undefined` | Optional | List of low prices for returned candles. |
| `c` | `number[] \| undefined` | Optional | List of close prices for returned candles. |
| `v` | `number[] \| undefined` | Optional | List of volume data for returned candles. |
| `t` | `number[] \| undefined` | Optional | List of timestamp for returned candles. |
| `s` | `string \| undefined` | Optional | Status of the response. This field can either be ok or no_data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ForexCandles } from 'finnhub-apilib';

const forexCandles: ForexCandles = {
  o: [
    228.07,
    228.08,
    228.09
  ],
  h: [
    197.07
  ],
  l: [
    41.15,
    41.16
  ],
  c: [
    27.74,
    27.73,
    27.72
  ],
  v: [
    236.54
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

