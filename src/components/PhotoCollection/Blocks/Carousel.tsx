import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import {PhotoBlockComponent} from '@/types/photo-blocks';

const CarouselPhotoBLock: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [
        AutoScroll({speed: 1, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: true})
    ]);

    return (
        <div className="-mx-4 overflow-hidden md:-mx-8" ref={emblaRef}>
            <div className="flex gap-x-2">
                {photos.map((photo, index) => (
                    <div
                        key={photo}
                        className="max-w-6/12 flex-[0_0_100%] sm:max-w-4/12 lg:max-w-3/12"
                    >
                        {renderPhoto(photos, index, 4)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselPhotoBLock;
