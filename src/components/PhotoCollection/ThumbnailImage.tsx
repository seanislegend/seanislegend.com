import clsx from 'clsx';
import Image from 'next/image';

type ThumbnailPhoto = Pick<Photo['thumbnail'], 'height' | 'width' | 'url'>;
interface Props extends ThumbnailPhoto {
    alt?: string;
    base64?: string;
    columnSize?: number;
    fill?: boolean;
    id?: string;
    loading?: 'eager' | 'lazy';
    priority?: boolean;
}

const ThumbnailImage: React.FC<Props> = ({
    alt,
    base64,
    columnSize,
    fill,
    height,
    id,
    loading = 'lazy',
    priority,
    width,
    url
}) => {
    // calculate the scaling factor based on 12-column grid
    const imageHeight = columnSize ? Math.floor(height * (columnSize / 12)) : height;
    const imageWidth = columnSize ? Math.floor(width * (columnSize / 12)) : width;
    const ratio = imageWidth / imageHeight;
    const is43 = ratio >= 1 && Math.abs(ratio - 4 / 3) < 0.1;

    return (
        <span
            className={clsx(
                'relative z-20 block min-h-[50px] overflow-hidden rounded-xs group-focus:outline-hidden',
                {
                    'h-full': fill,
                    'aspect-2/3': ratio < 1,
                    'aspect-3/2': ratio >= 1 && !is43,
                    'h-full bg-[#000] object-cover': !is43
                }
            )}
            id={id}
        >
            <Image
                alt={alt || ''}
                blurDataURL={base64 || ''}
                className="w-full"
                data-testid="photo-image"
                fill={fill}
                placeholder={base64 ? 'blur' : 'empty'}
                loading={priority ? undefined : loading}
                priority={priority}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={url}
                {...(fill ? {} : {height: imageHeight, width: imageWidth})}
            />
        </span>
    );
};

export default ThumbnailImage;
