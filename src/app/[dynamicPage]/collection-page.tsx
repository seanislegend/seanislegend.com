import PhotoCollection from '@/components/PhotoCollection';
import PhotoCollectionAdminTools from '@/components/PhotoCollection/AdminTools';
import RelatedCollections from '@/components/PhotoCollection/RelatedCollections';
import GreenHopHomePageBanner from '@/app/green-hop-beer/HomePageBanner';

interface Props {
    collection: PhotoCollection;
}

const CollectionPage: React.FC<Props> = ({collection}) => (
    <>
        {collection.slug === 'home' && <GreenHopHomePageBanner />}
        <PhotoCollection
            {...collection}
            linksTo={collection.slug === 'home' ? 'collection' : 'photo'}
        />
        {collection?.relatedCollectionsCollection &&
            collection?.relatedCollectionsCollection?.items?.length > 0 && (
                <RelatedCollections items={collection.relatedCollectionsCollection.items} />
            )}
        {process.env.NEXT_PUBLIC_ADMIN_TOOLS === '1' && (
            <PhotoCollectionAdminTools collection={collection} />
        )}
    </>
);

export default CollectionPage;
