import {type PhotoBlockLayout} from '@/components/PhotoCollection/Blocks';

interface PhotoBlock {
    layout: PhotoBlockLayout;
    photos: number[];
    props?: Record<string, any>;
}

interface PhotoBlockComponent {
    photos: React.ReactNode[];
    [key: string]: any;
}
