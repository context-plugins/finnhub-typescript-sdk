
# Investment Theme Portfolio

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentThemePortfolio`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InvestmentThemePortfolio } from 'finnhub-apilib';

const investmentThemePortfolio: InvestmentThemePortfolio = {
  symbol: 'symbol8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

