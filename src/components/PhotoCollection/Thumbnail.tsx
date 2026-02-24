import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {RightArrowIcon} from '@/components/Icon';
import PhotoEditButton from '@/components/PhotoCollection/EditButton';
import Condition from '@/components/UI/Condition';
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
    [key: string]: any;
}

const PhotoThumbnail: React.FC<Props> = ({
    alt,
    base64,
    columnSize,
    id,
    label,
    linksTo,
    loading = 'lazy',
    path,
    priority,
    slug,
    thumbnail,
    title,
    ...props
}: Props) => (
    <>
        <Condition
            condition={path && !path.includes('/home')}
            fallbackWrapper={children => (
                <span
                    className="bg-accent block w-full overflow-hidden rounded-xs"
                    data-testid="photo-wrapper"
                >
                    {children}
                </span>
            )}
            wrapper={children => (
                <Link
                    aria-label={`View photo: ${title}`}
                    className={clsx(
                        'group/photo focus:ring-text bg-accent relative block w-full overflow-hidden rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden',
                        {'block h-full': props?.fill}
                    )}
                    data-testid="photo-link"
                    href={path}
                    id={slug}
                    title={`View photo: ${title}`}
                    {...props}
                >
                    {children}
                    <span
                        className={clsx(
                            'absolute inset-0 z-30 w-full opacity-0 transition-opacity duration-500 ease-in-out group-hover/photo:opacity-100 group-hover/photo:duration-300',
                            {
                                'bg-photo-bg': linksTo !== 'collection',
                                'bg-photo-bg-badge': linksTo === 'collection'
                            }
                        )}
                    />
                    {linksTo === 'collection' && (
                        <span className="absolute right-2 bottom-2 h-full w-full overflow-hidden">
                            <span className="bg-button-bg-hover text-button-text absolute right-10 bottom-0 z-40 hidden h-9 translate-x-full px-4 py-2 pr-0 text-sm font-medium uppercase transition-all duration-300 ease-in-out group-hover/photo:translate-x-0 group-hover/photo:duration-300 min-[1320px]:block">
                                <span className="opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100">
                                    View {linksTo === 'collection' ? 'collection' : 'photo'}
                                </span>
                            </span>
                            <span className="bg-button-bg-hover text-button-text absolute right-0 bottom-0 z-40 size-6 p-1 xl:size-7">
                                <RightArrowIcon className="absolute size-4 fill-current xl:size-5" />
                            </span>
                        </span>
                    )}
                </Link>
            )}
        >
            <ThumbnailImage
                alt={alt}
                base64={base64}
                columnSize={columnSize}
                fill={props?.fill}
                loading={loading}
                priority={priority}
                {...thumbnail}
            />
            {id && <PhotoEditButton id={id} />}
        </Condition>
    </>
);

export default PhotoThumbnail;
