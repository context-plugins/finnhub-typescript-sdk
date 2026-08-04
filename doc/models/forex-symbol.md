
# Forex Symbol

*This model accepts additional fields of type unknown.*

## Structure

`ForexSymbol`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Symbol description |
| `displaySymbol` | `string \| undefined` | Optional | Display symbol name. |
| `symbol` | `string \| undefined` | Optional | Unique symbol used to identify this symbol used in <code>/forex/candle</code> endpoint. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ForexSymbol } from 'finnhub-apilib';

const forexSymbol: ForexSymbol = {
  description: 'description2',
  displaySymbol: 'displaySymbol4',
  symbol: 'symbol0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

