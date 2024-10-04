import * as Slot from '@radix-ui/react-slot';
import clsx from 'clsx';
import {Url} from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface Props {
    className?: string;
    href?: Url | undefined;
    [key: string]: any;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    href,
    ...props
}) => {
    const Comp = href ? Link : 'button';

    return (
        <Comp
            className={clsx([
                'inline-block rounded bg-sean-beige-100 px-4 py-2 font-semibold tracking-wide text-sean-black transition duration-200 ease-out hover:bg-sean-beige-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800',
                className
            ])}
            href={href as Url}
            {...props}
        >
            {children}
        </Comp>
    );
};

export default Button;
