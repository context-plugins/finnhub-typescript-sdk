
# Ipo Event

*This model accepts additional fields of type unknown.*

## Structure

`IpoEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `date` | `string \| undefined` | Optional | IPO date. |
| `exchange` | `string \| undefined` | Optional | Exchange. |
| `name` | `string \| undefined` | Optional | Company's name. |
| `status` | `string \| undefined` | Optional | IPO status. Can take 1 of the following values: <code>expected</code>,<code>priced</code>,<code>withdrawn</code>,<code>filed</code> |
| `price` | `string \| undefined` | Optional | Projected price or price range. |
| `numberOfShares` | `number \| undefined` | Optional | Number of shares offered during the IPO. |
| `totalSharesValue` | `number \| undefined` | Optional | Total shares value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IpoEvent } from 'finnhub-apilib';

const ipoEvent: IpoEvent = {
  symbol: 'symbol6',
  date: '2016-03-13T12:52:32.123Z',
  exchange: 'exchange6',
  name: 'name2',
  status: 'status6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

