'use client';

import {useMemo, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Button from '@/components/Button';
import {layouts} from '@/components/PhotoCollection/layouts';

type SortOption = 'index' | 'title';

interface Props {
    collection: PhotoCollection;
}

const PhotosCollectionAdminTools: React.FC<Props> = ({collection}) => {
    const [isActive, setIsActive] = useState(false);
    const [sortBy, setSortBy] = useState<SortOption>('index');

    const layout = layouts?.[collection.slug];

    const photos = useMemo(
        () => collection?.photosCollection?.items || [],
        [collection?.photosCollection?.items]
    );

    // sort photos based on current sort option
    const sortedPhotos = useMemo(() => {
        if (sortBy === 'title') {
            return [...photos].sort((a, b) => a.title.localeCompare(b.title));
        }
        return photos; // default to index order
    }, [photos, sortBy]);

    const usedPhotos = layout?.flatMap(item => {
        if (item.theme && item.items) {
            return item.items.flatMap(themeItem => themeItem.photos || []);
        }
        return item.photos || [];
    });

    return (
        <div className="fixed bottom-0 z-50 flex max-h-[30vh] w-full flex-col gap-4 overflow-y-auto border-4 border-black/40 bg-black p-4 text-white shadow-xl">
            <div className="flex items-center justify-between">
                <Button onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Hide' : 'Show'} tools
                </Button>
                {isActive && (
                    <div className="flex items-center gap-4">
                        <span className="text-sm">Sort by:</span>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => setSortBy('index')}
                                theme={sortBy === 'index' ? 'primary' : 'secondary'}
                            >
                                Index
                            </Button>
                            <Button
                                onClick={() => setSortBy('title')}
                                theme={sortBy === 'title' ? 'primary' : 'secondary'}
                            >
                                Title
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            {isActive && (
                <div className="grid w-full grid-cols-12 gap-4">
                    {sortedPhotos.map((photo, sortedIndex) => {
                        const originalIndex = photos.findIndex(p => p.slug === photo.slug);
                        return (
                            <div key={photo.slug} className="relative col-span-1">
                                <Image
                                    alt={photo.title}
                                    className={clsx({
                                        'opacity-30': usedPhotos?.includes(originalIndex)
                                    })}
                                    height={200}
                                    width={200}
                                    src={photo.thumbnail.url}
                                />
                                <div className="absolute top-2 left-2 bg-black/60 p-1">
                                    {originalIndex}
                                </div>
                                {sortBy === 'title' && (
                                    <div className="absolute right-2 bottom-2 left-2 bg-black/60 p-1 text-xs">
                                        {photo.title}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PhotosCollectionAdminTools;
