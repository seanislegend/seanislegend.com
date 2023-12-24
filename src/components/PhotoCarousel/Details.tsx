import Link from 'next/link';
import CarouselCounter from './Counter';
import PhotoExternalLink from './ExternalLink';
import PhotoSocialLinks from './SocialLinks';

interface Props {
    activeIndex: number;
    activePhoto: Photo;
    collection: PhotoCollection;
    total: number;
}

const CarouselDetails: React.FC<Props> = ({activeIndex, activePhoto, collection, total}) => (
    <footer className="relative z-50 mt-4 flex items-center justify-between border-b-2 border-t-2 border-black py-2 sm:py-4 md:min-h-[44px] md:border-b-0 md:pb-0 dark:border-gray-600">
        <div className="flex items-center">
            <Link
                className="hidden break-normal pr-4 font-serif text-black underline-offset-2 hover:underline md:block dark:text-white"
                href={`/${collection.slug}`}
            >
                {collection.title}
            </Link>
            <div key={activeIndex} className="animate-fadeIn">
                <div className="space-y-2 text-gray-600 md:flex md:items-baseline md:space-x-2 dark:text-gray-300">
                    {activePhoto?.title && (
                        <span className="block break-normal text-sm sm:text-base">
                            {activePhoto.title}
                        </span>
                    )}
                </div>
            </div>
            {/* {activePhoto?.description && (
                    <p className="mt-2 text-sm tracking-wide text-gray-400 dark:text-gray-600">
                        {activePhoto.description}
                    </p>
                )} */}
            {/* <PhotoSocialLinks photo={activePhoto} />
            <PhotoExternalLink photo={activePhoto} /> */}
        </div>
        <CarouselCounter activeIndex={activeIndex} total={total} />
    </footer>
);

export default CarouselDetails;
