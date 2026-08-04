
# Earnings Calendar

*This model accepts additional fields of type unknown.*

## Structure

`EarningsCalendar`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `earningsCalendar` | [`EarningRelease[] \| undefined`](../../doc/models/earning-release.md) | Optional | Array of earnings release. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EarningsCalendar } from 'finnhub-apilib';

const earningsCalendar: EarningsCalendar = {
  earningsCalendar: [
    {
      symbol: 'symbol8',
      date: '2016-03-13T12:52:32.123Z',
      hour: 'hour0',
      year: BigInt(18),
      quarter: BigInt(194),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol8',
      date: '2016-03-13T12:52:32.123Z',
      hour: 'hour0',
      year: BigInt(18),
      quarter: BigInt(194),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol8',
      date: '2016-03-13T12:52:32.123Z',
      hour: 'hour0',
      year: BigInt(18),
      quarter: BigInt(194),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

