
# Visa Application

*This model accepts additional fields of type unknown.*

## Structure

`VisaApplication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `year` | `bigint \| undefined` | Optional | Year. |
| `quarter` | `bigint \| undefined` | Optional | Quarter. |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `caseNumber` | `string \| undefined` | Optional | Case number. |
| `caseStatus` | `string \| undefined` | Optional | Case status. |
| `receivedDate` | `string \| undefined` | Optional | Received date. |
| `visaClass` | `string \| undefined` | Optional | Visa class. |
| `jobTitle` | `string \| undefined` | Optional | Job Title. |
| `socCode` | `string \| undefined` | Optional | SOC Code. A list of SOC code can be found <a href="https://www.bls.gov/oes/current/oes_stru.htm" target="_blank">here</a>. |
| `fullTimePosition` | `string \| undefined` | Optional | Full-time position flag. |
| `beginDate` | `string \| undefined` | Optional | Job's start date. |
| `endDate` | `string \| undefined` | Optional | Job's end date. |
| `employerName` | `string \| undefined` | Optional | Company's name. |
| `worksiteAddress` | `string \| undefined` | Optional | Worksite address. |
| `worksiteCity` | `string \| undefined` | Optional | Worksite city. |
| `worksiteCounty` | `string \| undefined` | Optional | Worksite county. |
| `worksiteState` | `string \| undefined` | Optional | Worksite state. |
| `worksitePostalCode` | `string \| undefined` | Optional | Worksite postal code. |
| `wageRangeFrom` | `number \| undefined` | Optional | Wage range from. |
| `wageRangeTo` | `number \| undefined` | Optional | Wage range to. |
| `wageUnitOfPay` | `string \| undefined` | Optional | Wage unit of pay. |
| `wageLevel` | `string \| undefined` | Optional | Wage level. |
| `h1BDependent` | `string \| undefined` | Optional | H1B dependent flag. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { VisaApplication } from 'finnhub-apilib';

const visaApplication: VisaApplication = {
  year: BigInt(12),
  quarter: BigInt(92),
  symbol: 'symbol8',
  caseNumber: 'caseNumber2',
  caseStatus: 'caseStatus2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

