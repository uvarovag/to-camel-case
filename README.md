# to-camel-case

![Bundle Size](https://img.shields.io/bundlephobia/minzip/@uvarovag/to-camel-case)
![tests](https://github.com/uvarovag/to-camel-case/actions/workflows/publish.yml/badge.svg)

Lightweight utility function to convert strings into camelCase format. Supports both Latin and Cyrillic characters and works seamlessly with various delimiters such as spaces, underscores, hyphens, and more.

## Installation

```bash
npm install @uvarovag/to-camel-case
```

## Usage

### ES Modules (ESM)

```js
import { toCamelCase } from '@uvarovag/to-camel-case'

const result = toCamelCase('hello-world-test')
console.log(result) // Outputs: 'helloWorldTest'
```

### CommonJS (CJS)

```js
const { toCamelCase } = require('@uvarovag/to-camel-case')

const result = toCamelCase('hello-world-test')
console.log(result) // Outputs: 'helloWorldTest'
```

## Examples

```ts
// Basic usage
console.log(toCamelCase('hello_world')) // Outputs: 'helloWorld'
console.log(toCamelCase('hello-world-test')) // Outputs: 'helloWorldTest'
console.log(toCamelCase('HELLO WORLD')) // Outputs: 'helloWorld'

// Supports Cyrillic
console.log(toCamelCase('привет мир')) // Outputs: 'приветМир'
console.log(toCamelCase('привет-мир_тест')) // Outputs: 'приветМирТест'

// Handles mixed characters
console.log(toCamelCase('hello мир test_case')) // Outputs: 'helloМирTestCase'

// Removes non-alphanumeric characters
console.log(toCamelCase('hello@world#test!')) // Outputs: 'helloWorldTest'

// Edge cases
console.log(toCamelCase('')) // Outputs: ''
console.log(toCamelCase('---___')) // Outputs: ''
console.log(toCamelCase('123_456-789')) // Outputs: '123456789'
```
