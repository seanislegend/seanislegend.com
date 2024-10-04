'use client';

import {memo, useEffect, useRef, useState} from 'react';
import useKeypress from 'react-use-keypress';
import {useWindowWidth} from '@react-hook/window-size';
import clsx from 'clsx';
import {useRouter} from 'next/navigation';
import Container from '@/components/UI/Container';
import CarouselDetails from './Details';
import CarouselImage from './Image';
import ImageContainer from './ImageContainer';
import CarouselMobilePagination from './MobilePagination';
import CarouselSwipeNavigation from './SwipeNavigation';

interface Props {
    canNavigate?: boolean;
    collection: PhotoCollection;
    hasDetails?: boolean;
    isModal?: boolean;
    photo: string;
}

const PhotoCarousel: React.FC<Props> = ({
    canNavigate,
    collection,
    hasDetails = true,
    isModal = false,
    photo
}) => {
    const router = useRouter();
    const $container = useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth();
    const [containerWidth, setContainerWidth] = useState<number>(0);

    const allPhotos = collection.photosCollection.items;
    const activeIndex = allPhotos.findIndex(item => item.slug === photo);
    const activePhoto = allPhotos[activeIndex];
    // get the next/previous photo so we can render them (hidden) for faster navigation
    const prevPhoto = allPhotos[activeIndex === 0 ? allPhotos.length - 1 : activeIndex - 1];
    const nextPhoto = allPhotos[activeIndex === allPhotos.length - 1 ? 0 : activeIndex + 1];
    const orientation =
        activePhoto?.fullSize?.width > activePhoto?.fullSize?.height ? 'landscape' : 'portrait';

    const navigateToNextPhoto = (nextDirection: 'left' | 'right') => {
        const {items} = collection.photosCollection;
        let nextPhotoIndex = nextDirection === 'left' ? activeIndex - 1 : activeIndex + 1;

        if (nextPhotoIndex < 0) {
            nextPhotoIndex = items.length - 1;
        } else if (nextPhotoIndex > items.length - 1) {
            nextPhotoIndex = 0;
        }

        router.push(`/${collection.slug}/${items[nextPhotoIndex].slug}`);
    };

    useKeypress('ArrowLeft', () => navigateToNextPhoto('left'));
    useKeypress('ArrowRight', () => navigateToNextPhoto('right'));

    useEffect(() => {
        if ($container.current) {
            setContainerWidth($container.current.offsetWidth);
        }
    }, [windowWidth, activeIndex]);

    useEffect(() => {
        // prefetch the next/previous photo
        router.prefetch(`/${collection.slug}/${prevPhoto.slug}`);
        router.prefetch(`/${collection.slug}/${nextPhoto.slug}`);
    }, [collection, nextPhoto, prevPhoto, router]);

    return (
        <Container asChild>
            <div
                className={clsx('relative w-full overflow-hidden md:flex md:flex-col', {
                    'max-h-[90vh] overflow-hidden': isModal
                })}
                ref={$container}
            >
                <div className="relative flex w-full flex-col overflow-hidden">
                    <CarouselImage isActive={true} isModal={isModal} {...allPhotos[activeIndex]} />
                    {canNavigate && (
                        <>
                            <div className="opacity-0">
                                <CarouselImage isActive={false} isModal={isModal} {...prevPhoto} />
                                <CarouselImage isActive={false} isModal={isModal} {...nextPhoto} />
                            </div>
                            <CarouselSwipeNavigation
                                handleNext={() => navigateToNextPhoto('right')}
                                handlePrevious={() => navigateToNextPhoto('left')}
                            />
                            <button
                                className="tap-transparent absolute left-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/left-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-none md:block"
                                onClick={() => navigateToNextPhoto('left')}
                                type="button"
                            />
                            <button
                                className="tap-transparent absolute right-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/right-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-none md:block"
                                onClick={() => navigateToNextPhoto('right')}
                                type="button"
                            />
                        </>
                    )}
                </div>
                {hasDetails && (
                    <CarouselDetails
                        activeIndex={activeIndex}
                        activePhoto={activePhoto}
                        collection={collection}
                        total={allPhotos.length}
                    />
                )}
                {canNavigate && (
                    <CarouselMobilePagination
                        handleBack={() => router.push(`/${collection.slug}#${activePhoto.slug}`)}
                        handleNext={() => navigateToNextPhoto('right')}
                        handlePrevious={() => navigateToNextPhoto('left')}
                    />
                )}
            </div>
        </Container>
    );
};

export default memo(PhotoCarousel);
