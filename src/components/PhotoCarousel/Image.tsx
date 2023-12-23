'use client';

import {useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Spinner from './Spinner';

interface Props extends Photo {
    isActive: boolean;
}

const CarouselImage: React.FC<Props> = ({fullSize, isActive, title}) => {
    const [hasLoaded, setHasLoaded] = useState(false);

    return (
        <div className="w-full bg-gray-100 md:bg-transparent dark:bg-gray-900">
            <Spinner hasLoaded={hasLoaded} isActive={isActive} />
            <Image
                alt={title}
                className={clsx(
                    'w-full opacity-0 transition ease-in-out md:absolute md:block md:h-full md:flex-shrink-0 md:object-contain md:object-center',
                    {
                        'absolute opacity-0 lg:block': !isActive,
                        'relative block opacity-100': hasLoaded && isActive
                    }
                )}
                height={fullSize.height}
                onLoad={() => setHasLoaded(true)}
                placeholder="empty"
                quality={75}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 90vw"
                src={fullSize.url}
                width={fullSize.width}
            />
        </div>
    );
};

export default CarouselImage;
