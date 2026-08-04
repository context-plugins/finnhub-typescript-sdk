
# Company Profile

*This model accepts additional fields of type unknown.*

## Structure

`CompanyProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alias` | `string[] \| undefined` | Optional | Company name alias. |
| `address` | `string \| undefined` | Optional | Address of company's headquarter. |
| `city` | `string \| undefined` | Optional | City of company's headquarter. |
| `country` | `string \| undefined` | Optional | Country of company's headquarter. |
| `currency` | `string \| undefined` | Optional | Currency used in company filings and financials. |
| `estimateCurrency` | `string \| undefined` | Optional | Currency used in Estimates data. |
| `marketCapCurrency` | `string \| undefined` | Optional | Currency used in market capitalization. |
| `cusip` | `string \| undefined` | Optional | CUSIP number. |
| `sedol` | `string \| undefined` | Optional | Sedol number. |
| `description` | `string \| undefined` | Optional | Company business summary. |
| `exchange` | `string \| undefined` | Optional | Listed exchange. |
| `ggroup` | `string \| undefined` | Optional | Industry group. |
| `gind` | `string \| undefined` | Optional | Industry. |
| `gsector` | `string \| undefined` | Optional | Sector. |
| `gsubind` | `string \| undefined` | Optional | Sub-industry. |
| `isin` | `string \| undefined` | Optional | ISIN number. |
| `lei` | `string \| undefined` | Optional | LEI number. |
| `irUrl` | `string \| undefined` | Optional | Investor relations website. |
| `naicsNationalIndustry` | `string \| undefined` | Optional | NAICS national industry. |
| `naics` | `string \| undefined` | Optional | NAICS industry. |
| `naicsSector` | `string \| undefined` | Optional | NAICS sector. |
| `naicsSubsector` | `string \| undefined` | Optional | NAICS subsector. |
| `name` | `string \| undefined` | Optional | Company name. |
| `phone` | `string \| undefined` | Optional | Company phone number. |
| `state` | `string \| undefined` | Optional | State of company's headquarter. |
| `ticker` | `string \| undefined` | Optional | Company symbol/ticker as used on the listed exchange. |
| `weburl` | `string \| undefined` | Optional | Company website. |
| `ipo` | `string \| undefined` | Optional | IPO date. |
| `marketCapitalization` | `number \| undefined` | Optional | Market Capitalization. |
| `shareOutstanding` | `number \| undefined` | Optional | Number of oustanding shares. |
| `employeeTotal` | `number \| undefined` | Optional | Number of employee. |
| `logo` | `string \| undefined` | Optional | Logo image. |
| `finnhubIndustry` | `string \| undefined` | Optional | Finnhub industry classification. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyProfile } from 'finnhub-apilib';

const companyProfile: CompanyProfile = {
  alias: [
    'alias4',
    'alias5',
    'alias6'
  ],
  address: 'address2',
  city: 'city6',
  country: 'country0',
  currency: 'currency6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

