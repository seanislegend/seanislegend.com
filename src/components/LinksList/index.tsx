import LinkCard from '@/components/LinksList/Card';
import Container from '@/components/UI/Container';

interface Props {
    links: LinksPage['linksCollection']['items'];
}

const LinksList: React.FC<Props> = ({links}: Props) => (
    <Container asChild>
        <div className="animate-fadeIn animate-duration-1000 -my-4 [&:has(.link-item:hover)_.link-item:not(:hover)]:opacity-50">
            {links.map((link: Props['links'][0]) => (
                <LinkCard key={link.title} {...link} />
            ))}
        </div>
    </Container>
);

export default LinksList;
