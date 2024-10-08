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
                'bg-color': 'var(--theme-beige-50)',
                'text-color': 'var(--theme-black)',
                'accent-color': 'var(--theme-beige-100)',
                'button-bg-color': 'var(--theme-beige-100)',
                'button-text-color': 'var(--theme-black)',
                'button-bg-color-hover': 'var(--theme-beige-300)',
                'photo-border-color': 'var(--theme-black)',
                'link-text-color': 'var(--theme-beige-black)',
                'link-text-color-hover': 'var(--theme-black)',
                'overlay-bg-color': 'var(--theme-black)',
                'dark-bg-color': 'var(--theme-beige-950)',
                'dark-text-color': 'var(--theme-beige-50)',
                'dark-accent-color': 'var(--theme-beige-950)',
                'dark-button-bg-color': 'var(--theme-beige-950)',
                'dark-button-text-color': 'var(--theme-beige-50)',
                'dark-button-bg-color-hover': 'var(--theme-beige-900)',
                'dark-photo-border-color': 'var(--theme-beige-50)',
                'dark-link-text-color': 'var(--theme-beige-50)',
                'dark-link-text-color-hover': 'var(--theme-beige-100)',
                'dark-overlay-bg-color': 'var(--theme-beige-50)'
            },
            fontFamily: {
                sans: ['var(--font-body)'],
                'sans-semibold': ['var(--font-body-semibold)'],
                'sans-medium': ['var(--font-body-medium)'],
                serif: ['var(--font-title)']
            }
        }
    }
};
