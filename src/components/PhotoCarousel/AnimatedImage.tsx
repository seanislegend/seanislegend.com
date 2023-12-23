'use client';

import CarouselImage from './Image';
import {AnimatePresence, motion} from 'framer-motion';

interface Props {
    activeIndex: number;
    containerWidth: number;
    direction: number;
    photo: Photo;
}

const AnimatedImage: React.FC<Props> = ({activeIndex, containerWidth, direction, photo}) => {
    const containerAnimationWidth = containerWidth / 2;

    return (
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
                animate="center"
                className="mx-auto w-full flex-shrink-0 sm:h-full md:absolute md:block"
                custom={direction}
                exit="exit"
                key={activeIndex}
                initial="enter"
                transition={{
                    duration: 1.5,
                    damping: 20,
                    type: 'spring',
                    velocity: 1
                }}
                variants={{
                    enter: (direction: number) => ({
                        opacity: 0,
                        position: 'absolute',
                        x: direction > 0 ? containerAnimationWidth : -containerAnimationWidth
                    }),
                    center: {
                        opacity: 1,
                        position: 'relative',
                        x: 0
                    },
                    exit: (direction: number) => ({
                        opacity: 0,
                        position: 'absolute',
                        x: direction > 0 ? -containerAnimationWidth : containerAnimationWidth
                    })
                }}
            >
                <CarouselImage isActive={true} {...photo} />
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedImage;
