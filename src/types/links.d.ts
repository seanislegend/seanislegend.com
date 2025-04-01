interface Link {
    badge?: string | undefined;
    isFeatured?: boolean;
    pageTitle?: string;
    photo?: {
        base64: string;
        thumbnail: Image;
    };
    published?: string;
    text?: string;
    title: string;
    type?: string;
    url: string;
}

interface LinksPage {
    linksCollection: {
        items: Link[];
    };
    text?: string;
    title: string;
}

interface HrefLink {
    label: string;
    href: string;
}
