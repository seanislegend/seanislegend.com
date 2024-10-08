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
    <div className="flex items-start space-x-12 py-6">
        <div className="flex-grow">
            {title && url && (
                <a
                    href={getExternalUrl(url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <h2 className="underline-2 dark:text-beige-50 font-serif text-lg leading-snug text-[var(--title-text)] underline-offset-2 group-hover:underline sm:text-xl">
                        {title}
                    </h2>
                </a>
            )}
            {text && (
                <Markdown className="prose-sm mt-2 max-w-2xl leading-relaxed md:prose-base dark:prose-invert prose-p:text-[var(--text)] md:prose-p:leading-relaxed lg:max-w-3xl dark:prose-p:text-[var(--dark-text)]">
                    {text}
                </Markdown>
            )}
        </div>
        {url && (
            <Button href={getExternalUrl(url)} target="_blank" rel="noopener noreferrer">
                Visit
            </Button>
        )}
    </div>
);

export default LinkCard;
