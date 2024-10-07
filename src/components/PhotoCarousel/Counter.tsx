interface Props {
    activeIndex: number;
    total: number;
}

const CarouselCounter: React.FC<Props> = ({activeIndex, total}) => (
    <div className="flex items-center space-x-1 font-serif text-xs text-[var(--title-text)] sm:text-sm dark:text-[var(--dark-title-text)]">
        <span className="inline-block">{activeIndex + 1}</span>
        <span className="font-sans text-xs text-[var(--dimmed-text)] dark:text-[var(--dark-dimmed-text)]">
            /
        </span>
        <span className="inline-block">{total}</span>
    </div>
);

export default CarouselCounter;
