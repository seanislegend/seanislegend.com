interface Editorial {
    ctaLabel?: string;
    ctaUrl?: string;
    content?: string;
    metaDescription?: string;
    metaTitle?: string;
    openGraphImage?: {url: string};
    pageTitle?: string;
    photo?: {height: number; width: number; url: string};
    photoNote?: string;
    slug: string;
    title: string;
}

interface PhotoGridPhoto {
    linkedFrom: {
        collectionCollection: {
            items: {
                title: string;
                slug: string;
            }[];
        };
    };
    photo: {
        height: number;
        width: number;
        url: string;
    };
    slug: string;
}

interface PhotoGridItem {
    label: string;
    photo: PhotoGridPhoto;
    url: string;
}

interface PhotoGrid {
    photosCollection: {
        items: PhotoGridItem[];
    };
}

interface ContentSection {
    content: string;
    ctaLabel?: string;
    ctaUrl?: string;
    id?: string;
    photoGrid?: PhotoGrid;
    secondaryCtaLabel?: string;
    secondaryCtaUrl?: string;
    theme: 'default' | 'callout' | null;
    title: string;
}

interface Tag {
    description: string;
    name: string;
    slug: string;
}

type TagListItem = Pick<Tag, 'name' | 'slug'>;
