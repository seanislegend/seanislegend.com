import {draftMode} from 'next/headers';
import {redirect} from 'next/navigation';
import EditorialLinkList, {type EditorialLinkItem} from '@/components/EditorialLinkList';
import {fetchAllCollections} from '@/utils/contentful';

interface Props {
    title: string;
    workType: NonNullable<PhotoCollection['workType']>;
}

const CollectionsList = async ({title, workType}: Props) => {
    const draftModeConfig = await draftMode();
    const collections = await fetchAllCollections(draftModeConfig.isEnabled);
    if (!collections) redirect('/');

    const items: EditorialLinkItem[] = collections
        .filter(
            collection =>
                collection.slug !== collection.category &&
                collection.slug !== 'home' &&
                (collection.workType === 'commercial' ? 'commercial' : 'personal') === workType
        )
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(collection => ({
            badge: collection.badge,
            description: collection.description,
            href: `/${collection.slug}`,
            key: collection.slug,
            previewPhoto: collection.photosCollection.items[0],
            title: collection.title
        }));

    return <EditorialLinkList title={title} items={items} />;
};

export default CollectionsList;
