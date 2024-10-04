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
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={clsx(
                'top-0 bg-sean-beige-50 transition-all duration-300 md:sticky md:z-30 dark:bg-black',
                {
                    'border-b-2 border-sean-beige-100 py-3 shadow-2xl shadow-sean-beige-800/10':
                        isScrolled,
                    'py-6': !isScrolled
                }
            )}
        >
            <Container className="relative z-30 flex justify-between">
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
                            className={`text-sean-black transition-all duration-300 ease-in-out dark:text-white ${
                                isScrolled ? 'h-8 w-8' : 'h-10 w-10'
                            }`}
                            size={isScrolled ? 'sm' : 'md'}
                        />
                    </Link>
                </span>
                {children}
            </Container>
        </header>
    );
};

export default SiteHeader;
