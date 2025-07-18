'use client';

import {Masonry} from 'react-plock';
import PhotoThumbnail from '@/components/PhotoCollection/Thumbnail';

interface Props {
    items: Photo[];
}

const PhotoMasonry: React.FC<Props> = ({items}) => (
    <div className="animate-in animate-out fill-mode-forwards mx-4 min-h-[100vh] opacity-0 delay-100 duration-500 md:mx-8">
        <Masonry
            className="mx-auto grid w-full max-w-[110rem]"
            data-testid="masonry"
            items={items}
            config={{
                columns: [2, 2, 3, 4],
                gap: [16, 16, 16, 24],
                media: [640, 768, 1024, 1280],
                useBalancedLayout: true
            }}
            render={(item, index) => (
                <PhotoThumbnail
                    base64={item.base64}
                    id={item.sys?.id}
                    path={item.collection ? `/${item.collection}#${item.slug}` : ''}
                    slug={''}
                    title={item.title}
                    thumbnail={item.thumbnail}
                />
            )}
        />
    </div>
);

export default PhotoMasonry;
