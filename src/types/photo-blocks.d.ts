import {type PhotoBlockLayout} from '@/components/PhotoCollection/Blocks';

interface PhotoBlock {
    layout: PhotoBlockLayout;
    photos: number[];
    props?: Record<string, any>;
}

interface PhotoBlockComponent {
    photos: number[];
    renderPhoto: (photos: number[], index: number, columnSize?: number) => React.ReactNode;
    [key: string]: any;
}
