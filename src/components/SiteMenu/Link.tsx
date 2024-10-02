'use client';

import {useTransition} from 'react';
import clsx from 'clsx';
import {useAtom} from 'jotai';
import Link from 'next/link';
import {useSelectedLayoutSegments} from 'next/navigation';
import {isMenuOpenAtom} from '@/utils/store';

const SiteMenuLink: React.FC<Link> = ({published, title, url}) => {
    const [collection] = useSelectedLayoutSegments();
    const [isPending, startTransition] = useTransition();
    const [_, setIsMenuOpen] = useAtom(isMenuOpenAtom);
    // This ensures we capture nested pages, but also ensuring '/about' does not match
    // to, for example, '/about-town'.
    const isActive = url.includes(collection) && collection.length >= url.slice(0, 1).length;
    // A collection can be considered new if it's been published in the last 4 months.
    const isNew = published
        ? new Date(published).getTime() > new Date().setMonth(new Date().getMonth() - 4)
        : false;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Adding a delay to the menu closing to prevent 'flickering' between
        // the menu closing and the new page loading.
        startTransition(() => {
            setTimeout(() => setIsMenuOpen(false), 100);
        });
    };

    return (
        <Link
            href={url}
            className={clsx(
                'group flex items-center space-x-2 py-0.5 text-sm tracking-[0.5px] outline-none duration-200 ease-out',
                {'animate-pulse': isPending}
            )}
            onClick={handleClick}
        >
            <span
                className={clsx('underline-offset-4 transition duration-200 hover:duration-500', {
                    'text-gray-500 group-hover:text-sean-black group-hover:underline group-focus:text-sean-black  group-focus:underline dark:hover:text-white dark:group-hover:text-white dark:group-focus:text-white':
                        !isActive,
                    'text-sean-black underline dark:text-white': isActive
                })}
            >
                {title}
            </span>
            {isNew && (
                <span
                    className={clsx(
                        'rounded-xl bg-black px-1.5 py-1 text-[9px] uppercase leading-[1.2] tracking-[1px] sm:leading-none md:font-semibold dark:bg-white',
                        {
                            'bg-opacity-10 text-sean-black transition duration-200 ease-in-out group-hover:bg-opacity-100 group-hover:text-white dark:bg-opacity-20 dark:text-white dark:group-hover:text-sean-black':
                                !isActive,
                            'text-white dark:text-sean-black': isActive
                        }
                    )}
                >
                    New
                </span>
            )}
        </Link>
    );
};

export default SiteMenuLink;
