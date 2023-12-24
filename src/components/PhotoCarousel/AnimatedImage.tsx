import clsx from 'clsx';
import CarouselImage from './Image';

interface Props {
    activeIndex: number;
    containerWidth: number;
    direction: number;
    photo: Photo;
}

const AnimatedImage: React.FC<Props> = ({activeIndex, containerWidth, direction, photo}) => (
    <div
        key={activeIndex}
        className={clsx(
            'mx-auto w-full flex-shrink-0 animate-fadeIn sm:h-full md:absolute md:block',
            {'opacity-1 relative': direction === 0, 'absolute opacity-0': direction !== 0}
        )}
    >
        <CarouselImage isActive={true} {...photo} />
    </div>
);

export default AnimatedImage;
