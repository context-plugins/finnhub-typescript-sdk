
# Earning Release

*This model accepts additional fields of type unknown.*

## Structure

`EarningRelease`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `date` | `string \| undefined` | Optional | Date. |
| `hour` | `string \| undefined` | Optional | Indicates whether the earnings is announced before market open(<code>bmo</code>), after market close(<code>amc</code>), or during market hour(<code>dmh</code>). |
| `year` | `bigint \| undefined` | Optional | Earnings year. |
| `quarter` | `bigint \| undefined` | Optional | Earnings quarter. |
| `epsEstimate` | `number \| undefined` | Optional | EPS estimate. |
| `epsActual` | `number \| undefined` | Optional | EPS actual. |
| `revenueEstimate` | `number \| undefined` | Optional | Revenue estimate including Finnhub's proprietary estimates. |
| `revenueActual` | `number \| undefined` | Optional | Revenue actual. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningRelease } from 'finnhub-apilib';

const earningRelease: EarningRelease = {
  symbol: 'symbol2',
  date: '2016-03-13T12:52:32.123Z',
  hour: 'hour6',
  year: BigInt(216),
  quarter: BigInt(136),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

