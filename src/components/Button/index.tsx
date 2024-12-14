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
        'inline-block bg-[var(--button-bg)] px-3 py-1.5 text-[13px] font-medium tracking-wider text-[var(--button-text)] uppercase transition duration-200 ease-out hover:bg-[var(--button-bg-hover)] focus:ring-2 focus:ring-[var(--button-bg-hover)] focus:ring-offset-2 focus:outline-hidden sm:px-4 sm:py-2 sm:text-sm',
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
