
# Investment Themes

*This model accepts additional fields of type unknown.*

## Structure

`InvestmentThemes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `theme` | `string \| undefined` | Optional | Investment theme |
| `data` | [`InvestmentThemePortfolio[] \| undefined`](../../doc/models/investment-theme-portfolio.md) | Optional | Investment theme portfolio. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InvestmentThemes } from 'finnhub-apilib';

const investmentThemes: InvestmentThemes = {
  theme: 'theme0',
  data: [
    {
      symbol: 'symbol2',
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

