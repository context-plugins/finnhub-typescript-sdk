
# Institutional Portfolio Info

*This model accepts additional fields of type unknown.*

## Structure

`InstitutionalPortfolioInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `cusip` | `string \| undefined` | Optional | CUSIP. |
| `name` | `string \| undefined` | Optional | Position's name. |
| `putCall` | `string \| undefined` | Optional | <code>put</code> or <code>call</code> for options. |
| `change` | `number \| undefined` | Optional | Number of shares change. |
| `noVoting` | `number \| undefined` | Optional | Number of shares with no voting rights. |
| `percentage` | `number \| undefined` | Optional | Percentage of portfolio. |
| `share` | `number \| undefined` | Optional | Number of shares. |
| `sharedVoting` | `number \| undefined` | Optional | Number of shares with shared voting rights. |
| `soleVoting` | `number \| undefined` | Optional | Number of shares with sole voting rights. |
| `value` | `number \| undefined` | Optional | Position value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstitutionalPortfolioInfo } from 'finnhub-apilib';

const institutionalPortfolioInfo: InstitutionalPortfolioInfo = {
  symbol: 'symbol6',
  cusip: 'cusip0',
  name: 'name2',
  putCall: 'putCall2',
  change: 60.96,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

