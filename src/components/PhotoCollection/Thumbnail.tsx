import clsx from 'clsx';
import Link from 'next/link';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailPhoto = Pick<Photo, 'base64' | 'slug' | 'thumbnail' | 'title'>;
interface Props extends ThumbnailPhoto {
    label?: string;
    loading?: 'eager' | 'lazy';
    path: string;
    [key: string]: any;
}

const PhotoThumbnail: React.FC<Props> = ({
    base64,
    label,
    loading = 'lazy',
    path,
    slug,
    thumbnail,
    title,
    ...props
}: Props) => (
    <Link
        aria-label={`View '${title}'`}
        className={clsx('group', {
            'block h-full w-full': props?.fill
        })}
        href={path}
        id={slug}
        title={`View '${title}'`}
        {...props}
    >
        <ThumbnailImage fill={props?.fill} {...thumbnail} base64={base64} loading={loading} />
        {label && (
            <span className="mt-2 block break-normal font-serif text-sm uppercase text-gray-400 transition duration-200 ease-out group-hover:text-sean-black group-hover:underline group-hover:underline-offset-2">
                {label}
            </span>
        )}
    </Link>
);

export default PhotoThumbnail;
