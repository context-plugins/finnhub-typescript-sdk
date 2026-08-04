
# Filing

*This model accepts additional fields of type unknown.*

## Structure

`Filing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessNumber` | `string \| undefined` | Optional | Access number. |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `cik` | `string \| undefined` | Optional | CIK. |
| `form` | `string \| undefined` | Optional | Form type. |
| `filedDate` | `string \| undefined` | Optional | Filed date <code>%Y-%m-%d %H:%M:%S</code>. |
| `acceptedDate` | `string \| undefined` | Optional | Accepted date <code>%Y-%m-%d %H:%M:%S</code>. |
| `reportUrl` | `string \| undefined` | Optional | Report's URL. |
| `filingUrl` | `string \| undefined` | Optional | Filing's URL. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Filing } from 'finnhub-apilib';

const filing: Filing = {
  accessNumber: 'accessNumber0',
  symbol: 'symbol4',
  cik: 'cik6',
  form: 'form2',
  filedDate: 'filedDate4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

