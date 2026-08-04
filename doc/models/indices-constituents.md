
# Indices Constituents

*This model accepts additional fields of type unknown.*

## Structure

`IndicesConstituents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Index's symbol. |
| `constituents` | `string[] \| undefined` | Optional | Array of constituents. |
| `constituentsBreakdown` | [`IndicesConstituentsBreakdown[] \| undefined`](../../doc/models/indices-constituents-breakdown.md) | Optional | Array of constituents' details. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IndicesConstituents } from 'finnhub-apilib';

const indicesConstituents: IndicesConstituents = {
  symbol: 'symbol0',
  constituents: [
    'constituents9'
  ],
  constituentsBreakdown: [
    {
      symbol: 'symbol2',
      name: 'name0',
      isin: 'isin0',
      cusip: 'cusip8',
      shareClassFigi: 'shareClassFIGI0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol2',
      name: 'name0',
      isin: 'isin0',
      cusip: 'cusip8',
      shareClassFigi: 'shareClassFIGI0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol2',
      name: 'name0',
      isin: 'isin0',
      cusip: 'cusip8',
      shareClassFigi: 'shareClassFIGI0',
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

