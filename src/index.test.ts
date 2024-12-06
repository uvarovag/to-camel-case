import toCamelCase from './'

describe('toCamelCase', () => {
    test('converts space-separated words to camel case', () => {
        expect(toCamelCase('hello world')).toBe('helloWorld')
    })

    test('handles hyphen-separated words', () => {
        expect(toCamelCase('hello-world')).toBe('helloWorld')
    })

    test('handles underscore-separated words', () => {
        expect(toCamelCase('hello_world')).toBe('helloWorld')
    })

    test('handles mixed separators', () => {
        expect(toCamelCase('hello-world_test case')).toBe('helloWorldTestCase')
    })

    test('handles non-alphanumeric characters', () => {
        expect(toCamelCase('hello@world#test!')).toBe('helloWorldTest')
    })

    test('handles uppercase input', () => {
        expect(toCamelCase('HELLO WORLD')).toBe('helloWorld')
    })

    test('handles mixed case input', () => {
        expect(toCamelCase('Hello World')).toBe('helloWorld')
    })

    test('handles numbers in input', () => {
        expect(toCamelCase('hello 123 world')).toBe('hello123World')
    })

    test('handles single word input', () => {
        expect(toCamelCase('hello')).toBe('hello')
    })

    test('handles empty string input', () => {
        expect(toCamelCase('')).toBe('')
    })

    test('handles input with only separators', () => {
        expect(toCamelCase('---___')).toBe('')
    })

    test('handles Cyrillic characters', () => {
        expect(toCamelCase('привет мир')).toBe('приветМир')
    })

    test('handles mixed Latin and Cyrillic', () => {
        expect(toCamelCase('hello мир')).toBe('helloМир')
    })

    test('handles multiple spaces between words', () => {
        expect(toCamelCase('hello    world')).toBe('helloWorld')
    })

    test('handles input with no alphabetic characters', () => {
        expect(toCamelCase('123_456-789')).toBe('123456789')
    })
})
