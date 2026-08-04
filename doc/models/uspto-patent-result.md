
# Uspto Patent Result

*This model accepts additional fields of type unknown.*

## Structure

`UsptoPatentResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `data` | [`UsptoPatent[] \| undefined`](../../doc/models/uspto-patent.md) | Optional | Array of patents. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsptoPatentResult } from 'finnhub-apilib';

const usptoPatentResult: UsptoPatentResult = {
  symbol: 'symbol4',
  data: [
    {
      applicationNumber: 'applicationNumber4',
      companyFilingName: [
        'companyFilingName7',
        'companyFilingName8',
        'companyFilingName9'
      ],
      filingDate: 'filingDate6',
      description: 'description0',
      filingStatus: 'filingStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      applicationNumber: 'applicationNumber4',
      companyFilingName: [
        'companyFilingName7',
        'companyFilingName8',
        'companyFilingName9'
      ],
      filingDate: 'filingDate6',
      description: 'description0',
      filingStatus: 'filingStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      applicationNumber: 'applicationNumber4',
      companyFilingName: [
        'companyFilingName7',
        'companyFilingName8',
        'companyFilingName9'
      ],
      filingDate: 'filingDate6',
      description: 'description0',
      filingStatus: 'filingStatus6',
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

