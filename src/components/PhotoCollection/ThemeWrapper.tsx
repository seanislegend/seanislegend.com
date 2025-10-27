'use client';

import PhotoCollectionTabNavigation from '@/components/PhotoCollection/TabNavigation';
import useAdapativeTheme from '@/hooks/useAdapativeTheme';
import PhotoCollectionBlocks from './Blocks';
import type {Props} from './Blocks';

const PhotoCollectionBlocksThemeWrapper: React.FC<Props> = ({
    blocks = [],
    renderPhoto,
    renderSection,
    renderTags
}) => {
    const themedBlocks = blocks.filter(block => block.theme && block.id);
    const sectionRef = useAdapativeTheme(
        themedBlocks.map(block => ({id: block.id, theme: block.theme!}))
    );

    const tabBlock = blocks.find(block => block.component === 'Tabs');

    return (
        <>
            {tabBlock && <PhotoCollectionTabNavigation tabs={tabBlock.props?.tabs} />}
            {themedBlocks.map((block, index) => (
                <section
                    key={`${block.theme}-${index}`}
                    id={block.id ?? ''}
                    ref={sectionRef(index)}
                    data-testid="themed-section"
                >
                    <PhotoCollectionBlocks
                        blocks={block.items ?? []}
                        renderPhoto={renderPhoto}
                        renderSection={renderSection}
                        renderTags={renderTags}
                    />
                </section>
            ))}
        </>
    );
};

export default PhotoCollectionBlocksThemeWrapper;
