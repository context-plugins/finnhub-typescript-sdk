
# Stock Presentation

*This model accepts additional fields of type unknown.*

## Structure

`StockPresentation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `res` | [`PresentationData[] \| undefined`](../../doc/models/presentation-data.md) | Optional | Presentation data. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StockPresentation } from 'finnhub-apilib';

const stockPresentation: StockPresentation = {
  symbol: 'symbol4',
  res: [
    {
      quarter: BigInt(114),
      year: BigInt(194),
      url: 'url8',
      title: 'title0',
      atTime: 'atTime4',
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

