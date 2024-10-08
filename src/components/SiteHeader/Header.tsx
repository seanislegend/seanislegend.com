'use client';

import {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@/components/Logo';

const SiteHeader: React.FC<React.PropsWithChildren> = ({children}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 0);
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
                'sticky top-0 z-30 border-b-2 border-transparent bg-[var(--bg)] py-6 transition-all duration-300 dark:bg-[var(--dark-bg)]',
                {'!border-[var(--accent)] !py-3': isScrolled}
            )}
        >
            <div className="relative z-30 flex justify-between px-4 md:px-8">
                <span className="relative z-30 inline-flex flex-grow items-baseline gap-1.5 transition duration-100 ease-linear">
                    <span className="transition duration-100 ease-linear group-hover:opacity-50">
                        photography by
                    </span>{' '}
                    <Link aria-label="Home" className="group outline-none" href="/">
                        <Logo className="text-[var(--text)] transition-all duration-300 ease-in-out dark:text-[var(--dark-text)]" />
                    </Link>
                </span>
                {children}
            </div>
        </header>
    );
};

export default SiteHeader;
