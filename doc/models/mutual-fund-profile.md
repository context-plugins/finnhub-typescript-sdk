
# Mutual Fund Profile

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `profile` | [`MutualFundProfileData \| undefined`](../../doc/models/mutual-fund-profile-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundProfile } from 'finnhub-apilib';

const mutualFundProfile: MutualFundProfile = {
  symbol: 'symbol0',
  profile: {
    name: 'name0',
    category: 'category8',
    investmentSegment: 'investmentSegment2',
    totalNav: 44.98,
    expenseRatio: 82.2,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

