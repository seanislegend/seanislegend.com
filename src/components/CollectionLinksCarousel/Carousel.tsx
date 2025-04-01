'use client';

import {useEffect, useState} from 'react';
import {Link} from 'next-view-transitions';

interface Props {
    links: HrefLink[];
}

// does not need to be smart
const shuffle = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const CollectionLinksCarousel: React.FC<Props> = ({links = []}) => {
    const [shuffledLinks, setShuffledLinks] = useState<HrefLink[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const shuffleLinks = () => {
        setShuffledLinks(shuffle(links));
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % shuffledLinks.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [shuffledLinks.length, isPaused]);

    const currentLink = shuffledLinks[currentIndex];

    return (
        <div
            className="mt-4 flex items-center gap-2 text-sm sm:mt-8 md:text-base"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={shuffleLinks}
        >
            <strong className="font-medium">Featured:</strong>
            <div className="relative h-8 flex-grow overflow-hidden">
                {currentLink && (
                    <div
                        key={currentIndex}
                        className="animate-carousel-item-slide-in absolute inset-0 flex w-full items-center"
                    >
                        <Link
                            className="text-primary line-clamp-1 inline-block overflow-ellipsis whitespace-nowrap underline underline-offset-4 hover:decoration-2"
                            href={currentLink.href}
                        >
                            {currentLink.label}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollectionLinksCarousel;
