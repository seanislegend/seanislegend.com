'use client';

import Link from 'next/link';
import useAnalytics from '@/hooks/useAnalytics';
import {getExternalUrl} from '@/utils/helpers';

interface Props {
    photo: Photo;
}

const CarouselExternalLink: React.FC<Props> = ({photo}) => {
    const {trackEvent} = useAnalytics();

    const handleClick = (category: string, url: string) => {
        trackEvent('Photo URL visited', {category, url});
    };

    if (!photo?.url) return null;

    return (
        <Link
            href={getExternalUrl(photo.url)}
            target="_blank"
            rel="noreferrer"
            onClick={() => handleClick('external url', photo?.url || '')}
            className="text-sm tracking-wide text-gray-500 decoration-2 underline-offset-2 hover:text-black hover:underline focus:outline-dotted focus:outline-2 focus:outline-offset-2 focus:outline-black"
        >
            <span>{photo.urlLabel || photo.url}</span>
        </Link>
    );
};

export default CarouselExternalLink;
