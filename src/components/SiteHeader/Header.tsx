'use client';

import {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Logo from '@/components/Logo';

const SiteHeader: React.FC<React.PropsWithChildren> = ({children}) => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollThreshold = 50;
    const bufferZone = 10;

    const handleScroll = useCallback(() => {
        setIsScrolled(prevState => {
            const shouldBeScrolled = window.scrollY > scrollThreshold;

            if (shouldBeScrolled !== prevState) {
                if (shouldBeScrolled && window.scrollY > scrollThreshold + bufferZone) {
                    return true;
                } else if (!shouldBeScrolled && window.scrollY < scrollThreshold - bufferZone) {
                    return false;
                }
            }

            return prevState;
        });
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <header
            className={clsx(
                'sticky top-0 z-30 flex h-[var(--site-header-height)] items-center border-b-2 border-transparent bg-[var(--bg)] transition-all duration-300 dark:bg-[var(--dark-bg)]',
                {'h-[var(--site-header-height-scrolled)] !border-[var(--accent)]': isScrolled}
            )}
        >
            <div className="flex w-full items-center justify-between px-4 md:px-8">
                <span className="relative z-30">
                    <Link
                        aria-label="Home"
                        className={clsx(
                            'group relative flex items-center py-2 text-sm outline-none md:text-base',
                            {'pointer-events-none': pathname === '/'}
                        )}
                        href="/"
                    >
                        <span className="absolute bottom-0 left-0 top-0 flex translate-x-2 items-center gap-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 256 256">
                                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                            </svg>
                            <span>Go to homepage</span>
                        </span>
                        <span className="duration-300 ease-in-out group-hover:opacity-0 group-hover:duration-100">
                            photography by{' '}
                            <Logo className="text-[var(--text)] dark:text-[var(--dark-text)]" />
                        </span>
                    </Link>
                </span>
                {children}
            </div>
        </header>
    );
};

export default SiteHeader;
