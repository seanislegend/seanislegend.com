const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/pages/**/*.{ts,tsx}'
    ],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {
            fontFamily: {
                sans: ['NeueMontreal-Regular', ...defaultTheme.fontFamily.sans],
                serif: ['PPEiko', ...defaultTheme.fontFamily.serif]
            }
        }
    }
};
