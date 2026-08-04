
# Crypto Symbol

*This model accepts additional fields of type unknown.*

## Structure

`CryptoSymbol`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Symbol description |
| `displaySymbol` | `string \| undefined` | Optional | Display symbol name. |
| `symbol` | `string \| undefined` | Optional | Unique symbol used to identify this symbol used in <code>/crypto/candle</code> endpoint. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CryptoSymbol } from 'finnhub-apilib';

const cryptoSymbol: CryptoSymbol = {
  description: 'description2',
  displaySymbol: 'displaySymbol0',
  symbol: 'symbol4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

