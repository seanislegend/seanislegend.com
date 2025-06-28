import {type PhotoBlockLayout} from '@/components/PhotoCollection/Blocks';

interface PhotoBlock {
    layout: PhotoBlockLayout;
    photos?: number[];
    props?: Record<string, any>;
    sections?: number[];
    tags?: TagListItem[];
}

interface PhotoBlockComponent {
    photos: number[];
    renderPhoto: (photos: number[], index: number, columnSize?: number) => React.ReactNode;
    [key: string]: any;
}

interface SectionBlockComponent {
    renderSection: (section: number) => React.ReactNode;
    sections: number[];
    [key: string]: any;
}
