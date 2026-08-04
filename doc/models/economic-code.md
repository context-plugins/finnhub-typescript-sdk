
# Economic Code

*This model accepts additional fields of type unknown.*

## Structure

`EconomicCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | Finnhub economic code used to get historical data |
| `country` | `string \| undefined` | Optional | Country |
| `name` | `string \| undefined` | Optional | Indicator name |
| `unit` | `string \| undefined` | Optional | Unit |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EconomicCode } from 'finnhub-apilib';

const economicCode: EconomicCode = {
  code: 'code8',
  country: 'country4',
  name: 'name0',
  unit: 'unit8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

