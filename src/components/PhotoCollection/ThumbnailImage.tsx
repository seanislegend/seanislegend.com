import clsx from 'clsx';
import Image from 'next/image';

type ThumbnailPhoto = Pick<Photo['thumbnail'], 'height' | 'width' | 'url'>;
interface Props extends ThumbnailPhoto {
    base64?: string;
    fill?: boolean;
    loading?: 'eager' | 'lazy';
}

const ThumbnailImage: React.FC<Props> = ({base64, fill, height, loading = 'lazy', width, url}) => (
    <span
        className={clsx(
            'relative block min-h-[50px] overflow-hidden border-4 border-[var(--photo-border)] bg-[var(--photo-bg-color)] transition duration-200 ease-in-out hover:duration-500 group-focus:outline-none dark:bg-[var(--dark-photo-bg-color)] dark:group-focus:ring-white',
            {'h-full': fill}
        )}
    >
        <Image
            alt=""
            blurDataURL={base64 || ''}
            className="transition duration-500 ease-in-out hover:duration-200 sm:group-hover:opacity-70"
            fill={fill}
            placeholder={base64 ? 'blur' : 'empty'}
            loading={loading}
            quality={85}
            sizes="(max-width: 240px) 100vw, (max-width: 360px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
            src={url}
            {...(fill ? {} : {height, width})}
        />
    </span>
);

export default ThumbnailImage;
