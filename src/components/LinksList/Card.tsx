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
    <div className="link-item grid items-start gap-4 py-4 transition-opacity duration-200 sm:grid-cols-12">
        <div className="sm:col-span-5">
            {title && url && (
                <a
                    href={getExternalUrl(url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <h2 className="underline-2 text-title-text text-lg leading-snug underline-offset-2 group-hover:underline sm:text-xl">
                        {title}
                    </h2>
                </a>
            )}
        </div>
        <div className="sm:col-span-7">
            {text && (
                <Markdown className="prose-sm md:prose-base dark:prose-invert prose-p:text-theme-text md:prose-p:leading-relaxed mt-2 max-w-2xl leading-relaxed lg:max-w-3xl">
                    {text}
                </Markdown>
            )}
        </div>
        {/* {url&&(
            <Button href={getExternalUrl(url)} target="_blank" rel="noopener noreferrer">
                Visit
            </Button>
        )} */}
    </div>
);

export default LinkCard;
