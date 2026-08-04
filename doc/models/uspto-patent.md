
# Uspto Patent

*This model accepts additional fields of type unknown.*

## Structure

`UsptoPatent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationNumber` | `string \| undefined` | Optional | Application Number. |
| `companyFilingName` | `string[] \| undefined` | Optional | Array of companies' name on the patent. |
| `filingDate` | `string \| undefined` | Optional | Filing date. |
| `description` | `string \| undefined` | Optional | Description. |
| `filingStatus` | `string \| undefined` | Optional | Filing status. |
| `patentNumber` | `string \| undefined` | Optional | Patent number. |
| `publicationDate` | `string \| undefined` | Optional | Publication date. |
| `patentType` | `string \| undefined` | Optional | Patent's type. |
| `url` | `string \| undefined` | Optional | URL of the original article. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsptoPatent } from 'finnhub-apilib';

const usptoPatent: UsptoPatent = {
  applicationNumber: 'applicationNumber2',
  companyFilingName: [
    'companyFilingName5'
  ],
  filingDate: 'filingDate4',
  description: 'description8',
  filingStatus: 'filingStatus4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

