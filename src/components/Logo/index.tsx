interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({className}) => (
    <span className={className}>
        <span className="font-medium uppercase tracking-[-0.5px] underline-offset-4 group-hover:underline">
            @seanislegend
        </span>{' '}
    </span>
);

export default Logo;
