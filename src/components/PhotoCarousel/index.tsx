import Link from 'next/link';
import Container from '@/components/UI/Container';
import CarouselDetails from './Details';
import CarouselImage from './Image';
import KeyboardNavigation from './KeyboardNavigation';
import CarouselPagination from './Pagination';

interface Props {
    collection: PhotoCollection;
    photo: string;
}

const PhotoCarousel: React.FC<Props> = ({collection, photo}) => {
    const allPhotos = collection.photosCollection.items;
    const activeIndex = allPhotos.findIndex(item => item.slug === photo);
    const activePhoto = allPhotos[activeIndex];
    const prevPhoto = allPhotos[activeIndex === 0 ? allPhotos.length - 1 : activeIndex - 1];
    const nextPhoto = allPhotos[activeIndex === allPhotos.length - 1 ? 0 : activeIndex + 1];
    const prevPhotoUrl = `/${collection.slug}/${prevPhoto.slug}`;
    const nextPhotoUrl = `/${collection.slug}/${nextPhoto.slug}`;

    return (
        <Container asChild>
            <div
                id="#photo"
                className="relative w-full space-y-4 overflow-hidden md:flex md:flex-col"
            >
                <CarouselDetails
                    activeIndex={activeIndex}
                    activePhoto={activePhoto}
                    total={allPhotos.length}
                />
                <div className="relative w-full overflow-hidden">
                    <CarouselImage isActive={true} {...allPhotos[activeIndex]} />
                    <div className="left-o absolute top-0 w-full opacity-0">
                        <CarouselImage isActive={false} {...prevPhoto} />
                        <CarouselImage isActive={false} {...nextPhoto} />
                    </div>
                    <Link
                        className="tap-transparent absolute left-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/left-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-none md:block"
                        href={prevPhotoUrl}
                        scroll={false}
                        type="button"
                    />
                    <Link
                        className="tap-transparent absolute right-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/right-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-none md:block"
                        href={nextPhotoUrl}
                        scroll={false}
                        type="button"
                    />
                </div>
                <CarouselPagination
                    collectionUrl={`/${collection.slug}#${activePhoto.slug}`}
                    nextUrl={nextPhotoUrl}
                    previousUrl={prevPhotoUrl}
                />
                <KeyboardNavigation
                    collection={collection}
                    prevPhotoUrl={prevPhotoUrl}
                    nextPhotoUrl={nextPhotoUrl}
                />
            </div>
        </Container>
    );
};

export default PhotoCarousel;
