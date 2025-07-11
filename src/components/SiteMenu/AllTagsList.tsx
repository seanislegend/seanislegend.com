import clsx from 'clsx';
import {BASE_TEXT_CLASS} from '@/components/Markdown';
import TextLink from '@/components/UI/TextLink';

interface Props {
    items?: TagListItem[];
}

const AllTagsList: React.FC<Props> = ({items}) => {
    if (!items) return null;

    return (
        <ul
            className={clsx([
                BASE_TEXT_CLASS,
                'mt-4 flex flex-row flex-wrap gap-x-3 sm:gap-x-4 sm:gap-y-2'
            ])}
            data-testid="tags-list"
        >
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
