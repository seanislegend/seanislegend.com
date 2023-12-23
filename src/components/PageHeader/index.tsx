'use client';

import {ReactNode} from 'react';
import Link from 'next/link';
import Markdown from '@/components/Markdown';
import {getExternalUrl} from '@/utils/helpers';
import {motion} from 'framer-motion';

export interface Props {
    backUrl?: string;
    children?: ReactNode;
    ctaLabel?: string;
    ctaUrl?: string;
    description?: string | null;
    title: string;
}

const PageHeader: React.FC<Props> = ({
    backUrl,
    children,
    ctaLabel,
    ctaUrl,
    description,
    title
}: Props) => (
    <div className="py-5 sm:pb-8" id="hero">
        <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0}}
            transition={{type: 'spring', duration: 1.5, velocity: 1}}
        >
            {backUrl ? (
                <Link
                    href={backUrl}
                    className="group space-x-2 focus:outline-dotted focus:outline-2 focus:outline-offset-2 focus:outline-black sm:inline-flex sm:items-baseline"
                >
                    <h1 className="max-w-4xl space-x-2 break-normal font-serif text-xl text-black underline-offset-4 group-hover:underline dark:text-white sm:text-2xl md:max-w-4xl md:text-3xl">
                        <span>{title}</span>
                    </h1>
                </Link>
            ) : (
                <h1 className="max-w-4xl space-x-2 break-normal font-serif text-2xl text-black underline-offset-4 group-hover:underline dark:text-white md:max-w-4xl md:text-3xl">
                    <span>{title}</span>
                </h1>
            )}
        </motion.div>
        {(children || description || ctaUrl) && (
            <motion.div
                className="mt-4 md:mt-8"
                key={description || children?.toString()}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 10}}
                transition={{type: 'spring', delay: 0.1, duration: 1.5, velocity: 1}}
            >
                {description && (
                    <Markdown className="prose-sm max-w-2xl leading-relaxed tracking-wide prose-p:text-gray-500 dark:prose-invert dark:prose-p:text-gray-400 lg:max-w-4xl lg:prose-base lg:prose-p:leading-relaxed lg:prose-p:tracking-wide">
                        {description}
                    </Markdown>
                )}
                {ctaLabel && ctaUrl && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-gray-100 px-5 py-3 text-[10px] uppercase tracking-[0.5px] text-gray-700 underline-offset-4 transition duration-200 ease-out hover:bg-gray-200 hover:underline dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 md:text-xs md:font-semibold md:tracking-[1px]"
                        href={getExternalUrl(ctaUrl)}
                    >
                        {ctaLabel}
                    </a>
                )}
                {children && children}
            </motion.div>
        )}
    </div>
);

export default PageHeader;
