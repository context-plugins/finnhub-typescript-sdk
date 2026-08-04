
# Mutual Fund Holdings Data

*This model accepts additional fields of type unknown.*

## Structure

`MutualFundHoldingsData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol description |
| `name` | `string \| undefined` | Optional | Security name |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `cusip` | `string \| undefined` | Optional | CUSIP. |
| `share` | `number \| undefined` | Optional | Number of shares. |
| `percent` | `number \| undefined` | Optional | Portfolio's percent |
| `value` | `number \| undefined` | Optional | Market value |
| `assetType` | `string \| undefined` | Optional | Asset type. Can be 1 of the following values: <code>Equity</code>, <code>ETP</code>, <code>Fund</code>, <code>Bond</code>, <code>Other</code> or empty. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MutualFundHoldingsData } from 'finnhub-apilib';

const mutualFundHoldingsData: MutualFundHoldingsData = {
  symbol: 'symbol8',
  name: 'name6',
  isin: 'isin4',
  cusip: 'cusip4',
  share: 208.36,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

