'use client';

import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {usePathname} from 'next/navigation';
import {LeftArrowIcon} from '@/components/Icon';
import Logo from '@/components/Logo';
import PageHeaderTitlePreview from '@/components/SiteHeader/PageHeaderTitlePreview';
import useScrollStatus from '@/hooks/useScrollStatus';

const SiteHeader: React.FC<React.PropsWithChildren> = ({children}) => {
    const pathname = usePathname();
    const {isScrolled} = useScrollStatus();

    return (
        <header
            className={clsx(
                'bg-theme-bg h-site-header sticky top-0 z-50 flex items-center border-b-2 border-transparent px-4 transition-all duration-500 md:px-8 print:relative print:border-none',
                {'border-accent! h-site-header-scrolled': isScrolled}
            )}
            data-testid="site-header"
        >
            <div className="mx-auto flex w-full max-w-[110rem] items-center justify-between gap-8">
                <span className="relative z-30 flex flex-nowrap items-center gap-2">
                    <Link
                        aria-label="Home"
                        className={clsx(
                            'group relative inline-flex shrink-0 items-center py-2 text-sm outline-hidden md:text-base',
                            {'pointer-events-none': pathname === '/'}
                        )}
                        data-testid="site-header-logo"
                        href="/"
                    >
                        <span className="absolute top-0 bottom-0 left-0 flex translate-x-2 items-center gap-1 opacity-0 duration-300 ease-in-out sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
                            <LeftArrowIcon className="h-5 w-5 fill-current" />
                            <span>Go to homepage</span>
                        </span>
                        <span className="duration-500 ease-in-out sm:group-hover:translate-x-1 sm:group-hover:opacity-0 sm:group-hover:blur-xs sm:group-hover:duration-200">
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
