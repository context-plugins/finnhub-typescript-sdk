
# Market News

*This model accepts additional fields of type unknown.*

## Structure

`MarketNews`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | `string \| undefined` | Optional | News category. |
| `datetime` | `bigint \| undefined` | Optional | Published time in UNIX timestamp. |
| `headline` | `string \| undefined` | Optional | News headline. |
| `id` | `bigint \| undefined` | Optional | News ID. This value can be used for <code>minId</code> params to get the latest news only. |
| `image` | `string \| undefined` | Optional | Thumbnail image URL. |
| `related` | `string \| undefined` | Optional | Related stocks and companies mentioned in the article. |
| `source` | `string \| undefined` | Optional | News source. |
| `summary` | `string \| undefined` | Optional | News summary. |
| `url` | `string \| undefined` | Optional | URL of the original article. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MarketNews } from 'finnhub-apilib';

const marketNews: MarketNews = {
  category: 'category8',
  datetime: BigInt(4),
  headline: 'headline6',
  id: BigInt(174),
  image: 'image2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

