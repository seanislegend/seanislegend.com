import clsx from 'clsx';

interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({className}) => (
    <span className={clsx(['font-medium uppercase', className])}>@seanislegend</span>
);

export default Logo;
