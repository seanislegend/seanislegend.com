const config = {
    seo: {
        title: {
            default: 'Beer, street, travel photography by seanislegend',
            template: '%s | Beer, street, travel photography by seanislegend'
        },
        description:
            'I am a London-based photographer specialising in capturing the stories of UK beer, breweries and the people behind them. My photography also focuses on the beauty of people and everyday life as well as my travel experiences.',
        canonical: 'https://seanislegend.com',
        openGraph: {
            images: [
                {alt: '', height: 630, url: 'https://seanislegend.com/images/og.jpg', width: 1200}
            ],
            locale: 'en_GB',
            site_name: 'seanislegend Photography',
            type: 'website',
            url: 'https://seanislegend.com'
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@seanislegend',
            image: 'https://seanislegend.com/images/og.jpg',
            site: '@seanislegend',
            title: 'Beer, street, travel photography by seanislegend'
        },
        icons: {
            shortcut: '/images/favicon-32x32.png'
        }
    }
};

export default config;
