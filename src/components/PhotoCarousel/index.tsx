import {Link} from 'next-view-transitions';
import Button from '@/components/Button';
import BackToCollectionButton from '@/components/PageHeader/BackToCollectionButton';
import CarouselCounter from '@/components/PhotoCarousel/Counter';
import ScrollToContainerFix from '@/components/PhotoCarousel/ScrollToContainerFix';
import {layouts} from '@/components/PhotoCollection/layouts';
import Container from '@/components/UI/Container';
import CarouselImage from './Image';
import KeyboardNavigation from './KeyboardNavigation';

interface Props {
    collection: PhotoCollection;
    photo: string;
}

const PhotoCarousel: React.FC<Props> = ({collection, photo}) => {
    // the photos are defined in the collection
    const allPhotos = collection.photosCollection.items;
    // the order is defined in the layout file, not the order of the photos in the collection
    const layout = layouts?.[collection.slug];
    const layoutPhotoIds = Object.entries(layout)
        .map(([key, value]) => value.photos)
        .flat();
    // find the index of the photo in the collection
    const activeAllPhotosIndex = allPhotos.findIndex(item => item.slug === photo);
    // find the index of the photo in the layout
    const activeLayoutIndex = layoutPhotoIds.findIndex(id => id === activeAllPhotosIndex);
    // get the photo from the collection using the layout index
    const activePhoto = allPhotos[layoutPhotoIds[activeLayoutIndex]];

    const prevLayoutIndex =
        activeLayoutIndex === 0 ? layoutPhotoIds.length - 1 : activeLayoutIndex - 1;
    const nextLayoutIndex =
        activeLayoutIndex === layoutPhotoIds.length - 1 ? 0 : activeLayoutIndex + 1;

    const prevPhoto = allPhotos[layoutPhotoIds[prevLayoutIndex]];
    const nextPhoto = allPhotos[layoutPhotoIds[nextLayoutIndex]];
    const prevPhotoUrl = `/${collection.slug}/${prevPhoto.slug}`;
    const nextPhotoUrl = `/${collection.slug}/${nextPhoto.slug}`;

    return (
        <Container>
            <ScrollToContainerFix />
            <div className="flex items-end justify-between">
                {activePhoto?.title ? (
                    <p className="text-sm font-medium break-normal sm:text-base">
                        {activePhoto.title}
                    </p>
                ) : (
                    <span />
                )}
                <CarouselCounter activeIndex={activeLayoutIndex} total={layoutPhotoIds.length} />
            </div>
            <div className="animate-in fade-in bg-dark relative my-4 w-full overflow-hidden duration-500 md:flex md:flex-col lg:aspect-3/2 lg:max-h-[calc(100vh-var(--site-header)-7rem)]">
                <CarouselImage isActive={true} {...activePhoto} />
                <div className="absolute top-0 left-0 w-full opacity-0">
                    <CarouselImage isActive={false} {...prevPhoto} />
                    <CarouselImage isActive={false} {...nextPhoto} />
                </div>
                <Link
                    className="tap-transparent absolute top-0 left-0 z-10 hidden h-full w-1/2 cursor-[url(/images/left-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-hidden md:block"
                    href={prevPhotoUrl}
                    scroll={false}
                    type="button"
                />
                <Link
                    className="tap-transparent absolute top-0 right-0 z-10 hidden h-full w-1/2 cursor-[url(/images/right-arrow.svg)_15_15,_pointer] bg-transparent focus:outline-hidden md:block"
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
