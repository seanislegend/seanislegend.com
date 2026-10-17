import {ViewTransition} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {GeistSans} from 'geist/font/sans';
import {LazyMotion, domAnimation} from 'motion/react';
import Script from 'next/script';
import MotionConfigProvider from '@/components/MotionConfigProvider';
import config, {jsonLd} from '@/utils/config';
import {jsonLdScriptProps} from '@/utils/helpers';
import './globals.css';

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({children}: Props) => (
    <html
        className={`flex min-h-full grow flex-col antialiased ${GeistSans.className}`}
        data-scroll-behavior="smooth"
        lang="en"
    >
        <head>
            <link rel="preconnect" href="https://images.ctfassets.net" />
            <script {...jsonLdScriptProps(jsonLd)} />
        </head>
        <body className="flex grow flex-col sm:min-h-full">
            {process.env.GOOGLE_ADVERTISING_ID && (
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ADVERTISING_ID}`}
                    strategy="afterInteractive"
                />
            )}
            {process.env.GOOGLE_ADVERTISING_ID && (
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GOOGLE_ADVERTISING_ID}');
                    `}
                </Script>
            )}
            <a
                className="text-beige-50 sr-only z-100 rounded-xs bg-black px-3 py-2 font-medium focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
                href="#main"
            >
                Skip to content
            </a>
            <LazyMotion features={domAnimation}>
                <MotionConfigProvider>
                    <ViewTransition>{children}</ViewTransition>
                </MotionConfigProvider>
            </LazyMotion>
            {process.env.NODE_ENV === 'production' && (
                <>
                    <Analytics />
                    <SpeedInsights />
                </>
            )}
        </body>
    </html>
);

export const metadata = {
    ...config.seo,
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || '')
};

// the page background stays light in both schemes; dark mode only cools the palette
export const viewport = {
    colorScheme: 'light',
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: '#faf7ef'},
        {media: '(prefers-color-scheme: dark)', color: '#f5f6f6'}
    ]
};

export default RootLayout;
