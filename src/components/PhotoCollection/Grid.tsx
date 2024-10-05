import clsx from 'clsx';
import {gap} from './config';

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
            gridGap || gap,
            gridCols || 'grid-cols-12',
            className
        ])}
    >
        {children}
    </div>
);

export default Grid;
