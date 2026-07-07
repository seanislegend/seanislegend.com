import {Link} from 'next-view-transitions';
import Image from 'next/image';
import {RightArrowIcon} from '@/components/Icon/RightArrow';
import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import Badge from '@/components/UI/Badge';
import Container from '@/components/UI/Container';

export interface EditorialLinkItem {
    badge?: string;
    description?: string;
    href: string;
    key: string;
    previewPhoto?: Pick<Photo, 'base64' | 'thumbnail'>;
    title: string;
}

interface Props {
    items: EditorialLinkItem[];
    title: string;
}

// show only the first paragraph, append ellipsis if more follow
const firstParagraph = (description: string): string => {
    const [first, ...rest] = description.split(/\n+/).filter(Boolean);
    return rest.length ? `${first.replace(/\.$/, '')}…` : first;
};

const EditorialLinkList: React.FC<Props> = ({items, title}) => (
    <DefaultLayout theme="light">
        <PageHeader title={title} />
        <Container>
            <div className="lg:[&:has(.link-item:hover)_.link-item:not(:hover)]:opacity-50">
                {items.map(item => (
                    <Link
                        className="link-item group relative grid grid-cols-12 gap-2 py-4 md:gap-4"
                        key={item.key}
                        href={item.href}
                    >
                        <span className="col-span-12 flex gap-4 opacity-100 transition-opacity duration-300 md:col-span-5">
                            <strong className="font-medium uppercase underline-offset-4 group-hover:underline lg:block">
                                {item.title}
                            </strong>
                            {item.badge && (
                                <span className="translate-y-[-2px]">
                                    <Badge>{item.badge}</Badge>
                                </span>
                            )}
                        </span>
                        {item.description && (
                            <Markdown
                                allowLinks={false}
                                className="col-span-12 line-clamp-4 pl-[20%] opacity-100 transition-opacity duration-300 md:col-span-7 md:line-clamp-none md:pl-0"
                            >
                                {firstParagraph(item.description)}
                            </Markdown>
                        )}
                        {item.previewPhoto && (
                            <span className="group-hover:animate-in group-hover:slide-in-from-top-10 slide-out-to-bottom-10 absolute top-1/2 left-4/12 z-30 hidden -translate-y-1/2 overflow-hidden rounded-xs opacity-0 transition-all duration-100 will-change-transform group-hover:opacity-100 sm:block">
                                <Image
                                    alt=""
                                    blurDataURL={item.previewPhoto.base64}
                                    className="h-auto w-100 shadow-2xl"
                                    height={item.previewPhoto.thumbnail.height}
                                    placeholder="blur"
                                    loading="lazy"
                                    quality={80}
                                    sizes="(max-width: 240px) 100vw, (max-width: 360px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                                    src={item.previewPhoto.thumbnail.url}
                                    width={item.previewPhoto.thumbnail.width}
                                />
                                <span className="bg-button-bg-hover text-button-text absolute right-2 bottom-2 z-40 flex h-full w-auto items-center gap-2 overflow-hidden p-1 sm:h-9 sm:p-2 sm:px-3">
                                    <span className="text-sm font-medium uppercase">View</span>
                                    <RightArrowIcon className="h-5 w-5 fill-current" />
                                </span>
                            </span>
                        )}
                    </Link>
                ))}
            </div>
        </Container>
        <div className="h-10 lg:h-20" />
    </DefaultLayout>
);

export default EditorialLinkList;
