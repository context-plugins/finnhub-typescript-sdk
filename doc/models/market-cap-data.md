
# Market Cap Data

*This model accepts additional fields of type unknown.*

## Structure

`MarketCapData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atDate` | `string \| undefined` | Optional | Date of the reading |
| `marketCapitalization` | `number \| undefined` | Optional | Value |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MarketCapData } from 'finnhub-apilib';

const marketCapData: MarketCapData = {
  atDate: 'atDate4',
  marketCapitalization: 199.96,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

