'use client';

import {memo, useEffect, useRef, useState} from 'react';
import useKeypress from 'react-use-keypress';
import {useWindowWidth} from '@react-hook/window-size';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import CarouselDetails from './Details';
import CarouselImage from './Image';
import CarouselMobilePagination from './MobilePagination';

const CarouselSwipeNavigation = dynamic(() => import('./SwipeNavigation'), {ssr: false});

interface Props {
    collection: PhotoCollection;
    photo: string;
}

const PhotoCarousel: React.FC<Props> = ({collection, photo}) => {
    const allPhotos = collection.photosCollection.items;
    const $container = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth();
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const defaultPhotoIndex = allPhotos.findIndex(item => item.slug === photo);
    const [direction, setDirection] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(defaultPhotoIndex);
    const activePhoto = allPhotos[activeIndex];
    const prevPhoto = allPhotos[activeIndex === 0 ? allPhotos.length - 1 : activeIndex - 1];
    const nextPhoto = allPhotos[activeIndex === allPhotos.length - 1 ? 0 : activeIndex + 1];

    const navigateToNextPhoto = (
        nextDirection: 'left' | 'right',
        type: 'hidden' | 'keyboard' | 'mobile' | 'swipe'
    ) => {
        const {items} = collection.photosCollection;
        let nextPhotoIndex = nextDirection === 'left' ? activeIndex - 1 : activeIndex + 1;

        if (nextPhotoIndex < 0) {
            nextPhotoIndex = items.length - 1;
        } else if (nextPhotoIndex > items.length - 1) {
            nextPhotoIndex = 0;
        }

        setActiveIndex(nextPhotoIndex);
        setDirection(nextDirection === 'left' ? -1 : 1);

        // This will be replaced once the app directory supports soft navigation for dynamic routes
        // The downsides to have a new refresh when navigating away are minimal compared to the
        // benefits of having a smooth transition between photos and the ability to have a shareable
        // link to the active photo
        // https://beta.nextjs.org/docs/routing/linking-and-navigating#soft-navigation
        window.history.replaceState({}, '', `/${collection.slug}/${items[nextPhotoIndex].slug}`);
        // Update the page title show it reflects in the tab
        document.title = document.title.replace(activePhoto.title, items[nextPhotoIndex].title);
    };

    useKeypress('ArrowLeft', () => {
        navigateToNextPhoto('left', 'keyboard');
    });

    useKeypress('ArrowRight', () => {
        navigateToNextPhoto('right', 'keyboard');
    });

    useEffect(() => {
        if ($container.current) {
            setContainerWidth($container.current.offsetWidth);
        }
    }, [windowWidth]);

    return (
        <div
            className="relative min-h-[200px] w-full overflow-hidden md:flex md:h-full md:max-h-[calc(100vh-2rem)] md:flex-col"
            ref={$container}
        >
            {containerWidth ? (
                <>
                    <div className="relative flex w-full overflow-hidden md:h-auto md:w-full md:flex-grow">
                        <div className="opacity-0">
                            <CarouselImage isActive={false} {...prevPhoto} />
                            <CarouselImage isActive={false} {...nextPhoto} />
                        </div>
                        <div className="relative flex w-full md:h-auto md:flex-grow">
                            <div
                                key={activeIndex}
                                className={clsx(
                                    'mx-auto w-full flex-shrink-0 animate-fadeIn sm:h-full md:absolute md:block',
                                    {
                                        'opacity-1 relative': direction > 0,
                                        'absolute opacity-0': direction < 0
                                    }
                                )}
                            >
                                <CarouselImage isActive={true} {...allPhotos[activeIndex]} />
                            </div>
                        </div>
                        <CarouselSwipeNavigation
                            handleNext={() => navigateToNextPhoto('right', 'swipe')}
                            handlePrevious={() => navigateToNextPhoto('left', 'swipe')}
                        />
                        <button
                            className="tap-transparent absolute left-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/left-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-none md:block"
                            onClick={() => navigateToNextPhoto('left', 'hidden')}
                            type="button"
                        />
                        <button
                            className="tap-transparent absolute right-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/right-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-none md:block"
                            onClick={() => navigateToNextPhoto('right', 'hidden')}
                            type="button"
                        />
                    </div>
                    <CarouselDetails
                        activeIndex={activeIndex}
                        activePhoto={activePhoto}
                        collection={collection}
                        total={allPhotos.length}
                    />
                    <CarouselMobilePagination
                        handleNext={() => navigateToNextPhoto('right', 'mobile')}
                        handlePrevious={() => navigateToNextPhoto('left', 'mobile')}
                    />
                </>
            ) : null}
        </div>
    );
};

export default memo(PhotoCarousel);
