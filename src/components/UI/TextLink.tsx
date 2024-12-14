'use client';

import clsx from 'clsx';
import Link, {type LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';

interface Props extends LinkProps {
    className?: string;
}

const TextLink: React.FC<React.PropsWithChildren<Props>> = ({children, className, ...props}) => {
    const pathname = usePathname();
    const isActive = props.href && props.href !== '/' && pathname === props.href;

    return (
        <Link
            className={clsx([
                'inline-block font-medium underline-offset-4 hover:underline hover:decoration-[var(--text)] hover:decoration-2 focus:ring-2 focus:ring-[var(--text)] focus:ring-offset-2 focus:outline-hidden',
                className
            ])}
            data-active={isActive ? 'true' : 'false'}
            {...props}
        >
            {children}
        </Link>
    );
};

export default TextLink;
