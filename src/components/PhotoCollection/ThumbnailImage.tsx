'use client';

import {useState} from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type ThumbnailPhoto = Pick<Photo['thumbnail'], 'height' | 'width' | 'url'>;
interface Props extends ThumbnailPhoto {
    loading?: 'eager' | 'lazy';
}

const ThumbnailImage: React.FC<Props> = ({height, loading = 'lazy', width, url}) => {
    const [hasLoaded, setHasLoaded] = useState(false);

    return (
        <span
            className={clsx(
                'block min-h-[100px] overflow-hidden bg-gray-100 transition duration-200 ease-in-out group-focus:outline-none group-focus:ring-4 group-focus:ring-black dark:bg-gray-900 dark:group-focus:ring-white',
                {'animate-pulse': !hasLoaded}
            )}
        >
            <Image
                alt=""
                className={clsx(
                    'opacity-0 transition duration-500 ease-in-out hover:duration-200 sm:group-hover:opacity-60',
                    {'opacity-100': hasLoaded}
                )}
                height={height}
                onLoadingComplete={() => setHasLoaded(true)}
                placeholder="empty"
                loading={loading}
                quality={75}
                sizes="(max-width: 240px) 100vw, (max-width: 360px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                src={url}
                width={width}
            />
        </span>
    );
};

export default ThumbnailImage;
