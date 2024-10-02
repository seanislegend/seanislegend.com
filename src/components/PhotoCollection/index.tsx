import HukinsHopsCustomLayout from '@/components/PhotoCollection/CustomLayouts/HukinsHops';
import PrizeOldAleCustomLayout from '@/components/PhotoCollection/CustomLayouts/PrizeOldAle';
import Column from './Column';
import TyntMeadowCustomLayout from './CustomLayouts/TyntMeadow';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';

type Props = Pick<PhotoCollection, 'photosCollection' | 'slug'>;

export interface CustomLayoutProps {
    renderPhoto: (index: number) => React.ReactNode;
}

const PhotosCollection: React.FC<Props> = ({photosCollection, slug}) => {
    const photos = photosCollection.items;

    const renderPhoto = (index: number) => (
        <PhotoThumbnail
            base64={photos[index].base64}
            path={`/${photos[index].collection || slug}/${photos[index].slug}`}
            slug={photos[index].slug}
            title={photos[index].title}
            thumbnail={photos[index].thumbnail}
        />
    );

    const customLayouts: Record<string, React.FC<CustomLayoutProps>> = {
        'dark-star-gales-prize-old-ale': PrizeOldAleCustomLayout,
        'hukins-hops-annual-hop-harvest': HukinsHopsCustomLayout,
        'tynt-meadow-trappist-ale': TyntMeadowCustomLayout
    };
    const CustomLayout = customLayouts?.[slug];

    if (CustomLayout) {
        return <CustomLayout renderPhoto={renderPhoto} />;
    }

    return (
        <div className="mx-4 space-y-10 md:mx-8">
            <Grid>
                {photos.map((photo, index) => (
                    <Column key={photo.slug} span={3}>
                        {renderPhoto(index)}
                    </Column>
                ))}
            </Grid>
        </div>
    );
};

export default PhotosCollection;
