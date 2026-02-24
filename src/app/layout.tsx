import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {GeistSans} from 'geist/font/sans';
import {LazyMotion, domAnimation} from 'motion/react';
import {ViewTransitions} from 'next-view-transitions';
import Script from 'next/script';
import MotionConfigProvider from '@/components/MotionConfigProvider';
import config, {jsonLd} from '@/utils/config';
import './globals.css';

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({children}: Props) => (
    <ViewTransitions>
        <html
            lang="en"
            className={`flex min-h-full grow flex-col antialiased ${GeistSans.className}`}
        >
            <head>
                <link rel="preconnect" href="https://images.ctfassets.net" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
                />
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
                <LazyMotion features={domAnimation}>
                    <MotionConfigProvider>{children}</MotionConfigProvider>
                </LazyMotion>
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <Analytics />
                        <SpeedInsights />
                    </>
                )}
            </body>
        </html>
    </ViewTransitions>
);

export const metadata = {
    ...config.seo,
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || '')
};

export const revalidate = 86400;

export const dynamic = 'force-static';

export default RootLayout;
