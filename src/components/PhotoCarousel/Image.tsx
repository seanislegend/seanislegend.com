import clsx from 'clsx';
import Image from 'next/image';

interface Props extends Photo {
    isActive: boolean;
}

const CarouselImage: React.FC<Props> = ({base64, fullSize, isActive, title}) => {
    if (!fullSize) return null;

    return (
        <Image
            alt={title}
            blurDataURL={base64 || ''}
            className={clsx(
                'mx-auto max-h-[calc(100vh-var(--site-header-height)-7rem)] w-auto object-contain transition duration-500 ease-in-out animate-in fade-in',
                {'opacity-0': !isActive, 'opacity-100': isActive}
            )}
            height={fullSize.height}
            placeholder={base64 ? 'blur' : 'empty'}
            priority={isActive}
            quality={75}
            sizes="(max-width: 1024px) 100vw, 90vw"
            src={fullSize.url}
            width={fullSize.width}
        />
    );
};

export default CarouselImage;
