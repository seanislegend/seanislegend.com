'use client';

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
import {layouts} from '@/components/PhotoCollection/layouts';
import Blocks from './Blocks';
import useTheme from './useTheme';
import Tab from '@/app/green-hop-beer/Tab';

interface Props {
    collection: PhotoCollection;
}

const GreenHopSections: React.FC<Props> = ({collection}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const harvestRef = useRef<HTMLDivElement>(null);
    const brewRef = useRef<HTMLDivElement>(null);
    const celebrateRef = useRef<HTMLDivElement>(null);
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)

    const photos = collection.photosCollection.items;
    const sections = collection.contentSectionsCollection?.items || [];
    const layout = layouts?.['green-hop-beer'];
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
        {id: 'harvest', label: 'Harvest', targetRef: harvestRef, theme: 'olive-green'},
        {id: 'brew', label: 'Brew', targetRef: brewRef, theme: 'blue-grey'},
        {id: 'celebrate', label: 'Celebrate', targetRef: celebrateRef, theme: 'amber-red'}
    ];

    useTheme(containerRef, tabs);

    return (
        <>
            <div
                className="bg-active-theme/90 top-site-header-scrolled border-accent sticky z-50 overflow-x-auto border-2 border-t-0 whitespace-nowrap backdrop-blur-2xl transition-colors duration-500 will-change-transform"
                data-slot="tab-navigation"
            >
                <ul className="divide-accent flex w-full flex-row divide-x-2">
                    {tabs.map((tab, index) => (
                        <Tab key={tab.id} index={index} {...tab} />
                    ))}
                </ul>
            </div>
            <div className="px-4 md:px-8" ref={containerRef}>
                <section id="harvest" ref={harvestRef}>
                    <Blocks layout={layout[0]} photos={photos} sections={sections} />
                </section>
                <section id="brew" ref={brewRef}>
                    <Blocks layout={layout[1]} photos={photos} sections={sections} />
                </section>
                <section id="celebrate" ref={celebrateRef}>
                    <Blocks layout={layout[2]} photos={photos} sections={sections} />
                </section>
            </div>
        </>
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
    );
};

export default GreenHopSections;
