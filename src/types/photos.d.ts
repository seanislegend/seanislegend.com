declare module 'react-use-keypress';

interface Image {
    height: number;
    width: number;
    url: string;
}

interface Photo {
    base64?: string;
    collection?: string;
    date?: string;
    description?: string;
    fullSize: Image;
    instagramLabel?: string;
    instagramUrl?: string;
    location?: string;
    openGraphImage?: {url: string};
    slug: string;
    thumbnail: Image;
    title: string;
    url?: string;
    urlLabel?: string;
}

interface PhotoCollection {
    category: string;
    ctaLabel?: string;
    ctaUrl?: string;
    photosCollection: {
        items: Photo[];
    };
    description?: string;
    isFeatured?: boolean;
    showInMenu?: boolean;
    showDescription?: boolean;
    slug: string;
    pageTitle?: string;
    photoSort?: 'asc' | 'desc';
    sys?: {published: string};
    title: string;
}

interface PhotoCollections {
    collections: PhotoCollection[];
}

interface PhotoCategory {
    category?: string;
    slug: string;
    sys?: {published: string};
    title: string;
}

type PhotoBlockLayout =
    | 'FourInARow'
    | 'LandscapeTwoBigFourSmall'
    | 'LandscapeOneBigTwoMedium'
    | 'LandscapeTwoBigTwoSmall'
    | 'LandscapeTwoBigTwoMediumFourSmall'
    | 'OneLandScapeTwoPortrait'
    | 'OnePortraitOneLandscapeMediumTwoLandscapeSmall'
    | 'OnePortraitOneLandscapeMediumFourLandscapeSmall'
    | 'OnePortraitTwoLandscape'
    | 'OnePortraitTwoLandscapeMediumTwoLandscapeSmall'
    | 'OnePortraitTwoTopAndBottomLandscape'
    | 'SixInARow'
    | 'ThreeInARow'
    | 'ThreeInARowWithPadding'
    | 'TwoInARow'
    | 'TwoInARowWithPadding'
    | 'TwoPortraitOneLandscapeWithPadding';

interface PhotoBlock {
    layout: PhotoBlockLayout;
    photos: number[];
    props?: Record<string, any>;
}

interface PhotoBlockComponent {
    photos: React.ReactNode[];
    [key: string]: any;
}
