interface Props {
    className?: string;
}

const Column: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => (
    <div className={`${className} w-full`}>{children}</div>
);

export default Column;
