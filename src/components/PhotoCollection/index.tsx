'use client';

import PhotoThumbnail from '@/components/PhotoCollection/Thumbnail';
import usePhotoCollection from '@/hooks/usePhotoCollection';
import clsx from 'clsx';

type Props = Pick<PhotoCollection, 'photosCollection' | 'slug'>;

const PhotosCollection: React.FC<Props> = ({photosCollection, slug}) => {
    const {maxSize, photoGroups} = usePhotoCollection(photosCollection);
    const columnClasses: {[key: number]: string} = {
        1: 'w-12/12',
        2: 'w-6/12',
        3: 'w-4/12',
        4: 'w-3/12'
    };
    const columnSize = photoGroups ? photoGroups.length : 0;
    const columnClass = columnClasses[columnSize];

    return (
        <div className="-ml-2 -mb-2 flex flex-row flex-wrap">
            {photoGroups?.map((row, index) => (
                <div key={index} className={`self-start pl-2 ${columnClass}`}>
                    {row.map((photo, index2) => {
                        const padding = (photo.fullSize.height / maxSize) * 100;

                        return (
                            <div
                                className="mb-2 h-0 w-full overflow-hidden"
                                key={index2}
                                style={{paddingBottom: `${padding}%`}}
                            >
                                <div
                                    className={clsx({
                                        'mt-[-8%]': photo.fullSize.height > photo.fullSize.width
                                    })}
                                >
                                    <PhotoThumbnail
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
            ))}
        </div>
    );
};

export default PhotosCollection;
