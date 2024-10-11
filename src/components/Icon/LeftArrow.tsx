interface Props {
    className?: string;
}

export const LeftArrowIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
    <svg className={className} viewBox="0 0 256 256">
        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
    </svg>
);
