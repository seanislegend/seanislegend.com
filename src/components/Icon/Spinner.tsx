interface Props {
    className?: string;
}

export const SpinnerIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
            clipRule="evenodd"
            opacity=".2"
        />
        <path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z" />
    </svg>
);
