'use client';

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import {useRef} from 'react';
=======
import {use} from 'react';
<<<<<<< HEAD
import dynamic from 'next/dynamic';
>>>>>>> 6b7e938 (feat: Simplify prop usage)
=======
>>>>>>> 43f7a82 (feat: Update layouts)
import {layouts} from '@/components/PhotoCollection/layouts';
import ShareButtons from '@/components/ShareButtons';
import Container from '@/components/UI/Container';
import Blocks from './Blocks';
import {GreenHopContext} from './ContextWrapper';
import useTheme from './useTheme';

// const Footer = dynamic(() => import('./Footer'), {ssr: false});

<<<<<<< HEAD
const GreenHopSections: React.FC<Props> = ({collection}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const harvestRef = useRef<HTMLDivElement>(null);
    const brewRef = useRef<HTMLDivElement>(null);
    const celebrateRef = useRef<HTMLDivElement>(null);
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
const GreenHopSections: React.FC = () => {
    const {collection, navItems, refs} = use(GreenHopContext);
    useTheme(refs.container, navItems);
>>>>>>> 6b7e938 (feat: Simplify prop usage)

    const photos = collection.photosCollection.items;
    const sections = collection.contentSectionsCollection?.items || [];
    const layout = layouts?.['green-hop-beer'];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const shareText =
        'From Bine to Glass: A behind-the-scenes look at the 2025 hop harvest from @seanislegend, following fresh green hops from Hukins Hops in Kent to breweries like Five Points and Beak as they brew with them within hours of picking.';

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
                        published on Good Beer Hunting and Pellicle.{' '}
                        <TextLink href="/" onClick={() => track('see-more-work-click')}>
                            See more work.
                        </TextLink>
                    </em>
                </Container>
                {/* <Footer /> */}
            </section>
        </div>
=======
    const tabs = [
=======
    const navItems: GreenHopNavigationItem[] = [
>>>>>>> 26c10d7 (feat: Redesign navigation)
        {id: 'harvest', label: 'Harvest', targetRef: harvestRef, theme: 'olive-green'},
        {id: 'brew', label: 'Brew', targetRef: brewRef, theme: 'blue-grey'},
        {id: 'celebrate', label: 'Celebrate', targetRef: celebrateRef, theme: 'amber-red'}
    ];

    useTheme(containerRef, navItems);

    return (
        <>
            <Navigation containerRef={containerRef} items={navItems} />
            <div className="px-4 md:px-8" ref={containerRef}>
                <section
                    className="[&_.content-section>div:first-of-type]:mt-16!"
                    id="harvest"
                    ref={harvestRef}
                >
                    <Blocks layout={layout[0]} photos={photos} sections={sections} />
                </section>
                <section id="brew" ref={brewRef}>
                    <Blocks layout={layout[1]} photos={photos} sections={sections} />
                </section>
                <section id="celebrate" ref={celebrateRef}>
                    <Blocks layout={layout[2]} photos={photos} sections={sections} />
                    <Footer />
                </section>
            </div>
        </>
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
=======
    const shareText =
        'From Bine to Glass: A behind-the-scenes look at the 2025 hop harvest from @seanislegend, following fresh green hops from Hukins Hops in Kent to breweries like Five Points and Beak as they brew with them within hours of picking.';
>>>>>>> ba46d40 (feat: Support different text for each share action)

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
                        published on Good Beer Hunting and Pellicle.{' '}
                        <TextLink href="/" onClick={() => track('see-more-work-click')}>
                            See more work.
                        </TextLink>
                    </em>
                </Container>
                {/* <Footer /> */}
            </section>
        </div>
>>>>>>> 6b7e938 (feat: Simplify prop usage)
    );
};

export default GreenHopSections;
