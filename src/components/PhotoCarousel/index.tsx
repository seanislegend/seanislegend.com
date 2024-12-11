import Link from 'next/link';
import Button from '@/components/Button';
import BackToCollectionButton from '@/components/PageHeader/BackToCollectionButton';
import CarouselCounter from '@/components/PhotoCarousel/Counter';
import ScrollToContainerFix from '@/components/PhotoCarousel/ScrollToContainerFix';
import Container from '@/components/UI/Container';
import CarouselImage from './Image';
import KeyboardNavigation from './KeyboardNavigation';

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
        <Container>
            <ScrollToContainerFix />
            <div className="flex items-end justify-between">
                {activePhoto?.title ? (
                    <p className="break-normal text-sm font-medium sm:text-base">
                        {activePhoto.title}
                    </p>
                ) : (
                    <span />
                )}
                <CarouselCounter activeIndex={activeIndex} total={allPhotos.length} />
            </div>
            <div className="relative my-4 w-full overflow-hidden bg-[var(--dark)] duration-500 animate-in fade-in md:flex md:flex-col lg:aspect-3/2 lg:max-h-[calc(100vh-var(--site-header-height)-7rem)]">
                <CarouselImage isActive={true} {...allPhotos[activeIndex]} />
                <div className="absolute left-0 top-0 w-full opacity-0">
                    <CarouselImage isActive={false} {...prevPhoto} />
                    <CarouselImage isActive={false} {...nextPhoto} />
                </div>
                <Link
                    className="tap-transparent absolute left-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/left-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-hidden md:block"
                    href={prevPhotoUrl}
                    scroll={false}
                    type="button"
                />
                <Link
                    className="tap-transparent absolute right-0 top-0 z-10 hidden h-full w-1/2 cursor-[url(/images/right-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-hidden md:block"
                    href={nextPhotoUrl}
                    scroll={false}
                    type="button"
                />
            </div>
            <div className="z-50 mt-4 flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center sm:gap-2 print:hidden">
                <BackToCollectionButton />
                <div className="flex flex-row gap-2 [&>a]:grow">
                    <Button className="text-center" href={prevPhotoUrl} rel="prev" scroll={false}>
                        Previous photo
                    </Button>
                    <Button className="text-center" href={nextPhotoUrl} rel="next" scroll={false}>
                        Next photo
                    </Button>
                </div>
            </div>
            <KeyboardNavigation
                collection={collection}
                prevPhotoUrl={prevPhotoUrl}
                nextPhotoUrl={nextPhotoUrl}
            />
        </Container>
    );
};

export default PhotoCarousel;
