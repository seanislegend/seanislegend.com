'use client';

import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Container from '@/components/UI/Container';

const SiteHeader: React.FC<React.PropsWithChildren> = ({children}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={clsx(
                'sticky top-0 z-30 bg-[var(--bg)] transition-all duration-300 dark:bg-[var(--dark-bg)]',
                {
                    'shadow-[var(--accent)]/10 border-b-2 border-[var(--accent)] py-3 shadow-2xl':
                        isScrolled,
                    'py-6': !isScrolled
                }
            )}
        >
            <div className="relative z-30 flex justify-between px-4 md:px-8">
                <span
                    className={clsx(
                        'relative z-30 inline-flex flex-grow items-baseline gap-1.5 transition duration-100 ease-linear'
                    )}
                >
                    <span
                        className={clsx(
                            'transition duration-100 ease-linear group-hover:opacity-50'
                        )}
                    >
                        photography by
                    </span>{' '}
                    <Link aria-label="Home" className="group outline-none" href="/">
                        <Logo
                            className={`text-[var(--text)] transition-all duration-300 ease-in-out dark:text-[var(--dark-text)] ${
                                isScrolled ? 'h-8 w-8' : 'h-10 w-10'
                            }`}
                            size={isScrolled ? 'sm' : 'md'}
                        />
                    </Link>
                </span>
                {children}
            </div>
        </header>
    );
};

export default SiteHeader;
