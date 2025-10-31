import clsx from 'clsx';

interface Props extends React.ComponentProps<'div'> {
    className?: string;
    theme: ThemeType;
}

const Theme: React.FC<Props> = ({children, className = '', theme, ...props}) => (
    <div
        className={clsx([
            className,
            'bg-theme-bg text-theme-text transition-colors duration-300 ease-in-out'
        ])}
        data-theme={theme}
        {...props}
    >
        {children}
    </div>
);

export default Theme;
