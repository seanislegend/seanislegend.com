'use client';

import {useEffect, useState} from 'react';
import {Link} from 'next-view-transitions';

interface Props {
    links: {label: string; url: string}[];
}

const CollectionLinksCarousel: React.FC<Props> = ({links = []}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % links.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [links.length, isPaused]);

    const currentLink = links[currentIndex];

    return (
        <div
            className="mt-4 flex items-center gap-2 text-sm sm:mt-8 md:text-base"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <strong className="font-medium">Featured:</strong>
            <div className="relative h-8 flex-grow overflow-hidden">
                <div
                    key={currentIndex}
                    className="animate-carousel-item-slide-in absolute inset-0 flex w-full items-center"
                >
                    <Link
                        className="text-primary line-clamp-1 inline-block overflow-ellipsis whitespace-nowrap underline underline-offset-4 hover:decoration-2"
                        href={currentLink.url}
                    >
                        {currentLink.label}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollectionLinksCarousel;
