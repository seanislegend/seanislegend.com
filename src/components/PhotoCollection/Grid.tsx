import clsx from 'clsx';

interface Props {
    className?: string;
    gridCols?: string;
    gridGap?: string;
    hasTestId?: boolean;
}

const Grid: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    gridCols,
    gridGap,
    hasTestId = true
}) => (
    <div
        className={clsx([
            'mx-auto grid w-full max-w-[110rem] place-items-start',
            gridGap || 'gap-2 md:gap-4 lg:gap-6',
            gridCols || 'grid-cols-12',
            className
        ])}
        data-testid={hasTestId ? 'photo-grid' : undefined}
    >
        {children}
    </div>
);

export default Grid;
