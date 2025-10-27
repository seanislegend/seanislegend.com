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
<<<<<<< HEAD
<<<<<<< HEAD
            'mx-auto grid w-full max-w-440 place-items-start',
=======
            'mx-auto grid w-full max-w-[110rem] place-items-start',
>>>>>>> e22f2c7 (feat: Reduce grid gaps on mobile)
=======
            'mx-auto grid w-full max-w-440 place-items-start',
>>>>>>> da5321b (chore: Tailwind lint)
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
