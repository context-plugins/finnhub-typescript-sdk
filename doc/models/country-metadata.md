
# Country Metadata

*This model accepts additional fields of type unknown.*

## Structure

`CountryMetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | Country name |
| `code2` | `string \| undefined` | Optional | Alpha 2 code |
| `code3` | `string \| undefined` | Optional | Alpha 3 code |
| `codeNo` | `string \| undefined` | Optional | UN code |
| `currency` | `string \| undefined` | Optional | Currency name |
| `currencyCode` | `string \| undefined` | Optional | Currency code |
| `region` | `string \| undefined` | Optional | Region |
| `subRegion` | `string \| undefined` | Optional | Sub-Region |
| `rating` | `string \| undefined` | Optional | Moody's credit risk rating. |
| `defaultSpread` | `number \| undefined` | Optional | Default spread |
| `countryRiskPremium` | `number \| undefined` | Optional | Country risk premium |
| `equityRiskPremium` | `number \| undefined` | Optional | Equity risk premium |
| `logo` | `string \| undefined` | Optional | Flag image |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CountryMetadata } from 'finnhub-apilib';

const countryMetadata: CountryMetadata = {
  country: 'country0',
  code2: 'code28',
  code3: 'code36',
  codeNo: 'codeNo8',
  currency: 'currency6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

