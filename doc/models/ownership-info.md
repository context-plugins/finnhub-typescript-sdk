
# Ownership Info

*This model accepts additional fields of type unknown.*

## Structure

`OwnershipInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Investor's name. |
| `share` | `bigint \| undefined` | Optional | Number of shares held by the investor. |
| `change` | `bigint \| undefined` | Optional | Number of share changed (net buy or sell) from the last period. |
| `filingDate` | `string \| undefined` | Optional | Filing date. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OwnershipInfo } from 'finnhub-apilib';

const ownershipInfo: OwnershipInfo = {
  name: 'name8',
  share: BigInt(90),
  change: BigInt(38),
  filingDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

