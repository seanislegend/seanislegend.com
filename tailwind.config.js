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
            colors: {
                'sean-black': '#2e2d29',
                'sean-beige': '#faf7ef',
                'sean-orange': '#ff7d43'
            },
            fontFamily: {
                sans: ['var(--font-body)'],
                serif: ['var(--font-title)']
            }
        }
    }
};
