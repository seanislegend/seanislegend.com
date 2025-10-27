import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import ButtonList from '@/components/Button/List';
import Markdown from '@/components/Markdown';
import Column from '@/components/PhotoCollection/Column';
import Grid from '@/components/PhotoCollection/Grid';
import Condition from '@/components/UI/Condition';
import Container from '@/components/UI/Container';
import {Heading2} from '@/components/UI/Headings';
import {
    type PhotoBlock,
    type PhotoBlockComponent,
    type SectionBlockComponent
} from '@/types/photo-blocks';

const CarouselPhotoBLock = dynamic(() => import('./Carousel'));

export interface Props {
    blocks: PhotoBlock[];
    renderPhoto: (blockPhotos: number[], index: number) => React.ReactNode;
    renderSection: (section: number | string) => React.ReactNode;
    renderTags?: () => React.ReactNode;
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
            <Grid hasTestId={false}>
                <Column className="col-span-12">{renderPhoto(photos, 0)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 2, 6)}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
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
                        <div className="flex h-full flex-row justify-between gap-2 md:flex-col md:gap-4">
                            {renderPhoto(photos, 1, 4)}
                            {renderPhoto(photos, 2, 4)}
                        </div>
                    </Column>
                </>
            )}
            wrapper={() => (
                <>
                    <Column className="col-span-12 h-full md:col-span-4">
                        <div className="flex h-full flex-row justify-between gap-2 md:flex-col md:gap-4">
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
        <Column className="top-site-header sticky col-span-12 md:col-span-6">
            {renderPhoto(photos, 0, 6)}
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
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
            <Grid hasTestId={false}>
                <Column className="col-span-12">{renderPhoto(photos, 0)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 1, 3)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 2, 3)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 3, 3)}</Column>
                <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 4, 3)}</Column>
            </Grid>
        </Column>
        <Column className="col-span-12 md:col-span-6">
            <Grid hasTestId={false}>
                <Column className="col-span-6">{renderPhoto(photos, 5, 6)}</Column>
                <Column className="col-span-6">{renderPhoto(photos, 6, 6)}</Column>
                <Column className="col-span-12">{renderPhoto(photos, 7)}</Column>
            </Grid>
        </Column>
    </Grid>
);

const OneLandscapeOnePortrait: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="relative col-span-12 md:col-span-6 xl:col-span-7">
            {renderPhoto(photos, 0, 7)}
        </Column>
        <Column className="relative col-span-12 h-full md:col-span-6 xl:col-span-5 [&_img]:max-h-full [&_img]:object-contain [&_img]:object-center [&_span]:bg-transparent md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 1, 3)}
        </Column>
    </Grid>
);

const OneLandscapeTwoPortraitEachSide: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid className="place-items-end">
        <Column className="relative col-span-6 flex h-full md:col-span-2 md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 0, 3)}
        </Column>
        <Column className="relative col-span-6 flex h-full md:col-span-2 md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 1, 3)}
        </Column>
        <Column className="relative col-span-12 md:col-span-4">{renderPhoto(photos, 2, 3)}</Column>
        <Column className="relative hidden h-full md:col-span-2 md:flex md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 3, 3)}
        </Column>
        <Column className="relative hidden h-full md:col-span-2 md:flex md:[&_span]:absolute md:md:[&_span]:h-full md:[&_span]:w-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 4, 3)}
        </Column>
    </Grid>
);

const OneLandScapeTwoPortrait: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid className="place-items-end">
        <Column className="col-span-12 flex h-full md:col-span-6 md:md:[&_span]:h-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 0, 6)}
        </Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 1, 3)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 2, 3)}</Column>
    </Grid>
);

const OnePortraitOneLandscapeMediumTwoLandscapeSmall: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid className="place-items-end">
        <Column className="top-site-header sticky col-span-6">
            <Grid hasTestId={false}>
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
    renderPhoto,
    reverse
}) => (
    <Grid>
        <Condition
            condition={reverse}
            fallbackWrapper={children => (
                <>
                    {children}
                    <Column className="col-span-12 md:col-span-6">
                        {renderPhoto(photos, 0, 6)}
                    </Column>
                </>
            )}
            wrapper={children => (
                <>
                    <Column className="col-span-12 md:col-span-6">
                        {renderPhoto(photos, 0, 6)}
                    </Column>
                    {children}
                </>
            )}
        >
<<<<<<< HEAD:src/components/PhotoCollection/Blocks/index.tsx
    <<<<<<< HEAD
        <Condition
            condition={reverse}
            fallbackWrapper={children => (
                <>
                    {children}
                    <Column className="col-span-12 md:col-span-6">
                        {renderPhoto(photos, 0, 6)}
                    </Column>
                </>
            )}
            wrapper={children => (
                <>
                    <Column className="col-span-12 md:col-span-6">
                        {renderPhoto(photos, 0, 6)}
                    </Column>
                    {children}
                </>
            )}
        >
=======
>>>>>>> e14ecde (fix merge):src/components/PhotoCollection/Blocks.tsx
            <Column className="col-span-12 flex h-full flex-col justify-between gap-2 md:col-span-6 md:gap-4">
                <Grid gridCols="grid-cols-12" hasTestId={false}>
                    <Column className="col-span-6">{renderPhoto(photos, 1, 6)}</Column>
                    <Column className="col-span-6">{renderPhoto(photos, 2, 6)}</Column>
                </Grid>
                <Grid gridCols="grid-cols-12" hasTestId={false}>
                    <Column className="col-span-12">{renderPhoto(photos, 3)}</Column>
                </Grid>
                <Grid gridCols="grid-cols-12" hasTestId={false}>
                    <Column className="col-span-6">{renderPhoto(photos, 4, 6)}</Column>
                    <Column className="col-span-6">{renderPhoto(photos, 5, 6)}</Column>
                </Grid>
            </Column>
        </Condition>
    </Grid>
);

const OnePortraitTwoLandscape: React.FC<PhotoBlockComponent> = ({photos, renderPhoto, reverse}) => (
    <Grid>
        <Condition
            condition={reverse}
            fallbackWrapper={() => (
                <>
                    <Column className="col-span-12 md:col-span-6">
                        {renderPhoto(photos, 0, 6)}
                    </Column>
                    <Column className="col-span-12 h-full md:col-span-6">
                        <div className="flex h-full flex-col justify-between gap-2 md:gap-0">
                            {renderPhoto(photos, 1, 6)}
                            {renderPhoto(photos, 2, 6)}
                        </div>
                    </Column>
                </>
            )}
            wrapper={() => (
                <>
                    <Column className="col-span-12 h-full md:col-span-6">
                        <div className="flex h-full flex-col justify-between gap-2 md:gap-0">
                            {renderPhoto(photos, 1, 6)}
                            {renderPhoto(photos, 2, 6)}
                        </div>
                    </Column>
                    <Column className="col-span-12 md:col-span-6">
                        {renderPhoto(photos, 0, 6)}
                    </Column>
                </>
            )}
        />
    </Grid>
);

const OnePortraitSmallTwoLandscapeMedium: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto,
    reverse
}) => (
    <Grid>
        <Column className="col-span-6 md:col-span-5">{renderPhoto(photos, 1, 6)}</Column>
        <Column className="order-3 col-span-12 h-full md:order-2 md:col-span-2 [&_img]:object-cover [&_img,&_span]:h-full [&_span]:flex [&_span]:justify-center">
            {renderPhoto(photos, 0, 6)}
        </Column>
        <Column className="order-2 col-span-6 md:order-3 md:col-span-5">
            {renderPhoto(photos, 2, 6)}
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
            <Grid hasTestId={false}>
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
        <Column className="top-site-header sticky order-1 col-span-6 md:order-1 md:col-span-4">
            {renderPhoto(photos, 0, 4)}
        </Column>
        <Column className="order-2 col-span-12 md:order-1 md:col-span-4">
            {renderPhoto(photos, 1, 4)}
        </Column>
        <Column className="order-1 col-span-6 self-end md:order-1 md:col-span-4">
            {renderPhoto(photos, 2, 4)}
        </Column>
    </Grid>
);

const SixInARow: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            {renderPhoto(photos, 0, 2)}
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            {renderPhoto(photos, 1, 2)}
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            {renderPhoto(photos, 2, 2)}
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            {renderPhoto(photos, 3, 2)}
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            {renderPhoto(photos, 4, 2)}
        </Column>
        <Column className="col-span-6 sm:col-span-4 md:col-span-2">
            {renderPhoto(photos, 5, 2)}
        </Column>
    </Grid>
);

const Spacer: React.FC = () => <div className="h-8 w-full lg:h-10 xl:h-14 2xl:h-18" />;

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
        <Column className="col-span-12 md:col-span-6">{renderPhoto(photos, 0, 6)}</Column>
        <Column className="col-span-12 md:col-span-6">{renderPhoto(photos, 1, 6)}</Column>
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
    renderPhoto,
    reverse
}) => (
    <Grid className="place-items-center">
        <Condition
            condition={reverse}
            fallbackWrapper={children => (
                <>
                    {children}
                    <Column className="col-span-12 flex h-full md:col-span-6">
                        <div className="mx-auto flex w-full items-center justify-center md:max-w-[80%]">
                            {renderPhoto(photos, 2, 6)}
                        </div>
                    </Column>
                </>
            )}
            wrapper={children => (
                <>
                    <Column className="col-span-12 flex h-full md:col-span-6">
                        <div className="mx-auto flex w-full items-center justify-center md:max-w-[80%]">
                            {renderPhoto(photos, 2, 6)}
                        </div>
                    </Column>
                    {children}
                </>
            )}
        >
            <Column className="col-span-6 flex h-full items-center md:col-span-3">
                {renderPhoto(photos, 0, 3)}
            </Column>
            <Column className="col-span-6 flex h-full items-center md:col-span-3">
                {renderPhoto(photos, 1, 3)}
            </Column>
        </Condition>
    </Grid>
);

const TwoPortraitTwoLandscape: React.FC<PhotoBlockComponent> = ({photos, renderPhoto}) => (
    <Grid>
        <Column className="col-span-12 md:col-span-4">{renderPhoto(photos, 0, 4)}</Column>
        <Column className="col-span-6 md:col-span-4">{renderPhoto(photos, 1, 4)}</Column>
        <Column className="col-span-6 flex h-full flex-col justify-between gap-8 md:col-span-4">
            <div>{renderPhoto(photos, 2, 3)}</div>
            <div>{renderPhoto(photos, 3, 3)}</div>
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
    renderPhoto,
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
                    photos={block.photos ?? []}
                    renderPhoto={renderPhoto}
                    {...block.props}
                />
            );
        })}
    </div>
);

export default PhotoCollectionBlocks;
