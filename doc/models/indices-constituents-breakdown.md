
# Indices Constituents Breakdown

*This model accepts additional fields of type unknown.*

## Structure

`IndicesConstituentsBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `name` | `string \| undefined` | Optional | Name. |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `cusip` | `string \| undefined` | Optional | Cusip. |
| `shareClassFigi` | `string \| undefined` | Optional | Global Share Class FIGI. |
| `weight` | `number \| undefined` | Optional | Weight. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IndicesConstituentsBreakdown } from 'finnhub-apilib';

const indicesConstituentsBreakdown: IndicesConstituentsBreakdown = {
  symbol: 'symbol6',
  name: 'name4',
  isin: 'isin4',
  cusip: 'cusip2',
  shareClassFigi: 'shareClassFIGI4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

