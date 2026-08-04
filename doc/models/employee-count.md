
# Employee Count

*This model accepts additional fields of type unknown.*

## Structure

`EmployeeCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `atDate` | `string \| undefined` | Optional | Date of the reading |
| `employee` | `number \| undefined` | Optional | Value |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EmployeeCount } from 'finnhub-apilib';

const employeeCount: EmployeeCount = {
  atDate: 'atDate2',
  employee: 229.24,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

