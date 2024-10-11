import clsx from 'clsx';
import {Url} from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface Props {
    className?: string;
    href?: Url | string | undefined;
    [key: string]: any;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    href,
    ...props
}) => {
    const Comp = href ? Link : 'button';
    const classes = clsx([
        'inline-block bg-[var(--button-bg)] sm:px-4 sm:py-2 px-3 py-1.5 font-medium text-[var(--button-text)] transition duration-200 ease-out hover:bg-[var(--button-bg-hover)] text-[13px] sm:text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[var(--button-bg-hover)] focus:ring-offset-2',
        className
    ]);

    if (href?.toString().includes('http')) {
        return (
            <a className={classes} href={href as string} {...props}>
                {children}
            </a>
        );
    }

    return (
        <Comp className={classes} href={href as Url} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
