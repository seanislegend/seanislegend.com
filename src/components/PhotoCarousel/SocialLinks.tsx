'use client';

import Link from 'next/link';
import {InstagramIcon} from '@/components/Icon';
import useAnalytics from '@/hooks/useAnalytics';
import {getExternalUrl} from '@/utils/helpers';

interface Props {
    photo: Photo;
}

const CarouselSocialLinks: React.FC<Props> = ({photo}) => {
    const {trackEvent} = useAnalytics();

    const getInstagramLabel = (): string | undefined => {
        if (photo.instagramLabel) {
            return photo.instagramLabel;
        } else if (photo.instagramUrl) {
            return photo.instagramUrl.split('/')?.[3] || '';
        }
    };

    const handleClick = (category: string, url: string) => {
        trackEvent('Photo URL visited', {category, url});
    };

    if (!photo?.instagramUrl) {
        return null;
    }

    return (
        <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:items-end sm:space-y-0 sm:space-x-2">
            {photo?.instagramUrl && (
                <div>
                    <Link
                        href={getExternalUrl(photo.instagramUrl)}
                        onClick={() => handleClick('instagram', photo?.instagramUrl || '')}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center space-x-1 align-top text-xs tracking-[0.5px] text-gray-500 decoration-2 underline-offset-2 outline-none transition duration-200 hover:text-black hover:underline dark:text-gray-600 dark:hover:text-white"
                    >
                        <InstagramIcon className="h-3 w-3 transition duration-200 ease-out" />
                        <span>{getInstagramLabel()}</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CarouselSocialLinks;
