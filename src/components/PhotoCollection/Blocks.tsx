import Column from '@/components/PhotoCollection/Column';
import Grid from '@/components/PhotoCollection/Grid';
import Condition from '@/components/UI/Condition';
import {type PhotoBlock, type PhotoBlockComponent} from '@/types/photo-blocks';

interface Props {
    blocks: PhotoBlock[];
    renderPhoto: (blockPhotos: number[], index: number) => React.ReactNode;
}

const FourInARow: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 0, 3)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 1, 3)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 2, 3)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 3, 3)}</Column>
    </Grid>
);

const LandscapeTwoBigFourSmall: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-12">{renderPhoto(photos, 0)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 2, 6)}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6">{renderPhoto(photos, 3, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 4, 6)}</Column>
                <Column className="col-span-12">{renderPhoto(photos, 5)}</Column>
            </Grid>
        </Column>
    </Grid>
);

const LandscapeOneBigTwoMedium: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto,
    reverse
}) => (
    <Grid>
        <Condition
            condition={reverse}
            fallbackWrapper={() => (
                <>
                    <Column className="col-span-12 md:col-span-8">
                        {renderPhoto(photos, 0, 8)}
                    </Column>
                    <Column className="col-span-12 h-full md:col-span-4">
                        <div className="flex h-full flex-row justify-between gap-4 md:flex-col">
                            {renderPhoto(photos, 1, 4)}
                            {renderPhoto(photos, 2, 4)}
                        </div>
                    </Column>
                </>
            )}
            wrapper={() => (
                <>
                    <Column className="col-span-12 h-full md:col-span-4">
                        <div className="flex h-full flex-row justify-between gap-4 md:flex-col">
                            {renderPhoto(photos, 0, 4)}
                            {renderPhoto(photos, 1, 4)}
                        </div>
                    </Column>
                    <Column className="col-span-12 md:col-span-8">
                        {renderPhoto(photos, 2, 8)}
                    </Column>
                </>
            )}
        />
    </Grid>
);

const LandscapeTwoBigTwoSmall: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">{renderPhoto(photos, 0, 6)}</Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6 md:col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                <Column className="col-span-6 md:col-span-6">{renderPhoto(photos, 2, 6)}</Column>
                <Column className="col-span-12 md:col-span-12">{renderPhoto(photos, 3)}</Column>
            </Grid>
        </Column>
    </Grid>
);

const LandscapeTwoBigTwoMediumFourSmall: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-12">{renderPhoto(photos, 0)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 1, 3)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 2, 3)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 3, 3)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 4, 3)}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6">{renderPhoto(photos, 5, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 6, 6)}</Column>
                <Column className="col-span-12">{renderPhoto(photos, 7)}</Column>
            </Grid>
        </Column>
    </Grid>
);

const OneLandScapeTwoPortrait: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 md:col-span-6">{renderPhoto(photos, 0, 6)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 1, 3)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 2, 3)}</Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid className="place-items-end">
        <Column className="col-span-6">
            <Grid>
                <Column className="col-span-6">{renderPhoto(photos, 0, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                <Column className="col-span-12">{renderPhoto(photos, 2)}</Column>
            </Grid>
        </Column>
        <Column className="col-span-6">{renderPhoto(photos, 3, 6)}</Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumFourLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid>
        <Column className="col-span-12 flex h-full flex-col justify-between gap-4 md:col-span-6">
            <Grid gridCols="grid-cols-12">
                <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 2, 6)}</Column>
            </Grid>
            <Grid gridCols="grid-cols-12">
                <Column className="col-span-12">{renderPhoto(photos, 3)}</Column>
            </Grid>
            <Grid gridCols="grid-cols-12">
                <Column className="col-span-6">{renderPhoto(photos, 4, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 5, 6)}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">{renderPhoto(photos, 0, 6)}</Column>
    </Grid>
);

const OnePortraitTwoLandscape: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-6">{renderPhoto(photos, 0, 6)}</Column>
        <Column className="col-span-6 h-full">
            <div className="flex h-full flex-col justify-between">
                {renderPhoto(photos, 1, 6)}
                {renderPhoto(photos, 2, 6)}
            </div>
        </Column>
    </Grid>
);

const OnePortraitTwoLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 md:col-span-6">{renderPhoto(photos, 0, 6)}</Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid>
                <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 2, 6)}</Column>
                <Column className="col-span-12">{renderPhoto(photos, 3)}</Column>
                <Column className="col-span-12">{renderPhoto(photos, 4)}</Column>
            </Grid>
        </Column>
    </Grid>
);

const OnePortraitTwoTopAndBottomLandscape: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid className="mx-auto">
        <Column className="order-1 col-span-6 md:order-1 md:col-span-4">
            {renderPhoto(photos, 0, 4)}
        </Column>
        <Column className="order-2 col-span-6 md:order-1 md:col-span-4">
            {renderPhoto(photos, 1, 4)}
        </Column>
        <Column className="order-1 col-span-6 self-end md:order-1 md:col-span-4">
            {renderPhoto(photos, 2, 4)}
        </Column>
    </Grid>
);

const SixInARow: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-4 md:col-span-2">{renderPhoto(photos, 0, 2)}</Column>
        <Column className="col-span-4 md:col-span-2">{renderPhoto(photos, 1, 2)}</Column>
        <Column className="col-span-4 md:col-span-2">{renderPhoto(photos, 2, 2)}</Column>
        <Column className="col-span-4 md:col-span-2">{renderPhoto(photos, 3, 2)}</Column>
        <Column className="col-span-4 md:col-span-2">{renderPhoto(photos, 4, 2)}</Column>
        <Column className="col-span-4 md:col-span-2">{renderPhoto(photos, 5, 2)}</Column>
    </Grid>
);

const ThreeInARow: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-4">{renderPhoto(photos, 0, 4)}</Column>
        <Column className="col-span-6 md:col-span-4">{renderPhoto(photos, 1, 4)}</Column>
        <Column className="col-span-6 md:col-span-4">{renderPhoto(photos, 2, 4)}</Column>
    </Grid>
);

const ThreeInARowWithPadding: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid className="md:px-20">
        <Column className="col-span-12 md:col-span-4">{renderPhoto(photos, 0, 4)}</Column>
        <Column className="col-span-6 md:col-span-4">{renderPhoto(photos, 1, 4)}</Column>
        <Column className="col-span-6 md:col-span-4">{renderPhoto(photos, 2, 4)}</Column>
    </Grid>
);

const TwoInARow: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-6">{renderPhoto(photos, 0, 6)}</Column>
        <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
    </Grid>
);

const TwoInARowWithPadding: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="hidden md:col-span-1 md:block" />
        <Column className="col-span-6 md:col-span-5">{renderPhoto(photos, 0, 5)}</Column>
        <Column className="col-span-6 md:col-span-5">{renderPhoto(photos, 1, 5)}</Column>
        <Column className="hidden md:col-span-1 md:block" />
    </Grid>
);

const TwoPortraitOneLandscapeWithPadding: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid className="place-items-center">
        <Column className="col-span-3 flex h-full items-center">{renderPhoto(photos, 0, 3)}</Column>
        <Column className="col-span-3 flex h-full items-center">{renderPhoto(photos, 1, 3)}</Column>
        <Column className="col-span-6 flex h-full">
            <div className="mx-auto flex w-full max-w-[80%] items-center justify-center">
                {renderPhoto(photos, 2, 6)}
            </div>
        </Column>
    </Grid>
);

export type PhotoBlockLayout = keyof typeof layouts;

const layouts: Partial<Record<string, React.FC<any>>> = {
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

const PhotoCollectionBlocks: React.FC<Props> = ({blocks, renderPhoto}) => (
    <div className="space-y-4 lg:space-y-6 2xl:space-y-12">
        {blocks.map((block, index) => {
            const Layout = layouts[block.layout];
            if (!Layout) return null;
            return (
                <Layout
                    key={`${index}-${block.layout}`}
                    photos={block.photos}
                    renderPhoto={renderPhoto}
                    {...block.props}
                />
            );
        })}
    </div>
);

export default PhotoCollectionBlocks;
