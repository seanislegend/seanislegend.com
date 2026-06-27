import dynamic from 'next/dynamic';
import PhotoCollection from '@/components/PhotoCollection';
import RelatedCollections from '@/components/PhotoCollection/RelatedCollections';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const PhotoCollectionAdminTools =
    process.env.NEXT_PUBLIC_ADMIN_TOOLS === '1'
        ? dynamic(() => import('@/components/PhotoCollection/AdminTools'))
        : null;

interface Props {
    collection: PhotoCollection;
}

const CollectionPage: React.FC<Props> = ({collection}) => (
    <>
        <PhotoCollection
            {...collection}
            linksTo={collection.slug === 'home' ? 'collection' : 'photo'}
        />
        {collection?.relatedCollectionsCollection &&
            collection?.relatedCollectionsCollection?.items?.length > 0 && (
                <RelatedCollections items={collection.relatedCollectionsCollection.items} />
            )}
        {PhotoCollectionAdminTools && <PhotoCollectionAdminTools collection={collection} />}
    </>
);

export default CollectionPage;
