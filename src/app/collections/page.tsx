import {draftMode} from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import {redirect} from 'next/navigation';
import DefaultLayout from '@/components/Layouts/Default';
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
    console.log(collections);
    return (
        <DefaultLayout theme="light">
            <PageHeader title="All photo collections" />
            <Container asChild>
                <div className="animate-fadeIn animate-duration-1000 -my-4 lg:[&:has(.link-item:hover)_.link-item:not(:hover)]:opacity-50">
                    {sortedCollections.map(collection => (
                        <Link
                            className="link-item group relative grid gap-2 py-4 opacity-100 sm:grid-cols-12 sm:gap-4"
                            key={collection.slug}
                            href={`/${collection.slug}`}
                        >
                            <div className="flex gap-4 sm:col-span-5">
                                <strong className="font-medium uppercase underline-offset-4 group-hover:underline lg:block">
                                    {collection.title}
                                </strong>
                                {collection.badge && (
                                    <span className="translate-y-[-2px]">
                                        <Badge>{collection.badge}</Badge>
                                    </span>
                                )}
                            </div>
                            <div className="line-clamp-2 sm:col-span-7 sm:line-clamp-none">
                                {collection.description}
                            </div>
                            <Image
                                alt=""
                                blurDataURL={collection.photosCollection.items[0]?.base64}
                                className="xl:group-hover:animate-in xl:group-hover:slide-in-from-top-10 xl:slide-out-to-bottom-10 absolute top-1/2 left-0 z-20 h-auto w-100 -translate-y-1/2 opacity-0 duration-200 will-change-transform xl:shadow-2xl xl:group-hover:opacity-100"
                                height={collection.photosCollection.items[0]?.thumbnail.height}
                                placeholder="blur"
                                loading="lazy"
                                quality={85}
                                sizes="(max-width: 240px) 100vw, (max-width: 360px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                                src={collection.photosCollection.items[0]?.thumbnail.url}
                                width={collection.photosCollection.items[0]?.thumbnail.width}
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </DefaultLayout>
    );
};

export const generateMetadata = async () => {
    return {
        ...config.seo,
        ...getEditorialSeo({slug: 'collections', title: 'All photo collections'})
    };
};

export const revalidate = 60;

export default CollectionsPage;
