import Button from '@/components/Button';
import Markdown from '@/components/Markdown';
import {getExternalUrl} from '@/utils/helpers';

interface Props {
    published?: string;
    text?: string;
    title?: string;
    url?: string;
}

const LinkCard: React.FC<Props> = ({published, text, title, url}) => (
    <a
        className="link-item group grid grid-cols-12 items-start gap-4 py-4 transition-opacity duration-200"
        href={getExternalUrl(url)}
        target="_blank"
        rel="noopener noreferrer"
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
    </a>
);

export default LinkCard;
