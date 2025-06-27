import TextLink from '@/components/UI/TextLink';

interface Props {
    items?: Tag[];
}

const AllTagsList: React.FC<Props> = ({items}) => {
    if (!items) return null;

    return (
        <ul className="mt-4 flex flex-row flex-wrap gap-x-4 gap-y-2">
            {items.map((t: Tag) => (
                <li key={t.slug}>
                    <TextLink href={`/tags/${t.slug}`}>{t.name}</TextLink>
                </li>
            ))}
        </ul>
    );
};

export default AllTagsList;
