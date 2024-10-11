interface Props {
    className?: string;
}

export const RightArrowIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
    <svg className={className} viewBox="0 0 256 256">
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
    </svg>
);
