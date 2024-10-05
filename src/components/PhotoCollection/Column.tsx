interface Props {
    className?: string;
}

const Column: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => (
    <div className={className}>{children}</div>
);

export default Column;
