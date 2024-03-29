interface Props {
    className?: string;
}

export const LeftArrowIcon: React.FC<Props> = ({className = 'size-6 fill-current'}) => (
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
            d="M18.444 31.887C11.019 31.887 5 25.87 5 18.444S11.019 5 18.444 5c7.425 0 13.444 6.019 13.444 13.444 0 7.425-6.02 13.444-13.444 13.444Zm0-25.424c-6.581 0-11.981 5.4-11.981 11.98 0 6.582 5.4 11.982 11.98 11.982 6.582 0 11.982-5.4 11.982-11.981 0-6.581-5.4-11.981-11.981-11.981Z"
        />
        <path
            fill="#000"
            d="m18.725 26.15-7.706-7.706 7.706-7.706 1.012 1.068-6.58 6.638 6.58 6.637-1.012 1.069"
        />
        <path fill="#000" d="M12.088 17.656h13.5v1.575h-13.5v-1.575Z" />
    </svg>
);
