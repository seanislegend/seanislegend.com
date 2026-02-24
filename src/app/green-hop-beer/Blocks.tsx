'use client';

import PhotoCollectionBlocks, {ContentSection} from '@/components/PhotoCollection/Blocks';
import PhotoThumbnail from '@/components/PhotoCollection/Thumbnail';
import {type PhotoBlock, type PhotoSlotProps} from '@/types/photo-blocks';

interface Props {
    layout: PhotoBlock;
    photos: Photo[];
    sections: ContentSection[];
}

const GreenHopPhotoSlot: React.FC<PhotoSlotProps> = ({
    blockPhotos,
    columnSize,
    index,
    photos
}) => {
    const photo = photos[blockPhotos[index]];
    if (!photo) return null;
    return (
        <PhotoThumbnail
            alt={photo.thumbnail?.description}
            base64={photo.base64}
            columnSize={columnSize}
            id={photo.sys?.id}
            path=""
            slug={photo.slug}
            title={photo.title}
            thumbnail={photo.thumbnail}
        />
    );
};

const GreenHopBlocks: React.FC<Props> = ({layout, photos, sections}) => {
    const renderSection = (index: number | string) => {
        const section = sections.find(s => s.id === index);
        if (!section) return null;
        return <ContentSection key={section.id ?? section.title} {...section} />;
    };

    const blocks = layout.items ?? [];

    return (
        <PhotoCollectionBlocks
            blocks={blocks}
            photoSlotProps={{photos}}
            PhotoSlot={GreenHopPhotoSlot}
            renderSection={renderSection}
        />
    );
};

export default GreenHopBlocks;
