import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Link} from 'next-view-transitions';
import Image from 'next/image';
import Badge from '@/components/UI/Badge';

interface Props {
    link: Link;
}

const DynamicMenuCollection: React.FC<Props> = ({link}) => (
    <NavigationMenu.Item asChild>
        <Link
            href={link.url}
            className="group/link bg-theme-black focus:ring-theme-text @container/navitem relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden 2xl:aspect-4/3"
            scroll={true}
        >
            {link.photo?.thumbnail?.url && (
                <Image
                    alt={link.title}
                    blurDataURL={link.photo!.base64}
                    className="absolute inset-0 object-cover transition-opacity duration-300 ease-in-out group-hover/link:opacity-60 hover:duration-100"
                    fill={true}
                    placeholder="blur"
                    quality={85}
                    sizes="(max-width: 240px) 600px, (max-width: 768px) 700px, (max-width: 1024px) 800px"
                    src={link.photo.thumbnail.url}
                />
            )}
            <div className="absolute bottom-0 left-0 flex h-[60%] w-full flex-col justify-end bg-linear-to-t from-black to-transparent px-4 py-3">
                {link.badge && (
                    <span>
                        <Badge>{link.badge}</Badge>
                    </span>
                )}
                {link.title && (
                    <h4 className="text-beige-50 leading-tight font-medium tracking-tight text-balance uppercase underline-offset-4 group-hover/link:underline 2xl:text-lg 2xl:leading-tight">
                        {link.title}
                    </h4>
                )}
                {link.pageTitle && (
                    <p className="text-beige-50 mt-1 hidden text-[14px] leading-tight text-balance @min-[160px]/navitem:block">
                        {link.pageTitle}
                    </p>
                )}
            </div>
        </Link>
    </NavigationMenu.Item>
);

export default DynamicMenuCollection;
