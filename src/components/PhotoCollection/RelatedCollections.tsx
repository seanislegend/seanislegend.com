import DynamicMenuCollection from '@/components/SiteMenu/DynamicMenu/Collection';
import Container from '@/components/UI/Container';

interface Props {
    items: PhotoCollection['relatedCollectionsCollection']['items'];
}

const RelatedCollections = ({items}: Props) => {
    if (!items?.length) return null;

    return (
        <div
            className="bg-button-bg text-button-text mt-16 -mb-8 px-4 py-8 md:px-8"
            data-testid="related-collections"
        >
            <div className="mx-auto grid max-w-440 grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <h2 className="mb-2 text-xl leading-tight font-medium text-balance break-normal uppercase md:text-2xl md:leading-tight">
                        More like this
                    </h2>
                    <p className="text-balance">
                        Here&apos;s suggestions of what you might like to see next.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:snap-none md:overflow-x-visible md:px-0 md:pb-0">
                        {items.map(item => (
                            <div key={item.title} className="md:w-full">
                                <div className="w-[55vw] snap-center flex-row min-[450px]:w-[40vw] md:w-full">
                                    <DynamicMenuCollection
                                        link={{
                                            badge: item.badge,
                                            pageTitle: item.pageTitle ?? item.title,
                                            photo: {
                                                base64:
                                                    item.photosCollection?.items?.[0]?.base64 ?? '',
                                                thumbnail:
                                                    item.photosCollection?.items?.[0]?.thumbnail
                                            },
                                            title: '',
                                            url: `/${item.slug}`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedCollections;
