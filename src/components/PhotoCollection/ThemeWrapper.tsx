'use client';

import useAdapativeTheme from '@/hooks/useAdapativeTheme';
import PhotoCollectionBlocks from './Blocks';
import type {Props} from './Blocks';

const PhotoCollectionBlocksThemeWrapper: React.FC<Props> = ({
    blocks = [],
    renderPhoto,
    renderSection,
    renderTags
}) => {
    const themedBlocks = blocks.filter(block => block.theme);
    const sectionRef = useAdapativeTheme(themedBlocks.map(block => block.theme!));

    return (
        <>
            {themedBlocks.map((block, index) => (
                <div
                    key={block.theme}
                    ref={sectionRef(index)}
                    className="bg-theme-bg text-theme-text transition-colors duration-500"
                    data-testid="themed-section"
                >
                    <PhotoCollectionBlocks
                        blocks={block.items ?? []}
                        renderPhoto={renderPhoto}
                        renderSection={renderSection}
                        renderTags={renderTags}
                    />
                </div>
            ))}
        </>
    );
};

export default PhotoCollectionBlocksThemeWrapper;
