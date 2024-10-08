import Button from '@/components/Button';

interface Props {
    collectionUrl: string;
    nextUrl: string;
    previousUrl: string;
}

const CarouselPagination: React.FC<Props> = ({collectionUrl, nextUrl, previousUrl}) => (
    <div className="flex items-center justify-between gap-2 sm:sticky sm:bottom-0">
        <Button href={collectionUrl}>Back</Button>
        <div className="flex-grow" />
        <Button className="self-end" href={previousUrl} rel="prev" scroll={false}>
            Prev
        </Button>
        <Button className="self-end" href={nextUrl} rel="next" scroll={false}>
            Next
        </Button>
    </div>
);

export default CarouselPagination;
