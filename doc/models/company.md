
# Company

*This model accepts additional fields of type unknown.*

## Structure

`Company`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Executive name |
| `age` | `bigint \| undefined` | Optional | Age |
| `title` | `string \| undefined` | Optional | Title |
| `since` | `string \| undefined` | Optional | Year first appointed as executive/director of the company |
| `sex` | `string \| undefined` | Optional | Sex |
| `compensation` | `bigint \| undefined` | Optional | Total compensation |
| `currency` | `string \| undefined` | Optional | Compensation currency |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Company } from 'finnhub-apilib';

const company: Company = {
  name: 'name0',
  age: BigInt(212),
  title: 'title6',
  since: 'since0',
  sex: 'sex8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

