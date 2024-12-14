import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';

interface Props {
    children: string;
    className?: string;
}

const MarkdownLink = (props: any) => (
    <a
        {...props}
        className="text-[var(--link-text)] underline underline-offset-2 transition duration-200 ease-in-out hover:decoration-2 focus:ring-2 focus:ring-[var(--text)] focus:ring-offset-2 focus:outline-hidden sm:underline-offset-4 print:no-underline"
    >
        {props.children}
    </a>
);

const Markdown: React.FC<Props> = ({children, className = ''}: Props) => (
    <ReactMarkdown
        className={clsx([
            'dark:prose-invert prose-p:tracking-[.0185rem] md:prose-p:text-base md:prose-p:leading-normal 2xl:prose-p:text-[17px] space-y-6 text-sm leading-relaxed',
            className
        ])}
        components={{a: ({...props}) => <MarkdownLink {...props} />}}
    >
        {children}
    </ReactMarkdown>
);

export default Markdown;
