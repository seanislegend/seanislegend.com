interface Props {
    activeIndex: number;
    total: number;
}

const CarouselCounter: React.FC<Props> = ({activeIndex, total}) => (
    <div className="flex items-center gap-0.5 text-xs font-medium text-[var(--title-text)] sm:text-sm print:hidden">
        <span className="inline-block">{activeIndex + 1}</span>
        <span className="text-xs text-[var(--dimmed-text)]">/</span>
        <span className="inline-block">{total}</span>
    </div>
);

export default CarouselCounter;
