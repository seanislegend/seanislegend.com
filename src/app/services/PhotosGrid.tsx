import clsx from 'clsx';
import Image from 'next/image';
import Thumbnail from '@/components/PhotoCollection/Thumbnail';

interface Props {
    photos: PhotoGridItem[];
}

const PhotosGridItem: React.FC<PhotoGridItem> = ({photo, label}) => {
    const getPathAndSlug = () => {
        // we can find the parent collection using the linkedFrom data, while ignoring
        // any photos that appear only on the homepage
        const parentCollection = photo.linkedFrom?.collectionCollection?.items?.find(
            c => c.slug !== 'home'
        );
        if (!parentCollection) return {path: '', slug: ''};
        return {path: parentCollection?.slug, slug: photo.slug};
    };

    const maxWidth = 600;
    const height = photo.photo.height * (maxWidth / photo.photo.width);
    const {path, slug} = getPathAndSlug();

    return (
        <div key={photo.photo.url} className="flex items-center w-full">
            <Thumbnail
                linksTo={path ? 'collection' : undefined}
                height={height}
                path={path}
                slug={slug}
                title={label}
                thumbnail={photo.photo}
                width={maxWidth}
            />
        </div>
    );
};

const PhotosGrid: React.FC<Props> = ({photos}) => (
    <div
        className={clsx('grid gap-4 lg:gap-6', {
            'grid-cols-2 md:grid-cols-4': photos.length === 4,
            'grid-cols-3': photos.length === 3,
            'grid-cols-2': photos.length === 2,
            'grid-cols-1': photos.length === 1
        })}
    >
        {photos.map(item => (
            <PhotosGridItem key={item.photo.photo.url} {...item} />
        ))}
    </div>
);

export default PhotosGrid;
