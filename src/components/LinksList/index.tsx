import LinkCard from '@/components/LinksList/Card';

interface Props {
    links: LinksPage['linksCollection']['items'];
}

const LinksList: React.FC<Props> = ({links}: Props) => (
    <div className="divide-y divide-gray-200">
        {links.map((link: Props['links'][0]) => (
            <LinkCard key={link.title} {...link} />
        ))}
    </div>
);

export default LinksList;
