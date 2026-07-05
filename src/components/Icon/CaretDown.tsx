interface Props {
    className?: string;
}

export const CaretDownIcon: React.FC<Props> = ({className = 'size-6'}) => (
    <svg className={className} viewBox="0 0 256 256">
        <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
    </svg>
);
