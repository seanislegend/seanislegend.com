'use client';

import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {type LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';

interface Props extends LinkProps {
    className?: string;
    href: string;
}

export const linkClasses =
    'px-2.5 py-1.5 font-medium text-[14px] relative z-30 inline-block transition duration-500 hover:duration-200 data-[state=open]:bg-secondary-button-bg-hover focus:outline-hidden focus:ring-2 focus:ring-secondary-button-bg-hover ease-in-out hover:bg-secondary-button-bg-hover leading-none sm:leading-normal focus:ring-offset-2 uppercase rounded-xs';

const SiteHeaderLink: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    href,
    ...props
}) => {
    const pathname = usePathname();
    const isActive = href && href !== '/' && pathname === href;

    return (
        <Link
            className={clsx([linkClasses, className, isActive && 'bg-secondary-button-bg'])}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
};

export default SiteHeaderLink;
