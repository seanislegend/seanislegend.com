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
    badge?: string;
    category: string;
    contentSectionsCollection: {
        items: ContentSection[];
    };
    ctaLabel?: string;
    ctaUrl?: string;
    metaDescription?: string;
    metaTitle?: string;
    photosCollection: {
        items: Photo[];
    };
    description?: string;
    isFeatured?: boolean;
    pageTitle?: string;
    photoSort?: 'asc' | 'desc';
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
