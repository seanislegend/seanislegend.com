import {Link} from 'next-view-transitions';
import {draftMode} from 'next/headers';
import Image from 'next/image';
import {redirect} from 'next/navigation';
import {RightArrowIcon} from '@/components/Icon';
import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import Badge from '@/components/UI/Badge';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchAllCollections} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const CollectionsPage = async () => {
    const draftModeConfig = await draftMode();
    const collections = await fetchAllCollections(draftModeConfig.isEnabled);
    if (!collections) redirect('/');

    const sortedCollections = collections
        .filter(collection => collection.slug !== collection.category && collection.slug !== 'home')
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <DefaultLayout theme="light">
            <PageHeader title="All photo collections" />
            <Container asChild>
                <div className="lg:[&:has(.link-item:hover)_.link-item:not(:hover)]:opacity-50">
                    {sortedCollections.map(collection => (
                        <Link
                            className="link-item group relative grid grid-cols-12 gap-2 py-4 md:gap-4"
                            key={collection.slug}
                            href={`/${collection.slug}`}
                        >
                            <span className="col-span-12 flex gap-4 opacity-100 transition-opacity duration-200 md:col-span-5">
                                <strong className="font-medium uppercase underline-offset-4 group-hover:underline lg:block">
                                    {collection.title}
                                </strong>
                                {collection.badge && (
                                    <span className="translate-y-[-2px]">
                                        <Badge>{collection.badge}</Badge>
                                    </span>
                                )}
                            </span>
                            {collection.description && (
                                <Markdown
                                    allowLinks={false}
                                    className="col-span-12 line-clamp-4 pl-[20%] opacity-100 transition-opacity duration-200 md:col-span-7 md:line-clamp-none md:pl-0"
                                >
                                    {collection.description}
                                </Markdown>
                            )}
                            {collection.photosCollection.items[0] && (
                                <span className="group-hover:animate-in group-hover:slide-in-from-top-10 slide-out-to-bottom-10 absolute top-1/2 left-4/12 z-30 hidden -translate-y-1/2 overflow-hidden rounded-xs opacity-0 transition-all duration-100 will-change-transform group-hover:opacity-100 sm:block">
                                    <Image
                                        alt=""
                                        blurDataURL={collection.photosCollection.items[0]?.base64}
                                        className="h-auto w-100 shadow-2xl"
                                        height={
                                            collection.photosCollection.items[0]?.thumbnail.height
                                        }
                                        placeholder="blur"
                                        loading="lazy"
                                        quality={85}
                                        sizes="(max-width: 240px) 100vw, (max-width: 360px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                                        src={collection.photosCollection.items[0]?.thumbnail.url}
                                        width={
                                            collection.photosCollection.items[0]?.thumbnail.width
                                        }
                                    />
                                    <span className="bg-button-bg-hover text-button-text absolute right-2 bottom-2 z-40 flex h-full w-auto items-center gap-2 overflow-hidden p-1 sm:h-[2.25rem] sm:p-2 sm:px-3">
                                        <span className="text-sm font-medium uppercase">
                                            View collection
                                        </span>
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
};

export const generateMetadata = async () => {
    return {
        ...config.seo,
        ...getEditorialSeo({slug: 'collections', title: 'All photo collections'})
    };
};

export default CollectionsPage;
