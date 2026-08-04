
# Mutual Fund Eet Pai

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundEetPai`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `data` | `unknown \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundEetPai } from 'finnhub-apilib';

const mutualFundEetPai: MutualFundEetPai = {
  isin: 'isin2',
  data: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

