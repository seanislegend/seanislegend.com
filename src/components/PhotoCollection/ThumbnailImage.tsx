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
            'relative z-20 block min-h-[50px] overflow-hidden bg-[var(--dark)] group-focus:outline-none',
            {'h-full': fill, 'aspect-[3/2]': width > height, 'aspect-[2/3]': width < height}
        )}
    >
        <Image
            alt=""
            blurDataURL={base64 || ''}
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
