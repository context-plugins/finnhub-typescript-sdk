
# Mutual Fund Eet

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundEet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `data` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundEet } from 'finnhub-apilib';

const mutualFundEet: MutualFundEet = {
  isin: 'isin0',
  data: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

