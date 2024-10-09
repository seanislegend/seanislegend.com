'use client';

import clsx from 'clsx';
import Link from 'next/link';
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
                'sticky top-0 z-30 flex h-[var(--site-header-height)] items-center border-b-2 border-transparent bg-[var(--bg)] transition-all duration-300',
                {'h-[var(--site-header-height-scrolled)] !border-[var(--accent)]': isScrolled}
            )}
        >
            <div className="flex w-full items-center justify-between gap-8 px-4 md:px-8">
                <span className="relative z-30 flex flex-nowrap items-center gap-2">
                    <Link
                        aria-label="Home"
                        className={clsx(
                            'group relative inline-flex flex-shrink-0 items-center py-2 text-sm outline-none md:text-base',
                            {'pointer-events-none': pathname === '/'}
                        )}
                        href="/"
                    >
                        <span className="absolute bottom-0 left-0 top-0 flex translate-x-2 items-center gap-1 opacity-0 duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                            <LeftArrowIcon className="h-5 w-5 fill-current" />
                            <span>Go to homepage</span>
                        </span>
                        <span className="duration-500 ease-in-out group-hover:translate-x-1 group-hover:opacity-0 group-hover:duration-200">
                            photography by <Logo className="text-[var(--text)]" />
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
