import clsx from 'clsx';
import Link from 'next/link';
import {RightArrowIcon} from '@/components/Icon';
import Condition from '@/components/UI/Condition';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailPhoto = Pick<Photo, 'base64' | 'slug' | 'thumbnail' | 'title'>;
interface Props extends ThumbnailPhoto {
    label?: string;
    loading?: 'eager' | 'lazy';
    linksTo?: 'collection' | 'photo';
    path: string;
    [key: string]: any;
}

const PhotoThumbnail: React.FC<Props> = ({
    base64,
    label,
    linksTo,
    loading = 'lazy',
    path,
    slug,
    thumbnail,
    title,
    ...props
}: Props) => (
    <Condition
        condition={!path.includes('/home')}
        wrapper={children => (
            <Link
                className={clsx('group relative', {'block h-full w-full': props?.fill})}
                href={path}
                id={slug}
                {...props}
            >
                {children}
                <span
                    className={clsx(
                        'absolute inset-0 z-30 bg-[var(--overlay-bg)] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:duration-200'
                    )}
                />
                {linksTo === 'collection' && (
                    <span className="absolute bottom-4 right-4 h-full w-full overflow-hidden">
                        <span className="absolute bottom-0 right-[2.5rem] z-40 h-[2.25rem] translate-x-full bg-[var(--button-bg-hover)] px-4 py-2 pr-0 text-sm font-medium uppercase text-[var(--light)] transition duration-300 ease-in-out group-hover:translate-x-0 group-hover:duration-200">
                            <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                View {linksTo === 'collection' ? 'collection' : 'photo'}
                            </span>
                        </span>
                        <span className="absolute bottom-0 right-0 z-40 h-[2.25rem] w-[2.5rem] bg-[var(--button-bg-hover)] px-2 py-2 text-[var(--light)]">
                            <RightArrowIcon className="absolute h-5 w-5 fill-current" />
                        </span>
                    </span>
                )}
            </Link>
        )}
    >
        <ThumbnailImage fill={props?.fill} {...thumbnail} base64={base64} loading={loading} />
    </Condition>
);

export default PhotoThumbnail;
