import CarouselCounter from './Counter';

interface Props {
    activeIndex: number;
    activePhoto: Photo;
    total: number;
}

const CarouselDetails: React.FC<Props> = ({activeIndex, activePhoto, total}) => (
    <div className="flex items-end justify-between">
        {activePhoto?.title && (
            <p className="break-normal text-sm sm:text-base">{activePhoto.title}</p>
        )}
        <CarouselCounter activeIndex={activeIndex} total={total} />
    </div>
);

export default CarouselDetails;
