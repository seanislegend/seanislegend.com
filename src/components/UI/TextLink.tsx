import clsx from 'clsx';
import Link, {type LinkProps} from 'next/link';

interface Props extends LinkProps {
    className?: string;
}

const TextLink: React.FC<React.PropsWithChildren<Props>> = ({children, className, ...props}) => (
    <Link
        className={clsx([
            'inline-block font-medium underline-offset-4 hover:underline hover:decoration-sean-black hover:decoration-2',
            className
        ])}
        {...props}
    >
        {children}
    </Link>
);

export default TextLink;
