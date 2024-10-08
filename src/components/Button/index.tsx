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
        'inline-block rounded bg-[var(--button-bg)] px-4 py-2 font-sans-medium text-[var(--button-text)] transition duration-200 ease-out hover:bg-[var(--button-bg-hover)] dark:[var(--dark-button-bg)] dark:text-[var(--dark-button-text)] dark:hover:bg-[var(--dark-button-bg)]',
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
