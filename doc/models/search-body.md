
# Search Body

*This model accepts additional fields of type unknown.*

## Structure

`SearchBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | `string` | Required | Search query |
| `isins` | `string \| undefined` | Optional | List of isin to search, comma separated (Max: 50). |
| `cusips` | `string \| undefined` | Optional | List of cusip to search, comma separated (Max: 50). |
| `ciks` | `string \| undefined` | Optional | List of SEC Center Index Key to search, comma separated (Max: 50). |
| `sedarIds` | `string \| undefined` | Optional | List of SEDAR issuer number to search, comma separated (Max: 50). |
| `chIds` | `string \| undefined` | Optional | List of Companies House number to search, comma separated (Max: 50). |
| `symbols` | `string \| undefined` | Optional | List of symbols to search, comma separated (Max: 50). |
| `sedols` | `string \| undefined` | Optional | List of sedols to search, comma separated (Max: 50). |
| `sources` | `string \| undefined` | Optional | List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `forms` | `string \| undefined` | Optional | List of forms to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `gics` | `string \| undefined` | Optional | List of gics to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `naics` | `string \| undefined` | Optional | List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `exhibits` | `string \| undefined` | Optional | List of exhibits to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `exchanges` | `string \| undefined` | Optional | List of exchanges to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `countries` | `string \| undefined` | Optional | List of sources to search, comma separated (Max: 50). Look at <code>/filter</code> endpoint to see all available values. |
| `acts` | `string \| undefined` | Optional | List of SEC's exchanges act to search, comma separated. Look at <code>/filter</code> endpoint to see all available values. |
| `caps` | `string \| undefined` | Optional | List of market capitalization to search, comma separated. Look at <code>/filter</code> endpoint to see all available values. |
| `fromDate` | `string \| undefined` | Optional | Search from date in format: YYYY-MM-DD, default from the last 2 years |
| `toDate` | `string \| undefined` | Optional | Search to date in format: YYYY-MM-DD, default to today |
| `page` | `string \| undefined` | Optional | Use for pagination, default to page 1 |
| `sort` | `string \| undefined` | Optional | Sort result by, default: sortMostRecent. Look at <code>/filter</code> endpoint to see all available values. |
| `highlighted` | `boolean \| undefined` | Optional | Enable highlight in returned filings. If enabled, only return 10 results each time |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SearchBody } from 'finnhub-apilib';

const searchBody: SearchBody = {
  query: 'query8',
  isins: 'isins6',
  cusips: 'cusips2',
  ciks: 'ciks0',
  sedarIds: 'sedarIds4',
  chIds: 'chIds8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

