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

interface ContentSection {
    content: string;
    ctaLabel?: string;
    ctaUrl?: string;
    theme: 'default' | 'callout' | null;
    title: string;
}
