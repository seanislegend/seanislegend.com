'use client';

import {useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import {layouts} from '@/components/PhotoCollection/layouts';

interface Props {
    collection: PhotoCollection;
}

const PhotosCollectionAdminTools: React.FC<Props> = ({collection}) => {
    const [isActive, setIsActive] = useState(false);

    const layout = layouts?.[collection.slug];
    const usedPhotos = layout?.flatMap(item => item.photos);

    return (
        <div className="sticky bottom-0 flex max-h-[30vh] flex-row gap-20 overflow-y-auto border-4 border-black/40 bg-black p-4 text-white shadow-xl">
            <button className="sticky top-0 font-medium" onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Hide' : 'Show'} tools
            </button>
            {isActive && (
                <div className="grid w-full grid-cols-12 gap-4">
                    {collection?.photosCollection?.items.map((photo, index) => (
                        <div key={photo.slug} className="relative col-span-1">
                            <Image
                                alt={photo.title}
                                className={clsx({'opacity-30': usedPhotos?.includes(index)})}
                                height={200}
                                width={200}
                                src={photo.thumbnail.url}
                            />
                            <div className="absolute top-2 left-2 bg-black/60 p-1">{index}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PhotosCollectionAdminTools;
