import clsx from 'clsx';
import Image from 'next/image';

interface Props extends Photo {
    isActive: boolean;
    isModal: boolean;
}

const CarouselImage: React.FC<Props> = ({base64, fullSize, isActive, isModal, title}) => {
    if (!fullSize) return null;

    return (
        <Image
            alt={title}
            blurDataURL={base64 || ''}
            className={clsx('w-full align-top transition ease-in-out animate-in fade-in', {
                'opacity-0': !isActive,
                'opacity-100': isActive,
                'h-[85vh] object-contain object-center': isModal,
                'border-4 border-sean-black': !isModal
            })}
            height={fullSize.height}
            placeholder={base64 ? 'blur' : 'empty'}
            quality={75}
            sizes="(max-width: 1024px) 100vw, 90vw"
            src={fullSize.url}
            width={fullSize.width}
        />
    );
};

export default CarouselImage;
