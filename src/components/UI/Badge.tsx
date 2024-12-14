const Badge: React.FC<React.PropsWithChildren> = ({children}) => (
    <span className="mb-1 inline-block shrink-0 rounded-full bg-[var(--button-bg)] px-2 py-1 text-[10px] leading-none font-medium text-[var(--button-text)] uppercase">
        {children}
    </span>
);

export default Badge;
