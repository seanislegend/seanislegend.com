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
    id?: string;
    instagramLabel?: string;
    instagramUrl?: string;
    location?: string;
    openGraphImage?: {url: string};
    slug: string;
    sys?: {
        id: string;
    };
    thumbnail: Image;
    title: string;
    url?: string;
    urlLabel?: string;
}

interface PhotoCollection {
    badge?: string;
    category: string;
    contentSectionsCollection?: {
        items: ContentSection[];
    };
    ctaLabel?: string;
    ctaUrl?: string;
<<<<<<< HEAD
    customHeader?: string;
=======
>>>>>>> bd1e4e2 (feat: Add new custom themes for collections)
    customTheme?: string;
    description?: string;
    isFeatured?: boolean;
    isTagPage?: boolean;
    layoutType?: 'editorial' | 'photos' | (string & {});
    metaDescription?: string;
    metaPhotosCollection: {
        items: {
            photo: Image;
        }[];
    };
    metaTitle?: string;
    pageTitle?: string;
    photoSort?: 'asc' | 'desc';
    photosCollection: {
        items: Photo[];
    };
    relatedCollectionsCollection: {
        items: Pick<
            PhotoCollection,
            'badge' | 'pageTitle' | 'title' | 'slug' | 'photosCollection'
        >[];
    };
    showInMenu?: boolean;
    showDescription?: boolean;
    slug: string;
    sys?: {
        firstPublishedAt: string;
        publishedAt: string;
    };
    tagsCollection?: {
        items: {
            name: string;
            slug: string;
        }[];
    };
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
