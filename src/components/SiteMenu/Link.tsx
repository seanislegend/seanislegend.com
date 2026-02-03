'use client';

import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {type LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';
import {ArrowSquareOutIcon} from '@/components/Icon/ArrowSquareOut';
import {isExternalUrl} from '@/utils/helpers';

interface Props extends LinkProps {
    className?: string;
    href: string;
    theme?: 'ghost' | 'primary' | (string & {});
}

export const linkClasses =
    'px-2.5 py-1.5 font-medium text-[14px] relative z-30 inline-block transition-colors duration-300 focus:outline-hidden flex-shrink-0 focus:ring-2 leading-none sm:leading-normal focus:ring-offset-2 uppercase rounded-xs';

const SiteHeaderLink: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
    href,
    theme = 'ghost',
    ...props
}) => {
    const pathname = usePathname();
    const isActive = href && href !== '/' && (pathname === href || pathname.startsWith(`${href}/`));
    const isExternal = isExternalUrl(href);

    return (
        <Link
            className={clsx([linkClasses, className], {
                'bg-button-bg text-button-text hover:bg-button-bg-hover focus:ring-button-bg-hover':
                    theme === 'primary',
                'text-theme-text data-[state=open]:bg-secondary-button-bg-hover data-popup-open:bg-secondary-button-bg-hover focus:ring-secondary-button-bg-hover hover:bg-secondary-button-bg-hover':
                    theme === 'ghost',
                'bg-secondary-button-bg': isActive
            })}
            href={href}
            {...props}
            {...(isExternal ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
        >
            {children}
        </Link>
    );
};

export default SiteHeaderLink;
