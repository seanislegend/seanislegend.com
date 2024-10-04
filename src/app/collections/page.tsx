import {use} from 'react';
import {draftMode} from 'next/headers';
import Link from 'next/link';
import {redirect} from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ThumbnailImage from '@/components/PhotoCollection/ThumbnailImage';
import Container from '@/components/UI/Container';
import config from '@/utils/config';
import {fetchAllCollections} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const CollectionsPage = async () => {
    const draftModeConfig = use(draftMode());
    const collections = await fetchAllCollections(draftModeConfig.isEnabled);
    if (!collections) redirect('/');

    const sortedCollections = collections
        .filter(collection => collection.slug !== collection.category && collection.slug !== 'home')
        .sort((a, b) => a.slug.localeCompare(b.slug));

    return (
        <>
            <PageHeader
                description="All the photo collections covering my beer, street, and travel photography."
                title="All photo collections"
            />
            <Container asChild>
                <div className="animate-fadeIn animate-duration-1000 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {sortedCollections.map(collection => (
                        <Link
                            className="group w-full"
                            key={collection.slug}
                            href={`/${collection.slug}`}
                        >
                            <ThumbnailImage
                                {...collection.photosCollection.items[0]?.thumbnail}
                                base64={collection.photosCollection.items[0]?.base64}
                            />
                            <span className="block pb-2 pt-1 text-sm tracking-wide text-gray-600 underline-offset-4 group-hover:underline group-focus:underline sm:pb-4 sm:pt-2 dark:text-gray-400 dark:group-hover:text-white">
                                {collection.pageTitle ? (
                                    <>
                                        <span className="hidden sm:block">
                                            {collection.pageTitle}
                                        </span>
                                        <span className="sm:hidden">{collection.title}</span>
                                    </>
                                ) : (
                                    collection.title
                                )}
                            </span>
                            <span className="hidden text-sm">{collection.description}</span>
                        </Link>
                    ))}
                </div>
            </Container>
        </>
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
