import {LeftArrowIcon, RightArrowIcon} from '@/components/Icon';

interface Props {
    handleNext: () => void;
    handlePrevious: () => void;
}

const CarouselMobilePagination: React.FC<Props> = ({handleNext, handlePrevious}) => (
    <div className="relative z-50 mt-2 flex items-center justify-center md:hidden">
        <button className="p-2" onClick={handlePrevious} type="button">
            <LeftArrowIcon className="size-8" />
        </button>
        <button className="p-2" onClick={handleNext} type="button">
            <RightArrowIcon className="size-8" />
        </button>
    </div>
);

export default CarouselMobilePagination;
