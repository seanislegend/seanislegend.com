import PhotoCollectionBlocks from '@/components/PhotoCollection/Blocks';
import Column from './Column';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';
import {layouts} from './layouts';

interface Props extends Pick<PhotoCollection, 'photosCollection' | 'slug' | 'title'> {
    linksTo?: 'collection' | 'photo';
}

interface CustomLayoutProps {
    renderPhoto: (index: number, fillContainer?: boolean) => React.ReactNode;
}

const PhotosCollection: React.FC<Props> = ({linksTo = 'photo', photosCollection, slug}) => {
    const photos = photosCollection.items;
    const layout = layouts?.[slug];

    const renderPhoto = (index: number, fillContainer?: boolean) => {
        if (!photos[index]) return null;

        let path = `/${photos[index].collection || slug}`;

        if (linksTo === 'photo') {
            path = `${path}/${photos[index].slug}#photo`;
        } else {
            path = `${path}#${photos[index].slug}`;
        }

        return (
            <PhotoThumbnail
                base64={photos[index].base64}
                fill={fillContainer}
                linksTo={linksTo}
                path={path}
                slug={photos[index].slug}
                title={photos[index].title}
                thumbnail={photos[index].thumbnail}
            />
        );
    };

    return (
        <div className="animate-in animate-out slide-in-from-bottom-4 fill-mode-forwards mx-4 opacity-0 delay-100 duration-500 md:mx-8">
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
