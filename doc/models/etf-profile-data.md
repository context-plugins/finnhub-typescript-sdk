
# Etf Profile Data

*This model accepts additional fields of type unknown.*

## Structure

`EtfProfileData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name |
| `assetClass` | `string \| undefined` | Optional | Asset Class. |
| `investmentSegment` | `string \| undefined` | Optional | Investment Segment. |
| `aum` | `number \| undefined` | Optional | AUM. |
| `nav` | `number \| undefined` | Optional | NAV. |
| `navCurrency` | `string \| undefined` | Optional | NAV currency. |
| `expenseRatio` | `number \| undefined` | Optional | Expense ratio. For non-US funds, this is the <a href="https://www.esma.europa.eu/sites/default/files/library/2015/11/09_1028_final_kid_ongoing_charges_methodology_for_publication_u_2_.pdf" target="_blank">KID ongoing charges<a/>. |
| `trackingIndex` | `string \| undefined` | Optional | Tracking Index. |
| `etfCompany` | `string \| undefined` | Optional | ETF issuer. |
| `domicile` | `string \| undefined` | Optional | ETF domicile. |
| `inceptionDate` | `string \| undefined` | Optional | Inception date. |
| `website` | `string \| undefined` | Optional | ETF's website. |
| `logo` | `string \| undefined` | Optional | Logo. |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `cusip` | `string \| undefined` | Optional | CUSIP. |
| `priceToEarnings` | `number \| undefined` | Optional | P/E. |
| `priceToBook` | `number \| undefined` | Optional | P/B. |
| `avgVolume` | `number \| undefined` | Optional | 30-day average volume. |
| `description` | `string \| undefined` | Optional | ETF's description. |
| `isInverse` | `boolean \| undefined` | Optional | Whether the ETF is inverse |
| `isLeveraged` | `boolean \| undefined` | Optional | Whether the ETF is leveraged |
| `leverageFactor` | `number \| undefined` | Optional | Leverage factor. |
| `dividendYield` | `number \| undefined` | Optional | Dividend yield. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtfProfileData } from 'finnhub-apilib';

const etfProfileData: EtfProfileData = {
  name: 'name6',
  assetClass: 'assetClass8',
  investmentSegment: 'investmentSegment8',
  aum: 225.7,
  nav: 26.08,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

