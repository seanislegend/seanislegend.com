'use client';

import clsx from 'clsx';
import PhotoThumbnail from '@/components/PhotoCollection/Thumbnail';
import usePhotoCollection from '@/hooks/usePhotoCollection';

type Props = Pick<PhotoCollection, 'photosCollection' | 'slug'>;

const PhotosCollection: React.FC<Props> = ({photosCollection, slug}) => {
    const {maxSize, photoGroups} = usePhotoCollection(
        photosCollection,
        slug === 'home' ? 'home' : 'default'
    );

    const columnClasses: {[key: number]: string} = {
        1: 'w-12/12',
        2: 'w-6/12',
        3: 'w-4/12',
        4: 'w-3/12'
    };
    const columnSize = photoGroups ? photoGroups.length : 0;
    const columnClass = columnClasses[columnSize];

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {photoGroups?.map((row, index) => (
                <div key={index}>
                    {row.map((photo, index2) => {
                        return (
                            <div className="w-full overflow-hidden" key={index2}>
                                <PhotoThumbnail
                                    base64={photo.base64}
                                    loading={index2 < 6 ? 'eager' : 'lazy'}
                                    path={`/${photo.collection || slug}/${photo.slug}`}
                                    slug={photo.slug}
                                    title={photo.title}
                                    thumbnail={photo.thumbnail}
                                />
                            </div>
                        );
                    })}
                </div>
            ))}
            {/* {photoGroups?.map((row, index) => (
                <div key={index} className={`self-start pl-1.5 sm:pl-2 ${columnClass}`}>
                    {row.map((photo, index2) => {
                        const padding = (photo.fullSize.height / maxSize) * 100;

                        return (
                            <div
                                className="mb-1.5 h-0 w-full overflow-hidden sm:mb-2"
                                key={index2}
                                style={{paddingBottom: `${padding}%`}}
                            >
                                <div
                                    className={clsx({
                                        'mt-[-8%]': photo.fullSize.height > photo.fullSize.width
                                    })}
                                >
                                    <PhotoThumbnail
                                        base64={photo.base64}
                                        loading={index2 < 6 ? 'eager' : 'lazy'}
                                        path={`/${photo.collection || slug}/${photo.slug}`}
                                        slug={photo.slug}
                                        title={photo.title}
                                        thumbnail={photo.thumbnail}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))} */}
        </div>
    );
};

export default PhotosCollection;
