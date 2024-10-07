'use client';

import clsx from 'clsx';
import Link, {type LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';

interface Props extends LinkProps {
    href: string;
}

export const linkClasses =
    'rounded px-2.5 py-1 font-medium relative z-30 inline-block transition duration-200 data-[state=open]:bg-[var(--accent)] ease-in-out hover:bg-[var(--accent)]';

const SiteHeaderLink: React.FC<React.PropsWithChildren<Props>> = ({children, href, ...props}) => {
    const pathname = usePathname();
    const isActive = href && href !== '/' && pathname === href;

    return (
        <Link
            className={clsx([linkClasses, isActive && 'bg-[var(--accent)]'])}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};

export default SiteHeaderLink;
