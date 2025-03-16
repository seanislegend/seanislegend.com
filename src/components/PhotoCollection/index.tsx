import PhotoCollectionBlocks from './Blocks';
import Column from './Column';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';
import {layouts} from './layouts';

interface Props extends Pick<PhotoCollection, 'photosCollection' | 'slug' | 'title'> {
    linksTo?: 'collection' | 'photo';
}

const PhotosCollection: React.FC<Props> = ({linksTo = 'photo', photosCollection, slug}) => {
    const photos = photosCollection.items;
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

    return (
        <div className="animate-in animate-out fill-mode-forwards mx-4 opacity-0 delay-100 duration-500 md:mx-8">
            {layout ? (
                <PhotoCollectionBlocks blocks={layout} renderPhoto={renderPhoto} />
            ) : (
                <Grid>
                    {photos.map((photo, index) => (
                        <Column key={photo.slug} className="col-span-6 md:col-span-4">
                            {renderPhoto(index)}
                        </Column>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default PhotosCollection;
