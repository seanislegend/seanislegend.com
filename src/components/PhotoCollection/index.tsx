import AdnamsCustomLayout from '@/components/PhotoCollection/CustomLayouts/Adnams';
import LochLomondCustomLayout from '@/components/PhotoCollection/CustomLayouts/LochLomond';
import PortoCustomLayout from '@/components/PhotoCollection/CustomLayouts/Porto';
import SeaSideCustomLayout from '@/components/PhotoCollection/CustomLayouts/SeaSide';
import UppersAndDownersCustomLayout from '@/components/PhotoCollection/CustomLayouts/UppersAndDowners';
import Column from './Column';
import HukinsHopsCustomLayout from './CustomLayouts/HukinsHops';
import IcelandCustomLayout from './CustomLayouts/Iceland';
import JWLeesCustomLayout from './CustomLayouts/JWLees';
import PrizeOldAleCustomLayout from './CustomLayouts/PrizeOldAle';
import TyntMeadowCustomLayout from './CustomLayouts/TyntMeadow';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';

type Props = Pick<PhotoCollection, 'photosCollection' | 'slug'>;

export interface CustomLayoutProps {
    renderPhoto: (index: number) => React.ReactNode;
}

const PhotosCollection: React.FC<Props> = ({photosCollection, slug}) => {
    const photos = photosCollection.items;

    const renderPhoto = (index: number) => {
        if (!photos[index]) return null;

        return (
            <PhotoThumbnail
                base64={photos[index].base64}
                path={`/${photos[index].collection || slug}/${photos[index].slug}`}
                slug={photos[index].slug}
                title={photos[index].title}
                thumbnail={photos[index].thumbnail}
            />
        );
    };

    const customLayouts: Record<string, React.FC<CustomLayoutProps>> = {
        'adnams-brewery-southwold': AdnamsCustomLayout,
        'at-the-seaside': SeaSideCustomLayout,
        'dark-star-gales-prize-old-ale': PrizeOldAleCustomLayout,
        'hukins-hops-annual-hop-harvest': HukinsHopsCustomLayout,
        'iceland-on-film': IcelandCustomLayout,
        'loch-lomond': LochLomondCustomLayout,
        porto: PortoCustomLayout,
        'jw-lees-harvest-ale': JWLeesCustomLayout,
        'tynt-meadow-trappist-ale': TyntMeadowCustomLayout,
        'uppers-and-downers-coffee-and-beer-festival': UppersAndDownersCustomLayout
    };
    const CustomLayout = customLayouts?.[slug];

    return (
        <div className="mx-4 space-y-4 md:mx-8 lg:space-y-6 2xl:space-y-12">
            {CustomLayout ? (
                <CustomLayout renderPhoto={renderPhoto} />
            ) : (
                <Grid>
                    {photos.map((photo, index) => (
                        <Column key={photo.slug} span={4}>
                            {renderPhoto(index)}
                        </Column>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default PhotosCollection;
