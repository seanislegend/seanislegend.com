import Markdown from '@/components/Markdown';
import LinkWrapper from '@/components/UI/LinkWrapper';

interface Props {
    published?: string;
    text?: string;
    title?: string;
    url?: string;
}

const LinkCard: React.FC<Props> = ({text, title, url}) => (
    <LinkWrapper
        className="link-item group grid grid-cols-12 items-start gap-4 py-4 transition-opacity duration-200"
        href={url || '#'}
    >
        <div className="col-span-12 md:col-span-5">
            {title && (
                <h2 className="font-medium uppercase underline-offset-4 group-hover:underline lg:block">
                    {title}
                </h2>
            )}
        </div>
        <div className="col-span-12 pl-[20%] md:col-span-7 md:pl-0">
            {text && (
                <Markdown className="prose-sm md:prose-base dark:prose-invert prose-p:text-theme-text md:prose-p:leading-relaxed max-w-2xl leading-relaxed lg:max-w-3xl">
                    {text}
                </Markdown>
            )}
        </div>
    </LinkWrapper>
);

export default LinkCard;
