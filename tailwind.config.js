/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/pages/**/*.{ts,tsx}'
    ],
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)']
            }
        }
    }
};
