import FeaturedCollectionItem from './FeaturedCollectionItem';

interface Props {
    links: Link[];
}

const SiteHeaderFeaturedCollections: React.FC<Props> = ({links}) => (
    <>
        <h3 className="mb-4 text-xl font-medium uppercase">Featured collections</h3>
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
                <FeaturedCollectionItem link={links[0]} />
            </div>
            {links.length > 1 && (
                <div className="col-span-6 grid grid-cols-2 gap-4">
                    {links.slice(1, 5).map(link => (
                        <FeaturedCollectionItem key={link.url} link={link} size="sm" />
                    ))}
                </div>
            )}
        </div>
    </>
);

export default SiteHeaderFeaturedCollections;
