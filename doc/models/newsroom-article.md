
# Newsroom Article

*This model accepts additional fields of type unknown.*

## Structure

`NewsroomArticle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atDate` | `string \| undefined` | Optional | Published time in <code>YYYY-MM-DD HH:MM:SS</code> format (EST timezone). |
| `title` | `string \| undefined` | Optional | Title. |
| `fullText` | `string \| undefined` | Optional | URL to download the full text data. |
| `url` | `string \| undefined` | Optional | Original URL. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NewsroomArticle } from 'finnhub-apilib';

const newsroomArticle: NewsroomArticle = {
  atDate: 'atDate2',
  title: 'title2',
  fullText: 'fullText4',
  url: 'url0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

