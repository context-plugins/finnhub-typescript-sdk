
# Et Fs Holdings

*This model accepts additional fields of type unknown.*

## Structure

`EtFsHoldings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | ETF symbol. |
| `atDate` | `string \| undefined` | Optional | Holdings update date. |
| `numberOfHoldings` | `bigint \| undefined` | Optional | Number of holdings. |
| `holdings` | [`EtfHoldingsData[] \| undefined`](../../doc/models/etf-holdings-data.md) | Optional | Array of holdings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtFsHoldings } from 'finnhub-apilib';

const etFsHoldings: EtFsHoldings = {
  symbol: 'symbol0',
  atDate: '2016-03-13T12:52:32.123Z',
  numberOfHoldings: BigInt(80),
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
    },
    {
      symbol: 'symbol8',
      name: 'name6',
      isin: 'isin6',
      cusip: 'cusip4',
      share: 146.46,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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

