interface Props {
    className?: string;
}

export const CaretDownIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
    <svg className={className} viewBox="0 0 256 256">
        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
);
