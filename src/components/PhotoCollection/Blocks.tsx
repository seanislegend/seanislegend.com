import Column from '@/components/PhotoCollection/Column';
import Grid from '@/components/PhotoCollection/Grid';
import Condition from '@/components/UI/Condition';

interface Props {
    blocks: PhotoBlock[];
    renderPhoto: (index: number) => React.ReactNode;
}

const FourInARow: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-6 md:col-span-3">{photos[0]}</Column>
        <Column className="col-span-6 md:col-span-3">{photos[1]}</Column>
        <Column className="col-span-6 md:col-span-3">{photos[2]}</Column>
        <Column className="col-span-6 md:col-span-3">{photos[3]}</Column>
    </Grid>
);

const LandscapeTwoBigFourSmall: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-12">{photos[0]}</Column>
                <Column className="col-span-6">{photos[1]}</Column>
                <Column className="col-span-6">{photos[2]}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6">{photos[3]}</Column>
                <Column className="col-span-6">{photos[4]}</Column>
                <Column className="col-span-12">{photos[5]}</Column>
            </Grid>
        </Column>
    </Grid>
);

const LandscapeOneBigTwoMedium: React.FC<PhotoBlockComponent> = ({photos, reverse}) => (
    <Grid>
        <Condition
            condition={reverse}
            fallbackWrapper={() => (
                <>
                    <Column className="col-span-12 md:col-span-8">{photos[0]}</Column>
                    <Column className="col-span-12 h-full md:col-span-4">
                        <div className="flex h-full flex-row justify-between gap-4 md:flex-col">
                            {photos[1]}
                            {photos[2]}
                        </div>
                    </Column>
                </>
            )}
            wrapper={() => (
                <>
                    <Column className="col-span-12 h-full md:col-span-4">
                        <div className="flex h-full flex-row justify-between gap-4 md:flex-col">
                            {photos[0]}
                            {photos[1]}
                        </div>
                    </Column>
                    <Column className="col-span-12 md:col-span-8">{photos[2]}</Column>
                </>
            )}
        />
    </Grid>
);

const LandscapeTwoBigTwoSmall: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">{photos[0]}</Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6 md:col-span-6">{photos[1]}</Column>
                <Column className="col-span-6 md:col-span-6">{photos[2]}</Column>
                <Column className="col-span-12 md:col-span-12">{photos[3]}</Column>
            </Grid>
        </Column>
    </Grid>
);

const LandscapeTwoBigTwoMediumFourSmall: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-12">{photos[0]}</Column>
                <Column className="col-span-6 md:col-span-3">{photos[1]}</Column>
                <Column className="col-span-6 md:col-span-3">{photos[2]}</Column>
                <Column className="col-span-6 md:col-span-3">{photos[3]}</Column>
                <Column className="col-span-6 md:col-span-3">{photos[4]}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6">{photos[5]}</Column>
                <Column className="col-span-6">{photos[6]}</Column>
                <Column className="col-span-12">{photos[7]}</Column>
            </Grid>
        </Column>
    </Grid>
);

const OneLandScapeTwoPortrait: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 md:col-span-6">{photos[0]}</Column>
        <Column className="col-span-6 md:col-span-3">{photos[1]}</Column>
        <Column className="col-span-6 md:col-span-3">{photos[2]}</Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="col-span-6">
            <Grid>
                <Column className="col-span-6">{photos[0]}</Column>
                <Column className="col-span-6">{photos[1]}</Column>
                <Column className="col-span-12">{photos[2]}</Column>
            </Grid>
        </Column>
        <Column className="col-span-6">{photos[3]}</Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumFourLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos
}) => (
    <Grid>
        <Column className="col-span-12 flex h-full flex-col justify-between gap-4 md:col-span-6">
            <Grid gridCols="grid-cols-12">
                <Column className="col-span-6">{photos[1]}</Column>
                <Column className="col-span-6">{photos[2]}</Column>
            </Grid>
            <Grid gridCols="grid-cols-12">
                <Column className="col-span-12">{photos[3]}</Column>
            </Grid>
            <Grid gridCols="grid-cols-12">
                <Column className="col-span-6">{photos[4]}</Column>
                <Column className="col-span-6">{photos[5]}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">{photos[0]}</Column>
    </Grid>
);

const OnePortraitTwoLandscape: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-6">{photos[0]}</Column>
        <Column className="col-span-6 h-full">
            <div className="flex h-full flex-col justify-between">
                {photos[1]}
                {photos[2]}
            </div>
        </Column>
    </Grid>
);

const OnePortraitTwoLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 md:col-span-6">{photos[0]}</Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6">{photos[1]}</Column>
                <Column className="col-span-6">{photos[2]}</Column>
                <Column className="col-span-12">{photos[3]}</Column>
                <Column className="col-span-12">{photos[4]}</Column>
            </Grid>
        </Column>
    </Grid>
);

const OnePortraitTwoTopAndBottomLandscape: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid className="mx-auto">
        <Column className="order-1 col-span-6 md:order-1 md:col-span-4">{photos[0]}</Column>
        <Column className="order-2 col-span-6 md:order-1 md:col-span-4">{photos[1]}</Column>
        <Column className="order-1 col-span-6 self-end md:order-1 md:col-span-4">
            {photos[2]}
        </Column>
    </Grid>
);

const SixInARow: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-4 md:col-span-2">{photos[0]}</Column>
        <Column className="col-span-4 md:col-span-2">{photos[1]}</Column>
        <Column className="col-span-4 md:col-span-2">{photos[2]}</Column>
        <Column className="col-span-4 md:col-span-2">{photos[3]}</Column>
        <Column className="col-span-4 md:col-span-2">{photos[4]}</Column>
        <Column className="col-span-4 md:col-span-2">{photos[5]}</Column>
    </Grid>
);

const ThreeInARow: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-4">{photos[0]}</Column>
        <Column className="col-span-6 md:col-span-4">{photos[1]}</Column>
        <Column className="col-span-6 md:col-span-4">{photos[2]}</Column>
    </Grid>
);

const ThreeInARowWithPadding: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid className="md:px-20">
        <Column className="col-span-12 md:col-span-4">{photos[0]}</Column>
        <Column className="col-span-6 md:col-span-4">{photos[1]}</Column>
        <Column className="col-span-6 md:col-span-4">{photos[2]}</Column>
    </Grid>
);

const TwoInARow: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="col-span-6">{photos[0]}</Column>
        <Column className="col-span-6">{photos[1]}</Column>
    </Grid>
);

const TwoInARowWithPadding: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid>
        <Column className="hidden md:col-span-1 md:block" />
        <Column className="col-span-6 md:col-span-5">{photos[0]}</Column>
        <Column className="col-span-6 md:col-span-5">{photos[1]}</Column>
        <Column className="hidden md:col-span-1 md:block" />
    </Grid>
);

const TwoPortraitOneLandscapeWithPadding: React.FC<PhotoBlockComponent> = ({photos}) => (
    <Grid className="place-items-center">
        <Column className="col-span-3">{photos[0]}</Column>
        <Column className="col-span-3">{photos[1]}</Column>
        <Column className="col-span-6">
            <div className="mx-auto flex w-full max-w-[80%] items-center justify-center">
                {photos[2]}
            </div>
        </Column>
    </Grid>
);

const PhotoCollectionBlocks: React.FC<Props> = ({blocks, renderPhoto}) => {
    const layouts: Partial<Record<PhotoBlockLayout, React.FC<any>>> = {
        FourInARow,
        LandscapeOneBigTwoMedium,
        LandscapeTwoBigFourSmall,
        LandscapeTwoBigTwoSmall,
        LandscapeTwoBigTwoMediumFourSmall,
        OneLandScapeTwoPortrait,
        OnePortraitOneLandscapeMediumTwoLandscapeSmall,
        OnePortraitOneLandscapeMediumFourLandscapeSmall,
        OnePortraitTwoLandscape,
        OnePortraitTwoLandscapeMediumTwoLandscapeSmall,
        OnePortraitTwoTopAndBottomLandscape,
        SixInARow,
        ThreeInARow,
        ThreeInARowWithPadding,
        TwoInARow,
        TwoInARowWithPadding,
        TwoPortraitOneLandscapeWithPadding
    };

    return (
        <div className="space-y-4 lg:space-y-6 2xl:space-y-12">
            {blocks.map(block => {
                const Layout = layouts[block.layout];
                if (!Layout) return null;
                return (
                    <Layout
                        key={block.layout}
                        photos={block.photos.map(photo => renderPhoto(photo))}
                        {...block.props}
                    />
                );
            })}
        </div>
    );
};

export default PhotoCollectionBlocks;
