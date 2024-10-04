import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
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

const RootLayout = async ({children}: {children: React.ReactNode}) => (
    <html
        lang="en"
        className={`flex flex-grow flex-col bg-sean-beige-50 text-sean-black antialiased md:min-h-full dark:bg-black ${titleFont.variable} ${bodyFont.variable}`}
    >
        <body className="sm:min-h-full">
            <SiteHeader />
            <main className="animate duration-500 ease-in fade-in">{children}</main>
            <SiteFooter />
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
