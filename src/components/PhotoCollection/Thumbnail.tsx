import Link from 'next/link';
import ThumbnailImage from './ThumbnailImage';

type ThumbnailPhoto = Pick<Photo, 'slug' | 'thumbnail' | 'title'>;
interface Props extends ThumbnailPhoto {
    label?: string;
    loading?: 'eager' | 'lazy';
    path: string;
    [key: string]: any;
}

const PhotoThumbnail: React.FC<Props> = ({
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
        className="group relative z-50 block"
        href={path}
        id={slug}
        title={`View '${title}'`}
        {...props}
    >
        <ThumbnailImage {...thumbnail} loading={loading} />
        {label && (
            <span className="mt-2 block break-normal font-serif text-sm uppercase text-gray-400 transition duration-200 ease-out group-hover:text-black group-hover:underline group-hover:underline-offset-2">
                {label}
            </span>
        )}
    </Link>
);

export default PhotoThumbnail;
