
# Similarity Index

*This model accepts additional fields of type unknown.*

## Structure

`SimilarityIndex`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `cik` | `string \| undefined` | Optional | CIK. |
| `similarity` | [`SimilarityIndexInfo[] \| undefined`](../../doc/models/similarity-index-info.md) | Optional | Array of filings with its cosine similarity compared to the same report of the previous year. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SimilarityIndex } from 'finnhub-apilib';

const similarityIndex: SimilarityIndex = {
  symbol: 'symbol4',
  cik: 'cik6',
  similarity: [
    {
      cik: 'cik6',
      item1: 140.48,
      item1A: 205.54,
      item2: 167.86,
      item7: 69.46,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      cik: 'cik6',
      item1: 140.48,
      item1A: 205.54,
      item2: 167.86,
      item7: 69.46,
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

