import clsx from 'clsx';
import Image from 'next/image';

type ThumbnailPhoto = Pick<Photo['thumbnail'], 'height' | 'width' | 'url'>;
interface Props extends ThumbnailPhoto {
    base64?: string;
    columnSize?: number;
    fill?: boolean;
    loading?: 'eager' | 'lazy';
}

const ThumbnailImage: React.FC<Props> = ({
    base64,
    columnSize,
    fill,
    height,
    loading = 'lazy',
    width,
    url
}) => {
    // calculate the scaling factor based on 12-column grid
    const imageHeight = columnSize ? Math.floor(height * (columnSize / 12)) : height;
    const imageWidth = columnSize ? Math.floor(width * (columnSize / 12)) : width;

    return (
        <span
            className={clsx(
                'relative z-20 block min-h-[50px] overflow-hidden group-focus:outline-hidden',
                {
                    'h-full': fill,
                    'aspect-3/2': imageWidth > imageHeight,
                    'aspect-2/3': imageWidth < imageHeight
                }
            )}
        >
            <Image
                alt=""
                blurDataURL={base64 || ''}
                className="w-full"
                fill={fill}
                placeholder={base64 ? 'blur' : 'empty'}
                loading={loading}
                quality={85}
                src={url}
                {...(fill ? {} : {height: imageHeight, width: imageWidth})}
            />
        </span>
    );
};

export default ThumbnailImage;
