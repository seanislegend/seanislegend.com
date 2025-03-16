interface Props {
    activeIndex: number;
    total: number;
}

const CarouselCounter: React.FC<Props> = ({activeIndex, total}) => (
    <div className="text-title-text flex items-center gap-0.5 text-xs font-medium sm:text-sm print:hidden">
        <span className="inline-block">{activeIndex + 1}</span>
        <span className="text-dimmed-text text-xs">/</span>
        <span className="inline-block">{total}</span>
    </div>
);

export default CarouselCounter;
