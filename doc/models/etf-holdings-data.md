
# Etf Holdings Data

*This model accepts additional fields of type unknown.*

## Structure

`EtfHoldingsData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol description |
| `name` | `string \| undefined` | Optional | Security name |
| `isin` | `string \| undefined` | Optional | ISIN. |
| `cusip` | `string \| undefined` | Optional | CUSIP. |
| `share` | `number \| undefined` | Optional | Number of shares owned by the ETF. |
| `percent` | `number \| undefined` | Optional | Portfolio's percent |
| `value` | `number \| undefined` | Optional | Market value |
| `assetType` | `string \| undefined` | Optional | Asset type. Can be 1 of the following values: <code>Equity</code>, <code>ETP</code>, <code>Fund</code>, <code>Bond</code>, <code>Other</code> or empty. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EtfHoldingsData } from 'finnhub-apilib';

const etfHoldingsData: EtfHoldingsData = {
  symbol: 'symbol4',
  name: 'name2',
  isin: 'isin2',
  cusip: 'cusip0',
  share: 191.32,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

