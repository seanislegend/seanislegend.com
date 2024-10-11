interface Props {
    className?: string;
    theme: ThemeType;
}

export const Theme: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className = '',
    theme
}) => (
    <div className={className} data-theme={theme}>
        {children}
    </div>
);
