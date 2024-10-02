import clsx from 'clsx';

interface Props {
    className?: string;
    size?: keyof typeof SIZES;
}

const SIZES: Record<string, string> = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
};

const Logo: React.FC<Props> = ({className, size = 'md'}) => (
    <span className={clsx([SIZES[size], className])}>
        <span className="font-serif tracking-[-0.5px] underline-offset-4 group-hover:underline">
            seanislegend
        </span>{' '}
    </span>
);

export default Logo;
