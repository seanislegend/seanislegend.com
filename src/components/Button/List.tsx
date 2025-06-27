import {Children} from 'react';
import clsx from 'clsx';

interface Props {
    className?: string;
}

const ButtonList: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => (
    <div className={clsx('flex flex-col sm:flex-row sm:gap-2', className)}>
        {Children.map(children, (child, index) => (
            <span key={index}>{child}</span>
        ))}
    </div>
);

export default ButtonList;
