
# Institutional Ownership

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalOwnership`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `cusip` | `string \| undefined` | Optional | Cusip. |
| `data` | [`InstitutionalOwnershipGroup[] \| undefined`](../../doc/models/institutional-ownership-group.md) | Optional | Array of institutional investors. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalOwnership } from 'finnhub-apilib';

const institutionalOwnership: InstitutionalOwnership = {
  symbol: 'symbol2',
  cusip: 'cusip8',
  data: [
    {
      reportDate: 'reportDate8',
      ownership: [
        {
          cik: 'cik6',
          name: 'name4',
          putCall: 'putCall4',
          change: 79.98,
          noVoting: 195.18,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          cik: 'cik6',
          name: 'name4',
          putCall: 'putCall4',
          change: 79.98,
          noVoting: 195.18,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          cik: 'cik6',
          name: 'name4',
          putCall: 'putCall4',
          change: 79.98,
          noVoting: 195.18,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      reportDate: 'reportDate8',
      ownership: [
        {
          cik: 'cik6',
          name: 'name4',
          putCall: 'putCall4',
          change: 79.98,
          noVoting: 195.18,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          cik: 'cik6',
          name: 'name4',
          putCall: 'putCall4',
          change: 79.98,
          noVoting: 195.18,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          cik: 'cik6',
          name: 'name4',
          putCall: 'putCall4',
          change: 79.98,
          noVoting: 195.18,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
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

