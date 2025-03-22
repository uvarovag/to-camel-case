export const toCamelCase = (str: string): string => {
    return str
        .toLowerCase()
        .split(/[^a-zA-Zа-яА-ЯёЁ0-9]+/)
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join('')
}
