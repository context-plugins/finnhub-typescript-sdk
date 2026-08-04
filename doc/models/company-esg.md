
# Company Esg

*This model accepts additional fields of type unknown.*

## Structure

`CompanyEsg`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | symbol |
| `totalEsgScore` | `number \| undefined` | Optional | Total ESG Score |
| `environmentScore` | `number \| undefined` | Optional | Environment Score |
| `governanceScore` | `number \| undefined` | Optional | Governance Score |
| `socialScore` | `number \| undefined` | Optional | Social Score |
| `data` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyEsg } from 'finnhub-apilib';

const companyEsg: CompanyEsg = {
  symbol: 'symbol4',
  totalEsgScore: 152.84,
  environmentScore: 222.56,
  governanceScore: 254.4,
  socialScore: 104.04,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

