'use client';

import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Container from '@/components/UI/Container';

const SiteHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container asChild>
            <header
                className={clsx(
                    'top-2 flex justify-between rounded-lg bg-sean-beige transition-all duration-300 md:sticky md:z-20 dark:bg-black',
                    {
                        'border bg-opacity-80 py-3 backdrop-blur-md': isScrolled,
                        'py-6': !isScrolled
                    }
                )}
            >
                <span
                    className={clsx(
                        'inline-flex items-baseline gap-1.5 transition duration-100 ease-linear',
                        {'translate-x-[-110px]': isScrolled}
                    )}
                >
                    <span
                        className={clsx(
                            'transition duration-100 ease-linear group-hover:opacity-50',
                            {
                                'opacity-0': isScrolled
                            }
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
                <nav className="row flex items-center gap-4">
                    <Link href="/collections">Collections</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/links">Links</Link>
                </nav>
            </header>
        </Container>
    );
};

export default SiteHeader;
