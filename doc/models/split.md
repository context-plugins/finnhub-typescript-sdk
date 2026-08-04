
# Split

*This model accepts additional fields of type unknown.*

## Structure

`Split`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `date` | `string \| undefined` | Optional | Split date. |
| `fromFactor` | `number \| undefined` | Optional | From factor. |
| `toFactor` | `number \| undefined` | Optional | To factor. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Split } from 'finnhub-apilib';

const split: Split = {
  symbol: 'symbol0',
  date: '2016-03-13T12:52:32.123Z',
  fromFactor: 66.4,
  toFactor: 120.12,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

