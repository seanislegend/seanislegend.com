interface Props {
    className?: string;
}

export const RightArrowIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="none"
        viewBox="0 0 36 36"
        className={className}
    >
        <circle cx="18.5" cy="18.5" r="12.5" fill="#fff" />
        <path
            fill="#000"
            d="M18.444 31.887c7.425 0 13.444-6.018 13.444-13.443S25.867 5 18.444 5C11.019 5 5 11.019 5 18.444c0 7.425 6.019 13.444 13.444 13.444Zm0-25.424c6.581 0 11.981 5.4 11.981 11.98 0 6.582-5.4 11.982-11.981 11.982-6.581 0-11.981-5.4-11.981-11.981 0-6.581 5.4-11.981 11.98-11.981Z"
        />
        <path
            fill="#000"
            d="m18.163 26.15 7.706-7.706-7.706-7.706-1.013 1.068 6.581 6.638-6.581 6.637 1.013 1.069"
        />
        <path fill="#000" d="M24.8 17.656H11.3v1.575h13.5v-1.575Z" />
    </svg>
);
