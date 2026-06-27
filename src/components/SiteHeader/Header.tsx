'use client';

import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {usePathname} from 'next/navigation';
import {LeftArrowIcon} from '@/components/Icon/LeftArrow';
import Logo from '@/components/Logo';
import PageHeaderTitlePreview from '@/components/SiteHeader/PageHeaderTitlePreview';
import useMounted from '@/hooks/useMounted';
import useScrollStatus from '@/hooks/useScrollStatus';

const SiteHeader: React.FC<React.PropsWithChildren> = ({children}) => {
    const pathname = usePathname();
    const mounted = useMounted();
    const {isScrolled} = useScrollStatus();
    // `/` is rewritten to `/home`, so usePathname differs between the prerender and
    // the browser. Gate on mount so server and first client render agree.
    const isHome = mounted && (pathname === '/' || pathname === '/home');

    return (
        <header
            className={clsx(
                'bg-theme-bg h-site-header sticky top-0 z-50 flex items-center border-b-2 border-transparent px-4 transition-all duration-300 md:px-8 print:relative print:border-none',
                {'border-accent! h-site-header-scrolled': isScrolled}
            )}
            data-testid="site-header"
        >
            <div className="mx-auto flex w-full max-w-440 items-center justify-between gap-8">
                <span className="relative z-30 flex flex-nowrap items-center">
                    <Link
                        aria-label="Home"
                        className={clsx(
                            'group relative inline-flex shrink-0 items-center py-2 text-sm outline-hidden md:text-base',
                            {'pointer-events-none': isHome}
                        )}
                        data-testid="site-header-logo"
                        href="/"
                    >
                        <span className="text-theme-text absolute top-0 bottom-0 left-0 flex translate-x-2 items-center gap-1 opacity-0 blur-xs transition-all duration-300 ease-in-out will-change-transform sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:blur-none">
                            <LeftArrowIcon className="h-5 w-5 fill-current" />
                            <span>Go to homepage</span>
                        </span>
                        <span className="text-theme-text transition-all duration-300 ease-in-out will-change-transform sm:group-hover:translate-x-1 sm:group-hover:opacity-0 sm:group-hover:blur-xs">
                            photography by <Logo className="text-theme-text" />
                        </span>
                    </Link>
                    <PageHeaderTitlePreview />
                </span>
                {children}
            </div>
        </header>
    );
};

export default SiteHeader;
