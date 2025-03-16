import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {Url} from 'next/dist/shared/lib/router/router';

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
        'bg-button-bg text-button-text hover:bg-button-bg-hover focus:ring-button-bg-hover inline-block px-3 py-1.5 text-[13px] font-medium tracking-wider uppercase transition duration-200 ease-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:px-4 sm:py-2 sm:text-sm',
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
