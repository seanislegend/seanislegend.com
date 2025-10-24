import Badge from '@/components/UI/Badge';
import Container from '@/components/UI/Container';
import TextLink from '@/components/UI/TextLink';

const GreenHopHomePageBanner: React.FC = () => (
    <Container className="animate-in fade-in-0 mb-4 text-sm duration-1000 sm:text-base md:-mt-8 md:mb-8">
        <div className="flex flex-col rounded bg-[#555f3d] px-4 py-2 text-[#ece9de] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
                <span className="hidden items-start sm:flex">
                    <Badge>New</Badge>
                </span>
                <p className="leading-tight text-pretty">
                    <strong className="font-medium">
                        From Bine to Glass: Brewing with green hops
                    </strong>
                    <span className="hidden lg:inline">
                        {' '}
                        &mdash; A deep dive into the world of hop harvesting and green hop beers.
                    </span>
                </p>
            </div>
            <TextLink className="shrink-0" href="/green-hop-beer">
                Read story
            </TextLink>
        </div>
    </Container>
);

export default GreenHopHomePageBanner;
