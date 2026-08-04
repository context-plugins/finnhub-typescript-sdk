
# Fund Ownership Info

*This model accepts additional fields of type unknown.*

## Structure

`FundOwnershipInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Investor's name. |
| `share` | `bigint \| undefined` | Optional | Number of shares held by the investor. |
| `change` | `bigint \| undefined` | Optional | Number of share changed (net buy or sell) from the last period. |
| `filingDate` | `string \| undefined` | Optional | Filing date. |
| `portfolioPercent` | `number \| undefined` | Optional | Percent of the fund's portfolio comprised of the company's share. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundOwnershipInfo } from 'finnhub-apilib';

const fundOwnershipInfo: FundOwnershipInfo = {
  name: 'name6',
  share: BigInt(34),
  change: BigInt(170),
  filingDate: '2016-03-13T12:52:32.123Z',
  portfolioPercent: 236.22,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

