
# Historical Nbbo

*This model accepts additional fields of type unknown.*

## Structure

`HistoricalNbbo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `s` | `string \| undefined` | Optional | Symbol. |
| `skip` | `bigint \| undefined` | Optional | Number of ticks skipped. |
| `count` | `bigint \| undefined` | Optional | Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned. |
| `total` | `bigint \| undefined` | Optional | Total number of ticks for that date. |
| `av` | `number[] \| undefined` | Optional | List of Ask volume data. |
| `a` | `number[] \| undefined` | Optional | List of Ask price data. |
| `ax` | `string[] \| undefined` | Optional | List of venues/exchanges - Ask price. A list of exchange codes can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing",>here</a> |
| `bv` | `number[] \| undefined` | Optional | List of Bid volume data. |
| `b` | `number[] \| undefined` | Optional | List of Bid price data. |
| `bx` | `string[] \| undefined` | Optional | List of venues/exchanges - Bid price. A list of exchange codes can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1Tj53M1svmr-hfEtbk6_NpVR1yAyGLMaH6ByYU6CG0ZY/edit?usp=sharing",>here</a> |
| `t` | `bigint[] \| undefined` | Optional | List of timestamp in UNIX ms. |
| `c` | `string[] \| undefined` | Optional | List of quote conditions. A comprehensive list of quote conditions code can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1iiA6e7Osdtai0oPMOUzgAIKXCsay89dFDmsegz6OpEg/edit?usp=sharing">here</a> |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HistoricalNbbo } from 'finnhub-apilib';

const historicalNbbo: HistoricalNbbo = {
  s: 's0',
  skip: BigInt(194),
  count: BigInt(14),
  total: BigInt(220),
  av: [
    51.6,
    51.61
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

