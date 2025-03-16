import clsx from 'clsx';

interface Props {
    className?: string;
    theme: ThemeType;
}

const Theme: React.FC<React.PropsWithChildren<Props>> = ({children, className = '', theme}) => (
    <div
        className={clsx([
            className,
            'bg-theme-bg text-theme-text transition-colors duration-200 ease-in-out'
        ])}
        data-theme={theme}
    >
        {children}
    </div>
);

export default Theme;
