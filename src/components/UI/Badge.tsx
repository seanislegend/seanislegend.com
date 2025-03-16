const Badge: React.FC<React.PropsWithChildren> = ({children}) => (
    <span className="bg-button-bg text-button-text mb-1 inline-block shrink-0 rounded-full px-2 py-1 text-[10px] leading-none font-medium uppercase">
        {children}
    </span>
);

export default Badge;
