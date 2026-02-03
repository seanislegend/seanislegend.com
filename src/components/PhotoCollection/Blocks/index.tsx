import clsx from 'clsx';
import {Link} from 'next-view-transitions';
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

const GreenHopFeaturedOneLandScapeTwoPortrait: React.FC<PhotoBlockComponent> = ({
    photos,
    renderPhoto
}) => (
    <Grid className="place-items-end">
        <Column className="relative col-span-12 flex h-full overflow-hidden rounded md:col-span-6 md:md:[&_span]:h-full md:md:[&>div]:h-full">
            {renderPhoto(photos, 0, 6)}
            <Link
                href="/green-hop-beer"
                className="group absolute inset-0 z-50 flex items-end bg-linear-to-t from-[#2f3523]/90 to-transparent p-4 text-white transition-colors duration-300 ease-in-out hover:bg-[#2f3523]/40 md:p-6"
            >
                <div className="flex w-full flex-col gap-2 md:gap-4">
                    <svg className="h-auto w-10/12" fill="none" viewBox="0 0 644 44">
                        <path
                            fill="#fff"
                            d="M619.4 28.261c.59 3.717 3.245 6.077 7.611 6.077 3.068 0 5.192-1.239 5.133-3.54-.118-2.301-2.006-3.481-7.316-4.72-10.62-2.478-16.166-6.372-16.166-13.098 0-7.965 6.844-12.98 17.346-12.98 9.617 0 16.284 5.841 17.287 14.75l-11.386.472c-.295-3.835-2.655-6.136-6.195-6.136-3.363 0-5.605 1.652-5.31 4.13.177 2.478 3.067 3.481 7.02 4.366 10.502 2.006 16.402 6.195 16.402 13.039 0 8.083-6.962 12.921-16.992 12.921-10.915 0-18.348-5.664-18.938-14.75zM578.147 28.261c.59 3.717 3.245 6.077 7.611 6.077 3.068 0 5.192-1.239 5.133-3.54-.118-2.301-2.006-3.481-7.316-4.72-10.62-2.478-16.166-6.372-16.166-13.098 0-7.965 6.844-12.98 17.346-12.98 9.617 0 16.284 5.841 17.287 14.75l-11.387.472c-.295-3.835-2.655-6.136-6.195-6.136-3.363 0-5.605 1.652-5.31 4.13.177 2.478 3.068 3.481 7.021 4.366 10.502 2.006 16.402 6.195 16.402 13.039 0 8.083-6.962 12.921-16.992 12.921-10.915 0-18.349-5.664-18.939-14.75zM522.021 42.834 537.125.944h13.157l15.104 41.89h-11.8l-2.36-6.903h-15.104l-2.36 6.903zm17.169-15.871h9.027l-4.484-13.275zM488.248 42.834V.944h11.564v32.627h18.231v9.263zM482.236 42.834h-6.667l-.472-5.546c-2.183 4.071-6.785 6.49-12.744 6.49-11.741 0-20.178-9.204-20.178-21.83S450.612 0 463.238 0c9.912 0 16.815 5.605 18.88 15.281l-11.977.472c-.944-4.189-3.422-6.49-7.198-6.49-5.959 0-8.909 5.074-8.909 12.685 0 7.552 3.009 12.567 8.909 12.567 4.13 0 6.549-2.301 7.434-6.195h-7.552v-7.729h19.411zM404.242 43.778c-13.275 0-21.24-8.378-21.24-21.83 0-13.57 7.965-21.948 21.24-21.948s21.181 8.378 21.181 21.948c0 13.452-7.906 21.83-21.181 21.83m-9.263-21.83c0 7.965 3.363 12.567 9.263 12.567 5.959 0 9.322-4.602 9.322-12.567 0-8.024-3.363-12.685-9.322-12.685-5.9 0-9.263 4.661-9.263 12.685M380.439.944v9.263h-12.213v32.627h-11.623V10.207H344.39V.944zM296.325.944h31.034v9.263h-19.47v7.021h18.762v9.204h-18.762v7.139h19.942v9.263h-31.506zM252.421.944h11.741l13.865 23.895V.944h11.623v41.89h-12.095l-13.57-22.715v22.715h-11.564zM233.522.944h11.564v41.89h-11.564zM191.174 42.834V.944h15.812c12.449 0 18.585 3.481 18.585 11.623 0 4.897-3.009 7.847-8.673 8.555v.118c7.021.708 10.443 3.894 10.443 9.735 0 7.847-6.018 11.859-17.995 11.859zm11.564-8.85h7.021c3.363 0 6.018-1.298 6.018-4.307s-2.596-4.366-6.018-4.366h-7.021zm0-16.225h5.546c3.304 0 5.723-1.239 5.723-3.953 0-2.832-2.36-4.012-5.723-4.012h-5.546zM123.07.944h15.222l8.85 26.609L155.874.944h15.34v41.89h-11.623V18.408l-8.378 24.249h-8.201l-8.378-24.249v24.426H123.07zM97.142 43.778c-13.275 0-21.24-8.378-21.24-21.83C75.902 8.378 83.867 0 97.142 0s21.181 8.378 21.181 21.948c0 13.452-7.906 21.83-21.18 21.83m-9.263-21.83c0 7.965 3.363 12.567 9.263 12.567 5.959 0 9.322-4.602 9.322-12.567 0-8.024-3.363-12.685-9.322-12.685-5.9 0-9.263 4.661-9.263 12.685M56.242.944c8.555 0 15.576 4.248 15.576 12.508 0 5.546-2.832 8.968-7.847 10.325 4.661.472 6.962 2.655 7.257 7.257l.944 11.8H60.55l-.649-9.676c-.236-3.481-1.829-4.602-5.9-4.602h-6.195v14.278H36.241V.944zm-8.437 18.349h6.313c3.835 0 5.9-1.593 5.9-4.484 0-3.009-2.065-4.602-5.9-4.602h-6.313zM0 .944h30.621v9.263H11.564v7.552h17.995v9.204H11.564v15.871H0z"
                        />
                    </svg>
                    <svg className="h-auto w-full max-w-7/12" fill="none" viewBox="0 0 381 21">
                        <path
                            fill="#909732"
                            d="M0 20.328V.448h7.112c5.18 0 7.756 1.764 7.756 5.516 0 2.324-1.456 3.836-3.976 4.088 3.08.252 4.816 1.932 4.816 4.648 0 3.668-2.604 5.628-7.476 5.628zm3.64-3.08h4.648c2.268 0 3.696-.952 3.696-2.8 0-1.82-1.4-2.8-3.696-2.8H3.64zm0-8.456h3.696c2.38 0 3.808-.896 3.808-2.604 0-1.792-1.344-2.66-3.808-2.66H3.64zM27.225.448c4.116 0 7.028 2.212 7.028 5.992 0 2.436-1.512 4.144-3.472 4.704 2.044.308 2.94 1.344 3.136 3.444l.504 5.74h-3.668l-.42-5.208c-.14-1.736-1.176-2.296-3.696-2.296h-4.088v7.504h-3.64V.448zm-4.676 9.184h4.284c2.352 0 3.668-1.036 3.668-2.968 0-1.96-1.316-3.052-3.668-3.052h-4.284zM37.27.448h13.385v3.164H40.91v5.18h9.408v3.136H40.91v5.236h9.968v3.164H37.27zM52.642.448h3.836l3.668 14.84 3.64-14.84h3.388l3.696 14.84L74.482.448h3.836l-5.32 19.88h-4.032L65.494 7l-3.5 13.328H57.99zM80.666.448h3.64v19.88h-3.64zM88.227.448h4.256l8.456 14.756V.448h3.668v19.88h-4.396L91.867 5.964v14.364h-3.64zM125.275 20.328h-2.324l-.224-3.024c-.896 2.1-3.276 3.472-5.992 3.472-5.656 0-9.24-4.508-9.24-10.36 0-5.88 3.556-10.416 9.408-10.416 4.424 0 7.392 2.632 8.288 6.832l-3.78.196c-.588-2.408-2.128-3.864-4.564-3.864-3.864 0-5.572 3.22-5.572 7.252 0 4.004 1.736 7.196 5.572 7.196 2.856 0 4.48-1.96 4.788-4.648h-4.816V10.08h8.456zM132.748.448h3.836l3.668 14.84 3.64-14.84h3.388l3.696 14.84 3.612-14.84h3.836l-5.32 19.88h-4.032L145.6 7l-3.5 13.328h-4.004zM160.773.448h3.64v19.88h-3.64zM182.558.448v3.164h-6.048v16.716h-3.64V3.612h-6.02V.448zM184.973 20.328V.448h3.64v8.288h8.204V.448h3.64v19.88h-3.64V11.9h-8.204v8.428zM227.175 20.328h-2.324l-.224-3.024c-.896 2.1-3.276 3.472-5.992 3.472-5.656 0-9.24-4.508-9.24-10.36 0-5.88 3.556-10.416 9.408-10.416 4.424 0 7.392 2.632 8.288 6.832l-3.78.196c-.588-2.408-2.128-3.864-4.564-3.864-3.864 0-5.572 3.22-5.572 7.252 0 4.004 1.736 7.196 5.572 7.196 2.856 0 4.48-1.96 4.788-4.648h-4.816V10.08h8.456zM238.503.448c4.116 0 7.028 2.212 7.028 5.992 0 2.436-1.512 4.144-3.472 4.704 2.044.308 2.94 1.344 3.136 3.444l.504 5.74h-3.668l-.42-5.208c-.14-1.736-1.176-2.296-3.696-2.296h-4.088v7.504h-3.64V.448zm-4.676 9.184h4.284c2.352 0 3.668-1.036 3.668-2.968 0-1.96-1.316-3.052-3.668-3.052h-4.284zM248.549.448h13.384v3.164h-9.744v5.18h9.408v3.136h-9.408v5.236h9.968v3.164h-13.608zM265.216.448H278.6v3.164h-9.744v5.18h9.408v3.136h-9.408v5.236h9.968v3.164h-13.608zM281.691.448h4.256l8.456 14.756V.448h3.668v19.88h-4.396l-8.344-14.364v14.364h-3.64zM308.051 20.328V.448h3.64v8.288h8.204V.448h3.64v19.88h-3.64V11.9h-8.204v8.428zM335.608 20.776c-5.908 0-9.492-3.948-9.492-10.36C326.116 3.948 329.7 0 335.608 0c5.936 0 9.464 3.948 9.464 10.416 0 6.412-3.528 10.36-9.464 10.36m-5.684-10.36c0 4.48 2.1 7.196 5.684 7.196s5.712-2.716 5.712-7.196c0-4.536-2.128-7.252-5.712-7.252s-5.684 2.716-5.684 7.252M355.319.448c4.648 0 7.42 2.38 7.42 6.328 0 3.976-2.772 6.384-7.42 6.384h-4.06v7.168h-3.64V.448zm-4.06 9.548h3.892c2.464 0 3.836-1.092 3.836-3.22 0-2.072-1.344-3.164-3.836-3.164h-3.892zM368.593 13.636c.42 2.324 2.072 3.864 4.788 3.864 2.1 0 3.528-.84 3.528-2.464-.028-1.652-1.428-2.604-4.816-3.444-3.976-.952-6.776-2.66-6.776-5.852 0-3.528 2.912-5.74 7.168-5.74 4.396 0 7.364 2.716 7.784 6.608l-3.668.168c-.28-2.212-1.848-3.64-4.172-3.64-2.016 0-3.444 1.036-3.388 2.66.028 1.904 2.324 2.492 4.592 3.08 4.144.98 7 2.856 7 5.964 0 3.752-3.332 5.824-7.42 5.824-4.676 0-7.98-2.66-8.316-6.804z"
                        />
                    </svg>
                    <span className="text-sm underline underline-offset-4 group-hover:decoration-2 md:text-base">
                        Read featured story
                    </span>
                </div>
            </Link>
        </Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 1, 3)}</Column>
        <Column className="col-span-6 md:col-span-3">{renderPhoto(photos, 2, 3)}</Column>
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

const SixInARow: React.FC<PhotoBlockComponent> = ({photos, renderPhoto, ...props}) => (
    <Grid {...props}>
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
