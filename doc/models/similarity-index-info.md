
# Similarity Index Info

*This model accepts additional fields of type unknown.*

## Structure

`SimilarityIndexInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cik` | `string \| undefined` | Optional | CIK. |
| `item1` | `number \| undefined` | Optional | Cosine similarity of Item 1 (Business). This number is only available for Annual reports. |
| `item1A` | `number \| undefined` | Optional | Cosine similarity of Item 1A (Risk Factors). This number is available for both Annual and Quarterly reports. |
| `item2` | `number \| undefined` | Optional | Cosine similarity of Item 2 (Management’s Discussion and Analysis of Financial Condition and Results of Operations). This number is only available for Quarterly reports. |
| `item7` | `number \| undefined` | Optional | Cosine similarity of Item 7 (Management’s Discussion and Analysis of Financial Condition and Results of Operations). This number is only available for Annual reports. |
| `item7A` | `number \| undefined` | Optional | Cosine similarity of Item 7A (Quantitative and Qualitative Disclosures About Market Risk). This number is only available for Annual reports. |
| `accessNumber` | `string \| undefined` | Optional | Access number. |
| `form` | `string \| undefined` | Optional | Form type. |
| `filedDate` | `string \| undefined` | Optional | Filed date <code>%Y-%m-%d %H:%M:%S</code>. |
| `acceptedDate` | `string \| undefined` | Optional | Accepted date <code>%Y-%m-%d %H:%M:%S</code>. |
| `reportUrl` | `string \| undefined` | Optional | Report's URL. |
| `filingUrl` | `string \| undefined` | Optional | Filing's URL. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SimilarityIndexInfo } from 'finnhub-apilib';

const similarityIndexInfo: SimilarityIndexInfo = {
  cik: 'cik6',
  item1: 90.12,
  item1A: 25.06,
  item2: 193.26,
  item7: 94.86,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

