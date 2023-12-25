'use client';

import {PropsWithChildren, useEffect, useRef, useState} from 'react';
import {useWindowSize} from '@react-hook/window-size';
import clsx from 'clsx';

interface Props {
    activeIndex: number;
    direction: number;
    orientation: 'landscape' | 'portrait';
}

const PhotoCarouselImageContainer: React.FC<PropsWithChildren<Props>> = ({
    activeIndex,
    children,
    direction,
    orientation
}) => {
    const windowSize = useWindowSize();
    const $container = useRef<HTMLDivElement>(null);
    const [containerDimensions, setContainerDimensions] = useState<{
        height: number;
        width: number;
    }>({height: 0, width: 0});

    // we need to figure out how we will calculate the container dimensions. this is
    // to prevent the placeholder blur exceeding the actual image size
    const actualImageWidth =
        orientation === 'portrait'
            ? containerDimensions.width
            : (containerDimensions.height / 66.67) * 100;
    const isContainerWiderThanImage = containerDimensions.width > actualImageWidth;

    // when the window size changes we need to recalculate the container dimensions
    useEffect(() => {
        if ($container.current) {
            const {height, width} = $container.current.getBoundingClientRect();
            setContainerDimensions({height, width});
        }
    }, [windowSize]);

    return (
        <div ref={$container} className="relative flex w-full md:h-auto md:flex-grow">
            <div
                key={activeIndex}
                className={clsx(
                    'left-1/2 top-1/2 mx-auto h-full w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 animate-fadeIn md:absolute md:block',
                    {'opacity-1 relative': direction > 0, 'absolute opacity-0': direction < 0}
                )}
                style={
                    orientation === 'portrait'
                        ? {
                              height: '100%',
                              width: `${(containerDimensions.height / 100) * 66.67}px`
                          }
                        : {
                              height: `${(containerDimensions.width / 100) * 66.67}px`,
                              width: isContainerWiderThanImage ? `${actualImageWidth}px` : '100%'
                          }
                }
            >
                {children}
            </div>
        </div>
    );
};

export default PhotoCarouselImageContainer;
