import clsx from 'clsx';
import Image from 'next/image';

type ThumbnailPhoto = Pick<Photo['thumbnail'], 'height' | 'width' | 'url'>;
interface Props extends ThumbnailPhoto {
    alt?: string;
    base64?: string;
    className?: string;
    columnSize?: number;
    fill?: boolean;
    id?: string;
    loading?: 'eager' | 'lazy';
    priority?: boolean;
    sizes?: string;
}

const ThumbnailImage: React.FC<Props> = ({
    alt,
    base64,
    className,
    columnSize,
    fill,
    height,
    id,
    loading = 'lazy',
    priority,
    sizes,
    width,
    url
}) => {
    // calculate the scaling factor based on 12-column grid
    const imageHeight = columnSize ? Math.floor(height * (columnSize / 12)) : height;
    const imageWidth = columnSize ? Math.floor(width * (columnSize / 12)) : width;
    const ratio = imageWidth / imageHeight;
    const is43 = ratio >= 1 && Math.abs(ratio - 4 / 3) < 0.1;
    const derivedSizes =
        sizes ??
        (columnSize
            ? `(max-width: 768px) 100vw, ${Math.max(Math.round((columnSize / 12) * 100), 10)}vw`
            : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 17vw');

    return (
        <span
            className={clsx(
                'relative z-20 block min-h-[50px] overflow-hidden rounded-xs group-focus:outline-hidden',
                {
                    'h-full': fill,
                    'aspect-2/3': ratio < 1,
                    'aspect-3/2': ratio >= 1 && !is43,
                    'h-full bg-[#000] object-cover': !is43
                },
                className
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
                sizes={derivedSizes}
                src={url}
                {...(fill ? {} : {height: imageHeight, width: imageWidth})}
            />
        </span>
    );
};

export default ThumbnailImage;
