import Link from 'next/link';
import {redirect} from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ThumbnailImage from '@/components/PhotoCollection/ThumbnailImage';
import config from '@/utils/config';
import {fetchAllCollections} from '@/utils/contentful';
import {getEditorialSeo} from '@/utils/helpers';

const CollectionsPage = async () => {
    const collections = await fetchAllCollections();
    if (!collections) redirect('/');

    const sortedCollections = collections
        .filter(collection => collection.slug !== collection.category && collection.slug !== 'home')
        .sort((a, b) => a.slug.localeCompare(b.slug));

    return (
        <>
            <PageHeader title="All collections" />
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {sortedCollections.map(collection => (
                    <Link
                        className="group w-full"
                        key={collection.slug}
                        href={`/${collection.slug}`}
                    >
                        <ThumbnailImage {...collection.photosCollection.items[0].thumbnail} />
                        <span className="block pt-1 pb-2 text-sm tracking-wide text-gray-600 underline-offset-4 group-hover:underline group-focus:underline dark:text-gray-400 dark:group-hover:text-white sm:pt-2 sm:pb-4">
                            {collection.title}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export const generateMetadata = async () => {
    return {...config.seo, ...getEditorialSeo({slug: 'collections', title: 'All collections'})};
};

export const revalidate = 60;

export default CollectionsPage;
