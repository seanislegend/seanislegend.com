import clsx from 'clsx';
import {columnSpan} from './config';

interface Props {
    className?: string;
    span: number;
}

const Column: React.FC<React.PropsWithChildren<Props>> = ({children, className, span}) => (
    <div className={clsx([columnSpan[span], className])}>{children}</div>
);

export default Column;
