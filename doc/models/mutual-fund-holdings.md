
# Mutual Fund Holdings

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundHoldings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `atDate` | `string \| undefined` | Optional | Holdings update date. |
| `numberOfHoldings` | `bigint \| undefined` | Optional | Number of holdings. |
| `holdings` | [`MutualFundHoldingsData[] \| undefined`](../../doc/models/mutual-fund-holdings-data.md) | Optional | Array of holdings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundHoldings } from 'finnhub-apilib';

const mutualFundHoldings: MutualFundHoldings = {
  symbol: 'symbol4',
  atDate: '2016-03-13T12:52:32.123Z',
  numberOfHoldings: BigInt(4),
  holdings: [
    {
      symbol: 'symbol8',
      name: 'name6',
      isin: 'isin6',
      cusip: 'cusip4',
      share: 146.46,
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

