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
    loading?: 'eager' | 'lazy';
    linksTo?: 'collection' | 'photo';
    path: string;
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
<<<<<<< HEAD
                            <span className="bg-button-bg-hover text-button-text absolute right-10 bottom-0 z-40 hidden h-9 translate-x-full px-4 py-2 pr-0 text-sm font-medium uppercase transition-all duration-300 ease-in-out group-hover/photo:translate-x-0 group-hover/photo:duration-300 min-[1320px]:block">
                                <span className="opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100">
=======
                            <span className="bg-button-bg-hover text-button-text absolute right-10 bottom-0 z-40 hidden h-9 translate-x-full px-4 py-2 pr-0 text-sm font-medium uppercase transition duration-300 ease-in-out group-hover/photo:translate-x-0 group-hover/photo:duration-200 min-[1320px]:block">
                                <span className="opacity-0 transition-opacity duration-200 group-hover/photo:opacity-100">
>>>>>>> da5321b (chore: Tailwind lint)
                                    View {linksTo === 'collection' ? 'collection' : 'photo'}
                                </span>
                            </span>
                            <span className="bg-button-bg-hover text-button-text absolute right-0 bottom-0 z-40 h-7 w-7 p-1 sm:h-9 sm:w-10 sm:p-2">
                                <RightArrowIcon className="absolute h-5 w-5 fill-current" />
                            </span>
                        </span>
                    )}
                </Link>
            )}
        >
            <ThumbnailImage
                alt={alt}
                columnSize={columnSize}
                fill={props?.fill}
                {...thumbnail}
                base64={base64}
                loading={loading}
            />
            {id && <PhotoEditButton id={id} />}
        </Condition>
    </>
);

export default PhotoThumbnail;
