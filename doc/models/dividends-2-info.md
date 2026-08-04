
# Dividends 2 Info

*This model accepts additional fields of type unknown.*

## Structure

`Dividends2Info`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exDate` | `string \| undefined` | Optional | Ex-Dividend date. |
| `amount` | `number \| undefined` | Optional | Amount in local currency. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Dividends2Info } from 'finnhub-apilib';

const dividends2Info: Dividends2Info = {
  exDate: '2016-03-13T12:52:32.123Z',
  amount: 180.78,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

