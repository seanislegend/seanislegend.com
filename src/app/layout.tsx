import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {GeistSans} from 'geist/font/sans';
import {ViewTransitions} from 'next-view-transitions';
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
                />
            </head>
            <body className="flex grow flex-col sm:min-h-full">
                {children}
                {process.env.NODE_ENV !== 'development' && (
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
