interface ExhibitionPhoto {
    date?: string;
    description?: string;
    isFeatured?: boolean;
    location?: string;
    photo?: Photo;
    slug: string;
    title: string;
}

interface Exhibition {
    address?: string;
    addressDirectionsUrl?: string;
    collaborator?: string;
    description?: string;
    detailsUrl?: string;
    endDate?: string;
    photosCollection?: {
        items: ExhibitionPhoto[];
    };
    slug: string;
    startDate?: string;
    title: string;
}
