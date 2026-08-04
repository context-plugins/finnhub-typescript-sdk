
# Company Executive

*This model accepts additional fields of type unknown.*

## Structure

`CompanyExecutive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `executive` | [`Company[] \| undefined`](../../doc/models/company.md) | Optional | Array of company's executives and members of the Board. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyExecutive } from 'finnhub-apilib';

const companyExecutive: CompanyExecutive = {
  symbol: 'symbol0',
  executive: [
    {
      name: 'name0',
      age: BigInt(94),
      title: 'title6',
      since: 'since0',
      sex: 'sex8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name0',
      age: BigInt(94),
      title: 'title6',
      since: 'since0',
      sex: 'sex8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name0',
      age: BigInt(94),
      title: 'title6',
      since: 'since0',
      sex: 'sex8',
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

