import {type PhotoBlockLayout} from '@/components/PhotoCollection/Blocks';

interface PhotoBlock {
    items?: PhotoBlock[];
    layout?: PhotoBlockLayout;
    photos?: number[];
    props?: Record<string, any>;
    sections?: number[] | string[];
    tags?: TagListItem[];
    theme?: string;
}

interface PhotoBlockComponent {
    photos: number[];
    renderPhoto: (photos: number[], index: number, columnSize?: number) => React.ReactNode;
    [key: string]: any;
}

interface SectionBlockComponent {
    renderSection: (section: number | string) => React.ReactNode;
    sections: (string | number)[];
    [key: string]: any;
}
