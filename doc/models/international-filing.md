
# International Filing

*This model accepts additional fields of type unknown.*

## Structure

`InternationalFiling`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `companyName` | `string \| undefined` | Optional | Company name. |
| `filedDate` | `string \| undefined` | Optional | Filed date <code>%Y-%m-%d %H:%M:%S</code>. |
| `category` | `string \| undefined` | Optional | Category. |
| `title` | `string \| undefined` | Optional | Document's title. |
| `description` | `string \| undefined` | Optional | Document's description. |
| `url` | `string \| undefined` | Optional | Url. |
| `language` | `string \| undefined` | Optional | Language. |
| `country` | `string \| undefined` | Optional | Country. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InternationalFiling } from 'finnhub-apilib';

const internationalFiling: InternationalFiling = {
  symbol: 'symbol2',
  companyName: 'companyName8',
  filedDate: 'filedDate6',
  category: 'category4',
  title: 'title8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

