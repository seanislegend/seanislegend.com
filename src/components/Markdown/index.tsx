import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

interface Props {
    allowLinks?: boolean;
    children: string;
    className?: string;
}

export const BASE_TEXT_CLASS =
<<<<<<< HEAD
    'dark:prose-invert prose-p:tracking-[.0185rem] md:prose-p:text-base md:prose-p:leading-normal 2xl:prose-p:text-[17px] text-[15px] prose-blockquote:text-lg @2xl:prose-blockquote:text-xl';
=======
    'dark:prose-invert prose-p:tracking-[.0185rem] md:prose-p:text-base md:prose-p:leading-normal 2xl:prose-p:text-[17px] text-[15px] leading-relaxed prose-blockquote:text-lg @2xl:prose-blockquote:text-xl';
>>>>>>> 2cb674e (feat: Improve mobile UI)

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
<<<<<<< HEAD
                        <figure className="border-accent border-l-4 py-4 pl-8">
=======
                        <figure className="border-accent border-l-4 py-4 pl-4">
>>>>>>> 25c0dd5 (feat: Add carousel blocks)
                            <blockquote>
<<<<<<< HEAD
                                <p className="text-xl/snug! text-pretty italic lg:text-2xl/snug! xl:text-3xl/snug!">
                                    &ldquo;{quote.trim()}&rdquo;
                                </p>
=======
                                <p className="text-lg! italic lg:text-xl! xl:text-2xl!">{quote}</p>
>>>>>>> da5321b (chore: Tailwind lint)
                            </blockquote>
                            <figcaption className="mt-4">&mdash; {author}</figcaption>
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
