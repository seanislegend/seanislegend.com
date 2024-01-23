const config = {
    seo: {
        title: {
            default: 'Beer, street, travel photography by Sean McEmerson',
            template: '%s – photography by Sean McEmerson'
        },
        description:
            'I am a London-based photographer specialising in capturing the stories of UK beer, breweries and the people behind them. My photography also focuses on the beauty of people, everyday life and my travel experiences.',
        canonical: 'https://www.seanislegend.com',
        openGraph: {
            images: [
                {
                    alt: '',
                    height: 630,
                    url: 'https://www.seanislegend.com/images/og.jpg',
                    width: 1200
                }
            ],
            locale: 'en_GB',
            siteName: 'seanislegend Photography',
            type: 'website',
            url: 'https://www.seanislegend.com'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@seanislegend',
            image: 'https://www.seanislegend.com/images/og.jpg',
            site: '@seanislegend',
            title: 'Beer, street, travel photography by Sean McEmerson'
        },
        icons: {
            shortcut: '/images/favicon-32x32.png'
        }
    }
};

export default config;
