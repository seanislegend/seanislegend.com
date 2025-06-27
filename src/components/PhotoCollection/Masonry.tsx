'use client';

import {Masonry} from 'react-plock';
import PhotoThumbnail from '@/components/PhotoCollection/Thumbnail';

interface Props {
    items: Photo[];
}

const PhotoMasonry: React.FC<Props> = ({items}) => (
    <Masonry
        className="animate-in animate-out fill-mode-forwards mx-4 opacity-0 delay-100 duration-500 md:mx-8"
        items={items}
        config={{
            columns: [2, 2, 3, 4],
            gap: [12, 18, 18, 24],
            media: [640, 768, 1024, 1280],
            useBalancedLayout: true
        }}
        render={(item, index) => (
            <PhotoThumbnail
                base64={item.base64}
                path={`/${item.collection}#${item.slug}`}
                slug={''}
                title={item.title}
                thumbnail={item.thumbnail}
            />
        )}
    />
);

export default PhotoMasonry;
