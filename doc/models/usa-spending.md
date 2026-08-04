
# Usa Spending

*This model accepts additional fields of type unknown.*

## Structure

`UsaSpending`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `recipientName` | `string \| undefined` | Optional | Company's name. |
| `recipientParentName` | `string \| undefined` | Optional | Company's name. |
| `awardDescription` | `string \| undefined` | Optional | Description. |
| `country` | `string \| undefined` | Optional | Recipient's country. |
| `actionDate` | `string \| undefined` | Optional | Period. |
| `totalValue` | `number \| undefined` | Optional | Income reported by lobbying firms. |
| `performanceStartDate` | `string \| undefined` | Optional | Performance start date. |
| `performanceEndDate` | `string \| undefined` | Optional | Performance end date. |
| `awardingAgencyName` | `string \| undefined` | Optional | Award agency. |
| `awardingSubAgencyName` | `string \| undefined` | Optional | Award sub-agency. |
| `awardingOfficeName` | `string \| undefined` | Optional | Award office name. |
| `performanceCountry` | `string \| undefined` | Optional | Performance country. |
| `performanceCity` | `string \| undefined` | Optional | Performance city. |
| `performanceCounty` | `string \| undefined` | Optional | Performance county. |
| `performanceState` | `string \| undefined` | Optional | Performance state. |
| `performanceZipCode` | `string \| undefined` | Optional | Performance zip code. |
| `performanceCongressionalDistrict` | `string \| undefined` | Optional | Performance congressional district. |
| `naicsCode` | `string \| undefined` | Optional | NAICS code. |
| `permalink` | `string \| undefined` | Optional | Permalink. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsaSpending } from 'finnhub-apilib';

const usaSpending: UsaSpending = {
  symbol: 'symbol2',
  recipientName: 'recipientName0',
  recipientParentName: 'recipientParentName8',
  awardDescription: 'awardDescription4',
  country: 'country0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

