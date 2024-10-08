import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    link: Link;
    size?: 'lg' | 'sm';
}

const FeaturedCollectionItem: React.FC<Props> = ({link, size = 'lg'}) => (
    <NavigationMenu.Item asChild>
        <Link
            href={link.url}
            className={clsx(
                'group/link relative flex w-full flex-col justify-end bg-[var(--theme-black)] focus:outline-none focus:ring-2 focus:ring-[var(--text)] focus:ring-offset-2 dark:focus:ring-[var(--dark-text)]',
                {'aspect-[4/3]': size === 'sm', 'aspect-[3.95/3]': size === 'lg'}
            )}
        >
            <Image
                alt={link.title}
                blurDataURL={link.photo!.base64}
                className="absolute inset-0 object-cover transition-opacity duration-300 ease-in-out hover:duration-100 group-hover/link:opacity-60"
                fill={true}
                placeholder="blur"
                quality={85}
                sizes="(max-width: 240px) 600px, (max-width: 768px) 700px, (max-width: 1024px) 800px"
                src={link.photo!.thumbnail.url}
            />
            <div
                className={clsx(
                    'absolute bottom-0 left-0 flex h-[60%] w-full flex-col justify-end bg-gradient-to-t from-[var(--theme-black)] to-transparent',
                    {'p-5': size === 'lg', 'p-3': size === 'sm'}
                )}
            >
                <h4
                    className={clsx(
                        'text-balance font-medium uppercase tracking-tight text-[var(--theme-beige-50)] underline-offset-4 group-hover/link:underline',
                        {'text-2xl': size === 'lg', 'text-lg leading-snug': size === 'sm'}
                    )}
                >
                    {link.title}
                </h4>
                <p className="mt-0.5 hidden text-balance text-[14px] leading-tight text-[var(--theme-beige-50)] xl:block">
                    {link.pageTitle}
                </p>
            </div>
        </Link>
    </NavigationMenu.Item>
);

export default FeaturedCollectionItem;
