
# Usa Spending Result

*This model accepts additional fields of type unknown.*

## Structure

`UsaSpendingResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol. |
| `data` | [`UsaSpending[] \| undefined`](../../doc/models/usa-spending.md) | Optional | Array of government's spending data points. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UsaSpendingResult } from 'finnhub-apilib';

const usaSpendingResult: UsaSpendingResult = {
  symbol: 'symbol2',
  data: [
    {
      symbol: 'symbol2',
      recipientName: 'recipientName4',
      recipientParentName: 'recipientParentName2',
      awardDescription: 'awardDescription8',
      country: 'country4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol2',
      recipientName: 'recipientName4',
      recipientParentName: 'recipientParentName2',
      awardDescription: 'awardDescription8',
      country: 'country4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      symbol: 'symbol2',
      recipientName: 'recipientName4',
      recipientParentName: 'recipientParentName2',
      awardDescription: 'awardDescription8',
      country: 'country4',
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

