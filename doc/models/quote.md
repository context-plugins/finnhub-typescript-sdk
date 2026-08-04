
# Quote

*This model accepts additional fields of type unknown.*

## Structure

`Quote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `o` | `number \| undefined` | Optional | Open price of the day |
| `h` | `number \| undefined` | Optional | High price of the day |
| `l` | `number \| undefined` | Optional | Low price of the day |
| `c` | `number \| undefined` | Optional | Current price |
| `pc` | `number \| undefined` | Optional | Previous close price |
| `d` | `number \| undefined` | Optional | Change |
| `dp` | `number \| undefined` | Optional | Percent change |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Quote } from 'finnhub-apilib';

const quote: Quote = {
  o: 206.46,
  h: 100.46,
  l: 167.18,
  c: 72.88,
  pc: 195.64,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

