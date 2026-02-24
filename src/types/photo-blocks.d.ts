import {type PhotoBlockLayout} from '@/components/PhotoCollection/Blocks';

export interface PhotoSlotProps {
    blockPhotos: number[];
    columnSize?: number;
    fillContainer?: boolean;
    index: number;
    [key: string]: any;
}

interface PhotoBlock {
    component?: string;
    id?: string;
    items?: PhotoBlock[];
    layout?: PhotoBlockLayout;
    photos?: number[];
    props?: Record<string, any>;
    sections?: number[] | string[];
    tags?: TagListItem[];
    theme?: string;
}

/** component that accepts at least PhotoSlotProps; may accept additional props from photoSlotProps */
export type PhotoSlotComponentType = React.ComponentType<PhotoSlotProps & Record<string, unknown>>;

interface PhotoBlockComponent {
    photoSlotProps: Omit<PhotoSlotProps, 'blockPhotos' | 'columnSize' | 'fillContainer' | 'index'>;
    PhotoSlot: PhotoSlotComponentType;
    photos: number[];
    [key: string]: any;
}

interface SectionBlockComponent {
    renderSection: (section: number | string) => React.ReactNode;
    sections: (string | number)[];
    [key: string]: any;
}
