
# Company Esg 2

*This model accepts additional fields of type unknown.*

## Structure

`CompanyEsg2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalEsgScore` | `number \| undefined` | Optional | Total ESG Score |
| `environmentScore` | `number \| undefined` | Optional | Environment Score |
| `governanceScore` | `number \| undefined` | Optional | Governance Score |
| `socialScore` | `number \| undefined` | Optional | Social Score |
| `data` | `unknown \| undefined` | Optional | - |
| `period` | `string \| undefined` | Optional | Period |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyEsg2 } from 'finnhub-apilib';

const companyEsg2: CompanyEsg2 = {
  totalEsgScore: 31.74,
  environmentScore: 168.34,
  governanceScore: 119.5,
  socialScore: 30.86,
  data: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

