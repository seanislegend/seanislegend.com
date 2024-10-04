import Column from './Column';
import AdnamsCustomLayout from './CustomLayouts/Adnams';
import BRollCustomLayout from './CustomLayouts/BRoll';
import HomeCustomLayout from './CustomLayouts/Home';
import HukinsHopsCustomLayout from './CustomLayouts/HukinsHops';
import IcelandCustomLayout from './CustomLayouts/Iceland';
import JWLeesCustomLayout from './CustomLayouts/JWLees';
import LochLomondCustomLayout from './CustomLayouts/LochLomond';
import PortoCustomLayout from './CustomLayouts/Porto';
import PrizeOldAleCustomLayout from './CustomLayouts/PrizeOldAle';
import SeaSideCustomLayout from './CustomLayouts/SeaSide';
import TyntMeadowCustomLayout from './CustomLayouts/TyntMeadow';
import UppersAndDownersCustomLayout from './CustomLayouts/UppersAndDowners';
import Grid from './Grid';
import PhotoThumbnail from './Thumbnail';

type Props = Pick<PhotoCollection, 'photosCollection' | 'slug'>;

export interface CustomLayoutProps {
    renderPhoto: (index: number, fillContainer?: boolean) => React.ReactNode;
}

const PhotosCollection: React.FC<Props> = ({photosCollection, slug}) => {
    const photos = photosCollection.items;

    const renderPhoto = (index: number, fillContainer?: boolean) => {
        if (!photos[index]) return null;

        return (
            <PhotoThumbnail
                base64={photos[index].base64}
                fill={fillContainer}
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
        'good-beer-hunting-b-roll': BRollCustomLayout,
        home: HomeCustomLayout,
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
        <div className="mx-4 space-y-4 opacity-0 delay-100 duration-500 animate-in animate-out slide-in-from-bottom-4 fill-mode-forwards md:mx-8 lg:space-y-6 2xl:space-y-12">
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
