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
                'sean-beige': {
                    50: '#faf7ef',
                    100: '#ece8df',
                    200: '#dfd8c9',
                    300: '#cabda7',
                    400: '#b49f83',
                    500: '#a4896b',
                    600: '#97795f',
                    700: '#7e6350',
                    800: '#675145',
                    900: '#554339',
                    950: '#2d231d'
                },
                'sean-orange': '#ff7d43'
            },
            fontFamily: {
                sans: ['var(--font-body)'],
                serif: ['var(--font-title)']
            }
        }
    }
};
