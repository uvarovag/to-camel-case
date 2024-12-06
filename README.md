# to-camel-case

A lightweight utility function to convert strings into camelCase format. Supports both Latin and Cyrillic characters and works seamlessly with various delimiters such as spaces, underscores, hyphens, and more.

## Features

- Converts strings to camelCase.
- Handles multiple word delimiters (e.g., spaces, underscores, hyphens).
- Supports Latin and Cyrillic alphabets.
- Strips non-alphanumeric characters.
- Lightweight and dependency-free.

## Installation

```bash
npm install @uvarovag/to-camel-case
```

## Usage

```ts
import toCamelCase from '@uvarovag/to-camel-case'

const result: string = toCamelCase('hello-world-test')
console.log(result) // Outputs: 'приветМирТест'
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
