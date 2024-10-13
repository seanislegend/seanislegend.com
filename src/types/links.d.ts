interface Link {
    badge?: string;
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
