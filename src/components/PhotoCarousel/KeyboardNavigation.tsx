'use client';

import {useEffect} from 'react';
import useKeypress from 'react-use-keypress';
import {useRouter} from 'next/navigation';

interface Props {
    collection: PhotoCollection;
    prevPhotoUrl: string;
    nextPhotoUrl: string;
}

const PhotoCarouselKeyboardNavigation: React.FC<Props> = ({
    collection,
    nextPhotoUrl,
    prevPhotoUrl
}) => {
    const router = useRouter();

    const navigateToNextPhoto = (nextDirection: 'left' | 'right') => {
        router.push(nextDirection === 'left' ? prevPhotoUrl : nextPhotoUrl, {scroll: false});
    };

    useKeypress('ArrowLeft', () => navigateToNextPhoto('left'));
    useKeypress('ArrowRight', () => navigateToNextPhoto('right'));
    useEffect(() => {
        router.prefetch(prevPhotoUrl);
        router.prefetch(nextPhotoUrl);
    }, [collection, nextPhotoUrl, prevPhotoUrl, router]);

    return null;
};

export default PhotoCarouselKeyboardNavigation;
