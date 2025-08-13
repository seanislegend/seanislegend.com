'use client';

import {NavigationMenu} from '@base-ui-components/react/navigation-menu';
import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import Badge from '@/components/UI/Badge';
import Condition from '@/components/UI/Condition';

interface Props {
    hasNavigationWrapper?: boolean;
    link: Link;
    [key: string]: any;
}

const DynamicMenuCollection: React.FC<Props> = ({hasNavigationWrapper = true, link, ...props}) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(link.url);

    return (
        <Condition
            condition={hasNavigationWrapper}
            wrapper={children => <NavigationMenu.Item>{children}</NavigationMenu.Item>}
        >
            <Link
                href={link.url}
                className={clsx(
                    'group/link bg-theme-black focus:ring-theme-text @container/navitem relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-xs border-2 focus:ring-2 focus:outline-hidden 2xl:aspect-4/3',
                    {'border-accent': isActive, 'border-transparent': !isActive}
                )}
                scroll={true}
                {...props}
                tabIndex={isActive ? 1 : 0}
            >
                {link.photo?.thumbnail?.url && (
                    <Image
                        alt={link.title}
                        blurDataURL={link.photo!.base64}
                        className={clsx(
                            'absolute inset-0 object-cover transition-opacity duration-300 ease-in-out group-hover/link:opacity-60 hover:duration-100',
                            isActive && 'opacity-60'
                        )}
                        fill={true}
                        placeholder="blur"
                        quality={85}
                        sizes="(max-width: 240px) 600px, (max-width: 768px) 700px, (max-width: 1024px) 800px"
                        src={link.photo.thumbnail.url}
                    />
                )}
                <div className="absolute bottom-0 left-0 flex h-[60%] w-full flex-col justify-end bg-linear-to-t from-black to-transparent px-4 py-3">
                    {(isActive || link.badge) && (
                        <span className="mb-1 flex flex-wrap gap-1">
                            {isActive && <Badge>This collection </Badge>}
                            {link.badge && <Badge>{link.badge} </Badge>}
                        </span>
                    )}
                    {link.title && (
                        <h4
                            className={clsx(
                                'text-beige-50 text-sm leading-tight font-medium tracking-tight text-balance uppercase underline-offset-4 group-hover/link:underline sm:text-base 2xl:text-lg 2xl:leading-tight',
                                isActive && 'underline'
                            )}
                        >
                            {link.title}
                        </h4>
                    )}
                    {link.pageTitle && (
                        <p className="text-beige-50 mt-1 hidden text-[12px] leading-tight text-balance sm:text-[14px] @min-[160px]/navitem:block">
                            {link.pageTitle}
                        </p>
                    )}
                </div>
            </Link>
        </Condition>
    );
};

export default DynamicMenuCollection;
