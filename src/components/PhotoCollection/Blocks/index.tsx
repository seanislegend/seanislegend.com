import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import ButtonList from '@/components/Button/List';
import Markdown from '@/components/Markdown';
import Column from '@/components/PhotoCollection/Column';
import Grid from '@/components/PhotoCollection/Grid';
import Container from '@/components/UI/Container';
import {Heading2} from '@/components/UI/Headings';
import {
    type PhotoBlock,
    type PhotoBlockComponent,
    type PhotoSlotComponentType,
    type PhotoSlotProps,
    type SectionBlockComponent
} from '@/types/photo-blocks';

const CarouselPhotoBLock = dynamic(() => import('./Carousel'));

interface Props {
    blocks: PhotoBlock[];
    photoSlotProps: Omit<PhotoSlotProps, 'blockPhotos' | 'columnSize' | 'fillContainer' | 'index'>;
    PhotoSlot: PhotoSlotComponentType;
    renderSection: (section: number | string) => React.ReactNode;
    renderTags?: () => React.ReactNode;
}

const FourInARow: React.FC<PhotoBlockComponent> = ({photoSlotProps, PhotoSlot, photos}) => (
    <Grid>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={3} columnSize={3} {...photoSlotProps} />
        </Column>
    </Grid>
);

const GreenHopFeaturedOneLandScapeTwoPortrait: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="relative col-span-12 flex h-full overflow-hidden rounded md:col-span-6 md:md:[&_span]:h-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
            <Link
                href="/green-hop-beer"
                className="group absolute inset-0 z-50 flex items-end bg-linear-to-t from-[#2f3523]/70 to-transparent p-4 text-white transition-colors duration-300 ease-in-out hover:bg-[#2f3523]/40 md:p-6"
            >
                <div className="flex w-full flex-col md:gap-1">
                    <span className="lg:text-lg">
                        <strong>From Bine to Glass:</strong> <span>Brewing with Green Hops</span>
                    </span>
                    <span className="text-sm underline underline-offset-4 group-hover:decoration-2 md:text-base">
                        Read featured story
                    </span>
                </div>
            </Link>
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={3} {...photoSlotProps} />
        </Column>
    </Grid>
);

const LandscapeTwoBigFourSmall: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={0} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={2} columnSize={6} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={3} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={4} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={5} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
    </Grid>
);

const LandscapeOneBigTwoMedium: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos,
    reverse
}) => (
    <Grid>
        {reverse ? (
            <>
                <Column className="col-span-12 h-full md:col-span-4">
                    <div className="flex h-full flex-row justify-between gap-2 md:flex-col md:gap-4">
                        <PhotoSlot
                            blockPhotos={photos}
                            index={0}
                            columnSize={4}
                            {...photoSlotProps}
                        />
                        <PhotoSlot
                            blockPhotos={photos}
                            index={1}
                            columnSize={4}
                            {...photoSlotProps}
                        />
                    </div>
                </Column>
                <Column className="col-span-12 md:col-span-8">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={2}
                        columnSize={8}
                        {...photoSlotProps}
                    />
                </Column>
            </>
        ) : (
            <>
                <Column className="col-span-12 md:col-span-8">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={0}
                        columnSize={8}
                        {...photoSlotProps}
                    />
                </Column>
                <Column className="col-span-12 h-full md:col-span-4">
                    <div className="flex h-full flex-row justify-between gap-2 md:flex-col md:gap-4">
                        <PhotoSlot
                            blockPhotos={photos}
                            index={1}
                            columnSize={4}
                            {...photoSlotProps}
                        />
                        <PhotoSlot
                            blockPhotos={photos}
                            index={2}
                            columnSize={4}
                            {...photoSlotProps}
                        />
                    </div>
                </Column>
            </>
        )}
    </Grid>
);

const LandscapeTwoBigTwoSmall: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="top-site-header sticky col-span-12 md:col-span-6">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-6 md:col-span-6">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 md:col-span-6">
                    <PhotoSlot blockPhotos={photos} index={2} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12 md:col-span-12">
                    <PhotoSlot blockPhotos={photos} index={3} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
    </Grid>
);

const LandscapeTwoBigTwoMediumFourSmall: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={0} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={2} columnSize={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={3} columnSize={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={4} columnSize={3} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={5} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={6} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={7} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
    </Grid>
);

const OneLandscapeOnePortrait: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="relative col-span-12 md:col-span-6 xl:col-span-7">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={7} {...photoSlotProps} />
        </Column>
        <Column className="relative col-span-12 h-full md:col-span-6 xl:col-span-5 [&_img]:max-h-full [&_img]:object-contain [&_img]:object-center [&_span]:bg-transparent md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
        </Column>
    </Grid>
);

const OneLandscapeTwoPortraitEachSide: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="relative col-span-6 flex h-full md:col-span-2 md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="relative col-span-6 flex h-full md:col-span-2 md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="relative col-span-12 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="relative hidden h-full md:col-span-2 md:flex md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={3} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="relative hidden h-full md:col-span-2 md:flex md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={4} columnSize={3} {...photoSlotProps} />
        </Column>
    </Grid>
);

const OneLandScapeTwoPortrait: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 flex h-full md:col-span-6 md:md:[&_span]:h-full md:md:[&>div]:h-full">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-3">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={3} {...photoSlotProps} />
        </Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="top-site-header sticky col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={2} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
        <Column className="col-span-6">
            <PhotoSlot blockPhotos={photos} index={3} columnSize={6} {...photoSlotProps} />
        </Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumFourLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos,
    reverse
}) => {
    const portrait = (
        <Column className="col-span-12 md:col-span-6">
            <PhotoSlot
                blockPhotos={photos}
                index={0}
                columnSize={6}
                {...photoSlotProps}
            />
        </Column>
    );
    const smallPhotos = (
        <Column className="col-span-12 flex h-full flex-col justify-between gap-2 md:col-span-6 md:gap-4">
            <Grid gridCols="grid-cols-12" hasTestId={false}>
                <Column className="col-span-6">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={1}
                        columnSize={6}
                        {...photoSlotProps}
                    />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={2}
                        columnSize={6}
                        {...photoSlotProps}
                    />
                </Column>
            </Grid>
            <Grid gridCols="grid-cols-12" hasTestId={false}>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={3} {...photoSlotProps} />
                </Column>
            </Grid>
            <Grid gridCols="grid-cols-12" hasTestId={false}>
                <Column className="col-span-6">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={4}
                        columnSize={6}
                        {...photoSlotProps}
                    />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={5}
                        columnSize={6}
                        {...photoSlotProps}
                    />
                </Column>
            </Grid>
        </Column>
    );

    return (
        <Grid>
            {reverse ? (
                <>{portrait}{smallPhotos}</>
            ) : (
                <>{smallPhotos}{portrait}</>
            )}
        </Grid>
    );
};

const OnePortraitTwoLandscape: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos,
    reverse
}) => (
    <Grid>
        {reverse ? (
            <>
                <Column className="col-span-12 h-full md:col-span-6">
                    <div className="flex h-full flex-col justify-between gap-2 md:gap-0">
                        <PhotoSlot
                            blockPhotos={photos}
                            index={1}
                            columnSize={6}
                            {...photoSlotProps}
                        />
                        <PhotoSlot
                            blockPhotos={photos}
                            index={2}
                            columnSize={6}
                            {...photoSlotProps}
                        />
                    </div>
                </Column>
                <Column className="col-span-12 md:col-span-6">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={0}
                        columnSize={6}
                        {...photoSlotProps}
                    />
                </Column>
            </>
        ) : (
            <>
                <Column className="col-span-12 md:col-span-6">
                    <PhotoSlot
                        blockPhotos={photos}
                        index={0}
                        columnSize={6}
                        {...photoSlotProps}
                    />
                </Column>
                <Column className="col-span-12 h-full md:col-span-6">
                    <div className="flex h-full flex-col justify-between gap-2 md:gap-0">
                        <PhotoSlot
                            blockPhotos={photos}
                            index={1}
                            columnSize={6}
                            {...photoSlotProps}
                        />
                        <PhotoSlot
                            blockPhotos={photos}
                            index={2}
                            columnSize={6}
                            {...photoSlotProps}
                        />
                    </div>
                </Column>
            </>
        )}
    </Grid>
);

const OnePortraitSmallTwoLandscapeMedium: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="col-span-6 md:col-span-5">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={6} {...photoSlotProps} />
        </Column>
        <Column className="order-3 col-span-12 h-full md:order-2 md:col-span-2 [&_img]:object-cover [&_img,&_span]:h-full [&_span]:flex [&_span]:justify-center">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
        </Column>
        <Column className="order-2 col-span-6 md:order-3 md:col-span-5">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={6} {...photoSlotProps} />
        </Column>
    </Grid>
);

const OnePortraitTwoLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 md:col-span-6">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6">
                    <PhotoSlot blockPhotos={photos} index={2} columnSize={6} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12">
                    <PhotoSlot blockPhotos={photos} index={4} {...photoSlotProps} />
                </Column>
            </Grid>
        </Column>
    </Grid>
);

const OnePortraitTwoTopAndBottomLandscape: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="mx-auto">
        <Column className="top-site-header sticky order-1 col-span-6 md:order-1 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="order-2 col-span-12 md:order-1 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="order-1 col-span-6 self-end md:order-1 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={4} {...photoSlotProps} />
        </Column>
    </Grid>
);

const SixInARow: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos,
    ...props
}) => (
    <Grid {...props} className="hidden xl:grid">
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={2} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={2} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={2} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            <PhotoSlot blockPhotos={photos} index={3} columnSize={2} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            <PhotoSlot blockPhotos={photos} index={4} columnSize={2} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            <PhotoSlot blockPhotos={photos} index={5} columnSize={2} {...photoSlotProps} />
        </Column>
    </Grid>
);

const Spacer: React.FC = () => <div className="h-8 w-full lg:h-10 xl:h-14 2xl:h-18" />;

const ThreeInARow: React.FC<PhotoBlockComponent> = ({photoSlotProps, PhotoSlot, photos}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={4} {...photoSlotProps} />
        </Column>
    </Grid>
);

const ThreeInARowWithPadding: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid className="md:px-20">
        <Column className="col-span-12 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={2} columnSize={4} {...photoSlotProps} />
        </Column>
    </Grid>
);

const TwoInARow: React.FC<PhotoBlockComponent> = ({photoSlotProps, PhotoSlot, photos}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-6">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={6} {...photoSlotProps} />
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={6} {...photoSlotProps} />
        </Column>
    </Grid>
);

const TwoInARowWithPadding: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="hidden md:col-span-1 md:block" />
        <Column className="col-span-6 md:col-span-5">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={5} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-5">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={5} {...photoSlotProps} />
        </Column>
        <Column className="hidden md:col-span-1 md:block" />
    </Grid>
);

const TwoPortraitOneLandscapeWithPadding: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos,
    reverse
}) => (
    <Grid className="place-items-center">
        {reverse ? (
            <>
                <Column className="col-span-12 flex h-full md:col-span-6">
                    <div className="mx-auto flex w-full items-center justify-center md:max-w-[80%]">
                        <PhotoSlot
                            blockPhotos={photos}
                            index={2}
                            columnSize={6}
                            {...photoSlotProps}
                        />
                    </div>
                </Column>
                <Column className="col-span-6 flex h-full items-center md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={0} columnSize={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 flex h-full items-center md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
                </Column>
            </>
        ) : (
            <>
                <Column className="col-span-6 flex h-full items-center md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={0} columnSize={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-6 flex h-full items-center md:col-span-3">
                    <PhotoSlot blockPhotos={photos} index={1} columnSize={3} {...photoSlotProps} />
                </Column>
                <Column className="col-span-12 flex h-full md:col-span-6">
                    <div className="mx-auto flex w-full items-center justify-center md:max-w-[80%]">
                        <PhotoSlot
                            blockPhotos={photos}
                            index={2}
                            columnSize={6}
                            {...photoSlotProps}
                        />
                    </div>
                </Column>
            </>
        )}
    </Grid>
);

const TwoPortraitTwoLandscape: React.FC<PhotoBlockComponent> = ({
    photoSlotProps,
    PhotoSlot,
    photos
}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={0} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 md:col-span-4">
            <PhotoSlot blockPhotos={photos} index={1} columnSize={4} {...photoSlotProps} />
        </Column>
        <Column className="col-span-6 flex h-full flex-col justify-between gap-8 md:col-span-4">
            <div>
                <PhotoSlot blockPhotos={photos} index={2} columnSize={3} {...photoSlotProps} />
            </div>
            <div>
                <PhotoSlot blockPhotos={photos} index={3} columnSize={3} {...photoSlotProps} />
            </div>
        </Column>
    </Grid>
);

const contentSectionThemes = {
    default: 'py-4 lg:py-6',
    callout: 'bg-accent rounded !p-6 lg:p-8 xl:p-12'
};

export const ContentSection: React.FC<ContentSection> = ({
    ctaLabel,
    ctaUrl,
    content,
    secondaryCtaLabel,
    secondaryCtaUrl,
    theme,
    title
}) => (
    <Container
        className={clsx([contentSectionThemes[theme ?? 'default'], 'content-section my-12'])}
        data-testid="content-section"
        data-theme={theme}
    >
        <Column className="sm:w-10/12 md:w-8/12 xl:w-7/12">
            {title && <Heading2>{title}</Heading2>}
            <Markdown className="mt-4 text-pretty">{content}</Markdown>
            {((ctaLabel && ctaUrl) || (secondaryCtaLabel && secondaryCtaUrl)) && (
                <ButtonList className="mt-8">
                    {ctaLabel && ctaUrl && <Button href={ctaUrl}>{ctaLabel}</Button>}
                    {secondaryCtaLabel && secondaryCtaUrl && (
                        <Button href={secondaryCtaUrl} theme="secondary">
                            {secondaryCtaLabel}
                        </Button>
                    )}
                </ButtonList>
            )}
        </Column>
    </Container>
);

const ContentSectionGroup: React.FC<SectionBlockComponent> = ({renderSection, sections}) => (
    <div className="space-y-8" data-testid="content-section-group">
        {sections.map(section => renderSection(section))}
    </div>
);

export type PhotoBlockLayout = keyof typeof photoLayouts;

const photoLayouts: Partial<
    Record<string, React.FC<PhotoBlockComponent> | React.ComponentType<PhotoBlockComponent>>
> = {
    CarouselPhotoBLock,
    FourInARow,
    GreenHopFeaturedOneLandScapeTwoPortrait,
    LandscapeOneBigTwoMedium,
    LandscapeTwoBigFourSmall,
    LandscapeTwoBigTwoSmall,
    LandscapeTwoBigTwoMediumFourSmall,
    OneLandscapeOnePortrait,
    OneLandscapeTwoPortraitEachSide,
    OneLandScapeTwoPortrait,
    OnePortraitOneLandscapeMediumTwoLandscapeSmall,
    OnePortraitOneLandscapeMediumFourLandscapeSmall,
    OnePortraitTwoLandscape,
    OnePortraitSmallTwoLandscapeMedium,
    OnePortraitTwoLandscapeMediumTwoLandscapeSmall,
    OnePortraitTwoTopAndBottomLandscape,
    SixInARow,
    Spacer,
    ThreeInARow,
    ThreeInARowWithPadding,
    TwoInARow,
    TwoInARowWithPadding,
    TwoPortraitOneLandscapeWithPadding,
    TwoPortraitTwoLandscape
};

const PhotoCollectionBlocks: React.FC<Props> = ({
    blocks,
    photoSlotProps,
    PhotoSlot,
    renderSection,
    renderTags
}) => (
    <div className="space-y-2 md:space-y-4 lg:space-y-6" data-testid="blocks-container">
        {blocks.map((block, index) => {
            const key = `${index}-${block.layout}`;

            if (block.layout === 'Tags') {
                if (!renderTags) return null;
                return renderTags();
            } else if (block.layout === 'ContentSection') {
                if (!block.sections) return null;

                if (block.sections.length > 1) {
                    return (
                        <ContentSectionGroup
                            key={key}
                            sections={block.sections}
                            renderSection={renderSection}
                            {...block.props}
                        />
                    );
                }

                return renderSection(block.sections[0]);
            }

            const Layout = photoLayouts[block.layout ?? ''];
            if (!Layout) return null;

            return (
                <Layout
                    key={key}
                    photoSlotProps={photoSlotProps}
                    PhotoSlot={PhotoSlot}
                    photos={block.photos ?? []}
                    {...block.props}
                />
            );
        })}
    </div>
);

export default PhotoCollectionBlocks;
