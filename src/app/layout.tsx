import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import config from '@/utils/config';
import './globals.css';

const titleFont = localFont({
    display: 'swap',
    src: '../../public/fonts/title.woff2',
    weight: '500',
    variable: '--font-title'
});
const bodyFont = localFont({
    display: 'swap',
    src: '../../public/fonts/body.woff2',
    variable: '--font-body'
});

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({children}: Props) => (
    <html
        lang="en"
        className={`flex flex-grow flex-col antialiased md:min-h-full ${titleFont.variable} ${bodyFont.variable}`}
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
    ...config.seo
};

export default RootLayout;
