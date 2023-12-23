'use client';

import Link from 'next/link';
import CarouselCounter from './Counter';
import PhotoExternalLink from './ExternalLink';
import PhotoSocialLinks from './SocialLinks';
import {motion} from 'framer-motion';

interface Props {
    activeIndex: number;
    activePhoto: Photo;
    collection: PhotoCollection;
    total: number;
}

const CarouselDetails: React.FC<Props> = ({activeIndex, activePhoto, collection, total}) => (
    <footer className="relative z-50 mt-4 flex items-center justify-between border-t-2 border-b-2 border-black py-2 dark:border-gray-600 sm:py-4 md:min-h-[44px] md:border-b-0 md:pb-0">
        <div className="flex items-center">
            <Link
                className="hidden break-normal pr-4 font-serif text-black underline-offset-2 hover:underline dark:text-white md:block"
                href={`/${collection.slug}`}
            >
                {collection.title}
            </Link>
            <motion.div
                key={activeIndex}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8}}
            >
                <div className="space-y-2 text-gray-600 dark:text-gray-300 md:flex md:items-baseline md:space-x-2">
                    {activePhoto?.title && (
                        <span className="block break-normal text-sm sm:text-base">
                            {activePhoto.title}
                        </span>
                    )}
                </div>
            </motion.div>
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
