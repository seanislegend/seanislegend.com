import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

interface Props {
    allowLinks?: boolean;
    children: string;
    className?: string;
}

export const BASE_TEXT_CLASS =
    'dark:prose-invert prose-p:tracking-[.0185rem] md:prose-p:text-base md:prose-p:leading-normal 2xl:prose-p:text-[17px] text-sm leading-relaxed prose-blockquote:text-lg @2xl:prose-blockquote:text-xl';

const MarkdownLink = (props: any) => (
    <a
        {...props}
        className="text-link-text focus:ring-text underline underline-offset-2 transition-all duration-300 ease-in-out hover:decoration-2 focus:ring-2 focus:ring-offset-2 focus:outline-hidden sm:underline-offset-4 print:no-underline"
    >
        {props.children}
    </a>
);

const Markdown: React.FC<Props> = ({allowLinks = true, children, className = ''}: Props) => (
    <div className={clsx([BASE_TEXT_CLASS, 'space-y-6', className])}>
        <ReactMarkdown
            components={{
                a: ({...props}) => {
                    if (!allowLinks) {
                        return <span {...props} />;
                    }
                    return <MarkdownLink {...props} />;
                },
                ul: ({...props}) => (
                    <ul {...props} className="list-inside pl-4 text-base 2xl:text-[17px]" />
                ),
                li: ({...props}) => <li {...props} className="list-disc" />,
                blockquote: ({...props}) => {
                    // to get the quote text we need to find it in contentful's blockquote format
                    const element = props.node?.children.find(
                        (child: any) => child.type === 'element'
                    );
                    if (!element) return null;

                    const item =
                        'children' in element
                            ? element.children?.find(
                                  (child: any) => child.type === 'text' && child.value
                              )
                            : null;

                    // @ts-ignore
                    const parts = item.value.split('|');
                    if (parts.length !== 2) return null;

                    const quote = parts[0];
                    const author = parts[1];

                    return (
                        <figure className="border-accent border-l-4 pl-4">
                            <blockquote>
                                <p className="text-lg! italic lg:text-xl! xl:text-2xl!">{quote}</p>
                            </blockquote>
                            <figcaption>— {author}</figcaption>
                        </figure>
                    );
                }
            }}
        >
            {children}
        </ReactMarkdown>
    </div>
);

export default Markdown;
