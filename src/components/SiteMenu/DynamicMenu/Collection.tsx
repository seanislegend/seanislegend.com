'use client';

import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import Badge from '@/components/UI/Badge';

interface Props {
    link: Link;
    [key: string]: any;
}

const DynamicMenuCollection: React.FC<Props> = ({link, ...props}) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(link.url);

    return (
        <Link
            href={link.url}
            className={clsx(
                'group/link bg-theme-black focus-visible:ring-theme-text @container/navitem relative flex aspect-4/3 w-full flex-col justify-end overflow-hidden rounded-sm border-2 focus-visible:ring-2 focus-visible:outline-hidden',
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
                    className="absolute inset-0 object-cover transition-opacity duration-300 ease-in-out group-hover/link:opacity-60"
                    fill={true}
                    placeholder="blur"
                    quality={80}
                    sizes="(max-width: 240px) 600px, (max-width: 768px) 700px, (max-width: 1024px) 800px"
                    src={link.photo.thumbnail.url}
                />
            )}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] bg-linear-to-t from-black/90 via-black/35 to-transparent"
            />
            <div className="relative flex flex-col justify-end gap-1 px-4 py-3.5">
                {(isActive || link.badge) && (
                    <span className="flex flex-wrap gap-1">
                        {isActive && <Badge>This collection</Badge>}
                        {link.badge && <Badge>{link.badge}</Badge>}
                    </span>
                )}
                {link.title && (
                    <h4
                        className={clsx(
                            'text-beige-50 text-sm leading-snug font-medium tracking-tight text-balance uppercase underline-offset-4 [text-shadow:0_1px_3px_rgb(0_0_0/0.45)] group-hover/link:underline sm:text-base 2xl:text-lg',
                            isActive && 'underline'
                        )}
                    >
                        {link.title}
                    </h4>
                )}
                {link.pageTitle && (
                    <p className="text-beige-50/85 hidden text-[12px] leading-snug text-balance [text-shadow:0_1px_2px_rgb(0_0_0/0.45)] sm:text-[13px] @min-[150px]/navitem:line-clamp-2">
                        {link.pageTitle}
                    </p>
                )}
            </div>
        </Link>
    );
};

export default DynamicMenuCollection;
