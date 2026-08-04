
# Institutional Ownership Group

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalOwnershipGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reportDate` | `string \| undefined` | Optional | Report date. |
| `ownership` | [`InstitutionalOwnershipInfo[] \| undefined`](../../doc/models/institutional-ownership-info.md) | Optional | Array of institutional investors. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalOwnershipGroup } from 'finnhub-apilib';

const institutionalOwnershipGroup: InstitutionalOwnershipGroup = {
  reportDate: 'reportDate2',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

