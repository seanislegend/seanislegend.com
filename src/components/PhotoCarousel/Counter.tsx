interface Props {
    activeIndex: number;
    total: number;
}

const CarouselCounter: React.FC<Props> = ({activeIndex, total}) => (
    <div className="flex items-center space-x-1  text-xs text-[var(--title-text)] sm:text-sm">
        <span className="inline-block">{activeIndex + 1}</span>
        <span className="text-xs text-[var(--dimmed-text)]">/</span>
        <span className="inline-block">{total}</span>
    </div>
);

export default CarouselCounter;
