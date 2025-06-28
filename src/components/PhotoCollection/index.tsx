import AllTagsList from '@/components/SiteMenu/AllTagsList';
import PhotoCollectionBlocks, {ContentSection} from './Blocks';
import Column from './Column';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';
import {layouts} from './layouts';

interface Props
    extends Pick<
        PhotoCollection,
        'contentSectionsCollection' | 'photosCollection' | 'slug' | 'tagsCollection' | 'title'
    > {
    linksTo?: 'collection' | 'photo';
}

const PhotosCollection: React.FC<Props> = ({
    contentSectionsCollection,
    linksTo = 'photo',
    photosCollection,
    tagsCollection,
    slug
}) => {
    const photos = photosCollection.items;
    const sections = contentSectionsCollection?.items || [];
    const tags = tagsCollection?.items || [];
    const layout = layouts?.[slug];

    const renderPhoto = (
        blockPhotos: number[],
        index: number,
        columnSize?: number,
        fillContainer?: boolean
    ) => {
        const photo = photos[blockPhotos[index]];
        if (!photo) return null;

        let path = `/${photo.collection || slug}`;

        if (linksTo === 'photo') {
            path = `${path}/${photo.slug}#photo`;
        } else {
            path = `${path}#${photo.slug}`;
        }

        return (
            <PhotoThumbnail
                base64={photo.base64}
                columnSize={columnSize}
                fill={fillContainer}
                linksTo={linksTo}
                path={path}
                slug={photo.slug}
                title={photo.title}
                thumbnail={photo.thumbnail}
            />
        );
    };

    const renderSection = (index: number) => {
        const section = sections[index];
        if (!section) return null;

        return <ContentSection key={section.title} {...section} />;
    };

    const renderTags = () => {
        if (!tags.length) return null;
        return (
            <Grid className="mb-8" gridCols="_" gridGap="_">
                <AllTagsList items={tags} />
            </Grid>
        );
    };

    return (
        <div className="animate-in animate-out fill-mode-forwards mx-4 opacity-0 delay-100 duration-500 md:mx-8">
            {layout ? (
                <PhotoCollectionBlocks
                    blocks={layout}
                    renderPhoto={renderPhoto}
                    renderSection={renderSection}
                    renderTags={renderTags}
                />
            ) : (
                <Grid>
                    {photos.map((photo, index) => (
                        <Column
                            key={photo.slug}
                            className="col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2"
                        >
                            {renderPhoto(
                                photos.map((_, i) => i),
                                index
                            )}
                        </Column>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default PhotosCollection;
