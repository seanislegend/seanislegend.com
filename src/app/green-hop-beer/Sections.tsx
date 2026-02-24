'use client';

import {use} from 'react';
import {track} from '@vercel/analytics/react';
import {layouts} from '@/components/PhotoCollection/layouts';
import ShareButtons from '@/components/ShareButtons';
import Container from '@/components/UI/Container';
import TextLink from '@/components/UI/TextLink';
import Blocks from './Blocks';
import {GreenHopContext} from './ContextWrapper';
import useTheme from './useTheme';

// const Footer = dynamic(() => import('./Footer'), {ssr: false});

const GreenHopSections: React.FC = () => {
    const {collection, navItems, refs} = use(GreenHopContext);
    useTheme(refs.container, navItems);

    const photos = collection.photosCollection.items;
    const sections = collection.contentSectionsCollection?.items || [];
    const layout = layouts?.['green-hop-beer'];
    const shareText =
        'From Bine to Glass: A behind-the-scenes look at the 2025 hop harvest, following fresh green hops from Hukins Hops in Kent to breweries like Five Points and Beak as they brew with them only hours after picking.';

    return (
        <div className="px-4 md:px-8" ref={refs.container}>
            <section
                className="[&_.content-section>div:first-child]:-mt-8! md:[&_.content-section>div:first-child]:mt-16!"
                id="harvest"
                ref={refs.harvest}
            >
                <Blocks layout={layout[0]} photos={photos} sections={sections} />
            </section>
            <section id="brew" ref={refs.brew}>
                <Blocks layout={layout[1]} photos={photos} sections={sections} />
            </section>
            <section
                className="[&_.content-section:last-child>div:last-of-type]:mt-0!"
                id="celebrate"
                ref={refs.celebrate}
            >
                <Blocks layout={layout[2]} photos={photos} sections={sections} />
                <Container className="content-section -mt-8">
                    <ShareButtons
                        blueskyText={shareText.replace('@seanislegend', '@seanislegend.com')}
                        clipboardText={shareText.replace(' from @seanislegend', '')}
                        path="/green-hop-beer"
                        text={shareText}
                    />
                    <em className="mt-8 block text-sm text-balance opacity-50 sm:w-10/12 md:w-8/12 xl:w-7/12">
                        Sean McEmerson is a London-based photographer specialising in capturing the
                        stories of UK beer, breweries and the people behind them. His work has been
                        published on{' '}
                        <TextLink
                            href="https://www.goodbeerhunting.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Good Beer Hunting
                        </TextLink>{' '}
                        and{' '}
                        <TextLink
                            href="https://pelliclemag.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Pellicle
                        </TextLink>
                        .{' '}
                        <TextLink href="/" onClick={() => track('see-more-work-click')}>
                            See more work.
                        </TextLink>
                    </em>
                </Container>
                {/* <Footer /> */}
            </section>
        </div>
    );
};

export default GreenHopSections;
