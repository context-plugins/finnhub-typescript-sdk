
# Insider Sentiments Data

*This model accepts additional fields of type unknown.*

## Structure

`InsiderSentimentsData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `year` | `bigint \| undefined` | Optional | Year. |
| `month` | `bigint \| undefined` | Optional | Month. |
| `change` | `bigint \| undefined` | Optional | Net buying/selling from all insiders' transactions. |
| `mspr` | `number \| undefined` | Optional | Monthly share purchase ratio. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InsiderSentimentsData } from 'finnhub-apilib';

const insiderSentimentsData: InsiderSentimentsData = {
  symbol: 'symbol8',
  year: BigInt(122),
  month: BigInt(90),
  change: BigInt(72),
  mspr: 87.92,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

