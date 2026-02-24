'use client';

import AllTagsList from '@/components/SiteMenu/AllTagsList';
import Container from '@/components/UI/Container';
import type {PhotoSlotComponentType} from '@/types/photo-blocks';
import PhotoCollectionBlocks, {ContentSection} from './Blocks';
import Column from './Column';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';
import {layouts} from './layouts';

interface BlockPhotoProps {
    blockPhotos: number[];
    columnSize?: number;
    fillContainer?: boolean;
    index: number;
    layoutType?: 'editorial' | 'photos' | (string & {});
    linksTo: 'collection' | 'photo';
    photos: Photo[];
    slug: string;
}

interface TagsSectionProps {
    tags: TagListItem[];
}

const TagsSection: React.FC<TagsSectionProps> = ({tags}) => {
    if (!tags.length) return null;
    return (
        <Container className="my-8 px-0!" key="tags">
            <AllTagsList items={tags} />
        </Container>
    );
};

const BlockPhoto: React.FC<BlockPhotoProps> = ({
    blockPhotos,
    columnSize,
    fillContainer,
    index,
    layoutType,
    linksTo,
    photos,
    slug
}) => {
    const photo = photos[blockPhotos[index]];
    if (!photo) return null;
    const priority = blockPhotos[index] === 0;
    let path = '';
    if (layoutType !== 'editorial') {
        path = `/${photo.collection || slug}`;
        if (linksTo === 'photo') path = `${path}/${photo.slug}#photo`;
        else path = `${path}#${photo.slug}`;
    }
    return (
        <PhotoThumbnail
            base64={photo.base64}
            columnSize={columnSize}
            fill={fillContainer}
            id={photo.sys?.id}
            linksTo={linksTo}
            path={path}
            priority={priority}
            slug={photo.slug}
            thumbnail={photo.thumbnail}
            title={photo.title}
        />
    );
};

interface Props
    extends Pick<
        PhotoCollection,
        | 'contentSectionsCollection'
        | 'layoutType'
        | 'photosCollection'
        | 'slug'
        | 'tagsCollection'
        | 'title'
    > {
    linksTo?: 'collection' | 'photo';
}

const PhotosCollection: React.FC<Props> = ({
    contentSectionsCollection,
    layoutType,
    linksTo = 'photo',
    photosCollection,
    tagsCollection,
    slug
}) => {
    const photos = photosCollection.items;
    const sections = contentSectionsCollection?.items || [];
    const tags = tagsCollection?.items || [];
    const layout = layouts?.[slug];
    const layoutWithTags = layout ? [...layout, {layout: 'Tags'}] : null;
    const photoIndices = photos.map((_, i) => i);

    const renderSection = (index: number | string) => {
        const section =
            typeof index === 'number'
                ? sections[index]
                : sections.find(section => section.id === index);
        if (!section) return null;

        return <ContentSection key={section.title} {...section} />;
    };

    return (
        <div className="animate-in animate-out fill-mode-forwards mx-4 opacity-0 transition-opacity delay-100 duration-500 md:mx-8">
            {layout ? (
                <PhotoCollectionBlocks
                    blocks={layoutWithTags ?? layout}
                    photoSlotProps={{layoutType, linksTo, photos, slug}}
                    PhotoSlot={BlockPhoto as unknown as PhotoSlotComponentType}
                    renderSection={renderSection}
                    renderTags={() => <TagsSection tags={tags} />}
                />
            ) : (
                <>
                    <Grid>
                        {photos.map((photo, index) => (
                            <Column
                                key={photo.slug}
                                className="col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2"
                            >
                                <BlockPhoto
                                    blockPhotos={photoIndices}
                                    index={index}
                                    layoutType={layoutType}
                                    linksTo={linksTo}
                                    photos={photos}
                                    slug={slug}
                                />
                            </Column>
                        ))}
                    </Grid>
                    <TagsSection tags={tags} />
                </>
            )}
        </div>
    );
};

export default PhotosCollection;
