
# Company Profile 2

*This model accepts additional fields of type unknown.*

## Structure

`CompanyProfile2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | Country of company's headquarter. |
| `currency` | `string \| undefined` | Optional | Currency used in company filings. |
| `exchange` | `string \| undefined` | Optional | Listed exchange. |
| `name` | `string \| undefined` | Optional | Company name. |
| `ticker` | `string \| undefined` | Optional | Company symbol/ticker as used on the listed exchange. |
| `ipo` | `string \| undefined` | Optional | IPO date. |
| `marketCapitalization` | `number \| undefined` | Optional | Market Capitalization. |
| `shareOutstanding` | `number \| undefined` | Optional | Number of oustanding shares. |
| `logo` | `string \| undefined` | Optional | Logo image. |
| `phone` | `string \| undefined` | Optional | Company phone number. |
| `weburl` | `string \| undefined` | Optional | Company website. |
| `finnhubIndustry` | `string \| undefined` | Optional | Finnhub industry classification. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CompanyProfile2 } from 'finnhub-apilib';

const companyProfile2: CompanyProfile2 = {
  country: 'country4',
  currency: 'currency0',
  exchange: 'exchange4',
  name: 'name0',
  ticker: 'ticker2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

