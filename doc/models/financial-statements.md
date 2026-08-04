
# Financial Statements

*This model accepts additional fields of type unknown.*

## Structure

`FinancialStatements`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `financials` | `unknown[] \| undefined` | Optional | An array of map of key, value pairs containing the data for each period. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FinancialStatements } from 'finnhub-apilib';

const financialStatements: FinancialStatements = {
  symbol: 'symbol2',
  financials: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

