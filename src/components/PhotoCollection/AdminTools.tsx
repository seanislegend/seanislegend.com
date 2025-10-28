'use client';

import {useMemo, useState} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Button from '@/components/Button';
import {layouts} from '@/components/PhotoCollection/layouts';

type SortOption = 'index' | 'title';
type PhotoFilter = 'all' | 'used' | 'unused';

interface Props {
    collection: PhotoCollection;
}

const PhotosCollectionAdminTools: React.FC<Props> = ({collection}) => {
    const [isActive, setIsActive] = useState(false);
    const [sortBy, setSortBy] = useState<SortOption>('index');
    const [filterText, setFilterText] = useState('');
    const [photoFilter, setPhotoFilter] = useState<PhotoFilter>('all');

    const layout = layouts?.[collection.slug];

    const photos = useMemo(
        () => collection?.photosCollection?.items || [],
        [collection?.photosCollection?.items]
    );

    // sort and filter photos based on current options
    const sortedPhotos = useMemo(() => {
        let filtered = photos;

        // filter by title if filter text is provided
        if (filterText.trim()) {
            filtered = photos.filter(photo =>
                photo.title.toLowerCase().includes(filterText.toLowerCase())
            );
        }

        // filter by photo usage
        if (photoFilter !== 'all') {
            const usedPhotoIndices =
                layout?.flatMap(item => {
                    if (item.theme && item.items) {
                        return item.items.flatMap(themeItem => themeItem.photos || []);
                    }
                    return item.photos || [];
                }) || [];

            filtered = filtered.filter((photo, index) => {
                const isUsed = usedPhotoIndices.includes(index);
                return photoFilter === 'used' ? isUsed : !isUsed;
            });
        }

        // sort based on current sort option
        if (sortBy === 'title') {
            return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        }
        return filtered; // default to index order
    }, [photos, sortBy, filterText, photoFilter, layout]);

    const usedPhotos = layout?.flatMap(item => {
        if (item.theme && item.items) {
            return item.items.flatMap(themeItem => themeItem.photos || []);
        }
        return item.photos || [];
    });
    console.log(usedPhotos.sort());

    return (
        <div className="fixed bottom-0 z-50 flex max-h-[35vh] w-full flex-col gap-4 overflow-y-auto border-4 border-black/40 bg-black/90 px-4 text-white shadow-xl">
            <div className="sticky top-0 z-20 flex items-center justify-between bg-black/90 py-2">
                <Button onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Hide' : 'Show'} tools
                </Button>
                {isActive && (
                    <div className="flex items-center gap-4 space-x-4 divide-x divide-white/40">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Search:</span>
                            <input
                                className="rounded border border-white/20 bg-black/40 px-2 py-1 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                                onChange={e => setFilterText(e.target.value)}
                                placeholder="Search titles..."
                                type="search"
                                value={filterText}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Filter:</span>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => setPhotoFilter('all')}
                                    theme={photoFilter === 'all' ? 'primary' : 'secondary'}
                                >
                                    All
                                </Button>
                                <Button
                                    onClick={() => setPhotoFilter('used')}
                                    theme={photoFilter === 'used' ? 'primary' : 'secondary'}
                                >
                                    Used
                                </Button>
                                <Button
                                    onClick={() => setPhotoFilter('unused')}
                                    theme={photoFilter === 'unused' ? 'primary' : 'secondary'}
                                >
                                    Unused
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
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
                    </div>
                )}
            </div>
            {isActive && (
                <div className="grid w-full grid-cols-12 gap-4 py-4">
                    {sortedPhotos.map((photo, sortedIndex) => {
                        const originalIndex = photos.findIndex(p => p.sys?.id === photo.sys?.id);
<<<<<<< HEAD

                        return (
                            <div
                                key={`${photo.sys?.id} - ${originalIndex}`}
=======
                        console.log(originalIndex);

                        return (
                            <div
                                key={`${photo.slug}-${originalIndex}`}
>>>>>>> 989254c (fix: Admin tools UI fixes)
                                className="relative col-span-1"
                            >
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
                                <div className="absolute right-2 bottom-2 left-2 bg-black/60 p-1 text-xs">
                                    {photo.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PhotosCollectionAdminTools;
