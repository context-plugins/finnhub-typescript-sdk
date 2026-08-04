
# Indices Historical Constituents

*This model accepts additional fields of type unknown.*

## Structure

`IndicesHistoricalConstituents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Index's symbol. |
| `historicalConstituents` | [`IndexHistoricalConstituent[] \| undefined`](../../doc/models/index-historical-constituent.md) | Optional | Array of historical constituents. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IndicesHistoricalConstituents } from 'finnhub-apilib';

const indicesHistoricalConstituents: IndicesHistoricalConstituents = {
  symbol: 'symbol4',
  historicalConstituents: [
    {
      symbol: 'symbol8',
      action: 'action2',
      date: '2016-03-13T12:52:32.123Z',
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

