import TextLink from '@/components/UI/TextLink';

interface Props {
    items?: TagListItem[];
}

const AllTagsList: React.FC<Props> = ({items}) => {
    if (!items) return null;

    return (
        <ul className="mt-4 flex flex-row flex-wrap gap-x-4 gap-y-2">
            <li>
                <strong className="font-medium">Tags:</strong>
            </li>
            {items.map((t: TagListItem) => (
                <li key={t.slug}>
                    <TextLink href={`/tags/${t.slug}`}>{t.name}</TextLink>
                </li>
            ))}
        </ul>
    );
};

export default AllTagsList;
