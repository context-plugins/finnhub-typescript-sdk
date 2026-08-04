
# Development

*This model accepts additional fields of type unknown.*

## Structure

`Development`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `symbol` | `string \| undefined` | Optional | Company symbol. |
| `datetime` | `string \| undefined` | Optional | Published time in <code>YYYY-MM-DD HH:MM:SS</code> format. |
| `headline` | `string \| undefined` | Optional | Development headline. |
| `description` | `string \| undefined` | Optional | Development description. |
| `url` | `string \| undefined` | Optional | URL. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Development } from 'finnhub-apilib';

const development: Development = {
  symbol: 'symbol0',
  datetime: 'datetime0',
  headline: 'headline2',
  description: 'description8',
  url: 'url2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

