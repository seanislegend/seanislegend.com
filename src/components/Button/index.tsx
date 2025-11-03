import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {Url} from 'next/dist/shared/lib/router/router';
import {isExternalUrl} from '@/utils/helpers';

interface Props {
    className?: string;
    href?: Url | string | undefined;
    theme?: 'primary' | 'secondary' | 'black';
    [key: string]: any;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    href,
    theme = 'primary',
    ...props
}) => {
    const Comp = href ? Link : 'button';
    const classes = clsx([
<<<<<<< HEAD
<<<<<<< HEAD
        'inline-block rounded-xs px-4 py-2 text-[13px] font-medium tracking-wider uppercase transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:px-4 sm:py-2 sm:text-sm',
=======
        'inline-block rounded-xs px-3 py-1.5 text-[13px] font-medium tracking-wider uppercase transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:px-4 sm:py-2 sm:text-sm',
>>>>>>> fb8221c (feat: Use consistent transitions and timings)
=======
        'inline-block rounded-xs px-4 py-2 text-[13px] font-medium tracking-wider uppercase transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:px-4 sm:py-2 sm:text-sm',
>>>>>>> 2cb674e (feat: Improve mobile UI)
        className,
        {
            'bg-button-bg text-button-text hover:bg-button-bg-hover focus:ring-button-bg-hover':
                theme === 'primary',
            'bg-secondary-button-bg text-secondary-button-text hover:bg-secondary-button-bg-hover':
                theme === 'secondary',
            'text-button-text bg-black hover:bg-black/80': theme === 'black'
        }
    ]);

    if (isExternalUrl(href as string)) {
        return (
            <a
                className={classes}
                href={href as string}
                rel="noopener noreferrer"
                target="_blank"
                {...props}
            >
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
