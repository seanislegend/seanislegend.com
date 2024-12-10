import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {GeistSans} from 'geist/font/sans';
import config from '@/utils/config';
import './globals.css';

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({children}: Props) => (
    <html
        lang="en"
        className={`flex min-h-full flex-grow flex-col antialiased ${GeistSans.className}`}
    >
        <body className="flex flex-grow flex-col sm:min-h-full">
            {children}
            {process.env.NODE_ENV !== 'development' && (
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

export default RootLayout;
