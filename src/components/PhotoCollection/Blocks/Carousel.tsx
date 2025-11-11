import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import {PhotoBlockComponent} from '@/types/photo-blocks';

const CarouselPhotoBLock: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [
        AutoScroll({speed: 1, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: true})
    ]);

    return (
        <div className="relative mx-auto max-w-440">
            <div className="relative overflow-hidden" ref={emblaRef}>
                <div className="flex cursor-grab gap-x-2 active:cursor-grabbing">
                    {photos.map((photo, index) => (
                        <div
                            key={photo}
                            className="max-w-8/12 flex-[0_0_100%] sm:max-w-4/12 lg:max-w-3/12"
                        >
                            {renderPhoto(photos, index, 4)}
                            {index === photos.length - 1 && (
                                <div className="bg-theme-bg absolute top-0 right-0 z-20 h-full w-2" />
                            )}
                        </div>
                    ))}
                </div>
                <div className="from-theme-bg absolute top-0 left-0 h-full w-20 bg-linear-to-r to-transparent" />
                <div className="from-theme-bg absolute top-0 right-0 h-full w-20 bg-linear-to-l to-transparent" />
            </div>
        </div>
    );
};

export default CarouselPhotoBLock;
