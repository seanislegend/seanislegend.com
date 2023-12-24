'use client';

import {ReactNode} from 'react';
import Link from 'next/link';
import Markdown from '@/components/Markdown';
import {getExternalUrl} from '@/utils/helpers';

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
        <div className="animate-fadeInUp">
            {backUrl ? (
                <Link
                    href={backUrl}
                    className="group space-x-2 focus:outline-dotted focus:outline-2 focus:outline-offset-2 focus:outline-black sm:inline-flex sm:items-baseline"
                >
                    <h1 className="max-w-4xl space-x-2 break-normal font-serif text-xl text-black underline-offset-4 group-hover:underline sm:text-2xl md:max-w-4xl md:text-3xl dark:text-white">
                        <span>{title}</span>
                    </h1>
                </Link>
            ) : (
                <h1 className="max-w-4xl space-x-2 break-normal font-serif text-2xl text-black underline-offset-4 group-hover:underline md:max-w-4xl md:text-3xl dark:text-white">
                    <span>{title}</span>
                </h1>
            )}
        </div>
        {(children || description || ctaUrl) && (
            <div
                className="mt-4 animate-fadeInUp opacity-0 animate-delay-75 md:mt-6"
                key={description || children?.toString()}
            >
                {description && (
                    <Markdown className="prose-sm max-w-2xl leading-relaxed tracking-wide lg:prose-base dark:prose-invert prose-p:text-gray-500 lg:max-w-4xl lg:prose-p:leading-relaxed lg:prose-p:tracking-wide dark:prose-p:text-gray-400">
                        {description}
                    </Markdown>
                )}
                {ctaLabel && ctaUrl && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-gray-100 px-5 py-3 text-[10px] uppercase tracking-[0.5px] text-gray-700 underline-offset-4 transition duration-200 ease-out hover:bg-gray-200 hover:underline md:text-xs md:font-semibold md:tracking-[1px] dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                        href={getExternalUrl(ctaUrl)}
                    >
                        {ctaLabel}
                    </a>
                )}
                {children && children}
            </div>
        )}
    </div>
);

export default PageHeader;
