import DynamicMenuCollection from '@/components/SiteMenu/DynamicMenu/Collection';
import Container from '@/components/UI/Container';

interface Props {
    items: PhotoCollection['relatedCollectionsCollection']['items'];
}

const RelatedCollections = ({items}: Props) => {
    if (!items?.length) return null;

    return (
        <div className="mt-16 -mb-8 bg-[var(--button-bg)] py-8 text-[var(--button-text)]">
            <Container>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <h2 className="mb-2 text-xl leading-tight font-medium text-balance break-normal uppercase md:text-2xl md:leading-tight">
                            More like this
                        </h2>
                        <p className="text-balance">
                            Here&apos;s suggestions of what you might like to see next.
                        </p>
                    </div>
                    <div className="col-span-12 grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-8 lg:col-span-9">
                        {items.map(item => (
                            <DynamicMenuCollection
                                key={item.title}
                                link={{
                                    badge: item.badge,
                                    pageTitle: item.pageTitle ?? item.title,
                                    photo: {
                                        base64: item.photosCollection?.items?.[0]?.base64 ?? '',
                                        thumbnail: item.photosCollection?.items?.[0]?.thumbnail
                                    },
                                    title: '',
                                    url: `/${item.slug}`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RelatedCollections;
