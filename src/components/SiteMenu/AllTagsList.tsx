import clsx from 'clsx';
import {BASE_TEXT_CLASS} from '@/components/Markdown';
import TextLink from '@/components/UI/TextLink';

interface Props {
    items?: TagListItem[];
    variant?: 'wrap' | 'stack';
}

const AllTagsList: React.FC<Props> = ({items, variant = 'wrap'}) => {
    if (!items) return null;

    const isStack = variant === 'stack';

    return (
        <ul
            className={clsx([
                BASE_TEXT_CLASS,
                isStack
                    ? 'flex flex-col gap-y-2'
                    : 'flex flex-row flex-wrap gap-x-3 sm:gap-x-4 sm:gap-y-2'
            ])}
            data-testid="tags-list"
        >
            {items.map((t: TagListItem) => (
                <li key={t.slug}>
                    <TextLink href={`/${t.slug}-photography`}>
                        {t.name}
                        {isStack && ' photography'}
                    </TextLink>
                </li>
            ))}
        </ul>
    );
};

export default AllTagsList;
