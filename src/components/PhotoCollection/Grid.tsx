import clsx from 'clsx';

interface Props {
    className?: string;
    gridCols?: string;
    gridGap?: string;
}

const Grid: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    gridCols,
    gridGap
}) => (
    <div
        className={clsx([
            'mx-auto grid w-full max-w-[110rem] place-items-start',
            gridGap || 'gap-4 lg:gap-6',
            gridCols || 'grid-cols-12',
            className
        ])}
    >
        {children}
    </div>
);

export default Grid;
