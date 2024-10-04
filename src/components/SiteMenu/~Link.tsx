'use client';

import {useTransition} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {useSelectedLayoutSegments} from 'next/navigation';

const SiteMenuLink: React.FC<Link> = ({published, title, url}) => {
    const [collection] = useSelectedLayoutSegments();
    const [isPending, startTransition] = useTransition();
    // This ensures we capture nested pages, but also ensuring '/about' does not match
    // to, for example, '/about-town'.
    const isActive = url.includes(collection) && collection.length >= url.slice(0, 1).length;
    // A collection can be considered new if it's been published in the last 4 months.
    const isNew = published
        ? new Date(published).getTime() > new Date().setMonth(new Date().getMonth() - 4)
        : false;

    return (
        <Link
            href={url}
            className={clsx(
                'group flex items-center space-x-2 py-0.5 tracking-[0.5px] outline-none duration-200 ease-out',
                {'animate-pulse': isPending}
            )}
        >
            <span
                className={clsx('underline-offset-4 transition duration-200 hover:duration-500', {
                    'text-sean-black group-hover:underline group-focus:underline dark:hover:text-sean-beige-50':
                        !isActive,
                    'dark:text-beige-50 text-sean-black underline': isActive
                })}
            >
                {title}
            </span>
            {isNew && (
                <span
                    className={clsx(
                        'dark:bg-beige-50 rounded-xl bg-black px-1.5 py-1 text-[9px] uppercase leading-[1.2] tracking-[1px] sm:leading-none md:font-semibold',
                        {
                            'group-hover:text-beige-50 dark:text-beige-50 bg-opacity-10 text-sean-black transition duration-200 ease-in-out group-hover:bg-opacity-100 dark:bg-opacity-20 dark:group-hover:text-sean-black':
                                !isActive,
                            'text-beige-50 dark:text-sean-black': isActive
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
