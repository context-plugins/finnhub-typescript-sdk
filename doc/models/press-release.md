
# Press Release

*This model accepts additional fields of type unknown.*

## Structure

`PressRelease`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `majorDevelopment` | [`Development[] \| undefined`](../../doc/models/development.md) | Optional | Array of major developments. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PressRelease } from 'finnhub-apilib';

const pressRelease: PressRelease = {
  symbol: 'symbol6',
  majorDevelopment: [
    {
      symbol: 'symbol2',
      datetime: 'datetime2',
      headline: 'headline0',
      description: 'description0',
      url: 'url4',
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

