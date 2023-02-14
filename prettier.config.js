const pluginSortImports = require('@trivago/prettier-plugin-sort-imports');
const pluginTailwindcss = require('prettier-plugin-tailwindcss');

//https://github.com/trivago/prettier-plugin-sort-imports/issues/117#issuecomment-1198805533

/**
 * @refs  https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1195411734
 */
/** @type {import("prettier").Parser}  */
const bothParser = {
    ...pluginSortImports.parsers.typescript,
    parse: pluginTailwindcss.parsers.typescript.parse
};

/** @type {import("prettier").Plugin}  */
const mixedPlugin = {
    parsers: {
        typescript: bothParser
    }
};

module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: false,
    importOrder: [
        '^react$',
        '^react',
        '^next',
        '<THIRD_PARTY_MODULES>',
        '^@/app/(.*)$',
        '^@/src/components/(.*)$',
        '^@/src/hooks/(.*)$',
        '^@/src/pages/(.*)$',
        '^@/src/types/(.*)$',
        '^@/src/utils/(.*)$',
        '^@./(.*)$'
    ],
    importOrderSortSpecifiers: true,
    printWidth: 100,
    proseWrap: 'preserve',
    requirePragma: false,
    plugins: [mixedPlugin],
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false
};
