
# Filing Response

*This model accepts additional fields of type unknown.*

## Structure

`FilingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filingId` | `string \| undefined` | Optional | Filing Id in Alpharesearch platform |
| `title` | `string \| undefined` | Optional | Filing title |
| `filerId` | `string \| undefined` | Optional | Id of the entity submitted the filing |
| `symbol` | `unknown \| undefined` | Optional | List of symbol associate with this filing |
| `name` | `string \| undefined` | Optional | Filer name |
| `acceptanceDate` | `string \| undefined` | Optional | Date the filing is submitted. |
| `filedDate` | `string \| undefined` | Optional | Date the filing is made available to the public |
| `reportDate` | `string \| undefined` | Optional | Date as which the filing is reported |
| `form` | `string \| undefined` | Optional | Filing Form |
| `amend` | `boolean \| undefined` | Optional | Amendment |
| `source` | `string \| undefined` | Optional | Filing Source |
| `pageCount` | `number \| undefined` | Optional | Estimate number of page when printing |
| `documentCount` | `number \| undefined` | Optional | Number of document in this filing |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FilingResponse } from 'finnhub-apilib';

const filingResponse: FilingResponse = {
  filingId: 'filingId8',
  title: 'title8',
  filerId: 'filerId2',
  symbol: { 'key1': 'val1', 'key2': 'val2' },
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

