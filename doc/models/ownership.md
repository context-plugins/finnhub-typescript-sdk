
# Ownership

*This model accepts additional fields of type unknown.*

## Structure

`Ownership`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Symbol of the company. |
| `ownership` | [`OwnershipInfo[] \| undefined`](../../doc/models/ownership-info.md) | Optional | Array of investors with detailed information about their holdings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Ownership } from 'finnhub-apilib';

const ownership: Ownership = {
  symbol: 'symbol6',
  ownership: [
    {
      name: 'name4',
      share: BigInt(114),
      change: BigInt(62),
      filingDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name4',
      share: BigInt(114),
      change: BigInt(62),
      filingDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      name: 'name4',
      share: BigInt(114),
      change: BigInt(62),
      filingDate: '2016-03-13T12:52:32.123Z',
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

