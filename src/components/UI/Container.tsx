import clsx from 'clsx';

interface Props {
    asChild?: boolean;
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
    asChild = false,
    children,
    className,
    ref,
    ...props
}) => (
    <div {...props} className={clsx('mx-auto max-w-[90rem] px-4 md:px-8', className)} ref={ref}>
        {children}
    </div>
);

export default Container;
