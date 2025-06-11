import clsx from 'clsx';

interface Props {
    heading?: React.ReactNode | string;
    text?: string;
}

const TitleTextGrid: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({
    children,
    heading,
    text,
    ...props
}) => (
    <div
        {...props}
        className={clsx([
            'grid-item grid grid-cols-12 gap-4 transition-opacity duration-200 sm:gap-8',
            props.className
        ])}
    >
        <div className="col-span-12 flex flex-col space-y-4 md:col-span-6">{heading}</div>
        <div className="col-span-2 sm:col-span-4 md:hidden" />
        <div className="hidden xl:col-span-1 xl:block" />
        <div className="col-span-10 sm:col-span-8 md:col-span-6 xl:col-span-5">
            {text || children}
        </div>
    </div>
);

export default TitleTextGrid;
