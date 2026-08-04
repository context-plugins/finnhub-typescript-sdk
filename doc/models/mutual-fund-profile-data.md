
# Mutual Fund Profile Data

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundProfileData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name |
| `category` | `string \| undefined` | Optional | Fund's category. |
| `investmentSegment` | `string \| undefined` | Optional | Investment Segment. |
| `totalNav` | `number \| undefined` | Optional | NAV. |
| `expenseRatio` | `number \| undefined` | Optional | Expense ratio. |
| `benchmark` | `string \| undefined` | Optional | Index benchmark. |
| `inceptionDate` | `string \| undefined` | Optional | Inception date. |
| `description` | `string \| undefined` | Optional | Fund's description. |
| `fundFamily` | `string \| undefined` | Optional | Fund Family. |
| `fundCompany` | `string \| undefined` | Optional | Fund Company. |
| `manager` | `string \| undefined` | Optional | Fund's managers. |
| `status` | `string \| undefined` | Optional | Status. |
| `beta` | `number \| undefined` | Optional | Beta. |
| `deferredLoad` | `number \| undefined` | Optional | Deferred load. |
| `fee12B1` | `number \| undefined` | Optional | 12B-1 fee. |
| `frontLoad` | `number \| undefined` | Optional | Front Load. |
| `iraMinInvestment` | `number \| undefined` | Optional | IRA minimum investment. |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `cusip` | `string \| undefined` | Optional | CUSIP. |
| `maxRedemptionFee` | `number \| undefined` | Optional | Max redemption fee. |
| `standardMinInvestment` | `number \| undefined` | Optional | Minimum investment for standard accounts. |
| `turnover` | `number \| undefined` | Optional | Turnover. |
| `seriesId` | `string \| undefined` | Optional | Fund's series ID. This field can be used to group multiple share classes into 1 unique fund. |
| `seriesName` | `string \| undefined` | Optional | Fund's series name. |
| `classId` | `string \| undefined` | Optional | Class ID. |
| `className` | `string \| undefined` | Optional | Class name. |
| `sfdrClassification` | `string \| undefined` | Optional | SFDR classification for EU funds. Under the new classifications, a fund's strategy will labeled under either Article 6, 8 or 9. Article 6 covers funds which do not integrate any kind of sustainability into the investment process. Article 8, also known as ‘environmental and socially promoting’, applies “… where a financial product promotes, among other characteristics, environmental or social characteristics, or a combination of those characteristics, provided that the companies in which the investments are made follow good governance practices.”. Article 9, also known as ‘products targeting sustainable investments’, covers products targeting bespoke sustainable investments and applies “… where a financial product has sustainable investment as its objective and an index has been designated as a reference benchmark.” |
| `currency` | `string \| undefined` | Optional | Fund's currency |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundProfileData } from 'finnhub-apilib';

const mutualFundProfileData: MutualFundProfileData = {
  name: 'name6',
  category: 'category4',
  investmentSegment: 'investmentSegment8',
  totalNav: 6.66,
  expenseRatio: 30.56,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

