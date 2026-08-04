
# Tick Data

*This model accepts additional fields of type unknown.*

## Structure

`TickData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `s` | `string \| undefined` | Optional | Symbol. |
| `skip` | `bigint \| undefined` | Optional | Number of ticks skipped. |
| `count` | `bigint \| undefined` | Optional | Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned. |
| `total` | `bigint \| undefined` | Optional | Total number of ticks for that date. |
| `v` | `number[] \| undefined` | Optional | List of volume data. |
| `p` | `number[] \| undefined` | Optional | List of price data. |
| `t` | `bigint[] \| undefined` | Optional | List of timestamp in UNIX ms. |
| `x` | `string[] \| undefined` | Optional | List of venues/exchanges. A list of exchange codes can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing",>here</a> |
| `c` | `string[] \| undefined` | Optional | List of trade conditions. A comprehensive list of trade conditions code can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1PUxiSWPHSODbaTaoL2Vef6DgU-yFtlRGZf19oBb9Hp0/edit?usp=sharing">here</a> |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TickData } from 'finnhub-apilib';

const tickData: TickData = {
  s: 's8',
  skip: BigInt(240),
  count: BigInt(60),
  total: BigInt(10),
  v: [
    214.66
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

