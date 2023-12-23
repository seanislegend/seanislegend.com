interface Props {
    className?: string;
}

export const ExternalIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
    </svg>
);
