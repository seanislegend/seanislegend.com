import ReactMarkdown from 'react-markdown';

interface Props {
    children: string;
    className?: string;
}

const MarkdownLink = (props: any) => (
    <a
        {...props}
        className="dark:[var(--dark-link-text)] text-[var(--link-text)] underline underline-offset-2 transition duration-200 ease-in-out hover:decoration-2 sm:underline-offset-4"
    >
        {props.children}
    </a>
);

const Markdown: React.FC<Props> = ({children, className = ''}: Props) => (
    <ReactMarkdown
        className={className}
        components={{a: ({...props}) => <MarkdownLink {...props} />}}
    >
        {children}
    </ReactMarkdown>
);

export default Markdown;
