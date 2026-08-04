
# Support Resistance

*This model accepts additional fields of type unknown.*

## Structure

`SupportResistance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `levels` | `number[] \| undefined` | Optional | Array of support and resistance levels. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SupportResistance } from 'finnhub-apilib';

const supportResistance: SupportResistance = {
  levels: [
    94.37,
    94.38,
    94.39
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

