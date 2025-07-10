import clsx from 'clsx';
import {Link} from 'next-view-transitions';
import {RightArrowIcon} from '@/components/Icon';
import PhotoEditButton from '@/components/PhotoCollection/EditButton';
import Condition from '@/components/UI/Condition';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailPhoto = Pick<Photo, 'base64' | 'id' | 'slug' | 'thumbnail' | 'title'>;
interface Props extends ThumbnailPhoto {
    columnSize?: number;
    label?: string;
    loading?: 'eager' | 'lazy';
    linksTo?: 'collection' | 'photo';
    path: string;
    [key: string]: any;
}

const PhotoThumbnail: React.FC<Props> = ({
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
                <span className="bg-accent block overflow-hidden rounded-xs w-full">{children}</span>
            )}
            wrapper={children => (
                <Link
                    aria-label={`View photo: ${title}`}
                    className={clsx(
                        'group/photo focus:ring-text bg-accent relative block overflow-hidden rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden w-full',
                        {'block h-full': props?.fill}
                    )}
                    href={path}
                    id={slug}
                    title={`View photo: ${title}`}
                    {...props}
                >
                    {children}
                    <span
                        className={clsx(
                            'absolute inset-0 z-30 w-full opacity-0 transition-opacity duration-500 ease-in-out group-hover/photo:opacity-100 group-hover/photo:duration-200',
                            {
                                'bg-photo-bg': linksTo !== 'collection',
                                'bg-photo-bg-badge': linksTo === 'collection'
                            }
                        )}
                    />
                    {linksTo === 'collection' && (
                        <span className="absolute right-2 bottom-2 h-full w-full overflow-hidden">
                            <span className="bg-button-bg-hover text-button-text absolute right-[2.5rem] bottom-0 z-40 hidden h-[2.25rem] translate-x-full px-4 py-2 pr-0 text-sm font-medium uppercase transition duration-300 ease-in-out group-hover/photo:translate-x-0 group-hover/photo:duration-200 min-[1320px]:block">
                                <span className="opacity-0 transition-opacity duration-200 group-hover/photo:opacity-100">
                                    View {linksTo === 'collection' ? 'collection' : 'photo'}
                                </span>
                            </span>
                            <span className="bg-button-bg-hover text-button-text absolute right-0 bottom-0 z-40 h-7 w-7 p-1 sm:h-[2.25rem] sm:w-[2.5rem] sm:p-2">
                                <RightArrowIcon className="absolute h-5 w-5 fill-current" />
                            </span>
                        </span>
                    )}
                </Link>
            )}
        >
            <ThumbnailImage
                columnSize={columnSize}
                fill={props?.fill}
                {...thumbnail}
                base64={base64}
                loading={loading}
            />
        </Condition>
        {id && <PhotoEditButton id={id} />}
    </>
);

export default PhotoThumbnail;
