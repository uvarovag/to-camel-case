import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
    {
        ignores: ['node_modules/**', 'dist/**'], // Игнорируем стандартные директории
    },
    {
        files: ['**/*.ts', '**/*.tsx'], // Применяем конфиг к TypeScript-файлам
        languageOptions: {
            parser: tsParser, // Указываем TypeScript-парсер
            ecmaVersion: 'latest', // Последняя версия ECMAScript
            sourceType: 'module', // Модули ECMAScript
        },
        plugins: {
            '@typescript-eslint': tsPlugin, // Подключаем плагин TypeScript
            prettier: prettierPlugin, // Подключаем плагин Prettier
        },
        rules: {
            ...tsPlugin.configs.recommended.rules, // Используем рекомендованные правила TypeScript
            ...prettierConfig.rules,
        },
    },
]
