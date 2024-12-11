'use client';

import clsx from 'clsx';
import Link, {type LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';

interface Props extends LinkProps {
    href: string;
}

export const linkClasses =
    'px-2.5 py-1.5 font-medium text-[14px] relative z-30 inline-block transition duration-500 hover:duration-200 data-[state=open]:bg-[var(--secondary-button-bg-hover)] focus:outline-hidden focus:ring-2 focus:ring-[var(--secondary-button-bg-hover)] ease-in-out hover:bg-[var(--secondary-button-bg-hover)] focus:ring-offset-2 uppercase';

const SiteHeaderLink: React.FC<React.PropsWithChildren<Props>> = ({children, href, ...props}) => {
    const pathname = usePathname();
    const isActive = href && href !== '/' && pathname === href;

    return (
        <Link
            className={clsx([linkClasses, isActive && 'bg-[var(--secondary-button-bg)]'])}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};

export default SiteHeaderLink;
