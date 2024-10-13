const Badge: React.FC<React.PropsWithChildren> = ({children}) => (
    <span className="mb-1 inline-block flex-shrink-0 rounded-full bg-[var(--button-bg)] px-2 py-1 text-[10px] font-medium uppercase leading-none text-[var(--button-text)]">
        {children}
    </span>
);

export default Badge;
