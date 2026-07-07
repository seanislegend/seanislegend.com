import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {RightArrowIcon} from '@/components/Icon/RightArrow';
import PhotoEditButton from '@/components/PhotoCollection/EditButton';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailPhoto = Pick<Photo, 'base64' | 'id' | 'slug' | 'thumbnail' | 'title'>;
interface Props extends ThumbnailPhoto {
    alt?: string;
    columnSize?: number;
    label?: string;
    linksTo?: 'collection' | 'photo';
    loading?: 'eager' | 'lazy';
    path: string;
    priority?: boolean;
    sizes?: string;
    [key: string]: any;
}

const PhotoThumbnail: React.FC<Props> = ({
    alt,
    base64,
    columnSize,
    hasViewButton = true,
    id,
    label,
    linksTo,
    loading = 'lazy',
    path,
    priority,
    sizes,
    slug,
    thumbnail,
    title,
    ...props
}: Props) => {
    if (path && !path.includes('/home')) {
        return (
            <>
                <Link
                    aria-label={alt || title}
                    className={clsx(
                        'group/photo focus:ring-text bg-accent relative block w-full overflow-hidden rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden',
                        {'block h-full': props?.fill}
                    )}
                    data-testid="photo-link"
                    href={path}
                    id={slug}
                    title={alt || title}
                    {...props}
                >
                    <ThumbnailImage
                        alt={alt || title}
                        base64={base64}
                        className="transition duration-300 ease-in-out group-hover/photo:opacity-70"
                        columnSize={columnSize}
                        fill={props?.fill}
                        loading={loading}
                        priority={priority}
                        sizes={sizes}
                        {...thumbnail}
                    />
                    {hasViewButton && (
                        <span className="bg-button-bg text-button-text absolute right-2 bottom-2 z-40 flex translate-y-2 items-center gap-1.5 rounded-xs px-2.5 py-1.5 text-xs font-semibold uppercase opacity-0 transition duration-150 ease-in-out group-hover/photo:translate-y-0 group-hover/photo:opacity-100 group-hover/photo:duration-300 xl:text-sm">
                            {linksTo === 'collection' ? 'View more' : 'View photo'}
                        </span>
                    )}
                </Link>
                {id && <PhotoEditButton id={id} />}
            </>
        );
    }

    return (
        <span
            className="bg-accent block w-full overflow-hidden rounded-xs"
            data-testid="photo-wrapper"
        >
            <ThumbnailImage
                alt={alt || title}
                base64={base64}
                columnSize={columnSize}
                fill={props?.fill}
                loading={loading}
                priority={priority}
                sizes={sizes}
                {...thumbnail}
            />
            {id && <PhotoEditButton id={id} />}
        </span>
    );
};

export default PhotoThumbnail;
