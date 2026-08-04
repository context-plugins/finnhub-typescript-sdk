
# Dividends 2

*This model accepts additional fields of type unknown.*

## Structure

`Dividends2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol |
| `data` | [`Dividends2Info[] \| undefined`](../../doc/models/dividends-2-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Dividends2 } from 'finnhub-apilib';

const dividends2: Dividends2 = {
  symbol: 'symbol2',
  data: [
    {
      exDate: '2016-03-13T12:52:32.123Z',
      amount: 43.32,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      exDate: '2016-03-13T12:52:32.123Z',
      amount: 43.32,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      exDate: '2016-03-13T12:52:32.123Z',
      amount: 43.32,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

