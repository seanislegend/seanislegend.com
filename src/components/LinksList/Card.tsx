'use client';

import Markdown from '@/components/Markdown';
import useAnalytics from '@/hooks/useAnalytics';
import {getExternalUrl} from '@/utils/helpers';
import formatRelative from 'date-fns/formatRelative';

interface Props {
    published?: string;
    text?: string;
    title?: string;
    url?: string;
}

const LinkCard: React.FC<Props> = ({published, text, title, url}) => {
    const {trackEvent} = useAnalytics();

    const handleClick = () => trackEvent(`Links list`, {url});

    return (
        <div className="flex items-start space-x-12 py-6">
            <div className="flex-grow">
                {title && url && (
                    <a
                        onClick={handleClick}
                        href={getExternalUrl(url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <h2 className="underline-2 font-serif text-lg leading-snug text-black underline-offset-2 group-hover:underline dark:text-white sm:text-xl">
                            {title}
                        </h2>
                    </a>
                )}
                {text && (
                    <Markdown className="prose-sm mt-2 max-w-2xl leading-relaxed tracking-wide prose-p:text-gray-500 dark:prose-invert dark:prose-p:text-gray-400 md:prose-base md:prose-p:leading-relaxed md:prose-p:tracking-wide lg:max-w-3xl">
                        {text}
                    </Markdown>
                )}
                {published && (
                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-600">
                        {formatRelative(new Date(published), new Date())}
                    </p>
                )}
            </div>
            {url && (
                <a
                    onClick={handleClick}
                    href={getExternalUrl(url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-100 px-5 py-3 text-[10px] uppercase text-gray-700 underline-offset-4 transition duration-200 ease-in-out hover:bg-gray-200 hover:underline dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 md:text-xs md:font-semibold md:tracking-[1px]"
                >
                    Visit
                </a>
            )}
        </div>
    );
};

export default LinkCard;
